import React, { Component } from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ColumnChart extends Component {
		render() {
		const options = {
			title: {
				text: "Enfermedades Profesionales por Tipo de Trabajador"
			},
			animationEnabled: true,
			data:	 [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				    	type: "spline",
			      		dataPoints: [
						{ label: "Ayudante",  y: 8  },
						{ label: "Conductor", y: 1  },
						{ label: "Coordinador", y: 4  },
						{ label: "Director",  y: 5  },
						{ label: "Oficial",  y: 10  },
						{ label: "Operador",  y: 8  },
						{ label: "Profesional", y: 10 },
						{ label: "Supervisor", y: 4  }
						]
			}
					]
		}
		
		return (
		<div>
			<h1>Salud Ocupacional</h1>
			<CanvasJSChart options = {options} 
			onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default ColumnChart;