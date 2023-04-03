import React from "react";
import { Typography, Chip } from "@mui/material";

interface CourseSkillsProps {
  skills: string[];
}

const CourseSkills: React.FC<CourseSkillsProps> = ({ skills }) => {
  return (
    <Typography
      component="div"
      variant="body2"
      color="text.secondary"
      sx={{
        fontSize: "20px",
        margin: "20px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      Learning Outcomes:
      {skills.map((skill, i) => (
        <Chip
          key={i}
          label={skill}
          sx={{
            fontSize: "20px",
            backgroundColor: "#3483eb",
            color: "white",
            fontWeight: "bold",
            margin: "5px",
          }}
        />
      ))}
    </Typography>
  );
};

export default CourseSkills;
