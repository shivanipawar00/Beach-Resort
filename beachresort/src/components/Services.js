import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free Cocktails",
        info: "cocktails yayay!",
      },
      {
        icon: <FaHiking />,
        title: "Endless Hiking",
        info: "Hiking yayay!",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free Shuttle Van",
        info: "shuttle yayay!",
      },
      {
        icon: <FaBeer />,
        title: "Strongest Beer",
        info: "beer yayay!",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
