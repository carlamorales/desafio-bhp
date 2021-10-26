import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CheckList  from './components/CheckList';
import Home from './components/Home';
import Calculator from './components/Calculator';
import HarnessOne from './components/HarnessOne';
import HarnessTwo from './components/HarnessTwo';
import HarnessThree from './components/HarnessThree';
import Result from './components/Result';
import WarningDanger from './components/WarningDanger';
import Glossary from './components/glossary';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/harnessone" render={(props) => <HarnessOne  {...props.location.state} />} />
        <Route path="/resultado" render={(props) => <Result {...props.location.state} />} />
        <Route path="/error">
          <WarningDanger />
        </Route>
        <Route path="/harnesstwo" render={(props) => <HarnessTwo  {...props.location.state} />} />
        <Route path="/harnessthree" render={(props) => <HarnessThree  {...props.location.state} />}/>
        <Route path="/calculadora" >
          <Calculator/>
        </Route>
        <Route path="/checklist" render={(props) => <CheckList  {...props.location.state} />}  />
        <Route path="/glossary" render={(props) => <Glossary  {...props.location.state} />}  />
      </Switch>
    </Router>
  );
}

export default App;
