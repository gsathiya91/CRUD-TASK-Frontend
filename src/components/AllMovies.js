import React, { useEffect, useState } from "react";
import axios from "axios";

function AllMovies(){
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        const getBookDetails = async () => {
            var response = await axios.get('https://movies-app-crud-backend.herokuapp.com/getallmovies');
            setMovies(response.data)
        }    
        getBookDetails();
    }, []);
   
    return(
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllMovies;