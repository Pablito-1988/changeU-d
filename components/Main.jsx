import React from "react";
import { View ,StatusBar } from "react-native";
import NavBar from "./NavBar.js";
import Home from "./Home.jsx";

import { Route, Switch } from "react-router-native";

const Main = () => {
  return (
    <View>
        <StatusBar ></StatusBar>
      <NavBar></NavBar>
      <Switch>
        <Route  path="/" exact component={Home}/>
      </Switch>
    </View>
  );
};
export default Main;
