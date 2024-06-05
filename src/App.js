import "./App.css";
import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Layout } from "./components/layout/Layout";
import "bootstrap/dist/css/bootstrap.css";
import "semantic-ui-css/semantic.min.css";
import { ActivityContextComponent } from "./components/Pages/Trips/ActivityContext";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <ActivityContextComponent>
        <Layout>
          <Routes>
            {AppRoutes.map((route, index) => {
              const { element, ...rest } = route;
              return <Route key={index} {...rest} element={element} />;
            })}
          </Routes>
        </Layout>
      </ActivityContextComponent>
    );
  }
}
