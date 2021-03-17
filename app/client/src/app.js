import React from "react";
import ReactDOM from "react-dom";
import { Test } from "./components/test";

class App extends React.Component {
	render() {
		return (
			<div>
				<span>Hello {this.props.name}</span>
				<Test />
			</div>
		);
	}
}

const mountNode = document.getElementById("root");

ReactDOM.render(<App name="Blah Black" />, mountNode);