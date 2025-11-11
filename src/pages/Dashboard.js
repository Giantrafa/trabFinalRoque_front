function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //link do banco de dados
    fetch('../data/sampleData')
      .then(res => res.json())
      .then(json => setData(json.slice(0, 4))) // garante 4 gráficos
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="dashboard-grid">
      {data.map((item) => (
        <ChartCard key={item.id} data={item} /> // cada gráfico recebe seu próprio item
      ))}
    </div>
  );
}
