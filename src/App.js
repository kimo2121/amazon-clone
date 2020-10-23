import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
const promise = loadStripe(
  "pk_test_51H3FxnEh4aoUgsppfYwcHrk1FXt1rFJDg4Fg5rSApnGZ4BzyE7rZubVNGxhXi2g9nTgxTFTCt8OY7L5GSrTTmw3700dSuXEtlM"
);
function App() {
  const [{ basket }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS", authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [basket]);

  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/checkout" component={Checkout} />
          <Elements stripe={promise}>
            <Route exact path="/payment" component={Payment} />
          </Elements>
          <Route exact path="/orders" component={Orders} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
