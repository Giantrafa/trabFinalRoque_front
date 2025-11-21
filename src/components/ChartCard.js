// src/components/ChartCard.js
import { 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, LabelList 
} from 'recharts';

function ChartCard({ data }) {
  return (
    <div className="chart-card">
      <h3>
        {data.label}
        {" "}
        <span style={{ fontSize: "14px", color: "#666" }}>          
        </span>
      </h3>
      
      <ResponsiveContainer width="100%" height={250}>
        <BarChart 
          data={data.values} 
          margin={{ top: 20, right: 20, left: 10, bottom: 20 }}
        >
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />

          <XAxis dataKey="label" />

          {/* Formata os números do eixo Y com vírgula */}
          <YAxis 
            tickFormatter={(value) => value.toLocaleString("pt-BR")}
          />

          <Tooltip
            formatter={(value) => value.toLocaleString("pt-BR")}
          />

          <Bar
            dataKey="value"
            fill="#8884d8"
            radius={[5, 5, 0, 0]}
            barSize={30}
            isAnimationActive={false}
            activeShape={null}
          >
            {/* Mostra o valor em cima da barra */}
            <LabelList
              dataKey="value"
              position="top"
              formatter={(value) => value.toLocaleString("pt-BR")}
              style={{ fontSize: 12, fill: "#333" }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartCard;
