import { ThemeContext } from "@emotion/react";
import { Button, Box, Typography, TextField, Snackbar} from "@mui/material"
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [userDetails, setUserDetails] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (event) => {
        console.log("Name =>", event.target.name);
        console.log("Value =>", event.target.value);
        setUserDetails({
            ...userDetails,
            [event.target.name]: event.target.value
        })
    }
    const handleNavigate = () => {
        navigate('/');
    }

    const handleRegister = () => {
        console.log("User Details:", userDetails);
        if (userDetails.password !== userDetails.confirmPassword) {
            setOpenSnackbar(true);
            return;
        }
    }

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    }

    useEffect(() => {
            console.log("Register Page Mounted");
            return () => {
                console.log("Register Page Unmounted");
            };
        }, []);

    return (
        <Box>
            <Typography variant="h3" gutterBottom color={"light" === "light" ? "primary" : "error"}>
                Register
            </Typography>
            <Typography variant="body1">
                Welcome to the Register page!
            </Typography>
            <Box>
            <TextField 
            fullWidth 
            name="username"
            label="Username" 
            value={userDetails.username} 
            variant="outlined" 
            margin="normal" 
            placeholder="Enter your username" 
            sx={{width: "50%"}} 
            onChange={handleChange}
            /> 
            </Box>
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
            <Box>
            <TextField 
            fullWidth 
            name="confirmPassword"
            label="Confirm Password" 
            value={userDetails.confirmPassword} 
            variant="outlined" 
            margin="normal" 
            type="password" 
            placeholder="Confirm your password" 
            sx={{width: "50%"}} 
            onChange={handleChange}
            />
            </Box>
            <Box sx={{mt: 2, display: "flex", gap: 2, justifyContent: "center"}}>
            <Button variant="contained" color="primary" onClick={handleRegister}>
                Register
            </Button>
            <Button variant="text" color="primary" onClick={handleNavigate}>
                Login
            </Button>
            </Box>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
                message="Passwords do not match!"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            />
        </Box>
    )
}

export default Register