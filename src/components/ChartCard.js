// src/components/ChartCard.js
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

function ChartCard({ data }) {
  return (
    <div className="chart-card">
      <h3>{data.label}</h3>
      
      <ResponsiveContainer width="100%" height={250}>
        <BarChart 
          data={data.values} 
          margin={{ top: 20, right: 20, left: 10, bottom: 20 }}
        >
          <CartesianGrid stroke="#eee" strokeDasharray="5 5" />

          <XAxis dataKey="label" />
        
          <YAxis />

          <Tooltip content={() => null} />
          
          <Bar
            dataKey="value"
            fill="#8884d8"
            radius={[5, 5, 0, 0]}
            barSize={30}
            isAnimationActive={false}  
            activeShape={null}         
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartCard;
