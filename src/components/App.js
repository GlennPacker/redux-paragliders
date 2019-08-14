import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import GlidersPage from "./gliders/GlidersPage";
import GliderDetail from './gliderDetail'
import ManageGliders from './manageGliders'

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/gliders" component={GlidersPage} />
        <Route path="/glider/:slug" component={GliderDetail} />
        <Route path="/gliders" exact component={GliderDetail} />
        <Route path="/manage/glider/:slug" component={ManageGliders} />
        <Route path="/manage/gliders" exact component={ManageGliders} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
