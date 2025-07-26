import { RxHome } from "react-icons/rx";
import { BsExclamationCircle, BsCart } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <img className="logo" src="/foodie-logo.svg" alt="Foodie Logo" />
            </Link>
            
            <div className="nav-links">
                <Link to="/" className="ab"><RxHome /><span>Home</span></Link>
                <Link to="/about" className="ab"><BsExclamationCircle /><span>About</span></Link>
                <Link to="/contact" className="ab"><IoIosContact /><span>Contact</span></Link>
                <Link to="/cart" className="ab"><BsCart /><span>Cart</span></Link>
            </div>

            <div className="auth-buttons">
                <SignedOut>
                    <SignInButton mode="modal">
                        <button className="auth-button signin">
                            Sign In
                        </button>
                    </SignInButton>
                </SignedOut>
                <SignedIn>
                    <div className="user-profile">
                        <UserButton afterSignOutUrl="/" />
                    </div>
                </SignedIn>
            </div>
        </div>
    );
}

export default Navbar;