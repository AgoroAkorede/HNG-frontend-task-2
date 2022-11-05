import { Route, Switch } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <MainPage />
      </Route>

      <Route path="/contact">
        <ContactPage />
      </Route>
    </Switch>
  );
}

export default App;
