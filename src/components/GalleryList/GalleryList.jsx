import React from 'react';
import './GalleryList.css';

function GalleryList({ galleryArray }) {
    return (
        <ul>
            {
                galleryArray.map((galleryObject) => {
                    return <li key={galleryObject.id}>ID: {galleryObject.id}, Title: {galleryObject.title}, Description: {galleryObject.description} <img src={galleryObject.path} /></li>
                })
            }
        </ul>
    );
};

export default GalleryList;