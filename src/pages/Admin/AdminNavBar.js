import { Link } from "react-router-dom";
import "./AdminPanel.css"


function AdminNavBar() {
    return (
        <nav id="sidebar">
            <div className="sidebar-header">
                <h3>Admin Panel</h3>
            </div>

            <ul className="list-unstyled components">
                <p>Admin Actions</p>
                <li className="active">
                    <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Manage Data</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <Link to="/admin-panel/data-califications">Califications</Link>
                        </li>
                        <li>
                            <Link to="/admin-panel/data-subjects">Subjects</Link>
                        </li>
                        <li>
                            <Link to="/admin-panel/data-educationLevels">Education Levels</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Manage Users</a>
                </li>
            </ul>
        </nav>)
}

export default AdminNavBar;