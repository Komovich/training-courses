import {
    Dialog,
    Box,
    Typography,
    IconButton,
    AppBar,
    Toolbar,
    Grid,
  } from "@mui/material";
  import Video from "../Video";
  import CloseIcon from "@mui/icons-material/Close";
  
  import Slide, { SlideProps } from "@mui/material/Slide";
  import { forwardRef } from "react";
  
  interface TransitionProps extends Omit<SlideProps, "children"> {
    children: React.ReactElement<any, any>;
  }
  
  const Transition = forwardRef<HTMLDivElement, TransitionProps>((props: TransitionProps, ref: React.Ref<HTMLDivElement>) => {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
  const LessonModal = ({ lessonData, handleClose }) => {
    const { title, order, link } = lessonData;
  
    const videoStyle: React.CSSProperties = {
      width: "100%",
      height: "100%",
      margin: "0 auto",
      position: "absolute" as "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    };
  
    return (
      <Dialog fullScreen open onClose={handleClose} TransitionComponent={Transition}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Box width="100%" display="flex" alignItems="center" justifyContent="space-between">
              <Typography>{title}</Typography>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
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
                                    style={videoStyle}
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
