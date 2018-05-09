import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import LoginForm from "./components/LoginForm";
import MainSection from "./components/MainSection";
import AccessDenied from "./components/AccessDenied";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={LoginForm} />
            <Route path="/main" component={MainSection} />
            <Route component={AccessDenied} />
        </Switch>
    </BrowserRouter>
)

export default Router;