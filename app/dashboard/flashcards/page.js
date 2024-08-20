'use client';
import React, { useState, useEffect } from 'react';
import {
  Box, CssBaseline, Drawer, AppBar, Container, Toolbar, Typography, IconButton, CardActions, CardContent, CardHeader, Grid, Card, CardActionArea, TextField, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import { useClerk } from '@clerk/clerk-react';
import Dashpane from '@/components/dashpane';
import { collection, doc, getDoc, setDoc, writeBatch } from 'firebase/firestore';
import { firestore } from '@/firebase';

const drawerWidth = 240;

const Cards = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const { user } = useClerk();
  const router = useRouter();
  const [setName, setSetName] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [text, setText] = useState('');
  const [flashcards, setFlashcards] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [flipped, setFlipped] = useState({});

  const handleOpenDialog = () => setDialogOpen(true);
  
  const handleCloseDialog = () => setDialogOpen(false);

  useEffect(() => {
    async function getFlashcards() {
      if (!user) return;
      const docRef = doc(collection(firestore, 'users'), user.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const collections = docSnap.data().flashcards || [];
        setFlashcards(collections);
        setFavorites(docSnap.data().favorites || []);
      } else {
        await setDoc(docRef, { flashcards: [], favorites: [] });
      }
    }
    getFlashcards();
  }, [user]);

  const handleSubmit = async () => {
    if (!text.trim()) {
      alert('Please enter some text to generate flashcards.');
      return;
    }
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        body: JSON.stringify({ text }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Failed to generate flashcards');
      }
  
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let result = '';
  
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        result += decoder.decode(value, { stream: true });
      }
  
      const data = JSON.parse(result); // Parse the accumulated result string
      setFlashcards(data);
    } catch (error) {
      console.error('Error generating flashcards:', error);
      alert('An error occurred while generating flashcards. Please try again.');
    }
  };
  

  const handleCardClick = (id) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const saveFlashcards = async () => {
    if (!setName.trim()) {
      alert('Please enter a name for your flashcard set.');
      return;
    }

    try {
      const userDocRef = doc(collection(firestore, 'users'), user.id);
      const userDocSnap = await getDoc(userDocRef);

      const batch = writeBatch(firestore);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const updatedSets = [...(userData.flashcardSets || []), { name: setName, flashcards }];
        batch.update(userDocRef, { flashcardSets: updatedSets });
      } else {
        batch.set(userDocRef, { flashcardSets: [{ name: setName, flashcards }] });
      }

      await batch.commit();

      alert('Flashcards saved successfully!');
      setSetName('');
      setFlashcards([]);
      handleCloseDialog();
    } catch (error) {
      console.error('Error saving flashcards:', error);
      alert('An error occurred while saving flashcards. Please try again.');
    }
  };

  const addToFavorites = async (flashcardSet) => {
    try {
      const userDocRef = doc(collection(firestore, 'users'), user.id);
      const userDocSnap = await getDoc(userDocRef);

      const updatedFavorites = [...favorites, flashcardSet];

      await setDoc(userDocRef, { favorites: updatedFavorites }, { merge: true });

      setFavorites(updatedFavorites);
      alert('Added to favorites!');
    } catch (error) {
      console.error('Error adding to favorites:', error);
      alert('An error occurred while adding to favorites. Please try again.');
    }
  };

  return (
    <Box className={`flex ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} h-screen`}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={`${darkMode ? 'bg-gray-900' : 'bg-white text-black'}`}
        style={{ width: `calc(100% - ${drawerWidth}px)`, marginLeft: drawerWidth }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography noWrap component="div" className="text-rose-500">
            Dashboard / <span className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Pitchcards</span>
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#1a1a2e', color: '#fff' },
          }}
        >
          <Dashpane />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#1a1a2e', color: '#fff' },
          }}
          open
        >
          <Dashpane />
        </Drawer>
      </Box>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container maxWidth="md">
          <Box className="flex flex-col items-center justify-center mt-12">
            <TextField
              label="Enter text for flashcards"
              variant="outlined"
              fullWidth
              value={text}
              onChange={(e) => setText(e.target.value)}
              className={`${darkMode ? 'text-white' : 'text-black'}`}
              sx={{
                input: {
                  color: darkMode ? 'white' : 'black',
                  backgroundColor: darkMode ? '#333' : '#fff',
                  borderRadius: '4px',
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              className="mt-4"
            >
              Generate Flashcards
            </Button>
          </Box>

          {flashcards.length > 0 && (
            <Box sx={{ mt: 4 }}>
              <Typography variant="h5" component="h2" gutterBottom>
                Generated Flashcards
              </Typography>
              <Grid container spacing={3}>
                {flashcards.map((flashcard, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card>
                      <CardActionArea onClick={() => handleCardClick(index)}>
                        <Box
                          sx={{
                            transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                            transition: 'transform 0.6s',
                          }}
                        >
                          <CardContent>
                            <Typography variant="h6">Front:</Typography>
                            <Typography>{flashcard.front}</Typography>
                            <Typography variant="h6" sx={{ mt: 2 }}>Back:</Typography>
                            <Typography>{flashcard.back}</Typography>
                          </CardContent>
                        </Box>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                <Button variant="contained" color="primary" onClick={handleOpenDialog}>
                  Save Flashcards
                </Button>
              </Box>
            </Box>
          )}
        </Container>

        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>Save Flashcard Set</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your flashcard set.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              label="Set Name"
              type="text"
              fullWidth
              value={setName}
              onChange={(e) => setSetName(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="primary">
              Cancel
            </Button>
            <Button onClick={saveFlashcards} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>

        {favorites.length > 0 && (
          <Container maxWidth="md" sx={{ mt: 8 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              Favorites
            </Typography>
            <Grid container spacing={3}>
              {favorites.map((favoriteSet, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card>
                    <CardActionArea onClick={() => handleCardClick(`fav-${index}`)}>
                      <Box
                        sx={{
                          transform: flipped[`fav-${index}`] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                          transition: 'transform 0.6s',
                        }}
                      >
                        <CardContent>
                          <Typography variant="h6">Set Name:</Typography>
                          <Typography>{favoriteSet.name}</Typography>
                          {favoriteSet.flashcards.map((flashcard, cardIndex) => (
                            <Box key={cardIndex}>
                              <Typography variant="h6" sx={{ mt: 2 }}>
                                Front:
                              </Typography>
                              <Typography>{flashcard.front}</Typography>
                              <Typography variant="h6" sx={{ mt: 2 }}>
                                Back:
                              </Typography>
                              <Typography>{flashcard.back}</Typography>
                            </Box>
                          ))}
                        </CardContent>
                      </Box>
                    </CardActionArea>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
      </Box>
    </Box>
  );
};

export default Cards;
