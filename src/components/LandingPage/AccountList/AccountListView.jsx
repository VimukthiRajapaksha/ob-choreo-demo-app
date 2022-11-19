import React from 'react'
import '../../../css/LandingPage.css'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AccountData from "../../../data/AccountData.json";
import {Button} from "react-bootstrap";

export const AccountListView = () => {

  return(
    <Container className = "home-container">
      <Row>
        {accountDataConstant}
        <Col>
          <div className="account-list-button">
            <Row>
              <i className="bi bi-plus-square plus-icon" onClick={showAlert}></i>
            </Row>
            <Row>
              <Button onClick={showAlert} className="new-bank-button">Add a new bank</Button>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

const showAlert = () => {
    alert("Redirecting");
}

const accountDataConstant = AccountData.map((data,id)=>{
  return (
    <Col key={id}>
      <div className="account-list-view">
        <Row className="account-detail-view">
          <Col xs={10} className="no-padding-element text-align-left">
            <h6 className="font-size-small font-color-orange">{data.display_name}</h6>
            <div className="font-size-small font-color-dark">{data.account_id}</div>
          </Col>
          <Col className="no-padding-element text-align-right"><i className="bi bi-bank font-color-dark"></i></Col>
        </Row>
        <div className="account-detail-view font-color-dark">{data.balance}</div>
      </div>
    </Col>
  )
})
