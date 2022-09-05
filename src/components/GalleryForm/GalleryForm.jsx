import { useState } from 'react'; // import useState
import './GalleryForm.css'; // import GalleryList css
import TextField from '@mui/material/TextField'; // import TextField element from MUI
import Button from '@mui/material/Button'; // import Button element from MUI
import Container from '@mui/material/Container'; // import Container element from MUI
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'; // import AddPhotoAlternateIcon from MUI
import CloseIcon from '@mui/icons-material/Close'; // import CloseIcon from MUI

/**
 * GalleryForm component function
 * @param {function} addGalleryItem - is for the Axios GET call
 * @param {string} galleryTitle - is for the title string variable
 * @param {function} setGalleryTitle - is for the setter function for galleryTitle variable
 * @param {string} galleryDescription - is for the description string variable
 * @param {function} setGalleryDescription - is for the setter function for the galleryDescription variable
 * @param {string} galleryPath - is for the path string variable
 * @param {function} setGalleryPath - is for the setter function for the galleryPath variable 
 * @returns the GalleryForm to be displayed on the DOM
 */
function GalleryForm({ addGalleryItem, galleryTitle, setGalleryTitle, galleryDescription, setGalleryDescription, galleryPath, setGalleryPath }) {
    // setters and getters
    const [toggle, setToggle] = useState(false);

    // return content displayed on DOM
    return (
        // content wrapped in a Container element 
        <Container maxWidth="xs">
            {
                toggle ? (
                    // if toggle = true display form
                    <form onSubmit={addGalleryItem}>
                        {/* close button to minimize form */}
                        <Button color='error' variant="outlined" endIcon={<CloseIcon />} onClick={() => setToggle(!toggle)}>
                            Close form
                        </Button>
                        {/* TextField element for title input */}
                        <TextField fullWidth required id="title" label="Title" value={galleryTitle} onChange={(event) => setGalleryTitle(event.target.value)} variant="standard" margin="dense" />
                        {/* TextField element for description input */}
                        <TextField fullWidth required id='description' label="Description" value={galleryDescription} onChange={(event) => setGalleryDescription(event.target.value)} variant="standard" margin="dense" />
                        {/* TextField element for image path URL */}
                        <TextField fullWidth required id='path' label="Image URL" value={galleryPath} onChange={(event) => setGalleryPath(event.target.value)} variant="standard" margin="dense" />
                        {/* Form Submit Button */}
                        <Button color="success" variant="contained" type='submit'>Submit</Button>
                    </form>
                ) : (
                    // if toggle = false display button
                    // Button to expand form
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

export default GalleryForm; // export the component called in App.jsx