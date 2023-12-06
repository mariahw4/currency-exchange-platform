import { Link } from "react-router-dom";

import Col from "react-bootstrap/Col";
import NavLinks from "./NavLinks";

// In our return method, we use the map method to return a new array of `li` and `img` elements that are specific to each search result
function Nav() {
  return (
    <>
          <Col xs={12} md={3} lg={3} mx-4="true">
            <NavLinks
              links={[
                <Link
                  key={1}
                  className="nav-link btn btn-primary text-dark py-3"
                  to="/"
                >
                  Wallet
                </Link>,
                <Link
                  key={2}
                  className="nav-link btn btn-primary text-dark py-3"
                  to="/recipients"
                >
                  Recipients
                </Link>,
                <Link
                  key={3}
                  className="nav-link btn btn-primary text-dark py-3"
                  to="/invitation"
                >
                  Invite A Friend
                </Link>,
                <Link
                  key={4}
                  className="nav-link btn btn-primary text-dark py-3"
                  to="/about"
                >
                  About
                </Link>,
                <Link
                  key={5}
                  className="nav-link btn btn-primary text-dark py-3"
                  to="/faq"
                >
                  FAQ
                </Link>,
                <Link
                  key={6}
                  className="nav-link btn btn-primary text-dark py-3"
                  to="/legal"
                >
                  Legal
                </Link>,
              ]}
            />
          </Col>
    </>
  );
}

export default Nav;
