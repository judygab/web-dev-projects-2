import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import CardComp from "./CardComp";

const Dashboard = () => {

  const reports = [
  { title: "Orders", iconClass: "bx-copy-alt", description: "1,235", percent: "+1.2" },
  { title: "Revenue", iconClass: "bx-archive-in", description: "$35, 723", percent: "-5" },
  {
    title: "Sales",
    iconClass: "bx-purchase-tag-alt",
    description: "$160,230",
    percent: "+20"
  },
];

  return (
    <>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs
            title="Admin"
            breadcrumbItem="Dashboard"
            />
          <Row>
            <Col xl="4">
              <CardComp />
            </Col>
            <Col xl="8">
              {reports.map((report, key) => (
                <Col md="4" key={"_col_" + key}>
                  <Card className="mini-stats-wid">
                    <CardBody>
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          <p className="text-muted fw-medium">
                            {report.title}
                          </p>
                          <h4 className="mb-0">{report.description}</h4>
                        </div>
                        <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                          <span className="avatar-title rounded-circle bg-primary">
                            <i
                              className={
                                "bx " + report.iconClass + " font-size-24"
                              }
                            ></i>
                          </span>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Dashboard;
