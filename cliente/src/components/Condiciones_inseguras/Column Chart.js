import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ColumnChart extends React.Component {
		render() {
		const options = {
			title: {
				text: "Condiciones Inseguras"
			},
			animationEnabled: true,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "spline",
				dataPoints: [
					{ label: "Biologico",  y: 1  },
					{ label: "Desastre Natural", y: 3  },
					{ label: "Organico", y: 1  },
					{ label: "Espacio Confinado",  y: 1  },
					{ label: "Fisico",  y: 1  },
					{ label: "Seguridad",  y: 36  }
				]
			}
			]
		}
		
		return (
		<div>
			<h1>Tipo de Riesgo</h1>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default ColumnChart;