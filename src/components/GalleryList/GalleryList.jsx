import React from 'react'; // import react
import './GalleryList.css'; // import GalleryList css
import GalleryItem from '../GalleryItem/GalleryItem.jsx'; // import GalleryItem component
import Grid from '@mui/material/Grid';

/**
 * 
 * @param {Object[]} galleryArray - Is for the array of gallery objects 
 * @returns the mapped list of gallery objects on the DOM
 */
function GalleryList({ galleryArray, likeGalleryObject, deleteGalleryItem }) {
    return (
        <Grid
            container
            spacing={2}
        >
            {
                // map array items
                galleryArray.map((galleryObject) => {
                    // Insert GalleryItem component and pass galleryObject props
                    return <GalleryItem key={galleryObject.id} deleteGalleryItem={deleteGalleryItem} galleryObject={galleryObject} likeGalleryObject={likeGalleryObject} />
                })
            }
        </Grid>
    );
};

export default GalleryList; // export the component