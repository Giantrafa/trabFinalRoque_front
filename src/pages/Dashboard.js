// TODO: Aqui é onde o frontend deve chamar o backend
// para buscar os dados que serão exibidos nos gráficos

import ChartCard from "../components/ChartCard";
import { data1, data2, data3, data4 } from "../data/sampleData";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  Cell
} from "recharts";
import "../styles.css";

export default function Dashboard({ onLogout }) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <button onClick={onLogout} className="logout-btn">Sair</button>

      <div className="charts-grid">
        <ChartCard title="Gráfico de Linhas">
          <LineChart width={300} height={200} data={data1}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
            <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
          </LineChart>
        </ChartCard>

        <ChartCard title="Gráfico de Barras">
          <BarChart width={300} height={200} data={data2}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </ChartCard>

        <ChartCard title="Gráfico de Área">
          <AreaChart width={300} height={200} data={data3}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
          </AreaChart>
        </ChartCard>

        <ChartCard title="Gráfico de Pizza">
          <PieChart width={300} height={200}>
            <Pie
              data={data4}
              dataKey="value"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {data4.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ChartCard>
      </div>
    </div>
  );
}
