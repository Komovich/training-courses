import React, { useEffect, useState } from "react";
import {
    AppBar,
    Typography,
    Toolbar,
    Box,
    CircularProgress,
} from "@mui/material";
import Pagination from "../Pagination";
import Api from "../../api";
import CourseCard from "../CourseCard";
import Video from "../Video";

function Courses() {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]); // данные из сервера
    const [currentPage, setCurrentPage] = useState(1); //страница по умолчанию
    const [itemsPerPage] = useState(10); //кол-во елементов на странице

console.log(data);


    async function getData() {
        try {
            setLoading(true);
            const data = await Api.getData();
            {console.log(data)}
            
            setData(data.courses);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
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

    const list = (
        <div className="courses">
            {renderedData.map((course) => (
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
                <Typography
                    gutterBottom
                    variant="h4"
                    component="div"
                    className="content__title"
                    sx={{
                        marginBottom: "30px",
                    }}
                >
                    Regular online courses
                </Typography>
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
