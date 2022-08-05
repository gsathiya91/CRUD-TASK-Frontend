import { Button } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { Link, useNavigate } from "react-router-dom";

function EditMovies(){
    const navigate = useNavigate();
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getBookDetails = async () => {
            var response = await axios.get('https://movie-app-crud-mern.herokuapp.com/getallmovies');
            setMovies(response.data)
        }    
        getBookDetails();
    }, []);

   const handleDelete=async(id)=>{
     axios.delete(`https://movie-app-crud-mern.herokuapp.com/deletemovies/${id}`)
    navigate("/allmovies");
   }
    return(
        <div className="containers">
            <div className="tables">
            <h2>List of Movies</h2>
            <table class="table table-bordered">
                <thead className="head">
                    <tr class="bg-info">
                        <th scope="col">S.no</th>
                        <th scope="col">Movie Name</th>
                        <th scope="col">Rating</th>
                        <th scope="col">cast</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Release Date</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((data, index) => (
                        <tr key={data._id}>
                            <th scope="row">{index + 1}</th>
                            <td>{data.movieName}</td>
                            <td>{data.rating}</td>
                            <td>{data.cast}</td>
                            <td>{data.genre}</td>
                            <td>{data.date}</td>
                            <td>
                                <Button LinkComponent={Link} to="/addmovies" class="btn btn-primary">Add Movie</Button>&nbsp;&nbsp;&nbsp;
                                <Button LinkComponent={Link} to={`/editmovies/${data._id}`} class="btn btn-success">Edit &nbsp;<EditOutlinedIcon /></Button>&nbsp;&nbsp;&nbsp;
                                <Button onClick={()=>handleDelete(data._id)} class="btn btn-danger">Delete &nbsp;<ClearOutlinedIcon /></Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    )
}

export default EditMovies;