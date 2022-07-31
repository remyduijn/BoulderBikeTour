import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import '../styles/Gallery.css';
import Footer from '../components/Footer';
import Footer2 from '../components/Footer2';


class GalleryPage extends Component {
  constructor(){
    super();
    this.state = {
      pictures: [],
    };
  }

  componentDidMount(){
    fetch('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=367ac427c50a75d98c3f344b8dafa870&tags=bikerace%2C+boulderbiketour&per_page=40&format=json&nojsoncallback=1&auth_token=72157720852235038-189845e29db22b81&api_sig=73e610499fb6e25cbf24311a5021d379')
    .then(function(response){
      return response.json();
    })
    .then(function(j){
      let picArray = j.photos.photo.map((pic) => {
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return(
          <img alt="cycling" src={srcPath}></img>
        )
      })
      this.setState({pictures: picArray});
    }.bind(this))
  }

  render() {

  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <div>
      <Sidebar />
      <Navbar />
      <p className='gallery'>
        {this.state.pictures}
      </p>
      <Footer2 />
      <Footer />
    </div>
  );
}
}
export default GalleryPage;
