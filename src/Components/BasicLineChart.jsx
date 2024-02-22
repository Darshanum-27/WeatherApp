import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';


export default function BasicLineChart(props) {
  const uData = props.data.slice(0,24);
const pData = props.data.slice(0,24);;
const xLabels = [17,18,19,20,21,22,23,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
  return (
    <LineChart
      width={500}
      height={300}
      series={[
        { data: pData},
        { data: uData},
      ]}
      xAxis={[{ scaleType: 'point', data: xLabels }]}
    />
  );
}