import React, {Component, Suspense} from 'react';
import './App.scss';
import {BrowserRouter} from "react-router-dom";
import Navigation from "../Navigation";
import Content from "../Content";

class App extends Component {
    render() {
        return (
            <Suspense fallback={<p>Loading...</p>}>
                <BrowserRouter>
                    <div className="app">
                        <Navigation/>
                        <Content/>
                    </div>
                </BrowserRouter>
            </Suspense>
        );
    }
}

export default App;
