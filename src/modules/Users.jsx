import {useEffect} from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Box, Card, CardContent, Grid, CardActions, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const Users = () => {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log("Users =>", response.data);
        if (response.status === 200) {
            setUsers(response.data);
        }
        };
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
        <h1>Users</h1>
        <Grid container spacing={2}>
            {users.map((user) => (
                <Grid item xs={12} sm={6} md={4} key={user.id}>
                    <Card sx={{ minWidth: 275, marginBottom: 2 }}>
                        <CardContent>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </CardContent>
                <CardActions sx={{ justifyContent: 'flex-end' }}>
                    <IconButton color="primary" aria-label="edit">
                        <EditIcon />
                    </IconButton>
                    <IconButton color="error" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </Card>
            </Grid>
        ))}
        </Grid>
    </div>
  );
};

export default Users;