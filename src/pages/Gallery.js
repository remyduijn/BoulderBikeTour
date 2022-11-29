import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Footer2 from '../components/Footer2';
import { Loader } from '../hooks/Loader.js';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

function GalleryPage() {
  const [images, setImage] = useState([]);

  useEffect(() => {
    fetchImages();
  }, [])

  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;
 
    axios
      .get(`${apiRoot}/photos/random?page=1&query=cycling&client_id=${accessKey}&count=40`)
      .then(res => {
        setImage([...images, ...res.data]);
      })
  }

  const UnsplashImage = ({ url, key }) => {
    return (
      <>
        <img className="h-72 w-full object-cover rounded-lg shadow-md" key={key} src={url} alt="" />
      </>
    )
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <h1 className="text-center mt-10 underline text-2xl">#BoulderBikeTour</h1>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <wrapper className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
          {images.map(image => (
            <a href={image.urls.regular} target="_blank" rel="noreferrer">
              <UnsplashImage url={image.urls.small} key={image.id} />
            </a>
          ))}
        </wrapper>
      </InfiniteScroll>
      <Footer2 />
      <Footer />
    </div>
  );
}

export default GalleryPage;


