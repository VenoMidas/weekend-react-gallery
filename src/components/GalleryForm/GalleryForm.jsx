import React from 'react'; // import react
import './GalleryForm.css'; // import GalleryList css
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

function GalleryForm({ addGalleryItem, galleryTitle, setGalleryTitle, galleryDescription, setGalleryDescription, galleryPath, setGalleryPath }) {
    return (
        <Container maxWidth="xs">
            <form onSubmit={addGalleryItem}>
                <TextField fullWidth required id="title" label="Title" value={galleryTitle} onChange={(event) => setGalleryTitle(event.target.value)} variant="standard" margin="dense"/>

                <TextField fullWidth required id='description' label="Description" value={galleryDescription} onChange={(event) => setGalleryDescription(event.target.value)} variant="standard" margin="dense"/>

                <TextField fullWidth required id='path' label="Image URL" value={galleryPath} onChange={(event) => setGalleryPath(event.target.value)} variant="standard" margin="dense"/>

                <Button variant="outlined" type='submit'>Submit</Button>
            </form>
            <br />
        </Container>
    );
};

export default GalleryForm; // export the component