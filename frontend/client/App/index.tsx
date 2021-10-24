import {Fragment} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import DynamicPage from "./Router";

export default function App(){
    return (
        <Fragment>
                <Router>
                    <Route
                        path="/"
                        render={({history,location}) =>
                            <DynamicPage
                                pathname={location.pathname}
                                onNotFound={() => history.push("/404")}
                            />
                        }
                    />
                </Router>
        </Fragment>
    );
}