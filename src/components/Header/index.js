import React, { Component } from "react";
import { Bitmap } from "../../assets/image";

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
          width="160"
          height="43"
          className="img-logo"
        />
      </div>
    );
  }
}

export default Header;
