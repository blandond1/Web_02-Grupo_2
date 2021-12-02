import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ColumnChart extends React.Component {
		render() {
		const options = {
			title: {
				text: "Indice Frecuencia por sedes"
			},
			animationEnabled: true,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "spline",
				dataPoints: [
					{ label: "Barranquilla",  y: 3  },
					{ label: "Bogota", y: 6  },
					{ label: "Bucaramanga", y: 5  },
					{ label: "Cali",  y: 2  },
					{ label: "Cartagena", y: 4 },
					{ label: "Centro",  y: 5  },
					{ label: "Cucuta", y: 5  },
					{ label: "Manizales", y: 6  },
					{ label: "Medellin",  y: 4  },
					{ label: "Sogamoso", y: 6 },
					{ label: "Tolu", y: 5 },
				]
			}
		]
		}
		
		return (
		<div>
			<h1>Desempeño general</h1>
			<CanvasJSChart options = {options} 
			onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default ColumnChart;