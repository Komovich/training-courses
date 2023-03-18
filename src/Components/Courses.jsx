import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {
  AppBar,
  Typography,
  Button,
  Badge,
  Rating,
  Chip,
  Toolbar,
} from "@mui/material";
import Pagination from "./Pagination";
import Lesson from "./Lesson";
import Api from "../api";

function Courses() {
  const [data, setData] = useState([]); // данные из сервера
  const [currentPage, setCurrentPage] = useState(1); //страница по умолчанию
  const [itemsPerPage] = useState(10); //кол-во елементов на странице

  async function getData() {
    try {
      const data = await Api.getData();
      setData(data.courses);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const lastPageIndex = currentPage * itemsPerPage;
  const firstPageIndex = lastPageIndex - itemsPerPage;
  const renderedData = data.slice(firstPageIndex, lastPageIndex);

  const paginate = (pageNumbers) => {
    setCurrentPage(pageNumbers);
  };

  return (
    <div className="wrapper">
      <AppBar
        className="header"
        position="static"
        color="primary"
        elevation={4}
      ></AppBar>

      <div className="container">
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          className="content__title"
          sx={{
            margin: "30px",
          }}
        >
          Regular online courses
        </Typography>

        <div className="courses">
          {renderedData.map((course) => (
            <Card
              className="courses__item"
              key={course.id}
              sx={{
                maxWidth: 345,
              }}
            >
              <Typography
                gutterBottom
                variant="h6"
                component="div"
                className="content__title"
              >
                {course.title}
              </Typography>

              <CardMedia
                className="item__image"
                sx={{ height: "170px" }}
                image={course.previewImageLink + "/cover.webp"}
                title={course.title}
              />
              <CardContent className="item__content">
                <Typography
                  variant="body2"
                  color="text.secondary"
                  className="content__description"
                  sx={{
                    fontSize: "20px",
                    paddingBottom: "25px",
                    borderBottom: "1px solid #000",
                    maxWidth: "100vw",
                  }}
                >
                  {course.description}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: "20px",
                    margin: "20px",
                  }}
                >
                  Learning Outcomes:
                  {course.meta.skills?.map((skill, i) => (
                    <Chip
                      key={i}
                      label={skill}
                      sx={{
                        fontSize: "20px",
                        backgroundColor: "blue",
                        color: "white",
                        fontSize: "16px",
                        fontWeight: "bold",
                        margin: "5px",
                      }}
                    />
                  ))}
                </Typography>

                <CardActions
                  sx={{ borderTop: "1px solid #000", maxWidth: "100vw" }}
                >
                  <Badge
                    color="primary"
                    sx={{ fontSize: "20px", marginRight: "100px" }}
                  >
                    Lessons: {course.lessonsCount}
                  </Badge>
                  <Rating
                    value={course.rating}
                    readOnly
                    sx={{ marginLeft: "50px" }}
                  />
                </CardActions>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Pagination
        totalCard={data.length}
        itemsPerPage={itemsPerPage}
        paginate={paginate}
      />
      <AppBar
        color="primary"
        sx={{ bottom: 0, top: "auto", position: "relative" }}
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

export default Courses;
