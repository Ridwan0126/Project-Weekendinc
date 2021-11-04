import React, { Component } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./item";

export default class About extends Component {
  render() {
    return (
      <>
        <div className="abouts">
          <div className="App">
            <Carousel breakPoints={breakPoints}>
              <Item>
                <p className="carus">
                  <p className="tebal">Blu Kicks</p>
                  Please Where you can leverage tools and software to free up
                  time to focus on growing
                </p>
              </Item>
              <Item>
                <p className="carus">
                  <p className="tebal">Angelus</p>
                  All those apps took me months to get running. Now the site
                  practically runs itself!
                </p>
              </Item>
              <Item>
                <p className="carus">
                  <p className="tebal">Blu Kicks</p>
                  Please Where you can leverage tools and software to free up
                  time to focus on growing
                </p>
              </Item>
              <Item>
                <p className="carus">
                  <p className="tebal">Blu Kicks</p>
                  Please Where you can leverage tools and software to free up
                  time to focus on growing
                </p>
              </Item>
              <Item>
                <p className="carus">
                  <p className="tebal">Blu Kicks</p>
                  Please Where you can leverage tools and software to free up
                  time to focus on growing
                </p>
              </Item>
            </Carousel>
          </div>
          <div>
            <div>
              <p className="pov">POV</p>
              <p className="lorem">
                Lorem ipsum dolor sit amet, consectectur adipiscing elit, sed do
                eiusmod tempor incididnut ut labore et dolore magna aliqua. Ut
                einim ad minim veniam, quis nostrud ullamo laboris nisi ea
                commodo consequat. Duis aute irur dolor in reprehendrit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
            <div>
              <p className="Res">Resource</p>
              <p className="lorem">
                These cases are perfectly simple and easy to distinguish. In a
                free hour, when power of choice is untrammeled and when nothing
                prevents aour being able to do what we like best
              </p>
            </div>
            <div className="hlp">
              <p className="hlp-tps">Help & Tips</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 },
];
