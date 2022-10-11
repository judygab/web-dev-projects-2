import { Card } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MetricsComp = () => {
  return (
    <Card className="my-2">
      <div className="text-center">
        <h5>Views</h5>
        <div className="d-flex justify-content-center">
          <h3 className="m-0">27,800</h3>
          <div className="d-flex align-items-end px-2">
            <FontAwesomeIcon icon="fa-solid fa-caret-up" color="green"/>
            <span className="text-success">12%</span>
          </div>
        </div>
        <span className="block text-secondary">Compared to last week</span>
        <table className="mt-6 w-100">
          <tbody>
            <tr>
              <td>Clicks</td>
              <td className="text-secondary">12,000</td>
            </tr>
            <tr>
              <td>Likes</td>
              <td className="text-secondary">4,032</td>
            </tr>
            <tr>
              <td>Other</td>
              <td className="text-secondary">1,200</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  )
}

export default MetricsComp;
