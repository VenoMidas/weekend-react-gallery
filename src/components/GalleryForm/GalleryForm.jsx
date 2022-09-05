import React, { useState, useEffect } from 'react'; // import react
import './GalleryForm.css'; // import GalleryList css
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function GalleryForm({ addGalleryItem, galleryTitle, setGalleryTitle, galleryDescription, setGalleryDescription, galleryPath, setGalleryPath }) {
    const [toggle, setToggle] = useState(false);

    return (
        <Container maxWidth="xs">
            {
                toggle ? (
                    // if toggle = true display description
                    <form onSubmit={addGalleryItem}>
                        <Button color='error' variant="outlined" endIcon={<CloseIcon />} onClick={() => setToggle(!toggle)}>
                            Close form
                        </Button>

                        <TextField fullWidth required id="title" label="Title" value={galleryTitle} onChange={(event) => setGalleryTitle(event.target.value)} variant="standard" margin="dense" />

                        <TextField fullWidth required id='description' label="Description" value={galleryDescription} onChange={(event) => setGalleryDescription(event.target.value)} variant="standard" margin="dense" />

                        <TextField fullWidth required id='path' label="Image URL" value={galleryPath} onChange={(event) => setGalleryPath(event.target.value)} variant="standard" margin="dense" />

                        <Button color="success" variant="contained" type='submit'>Submit</Button>
                    </form>
                ) : (
                    <Button color='success' variant="outlined" startIcon={<AddPhotoAlternateIcon />} onClick={() => setToggle(!toggle)}>
                        Add a photo!
                    </Button>
                )
            }
            <br />
            <br />
        </Container>
    );
};

export default GalleryForm; // export the component