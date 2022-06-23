import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import moment from "moment";

import './styles.css';

const dateFormatter = (item) => moment(item).format("MMM YY");

function App() {
    const data = [
      {
        x: '2022-01-01',
        y: 10
      },
      {
        x: '2022-02-01',
        y: 19
      },
      {
        x: '2022-03-01',
        y: 48 
      },
      {
        x: '2022-04-01',
        y: 15
      }
    ];

    return (
      <div class="App">
        <h1>Recharts Demo</h1>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="x" tickFormatter={dateFormatter} />
            <YAxis />
            <Tooltip labelFormatter={dateFormatter} />
            <Bar dataKey="y" fill="rgba(106, 110, 229)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
}

export default App;
