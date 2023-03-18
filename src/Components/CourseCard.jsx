import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Typography, Badge, Rating, Chip } from "@mui/material";

function CourseCard({ renderedData }) {
  return (
    <div className="courses">
      {renderedData.map((course) => (
        <Card
          key={course.id}
          sx={{
            maxWidth: "345px",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            justifyContent: "space-between",
            padding: "1rem",
            border: "1px solid #ccc",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
            marginBottom: "30px",
          }}
        >
          <div
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
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

            <CardMedia
              sx={{ height: "170px", width: "100%", marginBottom: "1rem" }}
              image={course.previewImageLink + "/cover.webp"}
              title={course.title}
            />
          </div>

          <CardContent sx={{ flexGrow: 1 }}>
            <Typography
              variant="body2"
              color="text.secondary"
              className="content__description"
              sx={{
                fontSize: "20px",
                paddingBottom: "25px",
                borderBottom: "1px solid #000",
                maxWidth: "100vw",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              {course.description}
            </Typography>

            <Typography
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
              {course.meta.skills?.map((skill, i) => (
                <Chip
                  key={i}
                  label={skill}
                  sx={{
                    fontSize: "20px",
                    backgroundColor: "#3483eb",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                    margin: "5px",
                  }}
                />
              ))}
            </Typography>
          </CardContent>

          <CardActions>
            <Badge
              color="primary"
              sx={{ fontSize: "20px", marginRight: "100px" }}
            >
              Lessons: {course.lessonsCount}
            </Badge>
            <Rating
              value={course.rating}
              readOnly
              sx={{ marginLeft: "auto" }}
            />
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default CourseCard;