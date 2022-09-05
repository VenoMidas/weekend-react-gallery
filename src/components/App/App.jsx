import React, { useEffect, useState } from 'react'; // import react and use's
import './App.css'; // import app.css file
import GalleryList from '../GalleryList/GalleryList.jsx'; //import GalleryList component
import Header from '../Header/Header'; // import Header component
import Axios from 'axios'; //import axios for server routes
import Container from '@mui/material/Container';

function App() {
  // getters and setters
  let [galleryArray, setGalleryArray] = useState([]);

  // useEffect runs on page load
  useEffect(() => {
    // console.log('in useEffect');
    getGallery();
  }, []);

  /**
   * GET /gallery data
   * setGalleryArray with gallery data
   */
  const getGallery = () => {
    Axios({
      method: 'GET',
      url: '/gallery',
    }).then(response => {
      setGalleryArray(response.data);
      // console.log(galleryArray);
    }).catch(error => {
      console.log(error);
      alert('Something went wrong!');
    });
  };

  const likeGalleryObject = (galleryItemId) => {
    Axios({
      method: 'PUT',
      url: `/gallery/like/${galleryItemId}`,
    }).then((response) => {
      getGallery();
    }).catch((error) => {
      console.log(error);
      alert('Something went wrong');
    });
  };

  const deleteGalleryItem = (galleryItemId) => {
    Axios({
      method: 'DELETE',
      url: `/gallery/${galleryItemId}`,
    }).then((response) => {
      getGallery();
    }).catch((error) => {
      console.log(error);
      alert('Something went wrong');
    });
  };

  return (
    <Container className="App">
      {/* Insert Header component */}
      <Header />
      <form>
        <label htmlFor="title">Title</label>
        <input required id="title" type="text" />

        <label htmlFor="description">Description</label>
        <input required id='description' type="text" />

        <label htmlFor="path">Image URL</label>
        <input required id='path' type="text" />

        <button type='submit'>Submit</button>
      </form>
      {/* Insert GalleryList component and pass galleryArray props */}
      <GalleryList deleteGalleryItem={deleteGalleryItem} galleryArray={galleryArray} likeGalleryObject={likeGalleryObject} />
    </Container>
  );
};

export default App; // export component