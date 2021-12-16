import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout"
import AddTutoringAdPage from "./pages/AddTutoringAd";
import DetailsTutoringAdsPage from "./pages/DetailsTutoringAd";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import ListingTutoringAdsPage from "./pages/ListingTutoringAds";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";


function App() {
  return (
    
      <Switch>
        <Route path="/" exact={true}>
          <HomePage />
        </Route>
        <Layout>
        <Route path="/tutoring-ads">
          <ListingTutoringAdsPage />
        </Route>
        <Route path="/add-tutoringad">
          <AddTutoringAdPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/tutoring-ad-details">
          <DetailsTutoringAdsPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage/>
        </Route>
        </Layout>
      </Switch>
    
  );
}

export default App;
