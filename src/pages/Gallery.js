import React, { useState, useEffect } from 'react';
import '../styles/Gallery.css';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import Footer2 from '../components/Footer2';
import { Loader } from '../components/Loader.js';
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



// class GalleryPage extends Component {
  //   constructor(){
  //     super();
  //     this.state = {
  //       pictures: [],
  //     };
  //   }
  
  //   componentDidMount(){
  //     fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=367ac427c50a75d98c3f344b8dafa870&tags=bikerace%2C+boulderbiketour&per_page=40&format=json&nojsoncallback=1&auth_token=72157720852235038-189845e29db22b81&api_sig=73e610499fb6e25cbf24311a5021d379')
  //     .then(function(response){
  //       return response.json();
  //     })
  //     .then(function(j){
  //       let picArray = j.photos.photo.map((pic) => {
  //         var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
  //         return(
  //           <img alt="cycling" src={srcPath}></img>
  //         )
  //       })
  //       this.setState({pictures: picArray});
  //     }.bind(this))
  //   }
  
  //   render() {
  
  //   return (
  //     <div>
  //       <Sidebar />
  //       <Navbar />
  //       <p className='gallery'>
  //         {this.state.pictures}
  //       </p>
  //       <Footer2 />
  //       <Footer />
  //     </div>
  //   );
  // }
  // }