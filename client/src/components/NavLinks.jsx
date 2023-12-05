import PropTypes from "prop-types";
import Container from "react-bootstrap/Container";
// import Navbar from "react-bootstrap/Navbar";

export default function NavLinks({ links }) {
  return (
    <>
      <Container >
      <ul>{links.map((link) => link)}</ul>
    </Container>
    </>
  );
}

NavLinks.propTypes = {
  links: PropTypes.array.isRequired,
};
