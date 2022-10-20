import React from "react";
import { View } from "react-native";
import NavBar from "./NavBar.js";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import { Route, Switch } from "react-router-native";

const Main = () => {
  return (
    <View>
      <NavBar></NavBar>
      <Switch>
        <Route  path="/" exact component={Home}/>
        <Route path="/login" exact component={Login}/>
      </Switch>
    </View>
  );
};
export default Main;
