import { Component } from "react";
import styles from "./style.module.css";
import sliderArray from "../SliderData";
import PhotoRender from "../SliderPhotoRender";
import SliderButtons from "../SliderButtons";
import TextRender from "../TextRender";

class SliderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderData: sliderArray,
      counter: 0,
      isStarted : false
    };
  }

  btnFwd = () => {
    const { sliderData } = this.state;
    const { counter } = this.state;
    if (counter >= sliderData.length - 1) {
      this.setState({ counter: 0 });
    } else {
      this.setState({ counter: counter + 1 });
    }
  };
  btnBck = () => {
    const { sliderData } = this.state;
    const { counter } = this.state;
    if (counter <= 0) {
      this.setState({ counter: sliderData.length - 1 });
    } else {
      this.setState({ counter: counter - 1 });
    }
  };
 
  render() {
    const { sliderData, counter } = this.state;
    return (
      <div className={styles.sliderContainer}>
        <div className={styles.sliderImgContainer}>
          <PhotoRender slideData={sliderData} counter={counter} />
          <SliderButtons frwd={this.btnFwd} back={this.btnBck} />
        </div>
        <TextRender slideData={sliderData} counter={counter} />
      </div>
    );
  }
}

export default SliderContainer;
