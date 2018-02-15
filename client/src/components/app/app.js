import "materialize-css/dist/css/materialize.min.css";
import React from 'react';
import Home from '../home/home';
import ResultsPage from '../results-page/resultsPage';
import LocationPage from '../location-page/locationPage';
import EventPage from '../event-page/eventPage';
import SummaryPage from "../summary-page/summaryPage";
import Environment from "../event-page/environment";


const App = () => (
    <div>
        <Environment/>
    </div>
);

export default App;
