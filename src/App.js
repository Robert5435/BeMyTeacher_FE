import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout"
import AddTutoringAdPage from "./pages/AddTutoringAd";
import DetailsTutoringAdsPage from "./pages/DetailsTutoringAd";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import ListingTutoringAdsPage from "./pages/ListingTutoringAds";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import { useEffect, useState } from "react";
import ProtectedRoute from "./components/ProtectedRoute";
import PageToBeProtected from "./pages/PageToBeProtected";
import { Cookies } from "react-cookie";



function App() {
  const [name, setName] = useState();
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {

    const ceva = async () => {
      const response = await fetch("https://localhost:5001/Users/User", {
        headers: new Headers({ 'Content-Type': 'application/json' }, { 'Authorization': 'Bearer' }),
        credentials: 'include',
      });
      const content = await response.json();
      setName(content.name);
      setIsAuth(true)
    }
      ceva()



  })


  return (

    <Switch>
      <ProtectedRoute path="/pagetobeprotected" component={PageToBeProtected} isAuth={isAuth} />
      <Route path="/" exact={true}>
        <HomePage name={name} />
      </Route>
      <Layout name={name} setName={setName}>
        <Route path="/tutoring-ads">
          <ListingTutoringAdsPage />
        </Route>
        <Route path="/add-tutoringad">
          <AddTutoringAdPage />
        </Route>
        <Route path="/profile">
          <ProfilePage name={name} />
        </Route>
        <Route path="/tutoring-ad-details/:id">
          <DetailsTutoringAdsPage />
        </Route>
        <Route path="/login">
          <LoginPage setName={setName} />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Layout>
    </Switch>

  );
}

export default App;
