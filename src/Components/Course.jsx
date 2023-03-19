import React, { useEffect, useState } from "react";
import { AppBar, Toolbar, Typography, Box, Chip } from "@mui/material";
import Video from "./Video";
import Api from "../api";
import { useParams } from "react-router";
import Lesson from "./Lesson"

function Course() {
  const [course, setCourse] = useState(null);
  let { id } = useParams();

  async function getCourse(id) {
    try {
      const data = await Api.getCourse(id);
      console.log(data);
      setCourse(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!id) return;
    getCourse(id);
  }, [id]);

  if (!course) return null;

  return (
    <div
      className="wrapper"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <AppBar
        className="header"
        position="static"
        color="primary"
        elevation={4}
      ></AppBar>

      <Box sx={{ width: "50%", margin: "0 auto" }}>
        <Box
          sx={{
            position: "relative",
            justifyContent: "center",
            paddingBottom: "56%",
          }}
        >
          <Video
            video={course.meta.courseVideoPreview}
            poster={course.previewImageLink + "/cover.webp"}
          />
        </Box>
      </Box>
    
      <Box>
        <Lesson course={course}/>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className="content__title"
          sx={{ marginBottom: "1rem" }}
        >
          {course.title}
        </Typography>

        {course.meta.skills?.map((tag, i) => (
          <Chip
            key={i}
            label={tag}
            sx={{
              backgroundColor: "#3483eb",
              color: "white",
              fontSize: "16px",
              fontWeight: "bold",
              margin: "5px",
            }}
          />
        ))}

        <Typography
          gutterBottom
          variant="h6"
          component="div"
          className="content__title"
          sx={{ marginBottom: "1rem", marginBottom: "50px"}}
        >
          {course.description}
        </Typography>
      </Box>

      <AppBar
        color="primary"
        sx={{ top: "auto", bottom: 0, position: "fixed", width: "100%" }}
      >
        <Toolbar>
          <Typography variant="body1" color="inherit">
            © 2023 Gen.tech, Inc.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Course;
