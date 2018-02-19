import "materialize-css/dist/css/materialize.min.css";
import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home/home';
import ResultsPage from '../results-page/resultsPage';
import LocationPage from '../location-page/locationPage';
import EventPage from '../event-page/eventPage';
import SummaryPage from "../summary-page/summaryPage";



const App = () => (
        <div>
            <Route exact path = '/' component = {Home}/>
            <Route path = '/location-page' component = {LocationPage}/>
            <Route path = '/results-page' component = {ResultsPage}/>
            <Route path = '/event-page' component = {EventPage}/>
            <Route path = '/summary-page' component = {SummaryPage}/>
        </div>
);

export default App;
