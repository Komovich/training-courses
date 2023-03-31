import {
  Dialog,
  Box,
  Typography,
  IconButton,
  AppBar,
  Toolbar,
  Grid,
} from "@mui/material";
import Video from "./Video";
import CloseIcon from "@mui/icons-material/Close";

import Slide from "@mui/material/Slide";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LessonModal = ({ lessonData, handleClose }) => {
  const { title, order, link } = lessonData;

  return (
    <Dialog
      fullScreen
      open
      onClose={handleClose}
      TransitionComponent={Transition}
    >
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
      <Box mt={2}>
        <div className="container">
          <Grid container spacing={4}>
            <Grid item xs={8}>
              <Box sx={{ position: "relative", paddingBottom: "54%" }}>
                <Video
                  video={{ link }}
                  poster={`${lessonData.previewImageLink}/lesson-${lessonData.order}.webp`}
                  context="lesson"
                />
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box mb={2}>
                Lesson {order} <Typography variant="h4">{title}</Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Dialog>
  );
};

export default LessonModal;
