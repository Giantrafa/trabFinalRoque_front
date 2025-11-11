function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    //link do banco de dados
    fetch('postgres://list:neQJUcWnaTA00N7BpMwQ6BlLiQPcrtbG@dpg-d456bi15pdvs73fj0km0-a.oregon-postgres.render.com:5432/to_do_list_neii')
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
