import { Route, Switch } from "react-router-dom";
import Navbar from "components/Navbar";
import Home from "views/Home";
import Search from "views/Search";
import Collection from "views/Collection";

export default function Content() {
  return (
    <div className="flex-auto">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/collection">
          <Collection />
        </Route>
      </Switch>
    </div>
  );
}
