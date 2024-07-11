import { Link } from "react-router-dom";
import Logo from '../assets/logoipsum-256.svg';
import EventLogo from '../assets/calendar-svgrepo-com.svg';
import { useAuth } from '../AuthContext';

export default function Nav() {
    const { isAuthenticated, logout } = useAuth();

    return (
        <nav className="navbar navbar-dark bg-warning">
            <img className="mx-5" src={Logo} alt="Logo" />
            <Link to="/create-event" className="navbar-brand fw-bold fs-3 mx-5 text-secondary">
                <img src={EventLogo} alt="event logo" className="logo" />
                <span style={{ fontFamily: "Nosifer", fontSize: "xx-large" }}>Event Management System</span>
            </Link>
            <div className="nav px-3 mx-3">
                {isAuthenticated ? (
                    <>
                        <Link style={{ fontFamily: "Bodoni Moda SC" }} to="/create-event" className="btn btn-outline-dark mx-2">Create Event</Link>
                        <Link style={{ fontFamily: "Bodoni Moda SC" }} to="/event-list" className="btn btn-outline-dark mx-2">Event List</Link>
                        <Link style={{ fontFamily: "Bodoni Moda SC" }} to="/user-list" className="btn btn-outline-dark mx-2">User List</Link>
                        <button style={{ fontFamily: "Bodoni Moda SC" }} onClick={logout} className="btn btn-outline-dark mx-2">Logout</button>
                    </>
                ) : (
                    <>
                        <Link style={{ fontFamily: "Bodoni Moda SC" }} to="/signin" className="btn btn-outline-dark mx-2">Sign In</Link>
                        <Link style={{ fontFamily: "Bodoni Moda SC" }} to="/create-user" className="btn btn-outline-dark mx-2">Sign Up</Link>
                    </>
                )}
            </div>
        </nav>
    );
}