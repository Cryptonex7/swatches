import React from 'react';

import '../index.css';
import { connect } from 'react-redux';
import { setColor3 } from '../action';


const mapStateToProps = (state) => {
	return {
		color1: state.color1,
		color2: state.color2,
		color3: state.color3
	}
  
}

const mapDispatchToProps = (dispatch) => {
	return {
		addColor: (payload) => dispatch(setColor3(payload))
	}
}

class SwachList extends React.Component{
	
	normalizeColor = (color) => {
		if( color.length === 4 ) {
			const tempSplit = color.split('');
			const copyColor = [];
			copyColor.push(tempSplit[0]);
			copyColor.push(tempSplit[1]);
			copyColor.push(tempSplit[1]);
			copyColor.push(tempSplit[2]);
			copyColor.push(tempSplit[2]);
			copyColor.push(tempSplit[3]);
			copyColor.push(tempSplit[3]);

			return copyColor.join('');
		}
		else return color;
	}
	
	TextColorGenerator = color => {
		const colorSplit = color.split('');
		let tempR = [];
		let tempG = [];
		let tempB = [];

		tempR.push( colorSplit[1]);
		tempR.push( colorSplit[2]);
		tempR = parseInt(tempR.join(''),16);
		

		tempG.push( colorSplit[3]);
		tempG.push( colorSplit[4]);
		tempG = parseInt(tempG.join(''),16);

		tempB.push( colorSplit[5]);
		tempB.push( colorSplit[6]);
		tempB = parseInt(tempB.join(''),16);

		let largest = Math.max(tempR, tempG, tempB);
	
		//for R
		if (largest === tempR ){
			if((tempG + tempB)/2 >= 170)
				return '#000000'
			else
				return '#FFFFFF'
		}

		//for G
		else if (largest === tempB ){
			if((tempB + tempR)/2 >= 170)
				return '#000000'
			else
				return '#FFFFFF'
		}

		//for B
		// else (tempG >= tempB && tempG >= tempR)
		else{
			if((tempR + tempG)/2 >= 170)
				return '#000000'
			else
				return '#FFFFFF'
		}
	}

	render(){

		let color = this.props.add(this.normalizeColor(this.props.color1), this.normalizeColor(this.props.color2));
		
		this.props.addColor(color);

		if(!this.props.color1 || !this.props.color2)
			color='';

		const styleObj1 = {
			background: this.props.color1,
			color: this.TextColorGenerator(this.normalizeColor(this.props.color1))
		}

		const styleObj2 = {
			background: this.props.color2,
			color: this.TextColorGenerator(this.normalizeColor(this.props.color2))
		}

		const styleObj3 = {
			background: color,
			color: this.TextColorGenerator(this.normalizeColor(this.props.color3))
		}

		const { color1, color2 } = this.props;
		return( 
		<div className="flex-center">
			<div className="card"  style={styleObj1} >
				{ (color1.length===4 || color1.length===7) && color1 }
			</div>
			<div className="card"  style={styleObj2} > 
				{ (color2.length===4 || color2.length===7) && color2 }
			</div>
			<div className="card"  style={styleObj3} >
				{ color.length===7 && isNaN(color) && color }
				</div>
		</div> 
		)
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SwachList);