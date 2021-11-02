import React, { Component } from "react";
import { animation } from "../../assets/image";

export default class Definitions extends Component {
  render() {
    return (
      <div className="defin">
        <div className="logo-defin">
          <img
            src={animation}
            alt="Girl in a jacket"
            width="158"
            height="150"
          />
        </div>

        <div class="row">
          <div class="col-4 menu"></div>

          <div class="col-4">
            <p className="deff">
              <strong>Deffinition;</strong> a practice or exercise to test or
              omprove one's fitness for athletic competition, ability, or
              performance to exhaust (something, such as a mine) by working ti
              devise, <br /> arrange, or achieve by resolving difficulties.{" "}
              <br />
              Merriam-Webster.com Dictionary.
            </p>
            <br />
            <div className="it">
              <i>-Weekend team</i>
            </div>
          </div>

          <div class="col-3 right"></div>
        </div>
      </div>
    );
  }
}
