import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Card } from "reactstrap";

const Transactions = () => {
  return (
    <>
      <Breadcrumbs
        title="Transactions"
        breadcrumbItem="Transactions"
        />
      <Card>
        <div className="mb-4 h4 card-title">Transactions</div>
      </Card>
    </>
  )
}

export default Transactions;
