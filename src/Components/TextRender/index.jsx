import {Component} from "react";
import styles from './style.module.css'

class TextRender extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { slideData, counter } = this.props;
    return <>
      <h2 className={styles.sliderTitle}>{slideData[counter].title}</h2>
      <p  className={styles.sliderText}>{slideData[counter].text}</p>
      <a href={slideData[counter].additionalLink}>Learn more</a>
    </>;
  }
}
export default TextRender;
