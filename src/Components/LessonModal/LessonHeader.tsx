import * as React from "react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface LessonHeaderProps {
  title: string;
  handleClose: () => void;
}

const LessonHeader: React.FC<LessonHeaderProps> = ({ title, handleClose }) => {
  return (
    <AppBar sx={{ position: "relative" }}>
      <Toolbar>
        <Box
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography>{title}</Typography>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default LessonHeader;