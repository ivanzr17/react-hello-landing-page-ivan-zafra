import React, { Component } from "react";
import Header from "./header";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

export class main extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
        <div class="container">
          <div class="row">
            <Card
              cardTitle={"Titulo 1"}
              cardText={"Aqui iria el texto de la primera card"}
            />
            <Card
              cardTitle={"Titulo 2"}
              cardText={"Aqui iria el texto de la segunda card"}
            />
            <Card
              cardTitle={"Titulo 3"}
              cardText={"Aqui iria el texto de la tercera card"}
            />
            <Card
              cardTitle={"Titulo 4"}
              cardText={"Aqui iria el texto de la cuarta card"}
            />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default main;
