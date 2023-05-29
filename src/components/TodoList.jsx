import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
  Typography,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ArchiveIcon from "@mui/icons-material/Archive";
import { archiveTask, deleteTask, editTask } from "../redux/tasksSlice";
const TodoList = ({ handleEdit }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);
  const [updatedName, setUpdatedName] = useState("");

  const todos = useSelector((state) => {
    return state.tasks.todos;
  });
  //   remove from
  const removeTask = (id) => {
    dispatch(
      deleteTask({
        id: id,
      })
    );
  };
  //   add to arvhive tasks
  const handleArchive = (id) => {
    dispatch(archiveTask({ id: id }));
  };

  //   console.log(todos);
  return (
    <Container sx={{ padding: "16px" }}>
      {todos.length == 0 ? (
        <Typography variant="h6" color="error">
          No Data to display
        </Typography>
      ) : (
        <List>
          {todos.map((task) => (
            <ListItem button key={task.id}>
              <ListItemIcon>
                <CheckCircleIcon color="primary" />
              </ListItemIcon>

              <ListItemText primary={task.name} />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => {
                    handleEdit(task.id, task.name);
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    removeTask(task.id);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="archive"
                  onClick={() => {
                    handleArchive(task.id);
                  }}
                >
                  <ArchiveIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default TodoList;
