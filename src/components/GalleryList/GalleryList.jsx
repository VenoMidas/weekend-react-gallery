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
                galleryArray.map((galleryObject) => {
                    return <GalleryItem galleryObject={galleryObject} />

                })
            }
        </ul>
    );
};

export default GalleryList; // export the component