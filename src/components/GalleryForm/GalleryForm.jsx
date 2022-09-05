import React from 'react'; // import react
import './GalleryForm.css'; // import GalleryList css

function GalleryForm({addGalleryItem, galleryTitle, setGalleryTitle, galleryDescription, setGalleryDescription, galleryPath, setGalleryPath}) {
    return (
        <form onSubmit={addGalleryItem}>
        <label htmlFor="title">Title</label>
        <input required id="title" value={galleryTitle} onChange={(event) => setGalleryTitle(event.target.value)} />

        <label htmlFor="description">Description</label>
        <input required id='description' value={galleryDescription} onChange={(event) => setGalleryDescription(event.target.value)} />

        <label htmlFor="path">Image URL</label>
        <input required id='path' value={galleryPath} onChange={(event) => setGalleryPath(event.target.value)} />

        <button type='submit'>Submit</button>
      </form>
    );
};

export default GalleryForm; // export the component