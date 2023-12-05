import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function Nav() {
  return (
    <>
      <div className="header-style">
        <h1>Currency Exchange App</h1>
      </div>
      <NavLinks
        links={[
          <Link key={1} className="nav-link btn btn-dark text-light" to="/">
            Wallet
          </Link>,
          <Link key={2} className="nav-link btn btn-dark text-light" to="/recipients">
            Recipients
          </Link>,
          <Link key={3} className="nav-link btn btn-dark text-light" to="/invitation">
            Invite A Friend
          </Link>,
          <Link key={4} className="nav-link btn btn-dark text-light" to="/about">
            About
          </Link>,
          <Link key={5} className="nav-link btn btn-dark text-light" to="/faq">
            FAQ
          </Link>,
          <Link key={6} className="nav-link btn btn-dark text-light" to="/legal">
            Legal
          </Link>,
        ]}
      />
    </>
  );
}

export default Nav;
