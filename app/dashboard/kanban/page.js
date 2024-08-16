'use client'
import React, { useState, useEffect } from 'react';
import { Box, Typography, Card, CardContent, Button, Modal, TextField } from '@mui/material';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { firestore } from '@/firebase'; // import your Firebase config
import { doc, getDoc, setDoc, updateDoc, arrayUnion, arrayRemove, deleteDoc } from 'firebase/firestore';
import Grow from '@mui/material/Grow';

const initialBoard = {
  columns: {
    backlog: {
      id: 'backlog',
      title: 'Backlog',
      taskIds: ['task-1', 'task-2'],
    },
    inProgress: {
      id: 'inProgress',
      title: 'In Progress',
      taskIds: ['task-3'],
    },
    done: {
      id: 'done',
      title: 'Done',
      taskIds: ['task-4'],
    },
  },
  tasks: {
    'task-1': { id: 'task-1', title: 'Task 1', description: 'Description for Task 1', priority: 'low' },
    'task-2': { id: 'task-2', title: 'Task 2', description: 'Description for Task 2', priority: 'medium' },
    'task-3': { id: 'task-3', title: 'Task 3', description: 'Description for Task 3', priority: 'high' },
    'task-4': { id: 'task-4', title: 'Task 4', description: 'Description for Task 4', priority: 'low' },
  },
  columnOrder: ['backlog', 'inProgress', 'done'],
};

const priorityColors = {
  high: '#ff4c4c',
  medium: '#ffcc00',
  low: '#00cc44',
};

const Kanban = () => {
  const [board, setBoard] = useState(initialBoard);
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  // Load board data from Firebase on component mount
  useEffect(() => {
    const loadBoard = async () => {
      const boardDoc = await getDoc(doc(firestore, "dashboard", "kanban"));
      if (boardDoc.exists()) {
        setBoard(boardDoc.data());
      }
    };
    loadBoard();
  }, []);

  // Save board data to Firebase on state change
  useEffect(() => {
    const saveBoard = async () => {
      await setDoc(doc(firestore, "dashboard", "kanban"), board);
    };
    saveBoard();
  }, [board]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) return;

    const sourceColumn = board.columns[source.droppableId];
    const destinationColumn = board.columns[destination.droppableId];

    if (sourceColumn === destinationColumn) {
      const newTaskIds = Array.from(sourceColumn.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...sourceColumn,
        taskIds: newTaskIds,
      };

      setBoard((prevBoard) => ({
        ...prevBoard,
        columns: {
          ...prevBoard.columns,
          [newColumn.id]: newColumn,
        },
      }));
    } else {
      const sourceTaskIds = Array.from(sourceColumn.taskIds);
      sourceTaskIds.splice(source.index, 1);
      const newSourceColumn = {
        ...sourceColumn,
        taskIds: sourceTaskIds,
      };

      const destinationTaskIds = Array.from(destinationColumn.taskIds);
      destinationTaskIds.splice(destination.index, 0, draggableId);
      const newDestinationColumn = {
        ...destinationColumn,
        taskIds: destinationTaskIds,
      };

      setBoard((prevBoard) => ({
        ...prevBoard,
        columns: {
          ...prevBoard.columns,
          [newSourceColumn.id]: newSourceColumn,
          [newDestinationColumn.id]: newDestinationColumn,
        },
      }));
    }
  };

  const handleAddTask = async (columnId) => {
    const newTask = {
      id: `task-${Date.now()}`,
      title: 'New Task',
      description: 'Edit this task',
      priority: 'low',
    };

    await updateDoc(doc(firestore, "dashboard", "kanban"), {
      taskIds: arrayUnion(newTask.id),
    });

    await setDoc(doc(firestore, "tasks", newTask.id), newTask);

    setBoard(prevBoard => ({
      ...prevBoard,
      columns: {
        ...prevBoard.columns,
        [columnId]: {
          ...prevBoard.columns[columnId],
          taskIds: [...prevBoard.columns[columnId].taskIds, newTask.id],
        },
      },
      tasks: {
        ...prevBoard.tasks,
        [newTask.id]: newTask,
      },
    }));
  };

  const handleEditTask = (task) => {
    setSelectedTask(task);
    setOpen(true);
  };

  const handleSaveTask = async () => {
    await updateDoc(doc(firestore, "tasks", selectedTask.id), {
      title: selectedTask.title,
      description: selectedTask.description,
      priority: selectedTask.priority,
    });
    setOpen(false);
  };

  const handleDeleteTask = async (taskId, columnId) => {
    await updateDoc(doc(firestore, "dashboard", "kanban"), {
      taskIds: arrayRemove(taskId),
    });

    await deleteDoc(doc(firestore, "tasks", taskId));

    setBoard(prevBoard => ({
      ...prevBoard,
      columns: {
        ...prevBoard.columns,
        [columnId]: {
          ...prevBoard.columns[columnId],
          taskIds: prevBoard.columns[columnId].taskIds.filter(id => id !== taskId),
        },
      },
      tasks: Object.keys(prevBoard.tasks)
        .filter(id => id !== taskId)
        .reduce((newTasks, id) => {
          newTasks[id] = prevBoard.tasks[id];
          return newTasks;
        }, {}),
    }));
  };

  return (
    <Box sx={{ p: 3, backgroundColor: '#121212', height: '100vh', color: '#fff', overflow: 'auto' }}>
      <Typography variant="h4" gutterBottom>
        Kanban Board
      </Typography>
      <DragDropContext onDragEnd={onDragEnd}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {board.columnOrder.map((columnId) => {
            const column = board.columns[columnId];
            const tasks = column.taskIds.map((taskId) => board.tasks[taskId]);

            return (
              <Box key={column.id} sx={{ width: '30%' }}>
                <Typography variant="h6" sx={{ mb: 2 }}>
                  {column.title}
                </Typography>
                <Button onClick={() => handleAddTask(column.id)}>+</Button>
                <Droppable droppableId={column.id}>
                  {(provided) => (
                    <Box
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      sx={{ backgroundColor: '#1a1a2e', p: 2, borderRadius: 2, minHeight: 400 }}
                    >
                      {tasks.map((task, index) => (
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                          {(provided) => (
                            <Grow in={true}>
                              <Card
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                sx={{ mb: 2, backgroundColor: priorityColors[task.priority] || '#27293d', color: '#fff' }}
                              >
                                <CardContent>
                                  <Typography variant="h6">{task.title}</Typography>
                                  <Typography variant="body2">{task.description}</Typography>
                                  <Button onClick={() => handleEditTask(task)}>Edit</Button>
                                  <Button onClick={() => handleDeleteTask(task.id, column.id)}>Delete</Button>
                                </CardContent>
                              </Card>
                            </Grow>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </Box>
                  )}
                </Droppable>
              </Box>
            );
          })}
        </Box>
      </DragDropContext>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ p: 3, backgroundColor: '#fff', color: '#000', borderRadius: 2, width: 400, mx: 'auto', mt: 10 }}>
          <TextField
            label="Title"
            value={selectedTask?.title || ''}
            onChange={(e) => setSelectedTask({ ...selectedTask, title: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={selectedTask?.description || ''}
            onChange={(e) => setSelectedTask({ ...selectedTask, description: e.target.value })}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Priority"
            value={selectedTask?.priority || ''}
            onChange={(e) => setSelectedTask({ ...selectedTask, priority: e.target.value })}
            fullWidth
            margin="normal"
          />
          <Button onClick={handleSaveTask} variant="contained" sx={{ mt: 2 }}>
            Save
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default Kanban;
