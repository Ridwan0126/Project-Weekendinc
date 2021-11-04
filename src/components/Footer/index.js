import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <div>
            <div className="wkn">
              <p className="tbl">wknd</p>
              <div>@2020</div>
            </div>
          </div>
          <div className="cls">alpha version 0.1</div>
        </footer>
      </div>
    );
  }
}

export default Footer;
