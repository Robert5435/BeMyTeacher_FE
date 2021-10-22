import { Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout"
import AddTutoringAdPage from "./pages/AddTutoringAd";
import DetailsTutoringAdsPage from "./pages/DetailsTutoringAd";
import HomePage from "./pages/Home";
import ProfilePage from "./pages/Profile";
import ListingTutoringAdsPage from "./pages/ListingTutoringAds";


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
        <Route path="/tutoringad-details">
          <DetailsTutoringAdsPage />
        </Route>
        </Layout>
      </Switch>
    
  );
}

export default App;
