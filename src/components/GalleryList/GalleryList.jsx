import React from 'react'; // import react
import './GalleryList.css'; // import GalleryList css
import GalleryItem from '../GalleryItem/GalleryItem.jsx'; // import GalleryItem component


/**
 * 
 * @param {Object[]} galleryArray - Is for the array of gallery objects 
 * @returns the mapped list of gallery objects on the DOM
 */
function GalleryList({ galleryArray }) {
    return (
        <ul>
            {
                // map array items
                galleryArray.map((galleryObject) => {
                    // Insert GalleryItem component and pass galleryObject props
                    return <GalleryItem galleryObject={galleryObject} />

                })
            };
        </ul>
    );
};

export default GalleryList; // export the component