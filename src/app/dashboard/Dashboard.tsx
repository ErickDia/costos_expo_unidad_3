import LayoutDash from "../LayoutDash"
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, LineElement, PointElement, ChartData } from "chart.js";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  LineElement,
  PointElement
);

const data: ChartData<'bar' | 'line', number[], string> = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
    label: '# of Votes',
    data: [12, 19, 3, 5, 2, 3],
    type: 'bar',
    backgroundColor: 'rgba(75, 192, 192, 0.6)',
    borderWidth: 1
  },
  {
    label: '# of Votes (Line)',
    type: 'line', // Tipo de gráfico para este dataset
    data: [10, 15, 8, 6, 3, 3],
    borderColor: 'rgba(255, 99, 132, 1)',
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderWidth: 2,
    tension: 0, // Suaviza la curva de la línea
    pointRadius: 5 // Tamaño de los puntos en la línea
  }
]
}

function Dashboard() {
  

  return (
    <LayoutDash>
        <p>Bienvenido al panel de control.</p>
        <Chart type="bar"  data = {data} options = {{
              scales: {
                y: {
                  beginAtZero: true
                }
              },
              plugins: {
                legend: {
                  display: true,
                  position: 'top'
                }
              }
            }}/>
        
    </LayoutDash>
  )
}

export default Dashboard