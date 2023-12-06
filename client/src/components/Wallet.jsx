
import Col from "react-bootstrap/Col";
import AccountHolderCard from "./AccountHolderCard";

function Wallet() {
  return (
    <>
        <Col xs={12} md={{ span: 9}} lg={{ span: 9}}>
          <h6>Hook up front-end to database to have data persistence</h6>

          <AccountHolderCard />
        </Col>
    </>
  );
}

export default Wallet;
