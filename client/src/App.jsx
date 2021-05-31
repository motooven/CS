import React from 'react';
import './app.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Registration from "/registration/Registration";


function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <div className="wrap">
                    <Switch>
                        <Route path="/registration" component={Registration}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

