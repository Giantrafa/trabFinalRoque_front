// src/pages/Dashboard.js
import React, { useState, useEffect } from 'react';
import ChartCard from '../components/ChartCard';
import { sampleData } from '../data/sampleData';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(sampleData.slice(0, 4)); // exibe 4 gráficos, por exemplo
  }, []);

  return (
    <div className="dashboard-grid">
      {data.map((item) => (
        <ChartCard key={item.id} data={item} />
      ))}
    </div>
  );
}

export default Dashboard;
