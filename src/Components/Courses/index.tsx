import React, { useEffect, useState } from "react";
import { AppBar, Box, CircularProgress } from "@mui/material";
import Pagination from "./Pagination";
import Api from "../../api";
import CourseCard from "../CourseCard";
import CoursesTitle from "./CoursesTitle";
import CoursesFooter from "./CoursesFooter";

function Courses() {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage] = useState<number>(10);

  async function getData() {
    try {
      setLoading(true);
      const resp = await Api.getData();
      setData(resp.courses);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  const lastPageIndex: number = currentPage * itemsPerPage;
  const firstPageIndex: number = lastPageIndex - itemsPerPage;
  const renderedData: any[] = data.slice(firstPageIndex, lastPageIndex);
  

  const paginate = (pageNumbers: number) => {
    setCurrentPage(pageNumbers);
  };

  const list = (
    <div className="courses">
      {renderedData.map((course: any) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );

  const pagination = (
    <Pagination
      totalCard={data.length}
      itemsPerPage={itemsPerPage}
      paginate={paginate}
    />
  );

  return (
    <div className="wrapper">
      <AppBar
        className="header"
        position="static"
        color="primary"
        elevation={4}
      />
      <div className="container">
        <CoursesTitle />
      </div>
      {loading ? (
        <Box textAlign="center" mb={4}>
          <CircularProgress size={40} color="primary" />
        </Box>
      ) : (
        <div className="container">
          {list}
          {pagination}
        </div>
      )}
      <CoursesFooter />
    </div>
  );
}

export default Courses;
