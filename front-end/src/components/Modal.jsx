import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';
import { useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

export default function Modal({ isModalOpen, closeModal }) {
    const handleSubmit = () => {
        axios
            .post('http://localhost:7000/api/tickets', {
                title,
                description,
                contact,
                status,
            })
            .then(res => {
                window.location.reload();
            });
    };
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [contact, setContact] = useState('');
    const [status, setStatus] = useState('Pending');

    return (
        <div>
            <Dialog
                open={isModalOpen}
                onClose={closeModal}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Add new ticket
                </DialogTitle>
                <DialogContent>
                    <form className="my-2">
                        <TextField
                            fullWidth
                            placeholder="Enter title"
                            label="Title"
                            margin="dense"
                            onChange={e => setTitle(e.target.value)}
                            value={title}
                        />
                        <TextField
                            fullWidth
                            label="Description"
                            id="fullWidth"
                            margin="dense"
                            onChange={e => setDescription(e.target.value)}
                            value={description}
                        />
                        <TextField
                            fullWidth
                            label="Contact"
                            id="fullWidth"
                            margin="dense"
                            onChange={e => setContact(e.target.value)}
                            value={contact}
                        />
                        <Box sx={{ minWidth: 80 }} marginTop={2}>
                            <FormControl fullWidth>
                                <InputLabel
                                    variant="standard"
                                    htmlFor="uncontrolled-native"
                                >
                                    Status
                                </InputLabel>
                                <NativeSelect
                                    defaultValue={'Pending'}
                                    inputProps={{
                                        name: 'status',
                                        id: 'uncontrolled-native',
                                    }}
                                    onChange={e => setStatus(e.target.value)}
                                    value={status}
                                >
                                    <option value={'Pending'}>Pending</option>
                                    <option value={'Accepted'}>Accepted</option>
                                    <option value={'Resolved'}>Resolved</option>
                                    <option value={'Rejected'}>Rejected</option>
                                </NativeSelect>
                            </FormControl>
                        </Box>
                    </form>
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={closeModal}
                        color="inherit"
                        variant="contained"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        color="success"
                        variant="contained"
                        autoFocus
                    >
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
