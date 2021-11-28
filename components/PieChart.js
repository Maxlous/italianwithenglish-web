import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official";
import styled from "styled-components";
import useTheme from "@/hooks/useTheme";
import { lightTheme, darkTheme } from "../styles/themes";

if (typeof Highcharts === "object") {
  HighchartsExporting(Highcharts);
}

const PieChart = ({ wordStats }) => {
  const { theme } = useTheme();

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      backgroundColor: "none",
    },
    title: {
      text: "Stats for Words",
      style: {
        color: theme === "dark" ? darkTheme.fontColor : lightTheme.fontColor,
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
          format: "<b>{point.name}</b>: {point.percentage:.1f} %",
        },
      },
    },
    series: [
      {
        name: "Percentage",
        colorByPoint: true,
        data: [
          {
            name: "Correct Answers",
            y: wordStats?.correctAnswer,
            sliced: true,
            color: "var(--caribbeanGreen)",
          },
          {
            name: "Wrong Answers",
            y: wordStats?.wrongAnswer,
            sliced: true,
            color: "var(--redSalsa)",
          },
        ],
      },
    ],
  };
  return (
    <Wrapper>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Wrapper>
  );
};

export default PieChart;

const Wrapper = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
