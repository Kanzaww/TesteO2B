import './App.css';
import ChartCard from './components/ChartCard'

function App() {
  return (
    <div className="App">

      <div className="cardsRow">
          <ChartCard tittle={"Tempo"} subTittle={"Médio"} />
          <div className="divider" />
          <ChartCard tittle={"Tempo"} subTittle={"Médio"} />
          <div className="divider" />
      </div>  

      <div className="cardsRow">
          <ChartCard tittle={"Tempo"} subTittle={"Médio"} />
          <div className="divider" />
          <ChartCard tittle={"Tempo"} subTittle={"Médio"} />
          <div className="divider" />
      </div>  


      <div className="cardsRow">
          <ChartCard tittle={"Tempo"} subTittle={"Médio"} />
          <div className="divider" />
          <ChartCard tittle={"Tempo"} subTittle={"Médio"} />
          <div className="divider" />
      </div>  
    </div>
  );
}



export default App;
