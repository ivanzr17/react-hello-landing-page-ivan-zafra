import React, { Component } from "react";
import Boton from "./boton";

export class Jumbotron extends Component {
  render() {
    return (
      <div class="jumbotron container ">
        <h1 class="display-4">
          <strong>A Warm Welcome!</strong>
        </h1>
        <p class="lead">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          veritatis doloribus, maiores qui quibusdam consequuntur eveniet illo
          corrupti expedita ut, sint omnis natus mollitia sit quisquam ullam
          dolorem. Voluptas, natus.
        </p>
        <span>
          <Boton textButton={"Call to action!"} />
        </span>
      </div>
    );
  }
}

export default Jumbotron;
