import React from 'react'
import {PieChart, Pie, Cell} from 'recharts';
import ExpenseData from "../../../data/ExpenseData.json";
import Container from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {ListGroup} from "react-bootstrap";

export const ExpenseView = () => {

  const colorScheme = [
    '#ffc808',
    '#ff7300',
    '#f0a87d',
    '#E79363',
    '#EEE10D',
    '#D9B991'
  ]

  return (
    <Container className = "transaction-list-container">
      <h5>All Expenses</h5>
      <Row>
        <Col>
          <div className="font-size-small font-color-orange">Daily</div>
          <div className="font-size-small font-color-dark">$123.67</div>
        </Col>
        <Col>
          <div className="font-size-small font-color-orange">Weekly</div>
          <div className="font-size-small font-color-dark">$423.83</div>
        </Col>
        <Col>
          <div className="font-size-small font-color-orange">Monthly</div>
          <div className="font-size-small font-color-dark">$1237.01</div>
        </Col>
      </Row>
      <div className="row-padding font-size-small font-color-orange">Last Month</div>
      <div className="pie-chart-view">
        <Col xs={8}>
          <PieChart width={150} height={150}>
            <Pie data={ExpenseData} dataKey="students" outerRadius={75}>
              {
                ExpenseData.map((entry, index) => <Cell key={index} fill={colorScheme[index % colorScheme.length]}/>)
              }
            </Pie>
          </PieChart>
        </Col>
        <Col>
          <ListGroup>
            {
              ExpenseData.map((entry, index) =>
                <ListGroup.Item key={index} className="expense-list-view font-size-small font-color-dark">
                  <i className="bi bi-square-fill expense-list-icon"
                     style={{color:colorScheme[index % colorScheme.length]}}>
                  </i>
                  {entry.name}
                </ListGroup.Item>
              )
            }
          </ListGroup>
        </Col>
      </div>
    </Container>
  );
}