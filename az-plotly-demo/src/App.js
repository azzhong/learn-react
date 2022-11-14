import logo from './logo.svg';
import './App.css';
import Plot from 'react-plotly.js';

function App() {
  const data = [
    {
      x: [1, 2, 3],
      y: [2, 6, 3],
      type: 'scatter',
      mode: 'lines+markers',
      marker: {color: 'red'},
    }
  ];

  const layout = {
    width: 640,
    height: 480,
    title: "Alfred's plotly + React Demo",
  };

  return (
    <Plot 
      data={data} 
      layout={layout}/>
  );
}

export default App;
