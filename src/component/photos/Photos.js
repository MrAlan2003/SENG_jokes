import React, { Component } from 'react';
import './Photos.css';
import Gallery from 'react-photo-gallery';
import we from './images/we.jpg';
import yarik from './images/yarik.png';
import dima from './images/dima.jpg';
import maxim from './images/maxim.jpg';
import dr from './images/dr.jpg';
import jenya from './images/jenya.JPG';
import aibulat from './images/aibulat.JPG';
import valera from './images/valera.JPG';
import arina from './images/arina.JPG';
import julya from './images/julya.JPG';
import weandifst from './images/weandifst.JPG';
//import ImageGallery from 'react-image-gallery';
//import MaterialPhotoGallery from 'material-photo-gallery';
import Lightbox from 'react-images';

const PHOTO_SET = [
  {
    src: we,
    width: 24,
    height: 32
  },
  {
    src: yarik,
    width: 30.9,
    height: 45.2
  },
  {
    src: maxim,
    width: 44.16,
    height: 34.56
  },
  {
    src: dima,
    width: 41.44,
    height: 29.6
  },
  
  {
    src: dr,
    width: 44,
    height: 34.56
  },
  {
    src: jenya,
    width: 38.64,
    height: 51.52
  },
  {
    src: arina,
    width: 51.84,
    height: 34.56
  },
  {
    src: aibulat,
    width: 34.56,
    height: 51.84
  },
  {
    src: julya,
    width: 47.28,
    height: 40
  },
  {
    src: valera,
    width: 60,
    height: 40
  },
  {
    src: weandifst,
    width: 81.7,
    height: 52.6
  }
];





			
class Photos extends Component {
	constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
	
	
	
    render() {
        return (
            <div className="Photos-content">
                <p className="text">Фоточки</p>
				<Gallery photos={PHOTO_SET} onClick={this.openLightbox} />
				<Lightbox images={PHOTO_SET}
				  onClose={this.closeLightbox}
				  onClickPrev={this.gotoPrevious}
				  onClickNext={this.gotoNext}
				  currentImage={this.state.currentImage}
				  isOpen={this.state.lightboxIsOpen}
				/>
				
            </div>

        );
    }
}

export default Photos;
