import React, { Component } from "react";
import { Bitmap } from "../../assets/image";
// import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div class="header">
        <img
          src={Bitmap}
          alt="Girl in a jacket"
          width="120"
          height="33"
          className="img-logo"
        />
      </div>
    );
  }
}

export default Header;
