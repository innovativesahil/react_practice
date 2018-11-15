import React, { Component } from 'react';

class CustomizedLabel extends Component {

    render() { 
        const { x, y, width, height, value } = this.props;
        const radius = 10;

        return (
            <g>
            {/* <ellipse cx={x + width / 2} cy={y - radius} fx/> */}
            <circle cx={x + width / 2} cy={y - radius} r={radius} fill="#FF8042" />
            <text x={x + width / 2} y={y - radius} fill="#fff" textAnchor="middle" dominantBaseline="middle">
                {value.toString().split(' ')[0]}
            </text>
            </g>
        );
    }
}
 
export default CustomizedLabel;