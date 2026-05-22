import { AppBar, Toolbar, Typography, Button, IconButton} from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useContext, useState } from "react";
import { ThemeContext } from "../modules/ThemeProvider";
import { Link } from "react-router-dom";


const Navbar = () => {
    // const [theme, setTheme] = useState("light");

    // console.log("Current Theme =>", theme);

    // const toggleTheme = () => {
    //     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    // };

    const { theme, toggleTheme } = useContext(ThemeContext);
    console.log("Current Theme in Navbar =>", theme);
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Portfolio
                </Typography>
                <Button color="inherit" component={Link} to="/users">
                    Users
                </Button>
                <IconButton color="inherit" aria-label="toggle theme" onClick={toggleTheme}>
                    {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;