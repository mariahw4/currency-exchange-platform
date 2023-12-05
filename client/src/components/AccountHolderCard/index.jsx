import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';


import { useState } from 'react';

import userData from "./data";


function AccountHolderCard() {

  // total value functions and currency conversion

  const [checkedUSD, setCheckedUSD] = useState(true);
  const [checkedEUR, setCheckedEUR] = useState(false);
  const [checkedCHF, setCheckedCHF] = useState(false);


  const [totalValueUSD, setTotalValueUSD] = useState(2512);
  const [totalValueEUR, setTotalValueEUR] = useState(2295);
  const [totalValueCHF, setTotalValueCHF] = useState(2208);

  const [totalValue, setTotalValue] = useState(totalValueUSD)
  const [currencyUnits, setCurrencyUnits] = useState('USD')
  const [currencySymbol, setCurrencySymbol] = useState('$')

  const handleTotalValueUSD = () => {

    setTotalValueUSD((USD_value) + EURtoUSD(EUR_value) + CHFtoUSD(CHF_value))
    setTotalValue(totalValueUSD)
    setCurrencyUnits('USD')
    setCurrencySymbol('$')
  }
  const handleTotalValueEUR = () => {

    setTotalValueEUR((EUR_value) + USDtoEUR(USD_value) + CHFtoEUR(CHF_value))
    setTotalValue(totalValueEUR)
    setCurrencyUnits('EUR')
    setCurrencySymbol('€')
  }
  const handleTotalValueCHF = () => {

    setTotalValueCHF((CHF_value) + EURtoCHF(EUR_value) + USDtoCHF(USD_value))
    setTotalValue(totalValueCHF)
    setCurrencyUnits('CHF')
    setCurrencySymbol('₣')
  }

  // functions to convert between currencies with current exchange rates 
  const USDtoEUR = amount => {
    let USDtoEUR_rate = .91
    let result = amount * USDtoEUR_rate
    return result
  }
  const EURtoUSD = amount => {
    let EURtoUSD_rate = 1.09
    let result = amount * EURtoUSD_rate
    return result
  }

  const USDtoCHF = amount => {
    let USDtoCHF_rate = .88
    let result = amount * USDtoCHF_rate
    return result
  }

  const CHFtoUSD = amount => {
    let CHFtoUSD_rate = 1.14
    let result = amount * CHFtoUSD_rate
    return result
  }

  const EURtoCHF = amount => {
    let EURtoCHF_rate = .96
    let result = amount * EURtoCHF_rate
    return result
  }

  const CHFtoEUR = amount => {
    let CHFtoEUR_rate = 1.04
    let result = amount * CHFtoEUR_rate
    return result
  }



  // ADD, SEND, CONVERT functions


  const [showAddUSD, setShowAddUSD] = useState(false);
  const [showAddEUR, setShowAddEUR] = useState(false);
  const [showAddCHF, setShowAddCHF] = useState(false);
  const [showSend, setShowSend] = useState(false);
  const [showConvertUSD, setShowConvertUSD] = useState(false);
  const [showConvertEUR, setShowConvertEUR] = useState(false);
  const [showConvertCHF, setShowConvertCHF] = useState(false);



  const handleShowAddUSD = () => setShowAddUSD(true);
  const handleShowAddEUR = () => setShowAddEUR(true);
  const handleShowAddCHF = () => setShowAddCHF(true);
  const handleCloseAddUSD = () => setShowAddUSD(false);
  const handleCloseAddEUR = () => setShowAddEUR(false);
  const handleCloseAddCHF = () => setShowAddCHF(false);

  const handleShowSend = () => setShowSend(true);
  const handleCloseSend = () => setShowSend(false);


  const handleShowConvertUSD = () => setShowConvertUSD(true);
  const handleShowConvertEUR = () => setShowConvertEUR(true);
  const handleShowConvertCHF = () => setShowConvertCHF(true);
  const handleCloseConvertUSD = () => setShowConvertUSD(false);
  const handleCloseConvertEUR = () => setShowConvertEUR(false);
  const handleCloseConvertCHF = () => setShowConvertCHF(false);


  const [AmountUSD, setAmountUSD] = useState(0);
  const [AmountEUR, setAmountEUR] = useState(0);
  const [AmountCHF, setAmountCHF] = useState(0);

  const [USD_value, setUSD_value] = useState(500);
  const [EUR_value, setEUR_value] = useState(800);
  const [CHF_value, setCHF_value] = useState(1000);


  const handleAddUSDCurrency = (e) => {
    e.preventDefault()

    console.log('amount', AmountUSD)
    console.log('usd', USD_value)

    setUSD_value(Number(USD_value) + Number(AmountUSD))

    handleCloseAddUSD()
  }

  const handleAddEURCurrency = async (e) => {
    e.preventDefault()

    setEUR_value(Number(EUR_value) + Number(AmountEUR))

    handleCloseAddEUR()

  }
  const handleAddCHFCurrency = async (e) => {
    e.preventDefault()

    setCHF_value(Number(CHF_value) + Number(AmountCHF))

    handleCloseAddCHF()

  }

  // const handleSendCurrency = async () => {
  //   // this will open a modal saying we don't have function yet
  // }

  const handleConvertUSDtoEURCurrency = async (e) => {
    e.preventDefault()
    setUSD_value(USD_value - AmountUSD)
    setEUR_value(EUR_value + (USDtoEUR(AmountUSD)))
    handleCloseConvertUSD()
  }

  const handleConvertUSDtoCHFCurrency = async (e) => {
    e.preventDefault()
    setUSD_value(USD_value - AmountUSD)
    setCHF_value(CHF_value + (USDtoCHF(AmountUSD)))
    handleCloseConvertUSD()
  }

  const handleConvertEURtoUSDCurrency = async (e) => {
    e.preventDefault()
    setEUR_value(EUR_value - AmountEUR)
    setUSD_value(USD_value + (EURtoUSD(AmountEUR)))
    handleCloseConvertEUR()
  }
  const handleConvertEURtoCHFCurrency = async (e) => {
    e.preventDefault()
    setEUR_value(EUR_value - AmountEUR)
    setCHF_value(CHF_value + (EURtoCHF(AmountEUR)))
    handleCloseConvertEUR()
  }
  const handleConvertCHFtoUSDCurrency = async (e) => {
    e.preventDefault()
    setCHF_value(CHF_value - AmountCHF)
    setUSD_value(USD_value + (CHFtoUSD(AmountCHF)))
    handleCloseConvertCHF()
  }

  const handleConvertCHFtoEURCurrency = async (e) => {
    e.preventDefault()
    setCHF_value(CHF_value - AmountCHF)
    setEUR_value(EUR_value + (CHFtoEUR(AmountCHF)))
    handleCloseConvertCHF()
  }


  return (
    <>
      <Accordion defaultActiveKey="1" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <Col>
              Total Value: {currencySymbol}{totalValue} in {currencyUnits}
            </Col>
            <Col>
              <p className='details'>expand to view wallet total in other currencies</p>
            </Col>
          </Accordion.Header>
          <Accordion.Body>
            <ButtonGroup aria-label="Basic example">
              <ToggleButton
                id='USD'
                type="radio"
                variant="outline-primary"
                checked={checkedUSD}
                name='radio'
                onChange={(e) => setCheckedUSD(e.currentTarget.checked)}
                onClick={handleTotalValueUSD}
              >
                USD
              </ToggleButton>
            </ButtonGroup>
          </Accordion.Body>
          <Accordion.Body>
            <ButtonGroup aria-label="Basic example">
              <ToggleButton
                id='EUR'
                type="radio"
                variant="outline-primary"
                checked={checkedEUR}
                name='radio'
                onChange={(e) => setCheckedEUR(e.currentTarget.checked)}
                onClick={handleTotalValueEUR}
              >
                EUR
              </ToggleButton>
            </ButtonGroup>
          </Accordion.Body>
          <Accordion.Body>
            <ButtonGroup aria-label="Basic example">
              <ToggleButton
                id='CHF'
                type="radio"
                variant="outline-primary"
                checked={checkedCHF}
                name='radio'
                onChange={(e) => setCheckedCHF(e.currentTarget.checked)}
                onClick={handleTotalValueCHF}
              >
                CHF
              </ToggleButton>
            </ButtonGroup>
          </Accordion.Body>


        </Accordion.Item>
        <Container>

          <Row>
            <Accordion.Item eventKey='1'>
              <Accordion.Header>
                <Col >
                  <h5 className='currency-value'>${USD_value} USD</h5>
                  <p>US Dollars</p>
                </Col>
                <Col>
                  <p className='details'>expand for details</p>
                </Col>
              </Accordion.Header>

              <Accordion.Body className='accordian-body'>
                <Container>
                  <Row>
                    <Col className='account-info-left'>
                      <p>Account Name: {userData[0].user} </p>
                      <p>Bank Code: {userData[0].bankCode} </p>
                      <p>Address: {userData[0].address}</p>
                    </Col>
                    <Col className='account-info-right'>
                      <p>Account Number: {userData[0].accountNumber} </p>
                      <p>Wire Transfer Number: {userData[0].wireTransfer} </p>
                      <p>Routing Number: {userData[0].routingNumber}</p>
                      <a href='/faq'>Learn More</a>
                    </Col>
                  </Row>
                </Container>
                <Button id='add-btn' variant="info" onClick={handleShowAddUSD}> ADD USD</Button>{' '}
                <Modal show={showAddUSD} onHide={handleCloseAddUSD} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Currency in USD</Modal.Title>
                  </Modal.Header>
                  <Form.Control
                    type='number'
                    placeholder='enter value here'
                    onChange={(e) => setAmountUSD(e.currentTarget.value)}
                  />
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddUSD}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleAddUSDCurrency}>
                      Add USD
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='send-btn' variant="info" onClick={handleShowSend}>SEND USD</Button>{' '}
                <Modal show={showSend} onHide={handleCloseSend} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Send Currency</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Sorry, this action is not yet supported</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseSend}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseSend}>
                      Send Currency
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='convert-btn' variant="info" onClick={handleShowConvertUSD}>CONVERT USD</Button>{' '}
                <Modal show={showConvertUSD} onHide={handleCloseConvertUSD} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Convert Currency</Modal.Title>
                  </Modal.Header>
                  <Form.Control
                    type='number'
                    placeholder='enter value here'
                    onChange={(e) => setAmountUSD(e.currentTarget.value)}
                  />
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseConvertUSD}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleConvertUSDtoEURCurrency}>
                      Convert to EUR
                    </Button>
                    <Button variant="primary" onClick={handleConvertUSDtoCHFCurrency}>
                      Convert to CHF
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='more-btn' variant="info" href='/faq'>MORE</Button>{' '}

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='2'>
              <Accordion.Header>
                <Col >
                  <h5 className='currency-value'>€{EUR_value} EUR</h5>
                  <p>Euros</p>
                </Col>
                <Col>
                  <p className='details'>expand for details</p>
                </Col>
              </Accordion.Header>

              <Accordion.Body className='accordian-body'>
                <Container>
                  <Row>
                    <Col className='account-info-left'>
                      <p>Account Name: {userData[1].user} </p>
                      <p>Bank Code: {userData[1].bankCode} </p>
                      <p>Address: {userData[1].address}</p>
                    </Col>
                    <Col className='account-info-right'>
                      <p>Account Number: {userData[1].accountNumber} </p>
                      <p>Wire Transfer Number: {userData[1].wireTransfer} </p>
                      <p>Routing Number: {userData[1].routingNumber}</p>
                      <a href='/faq'>Learn More</a>
                    </Col>
                  </Row>
                </Container>
                <Button id='add-btn' variant="info" onClick={handleShowAddEUR}> ADD EUR</Button>{' '}
                <Modal show={showAddEUR} onHide={handleCloseAddEUR} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Currency in Euros</Modal.Title>
                  </Modal.Header>
                  <Form.Control
                    type='number'
                    placeholder='enter value here'
                    onChange={(e) => setAmountEUR(e.currentTarget.value)}
                  />
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddEUR}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleAddEURCurrency}>
                      Add Euros
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='send-btn' variant="info" onClick={handleShowSend}>SEND EUR</Button>{' '}
                <Modal show={showSend} onHide={handleCloseSend} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Send Euros</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Sorry, this action is not yet supported</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseSend}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseSend}>
                      Send Currency
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='convert-btn' variant="info" onClick={handleShowConvertEUR}>CONVERT EUR</Button>{' '}
                <Modal show={showConvertEUR} onHide={handleCloseConvertEUR} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Convert Currency</Modal.Title>
                  </Modal.Header>
                  <Form.Control
                    type='number'
                    placeholder='enter value here'
                    onChange={(e) => setAmountEUR(e.currentTarget.value)}
                  />
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseConvertEUR}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleConvertEURtoUSDCurrency}>
                      Convert to USD
                    </Button>
                    <Button variant="primary" onClick={handleConvertEURtoCHFCurrency}>
                      Convert to CHF
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='more-btn' variant="info" href='/faq'>MORE</Button>{' '}

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey='3'>
              <Accordion.Header>
                <Col >
                  <h5 className='currency-value'>₣{CHF_value} CHF</h5>
                  <p>Swiss Francs</p>
                </Col>
                <Col>
                  <p className='details'>expand for details</p>
                </Col>
              </Accordion.Header>

              <Accordion.Body className='accordian-body'>
                <Container>
                  <Row>
                    <Col className='account-info-left'>
                      <p>Account Name: {userData[2].user} </p>
                      <p>Bank Code: {userData[2].bankCode} </p>
                      <p>Address: {userData[2].address}</p>
                    </Col>
                    <Col className='account-info-right'>
                      <p>Account Number: {userData[2].accountNumber} </p>
                      <p>Wire Transfer Number: {userData[2].wireTransfer} </p>
                      <p>Routing Number: {userData[2].routingNumber}</p>
                      <a href='/faq' >Learn More</a>
                    </Col>
                  </Row>
                </Container>
                <Button id='add-btn' variant="info" onClick={handleShowAddCHF}> ADD CHF</Button>{' '}
                <Modal show={showAddCHF} onHide={handleCloseAddCHF} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Currency in CHF</Modal.Title>
                  </Modal.Header>
                  <Form.Control
                    type='number'
                    placeholder='enter value here'
                    onChange={(e) => setAmountCHF(e.currentTarget.value)}
                  />
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseAddCHF}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleAddCHFCurrency}>
                      Add CHF
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='send-btn' variant="info" onClick={handleShowSend}>SEND CHF</Button>{' '}
                <Modal show={showSend} onHide={handleCloseSend} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Send Currency</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Sorry, this action is not yet supported</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseSend}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseSend}>
                      Send Currency
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='convert-btn' variant="info" onClick={handleShowConvertCHF}>CONVERT CHF</Button>{' '}
                <Modal show={showConvertCHF} onHide={handleCloseConvertCHF} animation={false}>
                  <Modal.Header closeButton>
                    <Modal.Title>Convert Currency</Modal.Title>
                  </Modal.Header>
                  <Form.Control
                    type='number'
                    placeholder='enter value here'
                    onChange={(e) => setAmountCHF(e.currentTarget.value)}
                  />
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseConvertCHF}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleConvertCHFtoUSDCurrency}>
                      Convert to USD
                    </Button>
                    <Button variant="primary" onClick={handleConvertCHFtoEURCurrency}>
                      Convert to EUR
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Button id='more-btn' variant="info" href='/faq'>MORE</Button>{' '}

              </Accordion.Body>
            </Accordion.Item>
          </Row>
        </Container>
      </Accordion>

    </>

  );


}

export default AccountHolderCard;



