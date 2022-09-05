import React, { useEffect, useState } from 'react'; // import react and use's
import './App.css'; // import app.css file
import GalleryList from '../GalleryList/GalleryList.jsx'; //import GalleryList component
import GalleryForm from '../GalleryForm/GalleryForm.jsx';
import Header from '../Header/Header'; // import Header component
import Axios from 'axios'; //import axios for server routes
import Container from '@mui/material/Container';

function App() {
  // getters and setters
  let [galleryArray, setGalleryArray] = useState([]);
  let [galleryTitle, setGalleryTitle] = useState('');
  let [galleryDescription, setGalleryDescription] = useState('');
  let [galleryPath, setGalleryPath] = useState('');

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

  const addGalleryItem = (event) => {
    // prevents default form behavior that refreshes the screen
    event.preventDefault();
    Axios({
      method: 'POST',
      url: '/gallery',
      data: {
        title: galleryTitle,
        description: galleryDescription,
        path: galleryPath,
      }
    }).then(response => {
      // clear form inputs
      setGalleryTitle('');
      setGalleryDescription('');
      setGalleryPath('');
      // get gallery from server
      getGallery();
    }).catch(error => {
      console.log(error);
      alert('Something went wrong!');
    });
  };

  return (
    <Container className="App">
      {/* Insert Header component */}
      <Header />
      <GalleryForm />
      <form onSubmit={addGalleryItem}>
        <label htmlFor="title">Title</label>
        <input required id="title" value={galleryTitle} onChange={(event) => setGalleryTitle(event.target.value)} />

        <label htmlFor="description">Description</label>
        <input required id='description' value={galleryDescription} onChange={(event) => setGalleryDescription(event.target.value)} />

        <label htmlFor="path">Image URL</label>
        <input required id='path' value={galleryPath} onChange={(event) => setGalleryPath(event.target.value)} />

        <button type='submit'>Submit</button>
      </form>
      {/* Insert GalleryList component and pass galleryArray props */}
      <GalleryList deleteGalleryItem={deleteGalleryItem} galleryArray={galleryArray} likeGalleryObject={likeGalleryObject} />
    </Container>
  );
};

export default App; // export component