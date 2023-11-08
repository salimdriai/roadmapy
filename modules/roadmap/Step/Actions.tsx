import * as React from "react";
import { Box, IconButton, Link, Paper } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";

interface ActionsProps {
  index: number;
  onClickEdit: () => void;
  onClickDelete: () => void;
}

export const Actions: React.FunctionComponent<ActionsProps> = ({
  index,
  onClickEdit,
  onClickDelete,
}) => {
  return (
    <Paper
      sx={{
        position: "absolute",
        top: 10,
        left: index % 2 === 0 ? "25%" : "75%",
        transform: "translate(-50%)",
        px: 1,
        zIndex: 10,
      }}
    >
      <IconButton onClick={onClickEdit}>
        <EditIcon fontSize="small" color="info" />
      </IconButton>
      <IconButton onClick={onClickDelete}>
        <DeleteIcon fontSize="small" color="error" />
      </IconButton>
    </Paper>
  );
};
