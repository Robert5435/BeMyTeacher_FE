import AdminNavBar from './AdminNavBar';
import './AdminPanel.css';
import AdminSubject from './AdminSubject';
import { Route, Switch, Redirect } from "react-router-dom";

function AdminPanelPage() {

    
    return (
        <div className='wrapper'>
            <AdminNavBar />
            <div id="content">
                <Switch>
                    <Route path="/admin-panel/data-subjects">
                        <AdminSubject />
                    </Route>
                </Switch>
            </div>
        </div>)
}

export default AdminPanelPage;