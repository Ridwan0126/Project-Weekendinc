import React, { Component } from "react";
// import swal from "sweetalert";
import { logos } from "../../assets/image";

export default class Home extends Component {
  // componentDidMount(){
  // }
  // Click = () => {
  //   swal({})
  // }
  render() {
    return (
      <div id="backgrounds">
        <div className="get-start">
          <p>WEEKEND FROM HOME</p>
        </div>
        <div className="desk">
          <i>Stay active with a little workout</i>
        </div>
        <div className="logo-style">
          <img src={logos} alt="Girl in a jacket" width="164" height="275" />
        </div>
        <div className="button-click">
          <button className="button">Let's Go</button>
        </div>
      </div>
    );
  }
}
