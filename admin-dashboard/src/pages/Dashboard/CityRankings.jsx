import { Card, CardBody, CardTitle, Progress } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CityRankings = () => {
  return (
    <>
      <Card>
        <CardBody>
          <CardTitle className="mb-4">Top Selling Cities</CardTitle>
          <div className="text-center">
            <div className="mb-4">
              <FontAwesomeIcon icon="fa-solid fa-location-dot" />
            </div>
            <h3>2,3951</h3>
            <p>Seattle</p>
          </div>

          <div className="table-responsive mt-4">
            <table className="table align-middle table-nowrap">
              <tbody>
                <tr>
                  <td style={{ width: "30%" }}>
                    <p className="mb-0">Seattle</p>
                  </td>
                  <td style={{ width: "25%" }}>
                    <h5 className="mb-0">1,456</h5>
                  </td>
                  <td>
                    <Progress
                      value="94"
                      color="primary"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-0">Houston</p>
                  </td>
                  <td>
                    <h5 className="mb-0">1,080</h5>
                  </td>
                  <td>
                    <Progress
                      value="82"
                      color="secondary"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="mb-0">San Francisco</p>
                  </td>
                  <td>
                    <h5 className="mb-0">1,112</h5>
                  </td>
                  <td>
                    <Progress
                      value="70"
                      color="danger"
                      className="bg-transparent progress-sm"
                      size="sm"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export default CityRankings
