import React from 'react'
import {Accordion, Card, Table} from "react-bootstrap";
import TransactionData from "../../../data/TransactionData.json";
import { SkeletonTransaction } from './SkeletonTransaction';
import { useState, useEffect } from "react";
import { getTransactions } from '../../../services/transaction-service';
import { CONSTANTS } from '../../../services/utils';

export const TransactionListView = () => {
  
  const [transactions, setTransactions] = useState(TransactionData);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // get user access token to session storage
    const user_access_token = sessionStorage.getItem(CONSTANTS.user_access_token);
    if (user_access_token) {
      setLoading(true);
      transactions.pop();

      getTransactions(user_access_token).then(resp => {
        console.log("fetching transactions data")
        transactions.push(resp.data.Data?.Transaction[0])
        setLoading(false);
      }).catch(err => console.log(err));
    }
  }, [transactions])

  const transactionDataConstant = loadTransactionsView(transactions);

  return (
    <div className = "transaction-list-container">
      <h5>Recent Transactions</h5>
      <Accordion>
        <Card className="transaction-list-card">
          {transactionDataConstant}
          {loading && <SkeletonTransaction />}
        </Card>
      </Accordion>
    </div>
  );
}

const loadTransactionsView = (transactions) => {

  return transactions.map((transaction,id)=>{
    const date = transaction.ValueDateTime.split("T")[0];
    const logoPath = '/bank_logos/' + transaction.ProprietaryBankTransactionCode.Issuer + '.svg';
    return (
      <Accordion.Item eventKey={id} key={id}>
        <Accordion.Header className="transaction-list">
          <div className="col font-size-small font-color-dark">
            <img src={logoPath} alt="" className="img-fluid rounded-circle img-thumbnail transaction-view-logo" />
          </div>
          <div className="col font-size-small font-color-dark">{date}</div>
          <div className="col font-size-small font-color-orange">{transaction.TransactionReference}</div>
          <div className="col font-size-small font-color-dark">{transaction.CreditDebitIndicator}</div>
          <div className="col font-size-small font-color-orange">{transaction.Amount.Currency}{transaction.Amount.Amount}</div>
        </Accordion.Header>
        <Accordion.Body>
          <Table striped bordered hover>
            <tbody>
            <tr>
              <td className="font-size-small font-color-dark">Transaction Id</td>
              <td className="font-size-small font-color-dark">{transaction.TransactionId}</td>
            </tr>
            <tr>
              <td className="font-size-small font-color-dark">Account Id</td>
              <td className="font-size-small font-color-dark">{transaction.AccountId}</td>
            </tr>
            <tr>
              <td className="font-size-small font-color-dark">Transaction Information</td>
              <td className="font-size-small font-color-dark">{transaction.TransactionInformation}</td>
            </tr>
            </tbody>
          </Table>
        </Accordion.Body>
      </Accordion.Item>
    )
  });
}