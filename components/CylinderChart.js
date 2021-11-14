import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import highcharts3d from "highcharts/highcharts-3d";
import cylinder from "highcharts/modules/cylinder";
import styled from "styled-components";
import useTheme from "@/hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/themes";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
  highcharts3d(Highcharts);
  cylinder(Highcharts);
}

const CylinderChart = ({ expressionStats }) => {
  const { theme } = useTheme();

  const options = {
    chart: {
      type: "cylinder",
      options3d: {
        enabled: true,
        alpha: 15,
        beta: 15,
        depth: 50,
        viewDistance: 25,
      },
      backgroundColor: "none",
    },
    title: {
      style: {
        color: theme === "dark" ? darkTheme.fontColor : lightTheme.fontColor,
      },
      text: "Stats for Expressions",
    },
    plotOptions: {
      series: {
        depth: 25,
        colorByPoint: false,
        dataLabels: {
          enabled: true,
          format: "<b>{point.name}</b>: {point.y}",
        },
      },
    },
    series: [
      {
        data: [
          {
            name: "Correct",
            y: expressionStats.correctAnswer,
            color: "var(--caribbeanGreen",
          },
          {
            name: "Wrong",
            y: expressionStats.wrongAnswer,
            color:
              theme === "dark"
                ? darkTheme.headerBackground
                : lightTheme.headerBackground,
          },
          {
            name: "Sum",
            y: expressionStats.answerSum,
            color: "var(--redSalsa)",
          },
        ],
        name: "Quantity",
        showInLegend: false,
      },
    ],
  };
  return (
    <Wrapper>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Wrapper>
  );
};

export default CylinderChart;

const Wrapper = styled.div`
  width: 50%;
`;
