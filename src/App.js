import './App.scss';
import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Row from "./components/Row";
import Video from "./components/Video";
import Footer from "./components/Footer";
import requests from './config/Requests';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Nav />

            <Banner />

            <Row title="Programmes Originaux Netflix" fetchUrl={requests.fetchNetflixOriginals} isPoster={true} />
            <Row title="Tendances Actuelles" fetchUrl={requests.fetchTrending} />
            <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
            <Row title="Film d'action" fetchUrl={requests.fetchActionMovies} />
            <Row title="Film comique" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Film suspens" fetchUrl={requests.fetchThrillerMovies} />
            <Row title="Film romantique"fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} />

            <Footer />
          </Route>
          <Route path="/video/:id" component={Video} />
          <Route path="*">
            <Redirect to="*" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
