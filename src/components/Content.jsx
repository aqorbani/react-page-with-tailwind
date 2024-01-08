import React from "react";
import ImageOne from "../assets/img/view01.jpg";
import ImageTwo from "../assets/img/view02.jpg";

const Content = () => {
  return (
    <>
      <div className="menu-card">
        <img
          src={ImageOne}
          alt="Amir Hossein"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl">Amir Hossein Qorbani</h2>
          <p className="mb-2">This page created by React & Tailwind</p>
          <span>full description</span>
        </div>
      </div>
      <div className="menu-card">
        <img
          src={ImageTwo}
          alt="Amir Hossein"
          className="h-full rounded mb-20 shadow"
        />
        <div className="center-content">
          <h2 className="text-2xl">Amir Hossein Qorbani</h2>
          <p className="mb-2">This page created by React & Tailwind</p>
          <span>full description</span>
        </div>
      </div>
    </>
  );
};

export default Content;
