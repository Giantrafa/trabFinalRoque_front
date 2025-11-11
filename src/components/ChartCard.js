import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

function ChartCard({ data }) {
  return (
    <div className="chart-card">
      <h3>{data.label}</h3>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data.values}>
          <XAxis dataKey="label" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
