import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';

const toLowerCase1 = str => {
    return (
      str === "" || str === undefined ? "" : str.toLowerCase()
    );
  };

const OrderId = (cell) => {
    return (
        <Link to="#" className="text-body fw-bold">{cell.value ? cell.value : ''}</Link>
    );
};

const BillingName = (cell) => {
    return cell.value ? cell.value : '';
};

const Date = (cell) => {
    return cell.value ? cell.value : '';
};

const Total = (cell) => {
    return cell.value ? cell.value : '';
};

const PaymentStatus = (cell) => {
    return (
      <Badge pill color={(cell.value === "Paid" ? "primary" : "danger" && cell.value === "Refund" ? "secondary" : "orange")}>{cell.value}</Badge>
    )
};

export {
    OrderId,
    BillingName,
    Date,
    Total,
    PaymentStatus,
};
