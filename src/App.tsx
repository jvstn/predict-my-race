import "./App.css";
import 'typeface-exo'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { RunnerInputs, Dashboard } from "./components/index";
import { Provider } from "react-redux";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/information" component={Dashboard} />
          <Route path="/connect" component={Dashboard} />
          <Route path="/" component={RunnerInputs} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
