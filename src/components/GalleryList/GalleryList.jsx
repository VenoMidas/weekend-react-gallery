import './GalleryList.css'; // import GalleryList css
import GalleryItem from '../GalleryItem/GalleryItem.jsx'; // import GalleryItem component
import Grid from '@mui/material/Grid'; // import Grid element from MUI

/**
 * GalleryList component function
 * @param {Object[]} galleryArray - Is for the array of gallery objects 
 * @param {function} likeGalleryObject - is for the Axios PUT call
 * @param {function} deleteGalleryItem - is for the Axios DELETE call
 * @returns the galleryArray mapped into GalleryItem components
 */
function GalleryList({ galleryArray, likeGalleryObject, deleteGalleryItem }) {
    // return content to be displayed on DOM
    return (
        // wrapped in a Grid container
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

export default GalleryList; // export the component called in App.jsx