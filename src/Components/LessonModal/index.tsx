import { Dialog, Box, Grid } from "@mui/material";
import Slide, { SlideProps } from "@mui/material/Slide";
import { forwardRef } from "react";
import LessonVideo from "./LessonVideo";
import CourseOrder from "./LessonOrder";
import LessonHeader from "./LessonHeader";

interface TransitionProps extends Omit<SlideProps, "children"> {
  children: React.ReactElement<any, any>;
}

const Transition = forwardRef<HTMLDivElement, TransitionProps>(
  (props: TransitionProps, ref: React.Ref<HTMLDivElement>) => {
    return <Slide direction="up" ref={ref} {...props} />;
  }
);

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
    <Dialog
      fullScreen
      open
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <LessonHeader title={title} handleClose={handleClose} />
      <Box mt={2}>
        <div className="container">
          <Grid container spacing={4}>
            <LessonVideo
              link={link}
              lessonData={lessonData}
              videoStyle={videoStyle}
            />
            <CourseOrder order={order} title={title} />
          </Grid>
        </div>
      </Box>
    </Dialog>
  );
};

export default LessonModal;
