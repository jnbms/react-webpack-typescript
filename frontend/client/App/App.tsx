import React,{Fragment} from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Router from "./Router";

export default function App(){
    return (
        <Fragment>
                <BrowserRouter>
                        <Route
                            path="/"
                            render={({history,location}) => 
                                <Router
                                    pathname={location.pathname}
                                    onNotFound={() => history.push("/404")}
                                />
                            }
                        />
                </BrowserRouter>
        </Fragment>
    );
}