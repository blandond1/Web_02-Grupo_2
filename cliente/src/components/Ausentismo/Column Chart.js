import React from 'react';
import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class ColumnChart extends React.Component {
		render() {
		const options = {
			title: {
				text: "Dias Totales por Trabajador"
			},
			animationEnabled: true,
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "spline",
				dataPoints: [
					{ label: "Ayudante",  y: 10  },
					{ label: "Oficial", y: 15  },
					{ label: "Profesional", y: 25  },
					{ label: "Supervisor",  y: 30  },
					{ label: "Administrativo",  y: 17  },
					{ label: "Contratista",  y: 3  },
					{ label: "Visitante",  y: 50  },
					{ label: "Administrativo",  y: 8  },
					{ label: "Director",  y: 44  }
				]
			}
			]
		}
		
		return (
		<div>
			<h1>Graficas de Ausentismo</h1>
			<CanvasJSChart options = {options} 
			onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

export default ColumnChart;