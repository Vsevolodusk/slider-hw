import { Component } from "react";
import styles from './style.module.css'
class SliderButtons extends Component {
  constructor(props) {
    super(props);

  }

  
  render() {
    const {frwd , back} = this.props
    return (
      <>
        <button className={`${styles.btn} ${styles.back}` } onClick={back}><i className="fa fa-angle-left" aria-hidden="true"></i></button>
        <button className={`${styles.btn} ${styles.forward}`} onClick={frwd}><i className="fa fa-angle-right" aria-hidden="true"></i></button>
      </>
    );
  }
}
export default SliderButtons;
