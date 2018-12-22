import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: fit-content;
	height: fit-content;
`;

export default class Hover extends Component {
	state = { hovering: false };
	mouseOver = () => this.setState({ hovering: true });
	mouseOut = () => this.setState({ hovering: false });
	render() {
		return (
			<Container onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
				{this.props.render(this.state.hovering)}
			</Container>
		);
	}
}
