import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import loadable from "@loadable/component"

export default function Router(){
    return (
        <React.Fragment>
                <BrowserRouter>
                    <Switch>
                        <Route
                            path="/"
                            component={loadable(({location})=> import("./pages" + location.pathname))}
                        />
                    </Switch>
                </BrowserRouter>
        </React.Fragment>
    );
}