import React, { Component } from "react";
import NewsPage from "./NewsPage";
import data from "../data/news.json";

class MainComponent extends Component {
  render() {
    const news = data.map((item) => {
      return (
        <div key={item.id}>
          MainComponent.js
          <NewsPage />;
        </div>
      );
    });
    return <div>{news}</div>;
  }
}

export default MainComponent;
