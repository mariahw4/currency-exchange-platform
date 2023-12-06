import PropTypes from "prop-types";

export default function NavLinks({ links }) {
  return (
    <>
      <ul>{links.map((link) => link)}</ul>
    </>
  );
}

NavLinks.propTypes = {
  links: PropTypes.array.isRequired,
};
