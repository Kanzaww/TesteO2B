import "./ChartCard.css"
import {Chart} from "react-google-charts"


function ChartCard(props) {
  return (
    <div className="container">
      <div>
        <h2>{props.tittle}</h2> 
        <h4>{props.subTittle}</h4>
        
        {props.number1 && 
          <div>
            <a href="#" class="seta-cima"></a>
            <h4 className="number1">{props.number1}</h4>
            <h1 className="number2">{props.number2}</h1>
          </div>
         }
       </div>
    
      <Chart chartType={props.chartType} width="85%" height="240px" data={props.chartData} options={props.options}/>
    </div>
  
    )  
}
export default ChartCard;