import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" alt="no-image" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li className="online">Online Status :  {onlineStatus ? <p className="emoji">&#9989;</p> : <p className="emoji">&#10060;</p>}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;