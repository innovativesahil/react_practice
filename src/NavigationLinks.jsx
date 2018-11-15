import {Link, Switch, Route} from 'react-router-dom';
import React from 'react';
import App from './App';
import CustomAlert from './components/CustomAlert';
import ResponsiveChart from './components/charts/ResponsiveChart';
import PickDate from './components/datePicker/PickDate'
import MyDatePicker from './components/datePicker/MyDatePicker'

const NavigationLinks = () => 
    <Switch>
        <Route exact path = '/' component = {App}/>
        <Route exact path = '/alert' component = {CustomAlert}/>
        <Route exact path = '/chart' component = {ResponsiveChart}/>
        <Route exact path = '/date' component = {PickDate} />
        <Route exact path = '/datepick' component = {MyDatePicker} />
    </Switch>

export default NavigationLinks;