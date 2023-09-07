import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

//inicializar la libreria para generar graficos de barras//
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const Chart = ({ chartData }) => {
  return (
    <>
      <Bar
        data={chartData}
        options={{
          title: {
            display: true,
            text: 'Categoria',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      ></Bar>
    </>
  );
};
