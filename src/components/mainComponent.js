import React, { Component } from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Additive from './additiveCipher';
import Playfair from './playfairCipher';
import HomeComponent from './homeComponent';
class MainComponent extends Component {

    render() {
        return (
             <Switch>
                 <Route path='/home' component={() => <HomeComponent />} />
                 <Route path='/additive_cipher' component={() => <Additive/>} />
                 <Route path='/playfair_cipher' component={() => <Playfair/>} />
                 <Redirect to='/home' />
             </Switch>   
        );
    }
}

export default MainComponent;