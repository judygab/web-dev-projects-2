import { Card } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactApexChart from "react-apexcharts";

const MetricsComp = () => {
  const series = [50, 34, 67, 95];

  const options = {
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: "22px",
        },
        value: {
          fontSize: "16px",
        },
        total: {
          show: true,
          label: "Total",
          formatter: function (w) {
            return 340;
          },
        },
      },
    },
  },

  labels: ["Computer", "Tablet", "Laptop", "Mobile"],
  colors: ["primary", "secondar", "orange"],
};

  return (
    <Card>
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
        <ReactApexChart
          options={options}
          series={series}
          type="radialBar"
          height="230"
          className="apex-charts"
        />
      </div>
    </Card>
  )
}

export default MetricsComp;
