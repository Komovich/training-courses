import React from "react";
import { Chip } from "@mui/material";

interface CourseSkillsProps {
  skills?: string[];
}

function CourseSkills({ skills }: CourseSkillsProps): JSX.Element {
  return (
    <div>
      {skills?.map((skill, i) => (
        <Chip
          key={i}
          label={skill}
          sx={{
            backgroundColor: "#3483eb",
            color: "white",
            fontSize: "16px",
            fontWeight: "bold",
            margin: "5px",
          }}
        />
      ))}
    </div>
  );
}

export default CourseSkills;
