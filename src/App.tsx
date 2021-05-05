import "./App.css";
import 'typeface-exo'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RunnerInputs, Dashboard } from "./components/index";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Info from "./components/Info";
import Connect from "./components/Connect";

function App() {
  
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/information" component={Info} />
          <Route path="/connect" component={Connect} />
          <Route path="/" component={RunnerInputs} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
