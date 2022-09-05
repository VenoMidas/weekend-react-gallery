import { useState } from 'react'; // import useState
import './GalleryItem.css'; // import the css file
import Grid from '@mui/material/Grid'; // import Grid element from MUI
import Card from '@mui/material/Card'; // import Card element from MUI
import CardActions from '@mui/material/CardActions'; // import CardActions element from MUI
import CardMedia from '@mui/material/CardMedia'; // import CardMedia element from MUI
import Typography from '@mui/material/Typography'; // import Typography element from MUI
import ThumbUpIcon from '@mui/icons-material/ThumbUp'; // import ThumbUpIcon from MUI
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'; // import DeleteForeverIcon from MUI

/**
 * GalleryItem component function
 * @param {Object} galleryObject - is for the object to be displayed 
 * @param {function} likeGalleryObject - is for the Axios PUT call
 * @param {function} deleteGalleryItem - is for the Axios DELETE call
 * @returns a gallery item to display on the DOM
 */
function GalleryItem({ galleryObject, likeGalleryObject, deleteGalleryItem }) {
    // setter and getter for toggle
    const [toggle, setToggle] = useState(false);

    // returns content to be displayed on DOM
    return (
        // Grid item with variable item sizes based on breakpoints
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            {/* Card element with some border radius and elevation */}
            <Card sx={{ borderRadius: '10%' }} elevation={3}>
                {/* clicking on the div changes the toggle value, which then changes the displayed content */}
                <div
                    onClick={() => setToggle(!toggle)}
                    className="cardContent"
                >
                    {
                        toggle ? (
                            // if toggle = true display description
                            <Typography className='description'>
                                {galleryObject.description}
                            </Typography>
                        ) : (
                            // if toggle = false display image
                            <CardMedia
                                component="img"
                                height="200"
                                image={galleryObject.path}
                            />
                        )
                    }
                </div>
                {/* CardActions element for the actions on bottom of card */}
                <CardActions disableSpacing className='cardAction'>
                    {/* ThumbUpIcon that calls likeGalleryObject on click */}
                    <ThumbUpIcon className='thumbUpIcon' onClick={() => likeGalleryObject(galleryObject.id)}></ThumbUpIcon>
                    {/* Typography element that displays like count */}
                    <Typography className='likeCount'>{galleryObject.likes} people like this!</Typography>
                    {/* DeleteForeverIcon that calls deleteGalleryIcon on click */}
                    <DeleteForeverIcon className='deleteForever' onClick={() => deleteGalleryItem(galleryObject.id)}></DeleteForeverIcon>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GalleryItem; // export component called in GalleryList.jsx