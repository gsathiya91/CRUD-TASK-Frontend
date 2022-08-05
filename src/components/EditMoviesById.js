import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from '@mui/material';
import { toast, ToastContainer } from "react-toastify";

function EditMoviesById() {
    const [inputs, setInputs] = useState({});
    const id = useParams().id;
   const navigate= useNavigate();
    useEffect(() => {
        const fetchHandler = async () => {
            await axios.get(`https://movie-app-crud-mern.herokuapp.com/getallmovies/${id}`)
                .then(res => res.data).then(data => setInputs(data));
        }
        fetchHandler()
    }, [id])

    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://movie-app-crud-mern.herokuapp.com/updatemovies/${id}`, {
                movieName: String(inputs.movieName),
                rating: Number(inputs.rating),
                cast: String(inputs.cast),
                genre: String(inputs.genre)
            })
            response.data && navigate("/editmovies");
            toast.success(response.data);
        } catch (err) {
            toast.error(err.response.data);
        }
    }

    const handleChange = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <div>
            {inputs && (<form className="form" onSubmit={handleSubmit}>
                <h3>Edit Movies Detail</h3>
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
                        class="btn btn-success">Update Book</Button>
                </div>
            </form>)}
            <ToastContainer/>
        </div>
    )
}

export default EditMoviesById;