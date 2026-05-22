import {Box, Button, TextField} from "@mui/material";
import { useNavigate} from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
    const navigate = useNavigate();
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setUserDetails({
            ...userDetails,
            [event.target.name]: event.target.value
        })
    }

    const handleNavigate = () => {
        navigate('/register');
    }

    useEffect(() => {
        console.log("Component Updated =>", userDetails);
    }, [userDetails.email]);

    useEffect(() => {
        console.log("Login Page Mounted");
        return () => {
            console.log("Login Page Unmounted");
            // alert("You are leaving the Login page!");
            // return;
        };
    }, []);

    return (
        <div>
            <h1>Login</h1>
            <p>Welcome to the Login page!</p>
            <Box>
            <TextField 
                        fullWidth 
                        name="email"
                        label="Email" 
                        value={userDetails.email} 
                        variant="outlined" 
                        margin="normal" 
                        placeholder="Enter your email" 
                        sx={{width: "50%"}}
                        onChange={handleChange}
                        />
            </Box>
            <Box>
            <TextField 
                        fullWidth 
                        name="password"
                        label="Password" 
                        value={userDetails.password} 
                        variant="outlined" 
                        margin="normal" 
                        type="password" 
                        placeholder="Enter your password" 
                        sx={{width: "50%"}}
                        onChange={handleChange}
                        />
            </Box>
            <Box sx={{mt: 2, display: "flex", gap: 2, justifyContent: "center"}}>
            <Button variant="contained" color="primary">
                Login
            </Button>
            <Button variant="text" color="primary" onClick={handleNavigate}>
                Register
            </Button>
            </Box>
        </div>
    )
}

export default Login