import React, { Component } from "react";
import Header from "./header";
import Jumbotron from "./jumbotron";
import Card from "./card";
import Footer from "./footer";

export class main extends Component {
  render() {
    return (
      <div>
        <div class="header">
          <Header />
        </div>
        <div class="container">
          <Jumbotron />

          <div class="card-group">
            <Card
              cardTitle={"Titulo 1"}
              cardText={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus arcu, mattis in porttitor ac, vehicula in libero. Etiam viverra."
              }
            />
            <Card
              cardTitle={"Titulo 2"}
              cardText={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus arcu, mattis in porttitor ac, vehicula in libero. Etiam viverra."
              }
            />
            <Card
              cardTitle={"Titulo 3"}
              cardText={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus arcu, mattis in porttitor ac, vehicula in libero. Etiam viverra."
              }
            />
            <Card
              cardTitle={"Titulo 4"}
              cardText={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec metus arcu, mattis in porttitor ac, vehicula in libero. Etiam viverra."
              }
            />
          </div>
        </div>

        <div class="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default main;
