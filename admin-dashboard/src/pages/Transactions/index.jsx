import { useMemo } from "react";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Card } from "reactstrap";
import {
  OrderId,
  BillingName,
  Date,
  Total,
  PaymentStatus,
} from "./TransactionColumn";
import { TableContainer } from "../../components/Common/TableContainer";
import { ordersData } from "../../data.js";

const Transactions = () => {
  const columns = useMemo(
    () => [
      {
        Header: "#",
        filterable: true,
        disableFilters: true,
        Cell: cellProps => {
          return <input type="checkbox" className="form-check-input" />;
        },
      },
      {
        Header: "Order ID",
        accessor: "id",
        filterable: true,
        disableFilters: true,
        Cell: cellProps => {
          return <OrderId {...cellProps} />;
        },
      },
      {
        Header: "Billing Name",
        accessor: "billingName",
        disableFilters: true,
        filterable: true,
        Cell: cellProps => {
          return <BillingName {...cellProps} />;
        },
      },
      {
        Header: "Date",
        accessor: "date",
        disableFilters: true,
        filterable: true,
        Cell: cellProps => {
          return <Date {...cellProps} />;
        },
      },
      {
        Header: "Total",
        accessor: "total",
        disableFilters: true,
        filterable: true,
        Cell: cellProps => {
          return <Total {...cellProps} />;
        },
      },
      {
        Header: "Payment Status",
        accessor: "status",
        disableFilters: true,
        filterable: true,
        Cell: cellProps => {
          return <PaymentStatus {...cellProps} />;
        },
      },
      // {
      //   Header: "View Details",
      //   disableFilters: true,
      //   accessor: "view",
      //   Cell: cellProps => {
      //     return (
      //       <Button
      //         type="button"
      //         color="primary"
      //         className="btn-sm btn-rounded"
      //         onClick={toggleViewModal}
      //       >
      //         View Details
      //       </Button>
      //     );
      //   },
      // },
    ],
    []
  );

  return (
    <>
      <Breadcrumbs
        title="Transactions"
        breadcrumbItem="Transactions"
        />
      <Card className="mt-3">
        <div className="mb-4 h4 card-title">All Transactions</div>
          <TableContainer
            columns={columns}
            data={ordersData}
            customPageSize={6}
          />
      </Card>
    </>
  )
}

export default Transactions;
