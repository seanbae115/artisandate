import "materialize-css/dist/css/materialize.min.css";
import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home/home';
import ResultsPage from '../results-page/resultsPage';
import LocationPage from '../location-page/locationPage';
import EventPage from '../event-page/eventPage';
import SummaryPage from "../summary-page/summaryPage";
import SignUp from '../signup-page/signup';
import SignIn from '../signin-page/signin';
import OurTeam from '../ourteam-page/ourTeam';



const App = () => (
        <div>
            <Route exact path = '/' component = {Home}/>
            <Route path = '/signup-page' component = {SignUp}/>
            <Route path = '/signin-page' component = {SignIn}/>
            <Route path = '/location-page' component = {LocationPage}/>
            {/*<Route path = '/results-page/:zip' component = {ResultsPage}/>*/}
            <Route path = '/results-page/:zip/:id' component = {ResultsPage}/>
            <Route path = '/event-page/:id' component = {EventPage}/>
            <Route path = '/summary-page' component = {SummaryPage}/>
            <Route path = '/ourteam-page' component = {OurTeam}/>
            <Route path = '/logout' component = {Home}/>
        </div>
);

export default App;
