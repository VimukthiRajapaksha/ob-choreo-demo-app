import React from 'react'
import {Accordion, Card, Table} from "react-bootstrap";
import Container from "react-bootstrap/Col";
import TransactionData from "../../../data/TransactionData.json";
import Col from "react-bootstrap/Col";

export const TransactionListView = () => {
  return (
    <Container className = "transaction-list-container">
      <h5>Recent Transactions</h5>
      <Accordion>
        <Card className="transaction-list-card">
          {transactionDataConstant}
        </Card>
      </Accordion>
    </Container>
  );
}

const transactionDataConstant = TransactionData.map((data,id)=>{
  const date = data.ValueDateTime.split("T")[0];
  return (
    <Accordion.Item eventKey={id} key={id}>
      <Accordion.Header>
        <Col className="font-size-small font-color-dark">{date}</Col>
        <Col className="font-size-small font-color-orange">{data.TransactionReference}</Col>
        <Col className="font-size-small font-color-dark">{data.CreditDebitIndicator}</Col>
        <Col className="font-size-small font-color-orange">{data.Amount.Currency}{data.Amount.Amount}</Col>
      </Accordion.Header>
      <Accordion.Body>
        <Table striped bordered hover>
          <tbody>
          <tr>
            <td className="font-size-small font-color-dark">Transaction Id</td>
            <td className="font-size-small font-color-dark">{data.TransactionId}</td>
          </tr>
          <tr>
            <td className="font-size-small font-color-dark">Account Id</td>
            <td className="font-size-small font-color-dark">{data.AccountId}</td>
          </tr>
          <tr>
            <td className="font-size-small font-color-dark">Transaction Information</td>
            <td className="font-size-small font-color-dark">{data.TransactionInformation}</td>
          </tr>
          </tbody>
        </Table>
      </Accordion.Body>
    </Accordion.Item>
  )
})