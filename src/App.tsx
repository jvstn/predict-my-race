import "./App.css";
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
          <Route path="/" component={RunnerInputs} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
