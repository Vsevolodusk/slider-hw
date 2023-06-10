import React from "react";
import styles from './style.module.css'

class PhotoRender extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const {slideData , counter} = this.props 
      return <>
        <img className={styles.sliderImage} src={slideData[counter].src} alt="" />
      </>
      
    }
}

export default PhotoRender