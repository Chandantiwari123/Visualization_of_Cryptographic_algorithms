import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Additive from './additiveCipher';
import HomeComponent from './homeComponent';
class MainComponent extends Component {

    render() {
        return (
             <Switch>
                 <Route path='/home' component={() => <HomeComponent />} />
                 <Route path='/additive_cipher' component={() => <Additive/>} />
                 <Redirect to='/home' />
             </Switch>   
        );
    }
}

export default MainComponent;