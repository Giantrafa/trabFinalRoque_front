import sampleData from '../data/sampleData';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(sampleData.slice(0, 4));
  }, []);

  return (
    <div className="dashboard-grid">
      {data.map((item) => (
        <ChartCard key={item.id} data={item} />
      ))}
    </div>
  );
}
