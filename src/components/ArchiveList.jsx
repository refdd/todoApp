import React from "react";
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

import { useSelector } from "react-redux";
function ArchiveList() {
  const archive = useSelector((state) => {
    return state.tasks.archive;
  });
  console.log(archive);
  if (archive.length == 0) {
    return;
  }

  return (
    <Container sx={{ padding: "16px" }}>
      <Typography variant="h6" color="GrayText">
        archive list
      </Typography>
      <List>
        {archive?.map((archive) => (
          <ListItem button key={archive.id}>
            <ListItemIcon>
              <CheckCircleIcon color="primary" />
            </ListItemIcon>

            <ListItemText primary={archive.name} />
            <ListItemSecondaryAction></ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default ArchiveList;
