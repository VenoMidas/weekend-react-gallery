import React, { useState, useEffect } from 'react'; // import react
import './GalleryItem.css'; // import the css file
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

/**
 * 
 * @param {Object} galleryObject - is for the object to be displayed 
 * @returns a gallery item to display on the DOM
 */
function GalleryItem({ galleryObject, likeGalleryObject }) {
    // setter and getter for toggle
    const [toggle, setToggle] = useState(false);

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            {/* clicking on the list item changes the toggle value, which then changes the displayed content */}
            <Card elevation="3">
                <CardContent
                    onClick={() => setToggle(!toggle)}
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
                            // <img src={galleryObject.path} />
                        )
                    }
                </CardContent>
                <button onClick={() => likeGalleryObject(galleryObject.id)} >Like!</button>
                <p>{galleryObject.likes} people like this!</p>
            </Card>
        </Grid>
    );
};

export default GalleryItem; // export component