import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ColumnChart extends React.Component {
		render() {
		const options = {
			title: {
				text: "Numero de Incidentes por tipo"
			},
			animationEnabled: true,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "spline",
				dataPoints: [
					{ label: "ENV",  y: 3  },
					{ label: "FAC", y: 7  },
					{ label: "MTC", y: 9  },
					{ label: "NMC",  y: 29  }
					
				]
			}
			]
		}
		
		return (
		<div>
			<h1>Incidentes</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default ColumnChart;