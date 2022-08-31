import React from 'react'; // import react
import './GalleryItem.css'; // import the css file


/**
 * 
 * @param {Objext} galleryObject - is for the object to be displayed 
 * @returns a gallery item to display on the DOM
 */
function GalleryItem({ galleryObject }) {
    return (
        <li key={galleryObject.id}>ID: {galleryObject.id}, Title: {galleryObject.title}, Description: {galleryObject.description} <img src={galleryObject.path} /></li>
    );
};

export default GalleryItem; // export component