import React from 'react';
import '../index.css';
import SwatchList from './SwatchList';
import { connect } from 'react-redux';
import { setColor1, setColor2, setColor3 } from '../action';

let item=0;

let regex=/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

function initItems(cb) {
	const data = { 
		color1: "#FF0000", 
		color2: "#0000FF" 
		}
		setTimeout(()=>cb(data), 2000)
}

const mapStateToProps = (state) => {
	return{
		color1: state.color1,
		color2: state.color2,
		color3: state.color3
		}
}

const mapDispatchToProps = (dispatch) => {
	return {
		setcolor1: (payload) => dispatch(setColor1(payload)),
		setcolor2: (payload) => dispatch(setColor2(payload)),
		setcolor3: (payload) => dispatch(setColor3(payload)),
	}
}
    


class AddContainer extends React.Component{

	resultColor='';
	
	callback = (data) =>{
		this.props.setcolor1(data.color1)
		this.props.setcolor2(data.color2)
	}

	changeColor1 = (event)=> {
		item=1;

		if(regex.test(event.target.value))
			this.props.setcolor1(event.target.value)
		else
			this.props.setcolor1('')
	}

	changeColor2 = (event) => {
		item=1;

		if(regex.test(event.target.value))
			this.props.setcolor2(event.target.value)
		else
			this.props.setcolor2('')
	}

	setColor(color3){
		this.resultColor=color3;
	}

	add = (color1, color2) => {

		// if(color1.length === 4){
		// 	color1 = normalizeColor(color1);
		// }
	
		// if(color2.length === 4){
		// 	color2 = normalizeColor(color2);
		// }

		let color3 = '#';
		let i=1;
		
		while(i<7){
			color3 = color3.concat(
				(Math.floor(
					(parseInt(color1[i], 16) + parseInt(color2[i], 16))/2)
				).toString(16)
			);
			
			i++;
		}

		this.setColor(color3);

		return color3;
	}

	componentDidMount(){
		initItems(this.callback);
	}

	render(){

		if(!this.props.color1 && !this.props.color2 && !item){
			return(
				<div className='loading swatch'>Loading....</div>
			)
		}
		else{
			return(
				<div className='swatch'>
			
				<input className='reduce' type='text' placeholder='#FF0000' onChange={this.changeColor1}  />
				<span>+ </span>
				<input className='reduce' type='text' placeholder='#00FF000' onChange={this.changeColor2}  /> 
				<button
					disabled={!regex.test(this.resultColor)}
					onClick={() => this.props.newItem(this.resultColor,this.props.newCallback)}
				>
					Add Swatch
				</button>
				<SwatchList color1={this.props.color1} color2={this.props.color2} add={this.add}/>
				
				</div>
			)
		}
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(AddContainer);