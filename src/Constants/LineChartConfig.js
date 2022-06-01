const LineChartConfig = {
  type: 'line',
  data: {
    labels: null,
    datasets: null
  },
  options: {
    hover: {mode: null},
    responsive: true,
    interaction: {
      intersect: false
    },
    plugins: {
      legend: false,
      tooltip: {
        position: 'nearest'
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        }
      }
    }
  }
}
export default LineChartConfig;
