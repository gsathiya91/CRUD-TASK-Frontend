import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import { NavLink } from "react-router-dom";

function NavBar() {
    const [value, setValue] = useState();
    return (
        <div>
            <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
                <Toolbar>
                    <NavLink to="/"style={{color: "white"}}>
                        <Typography>
                            <MovieCreationOutlinedIcon id="tabs"/>
                        </Typography>
                    </NavLink>
                    <Tabs 
                   
                    value={value} 
                    onChange={(e,val)=>setValue(val)}
                    sx={{ml:'auto'}}>
                        <Tab 
                        id="tab" 
                        label="All Movies" 
                        LinkComponent={NavLink} to="/allmovies"/>
                        <Tab id="tab" label="Add Movies" 
                        LinkComponent={NavLink} to="/addmovies"/>
                        <Tab id="tab" label="Edit Movies"
                        LinkComponent={NavLink} to="/editmovies"/>
                        <Tab id="tab" label="Logout"
                        LinkComponent={NavLink} to="/" />
                    </Tabs>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;