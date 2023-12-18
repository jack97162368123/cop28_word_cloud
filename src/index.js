import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Assuming you have some global styles defined here
import WordCloudComponent from './WordCloudComponent'; // Import your component

ReactDOM.render(
  <WordCloudComponent />, // The component you want to render
  document.getElementById('root') // Assuming your HTML has a div with id 'root'
);
