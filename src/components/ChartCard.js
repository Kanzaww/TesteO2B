import "./ChartCard.css"

function ChartCard(props) {
  return (
    <div className="container">
    <h2>{props.tittle}</h2> 
    <h4>{props.subTittle}</h4>
    </div>
    )
}
export default ChartCard;