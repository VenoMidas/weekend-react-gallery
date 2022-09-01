import React, { useState, useEffect } from 'react'; // import react
import './GalleryItem.css'; // import the css file

/**
 * 
 * @param {Objext} galleryObject - is for the object to be displayed 
 * @returns a gallery item to display on the DOM
 */
function GalleryItem({ galleryObject }) {
    // setter and getter for toggle
    const [toggle, setToggle] = useState(false);

    return (
        // clicking on the list item changes the toggle value, which then changes the displayed content
        <li onClick={() => setToggle(!toggle)}>
            {
                toggle ? (
                    // if toggle = true display description
                    <p>{galleryObject.description}</p>
                ) : (
                    // if toggle = false display image
                    <img src={galleryObject.path} />
                )
            }
        </li>
    );
};

export default GalleryItem; // export component