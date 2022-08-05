import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function AddMovies() {

    const [inputs, setInputs] = useState({
        movieName: "",
        rating: "",
        cast: "",
        genre: "",
        date: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    };
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post(`https://movies-app-crud-backend.herokuapp.com/addnewmovies`, {
                movieName: String(inputs.movieName),
                rating: Number(inputs.rating),
                cast: String(inputs.cast),
                genre: String(inputs.genre)
            })
            response.data && navigate("/allmovies");
            toast.success(response.data);
        } catch (err) {
            toast.error(err.response.data);
        }
    };
    return (
        <div className="containers">
            <form className="form" onSubmit={handleSubmit}>
                <h3>Add New Movies</h3>
                <div className="box">
                    <div className="form-group">
                        <label for="exampleInputPassword1">Movie Name</label>
                        <input
                            type="text"
                            name="movieName"
                            className="form-control"
                            placeholder="Enter Movie Name"
                            value={inputs.movieName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Rating</label>
                        <input
                            type="number"
                            name="rating"
                            className="form-control"
                            placeholder="Enter Rating"
                            value={inputs.rating}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Cast</label>
                        <input
                            type="text"
                            name="cast"
                            className="form-control"
                            placeholder="Enter cast"
                            value={inputs.cast}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Genre</label>
                        <input
                            type="text"
                            name="genre"
                            className="form-control"
                            placeholder="Enter genre"
                            value={inputs.genre}
                            onChange={handleChange}
                        />
                    </div>
                    <Button
                        type="submit"
                        class="btn btn-success addmovie">Add Movie</Button>
                </div>
            </form>
        </div>
    )
}

export default AddMovies;