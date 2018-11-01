import {Link, Switch, Route} from 'react-router-dom';
import React from 'react';
import App from './App';
import CustomAlert from './components/CustomAlert';
import ResponsiveChart from './components/charts/ResponsiveChart';

const NavigationLinks = () => 
    <Switch>
        <Route exact path = '/' component = {App}/>
        <Route exact path = '/alert' component = {CustomAlert}/>
        <Route exact path = '/chart' component = {ResponsiveChart}/>
    </Switch>

export default NavigationLinks;