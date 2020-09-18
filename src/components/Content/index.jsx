import React, {Component} from 'react';
import routes from "../../routes";
import {Route, Switch} from 'react-router-dom';
import NotFound from '../NotFound';

class Content extends Component {
    render() {
        return (
            <div className='content'>
                <Switch>
                    {routes.map(({path, isExact, component: Component}) => (
                        <Route path={path} exact={isExact} component={Component} key={path}/>
                    ))}
                    <Route component={NotFound}/>
                </Switch>
            </div>
        );
    }
}

export default Content;