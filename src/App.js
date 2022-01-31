import './App.css';
import ChartCard from './components/ChartCard/ChartCard'
import {timeToEmitNF, timePerStage, optionsTimePerStage, amountNFpending, topUnity, amountErrors, averageTimePerHour,optionsAverageTimePerHour } from './helper'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function App() {   
  return (
    <div className="App">
      <head>
        <tittle> Home | Analytics O2B</tittle>
      </head>
      

      <Header
       tittle={"Analytics"}
       />
      
       

      <div className="cardsRow">
          <ChartCard 
            tittle={"TEMPO MÉDIO PARA EMISSÃO DE NF"} 
            subTittle={"Últimos 30 minutos"} 
            chartData={timeToEmitNF} 
            number1={"14,5%"} 
            number2={"1:08"} 
            chartType={"ColumnChart"}
          />

          <div className="divider" />
          <ChartCard
            tittle={"TEMPO MÉDIO POR ETAPA"} 
            subTittle={"Últimas 3 horas"} 
            chartData={timePerStage}
            chartType={"AreaChart"}
            options={optionsTimePerStage} 
            flex={2}
          />
            <div className="divider" />
            
      </div>  

      <div className="cardsRow">
          <ChartCard 
            tittle={"QUANTIDADE DE NF PENDENTES DE EMISSÃO"} 
            subTittle={"Últimos 7 dias, agrupados por dia"}
            chartData={amountNFpending}
            chartType={"ColumnChart"}
             />

          <div className="divider" />
          <ChartCard 
            tittle={"TOP 10 UNIDADES COM MAIOR TEMPO PARA EMISSÃO NF"} 
            subTittle={"Últimos 30 minutos"}
            chartData={averageTimePerHour}
            options={optionsAverageTimePerHour} 
            chartType={"BarChart"}
             />
          <div className="divider" />
      </div>  


      <div className="cardsRow">    
      <ChartCard 
            tittle={"TOP 10 UNIDADES COM MAIOR TEMPO PARA EMISSÃO NF"} 
            subTittle={"Últimos 30 minutos"}
            chartData={topUnity}
            chartType={"ColumnChart"}
            />
            
            <div className="divider" />
            <ChartCard 
            tittle={"QUANTIDADE DE ERROS NO SEFAZ"} 
            subTittle={"Últimos 7 dias, agrupado por dia"}
            chartData={amountErrors}
            chartType={"ColumnChart"}
             />
          <div className="divider" />
      </div>  
      <Footer />;

    </div>

  
  );
}



export default App;


