import React from "react";
import {Route,Switch} from "react-router-dom"
import Main from "./components/Main"
import News from "./components/News"
import Menu from "./components/Menu"
import Profile from "./components/Profile"
import SignIn from "./components/SignIn"
import Reg from "./components/Reg"

const App = (props) => {
    return (
      <div>
        <Menu />
          <Switch>

              <Route exact path="/" component={Main} />
              <Route path="/news" component={News} />
              <Route path="/profile" component={Profile}/> } />
              <Route path="/sign-in" component={SignIn} />
              <Route path="/Reg" component={Reg} />
              
          </Switch>
      </div>

    )
};

export default App;
