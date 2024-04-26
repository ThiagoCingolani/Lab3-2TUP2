import './App.css'
import Table from './practice_2/Table.jsx';

const netIncomes =
  [{ brand: "´McDonalds´", income: 1291283 },
  { brand: "Burger King", income: 1927361 },
  { brand: "‘KFC’", income: 1098463 }];

const averageIncomes = netIncomes.reduce((acc, el) => acc + el.income / netIncomes.length, 0);

function App() {

return (
  <div>
    <tr>
      <th>Marca</th>
      <th>Ingreso Neto</th>
    </tr>
    {netIncomes.map((netIncome, i) => (
      <Table
        key={i}
        brand={netIncome.brand}
        income={netIncome.income}
      />
    ))}
    <p>Promedio del Ingreso Neto: ${averageIncomes.toFixed(2)}</p>
  </div>
)
}

export default App