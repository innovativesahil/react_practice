import React, { Component } from 'react';
import {Row, Col, Container, } from 'reactstrap';
import {Bar , BarChart, Line, LineChart, ResponsiveContainer, Area, Cell,
    AreaChart, XAxis, YAxis, CartesianGrid, Label, Legend, Pie, 
    PieChart, Tooltip} from 'recharts';
import CustomizedAxisTick from './CustomizedAxisTick';
import CustomizedLabel from './CustomizedLabel';
import CustomPieLabel from './CustomPieLabel';

const rainData = [
    {Year: '1985', India: 3490, Srilanka: 4300 },
    {Year: '1990', India: 2390, Srilanka: 3800 },
    {Year: '1995', India: 4000, Srilanka: 2400 },
    {Year: '2000', India: 3000, Srilanka: 2620 },
    {Year: '2005', India: 2000, Srilanka: 3800 },
    {Year: '2010', India: 2780, Srilanka: 3908 },
    {Year: '2015', India: 1890, Srilanka: 4800 },
];

const graphData = [
    {name: 'Page A',pv: 2400, uv: 1000},
    {name: 'Page B', pv: 1398, uv: 2210},
    {name: 'Page C', pv: 9800, uv: 2290},
    {name: 'Page D', pv: 3908, uv: 2000},
    {name: 'Page E', pv: 4800, uv: 2181},
    {name: 'Page F', pv: 3800, uv: 2500},
    {name: 'Page G', pv: 4300, uv: 2100},
];

const pieData = [{name: 'Working', value: 30}, {name: 'Commuting', value: 7},
                    {name: 'Exercise', value: 8}, {name: 'Talking', value: 10},
                    {name: 'Eating', value: 10}, {name: 'Sleeping', value: 35}];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class ResponsiveChart extends Component {
    
    render() { 
        return ( 
            <Container >
                <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">
        
                    <Col sm={{ order: 2 }} lg={{ size : 12, order: 1 }} tag="aside" className="pb-5 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0">
                        <ResponsiveContainer width ="90%" aspect = {2}>
                            <LineChart data={rainData}
                                    margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                                <XAxis dataKey="Year" height = {60} tick = {<CustomizedAxisTick/>}/>
                                <YAxis name = "Annual Average Rainfall"/>
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip/>
                                <Legend />
                                <Line type="monotone" dataKey="India" stroke="#8884d8" activeDot={{r: 5}}/>
                                <Line type="monotone" dataKey="Srilanka" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </Col>
                    
                </Row>
                <Row noGutters className="pt-2 pt-md-5 w-100 px-4 px-xl-0 position-relative">

                    <Col sm={{ order: 2 }} lg={{ size : 6, order: 1 }} tag="aside" className="mb-5  mx-auto">
                        <ResponsiveContainer width = "100%" aspect = {1.5}>
                        <PieChart>
                            <Pie data={pieData} innerRadius={80} outerRadius={150}  paddingAngle = {3}
                                 labelLine={false} label = {CustomPieLabel} >
                            {
                                  pieData.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                            }
                            </Pie>
                            <Tooltip/>
                            <Legend />
                        </PieChart>
                        </ResponsiveContainer>
                    </Col>


                    <Col sm={{ order: 2 }} lg={{ size : 6, order: 1 }} tag="aside" className="mb-5  mx-auto">
                        <ResponsiveContainer width = "100%" aspect = {1.5}>
                        <BarChart  data={graphData}
                                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
                            <CartesianGrid strokeDasharray="3 3"/>
                            <XAxis dataKey="name" />
                            <YAxis/>
                            <Tooltip/>
                            <Legend />
                            <Bar dataKey="pv" fill="#0088FE" label = {<CustomizedLabel/>}/>
                            <Bar dataKey="uv" fill="#00C49F" />
                        </BarChart>
                        </ResponsiveContainer>
                    </Col>
                </Row>
            </Container>
         );
    }
}
 
export default ResponsiveChart;