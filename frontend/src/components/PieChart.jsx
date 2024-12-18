import React from "react";
import Chart from "react-apexcharts";

const chartConfig = {
  type: "pie",
  height: 400,
  series: [1000000, 800000, 1200000, 1100000, 1400000, 1000000, 600000],
  options: {
    chart: {
      toolbar: {
        show: false,
      },
    },
    labels: [
      "Sosial",
      "Lingkungan",
      "Kesehatan",
      "Pendidikan",
      "Infrastruktur dan lingkungan",
      "Sarana dan prasarana keagamaan",
      "Lainnya",
    ],
    colors: [
      "#1E88E5",
      "#3949AB",
      "#8E24AA",
      "#D81B60",
      "#E53935",
      "#FB8C00",
      "#FDD835",
    ],
    dataLabels: {
      enabled: false,
      formatter: function (val) {
        return "Rp. " + val.toLocaleString();
      },
      style: {
        colors: ["#000000"],
        fontSize: "14px",
      },
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "Rp. " + val.toLocaleString();
        },
      },
      theme: "dark",
    },
    legend: {
      position: "right",
      show: true,
      fontSize: "15px",
      horizontalAlign: "center",
    },
    plotOptions: {
      pie: {
        donut: {
          size: "65%", // Ukuran donut
        },
      },
    },
    grid: {
      show: false,
    },
  },
};

export default function Pie() {
  return (
    <div className="">
      <p className="text-xl pb-10 pt-5 font-bold">
        Persentase total realisasi berdasarkan sektor CSR
      </p>
      <Chart
        options={chartConfig.options}
        series={chartConfig.series}
        type="pie"
        height={500}
        width={600}
      />
    </div>
  );
}
