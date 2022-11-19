import './App.css'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import HomePage from "./Pages/HomePage";
import Parent from "./Pages/Parent";
import Who from "./Pages/Who";
import Teacher from "./Pages/Teacher";
import SelectTest from './Pages/SelectTest';
import AgoraVcTest from './components/Agora-VC/AgoraVcTest';
import AgoraTester from './components/Agora-VC/AgoraTester';
import Login from './components/Login';
const App = () => {
  return <div>
    <Router>
      <Switch>
        <Route path="/" exact>
        <HomePage />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/who" exact>
          <Who />
        </Route>
        <Route path="/parent" exact>
          <Parent />
        </Route>
        <Route path="/teacher" exact>
          <Teacher />
        </Route>
        <Route path="/who" exact>
          <Who />
        </Route>
        <Route path="/tests" exact>
          <SelectTest />
        </Route>
        <Route path="/vc-agora" exact>
          <AgoraVcTest />
        </Route>
        <Route path="/vc-tester" exact>
          <AgoraTester />
        </Route>
        <Redirect to="/" />
        
      </Switch>

    </Router>
  </div>;
};

export default App;