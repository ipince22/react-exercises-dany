import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; //we use ReactDOM to render into the DOM

// only update the value of this array
const navlinkItems = ["google", "face", "insta"];
const content = navlinkItems.map((item, index) => {
	return <li key={index}>{item}</li>;
});

ReactDOM.render(<ul>{content}</ul>, document.querySelector("#myDiv"));
