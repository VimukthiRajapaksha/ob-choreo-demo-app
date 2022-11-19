import React, {useState} from 'react';
import '../../../css/LandingPage.css'
import Container from "react-bootstrap/Col";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Button, Offcanvas} from "react-bootstrap";

export const MainAccDetailView = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <Container className = "main-acc-container">
      <Row className="row-padding">
        <Col>
          <Row className="font-size-small font-color-orange">Main Account</Row>
          <Row className="font-size-medium font-color-dark">Test Savings Account</Row>
          <Row className="font-size-small font-color-grey">4567 **** **** 1234</Row>
          <Row>
            <Button onClick={handleShow} variant="primary" className="btn-grey transfer-button">Transfer Money</Button>

            <Offcanvas show={show} onHide={handleClose} placement='end' className="home-container">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Fund Transfer</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <MoneyTransferForm />
              </Offcanvas.Body>
            </Offcanvas>
          </Row>
        </Col>
        <Col>
          <Row className="font-size-small font-color-orange">Available Funds</Row>
          <Row className="font-size-medium font-color-dark">$123,456.78</Row>
        </Col>
      </Row>
    </Container>
  )
}

export const MoneyTransferForm = () => {
  return (
    <div>
      <form className="money-transfer-form">
        <div className="money-transfer-form-fields font-size-small">
          <Row>
            <label className="font-color-orange"> Bank Name:</label>
          </Row>
          <Row>
            <input type="text" name="name" />
          </Row>
        </div>
        <div className="money-transfer-form-fields font-size-small">
          <Row>
            <label className="font-color-orange"> Account Name:</label>
          </Row>
          <Row>
            <input type="text" name="name" />
          </Row>
        </div>
        <div className="money-transfer-form-fields font-size-small">
          <Row>
            <label className="font-color-orange"> Account Number:</label>
          </Row>
          <Row>
            <input type="text" name="name" />
          </Row>
        </div>
        <div className="money-transfer-form-fields font-size-small">
          <Row>
            <label className="font-color-orange"> Amount:</label>
          </Row>
          <Row>
            <input type="text" name="name" />
          </Row>
        </div>
        <div className="money-transfer-form-fields font-size-small">
          <Row>
            <label className="font-color-orange">Reference:</label>
          </Row>
          <Row>
            <input type="text" name="name" />
          </Row>
        </div>
        <div>
          <input type="submit" className="btn-grey submit-btn" value="Submit" />
        </div>
      </form>
    </div>
  )
}


