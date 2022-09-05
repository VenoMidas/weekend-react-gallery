import { useEffect, useState } from 'react'; // import useEffect and useState, no longer need react from react
import Axios from 'axios'; //import axios for server routes
import './App.css'; // import app.css file
import GalleryList from '../GalleryList/GalleryList.jsx'; //import GalleryList component
import GalleryForm from '../GalleryForm/GalleryForm.jsx'; // import GalleryForm component
import Header from '../Header/Header'; // import Header component
import Container from '@mui/material/Container'; // import Container MUI element

/**
 * App component function
 * @returns content to be displayed on DOM
 */
function App() {
  // getters and setters
  //   variable name   setter funct   set default value
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

  /**
   * PUT /gallery/like/:id
   * Increases like count by 1 
   * @param {string} galleryItemId - is for the object ID
   */
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

  /**
   * DELETE /gallery/:id
   * Deletes object from database
   * @param {string} galleryItemId - is for the object ID
   */
  const deleteGalleryItem = (galleryItemId) => {
    Axios({
      method: 'DELETE',
      url: `/gallery/${galleryItemId}`,
    }).then((response) => {
      // getGallery from server
      getGallery();
    }).catch((error) => {
      console.log(error);
      alert('Something went wrong');
    });
  };

  /**
   * POST /gallery
   * Adds form inputs to database
   * @param {Object} event - is for the event object
   */
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

  // return content displayed on DOM
  return (
    // wrap app in a container
    <Container className="App">
      {/* Insert Header component */}
      <Header />
      {/* Insert GalleryForm component and pass required props */}
      <GalleryForm addGalleryItem={addGalleryItem} galleryTitle={galleryTitle} setGalleryTitle={setGalleryTitle} galleryDescription={galleryDescription} setGalleryDescription={setGalleryDescription} galleryPath={galleryPath} setGalleryPath={setGalleryPath} />
      {/* Insert GalleryList component and pass required props */}
      <GalleryList deleteGalleryItem={deleteGalleryItem} galleryArray={galleryArray} likeGalleryObject={likeGalleryObject} />
    </Container>
  );
};

export default App; // export component for index.js to render