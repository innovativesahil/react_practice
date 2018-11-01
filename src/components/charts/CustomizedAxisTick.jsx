import React, { Component } from 'react';

class CustomizedAxisTick extends Component {
    // Use this component when you want the axis tick to be tilted by 40 degrees
    render() { 
            const {x, y, stroke, payload} = this.props;
          
            return (
             <g transform={`translate(${x},${y})`}>
             <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-40)">{payload.value}</text>
           </g>
         );
    }
}
export default CustomizedAxisTick;