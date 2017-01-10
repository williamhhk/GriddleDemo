var React = require('react');
var ReactDOM = require('react-dom');
var RootFrame = require('./RootFrame.jsx');
var styles = require('./style.css');

ReactDOM.render(
    <RootFrame UrlPost={'Home/SaveData'} />,
    document.getElementById("root")
);



