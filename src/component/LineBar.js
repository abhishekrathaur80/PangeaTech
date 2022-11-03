import ReactECharts from 'echarts-for-react';
import '../App.css';

const LineBar = (props)=>{
    var option = {
    
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: props.productType
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['January', 'February', 'March', 'March', 'April', 'May', 'June','July','August','September','October','November','December']
        
        },
        yAxis: {
          type: 'value'
        },
        series: props.productType.map((product)=>{
             return {
              name: product,
              type: 'line',
              stack: 'Total',
              data: props.data.filter((item)=>{
                return item.product === product;
               }).map((item)=>{return item.revenue})
             }
        })
      };
    return (
   <div className='bar'>
    <ReactECharts
      option={option}
      style={{height:400}}
      opts={{renderer:'svg'}}
    />

   

   </div>
    )
}

export default LineBar;