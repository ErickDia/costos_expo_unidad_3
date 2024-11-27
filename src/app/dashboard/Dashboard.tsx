import LayoutDash from "../LayoutDash"
import { Chart } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, ArcElement, DoughnutController, CategoryScale, LinearScale, Tooltip, Legend, LineElement, PointElement, ChartData  } from "chart.js";
import { Card } from "@/components/ui/card";

ChartJS.register(
  BarElement,
  ArcElement,
  DoughnutController,
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

const doughnutData = {
  labels: ['Red', 'Blue', 'Yellow', 'Green'],
  datasets: [
    {
      label: 'Category Distribution',
      data: [20, 30, 25, 25],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
      borderWidth: 1
    }
  ]
};


function Dashboard() {
  

  return (
    <LayoutDash>
        <p>Bienvenido al panel de control.</p>
        <div className="flex justify-between pb-6">
          <Card className="w-[49%] max-h-[350px] p-10 flex justify-center p-10">
            <Chart type="bar" className="w-full"  data = {data} options = {{
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
          </Card>
          <Card className="w-[49%] max-h-[350px] flex justify-center p-10">
            <Chart
              type="doughnut" // Cambiar el tipo a doughnut
              data={doughnutData}
              // className="bg-slate-800"
              options={{
                plugins: {
                  legend: {
                    display: true,
                    position: 'top'
                  }
                }
              }}
            />
          </Card>
        </div>
        <div className="flex justify-between pb-10">
          <Card className="w-[49%] max-h-[350px] p-10 flex justify-center p-10">
            <Chart type="bar" className="w-full"  data = {data} options = {{
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
          </Card>
          <Card className="w-[49%] max-h-[350px] flex justify-center p-10">
            <Chart
              type="doughnut" // Cambiar el tipo a doughnut
              data={doughnutData}
              // className="bg-slate-800"
              options={{
                plugins: {
                  legend: {
                    display: true,
                    position: 'top'
                  }
                }
              }}
            />
          </Card>
        </div>
        
        
        
    </LayoutDash>
  )
}

export default Dashboard