import "./ChartCard.css"
import {Chart} from "react-google-charts"

function ChartCard(props) {
  return (
    <div className="container" style={{ flex: props.flex || 1 }} >
      <div>
        <h2 >{props.tittle}</h2> 
        <h4 >{props.subTittle}</h4>
        
        {props.number1 && 
        <div>
          <div className="infos">
            <div href="#" class="seta-cima"/>
            <h4 className="number1">{props.number1}</h4>            
          </div>

          <h1 className="number2">{props.number2}</h1>
        </div>
         }
       </div>
    
      <Chart chartType={props.chartType} width="95%" height="240" data={props.chartData} options={props.options}/>
    </div>
  
    )  
}
export default ChartCard;
