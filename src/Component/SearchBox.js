import React from 'react';
import '../index.css';
//let isAHexCode=false;
let regex=/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

class SearchBox extends React.Component{	
	constructor(){
		super();
		this.state={
			hexCode:''
		}
	}
	validateHex = (event) =>{
	
	//console.log(event.target.value);
	//const regex=/^[0-9A-Fa-f]{7}$/;
	this.setState({
		hexCode:event.target.value
	})
	//console.log(isAHexCode , (event.target.value).startsWith("#"),(event.target.value).match(regex));
	//console.log('Function',this.state.isAHexCode);
	}
	render(){
		return(
	       <div id="box-div">
	       	<input type='text' placeholder='#C0FFEE' onChange={this.validateHex}/>
	       	<button disabled={!regex.test(this.state.hexCode)} onClick={() => this.props.newItem(this.state.hexCode,this.props.newCallback)}>
	       		{/*console.log('State changed')*/}
	       		Add Swatch
	       	</button>
	       	{/*console.log(this.state.isAHexCode)*/}
	       </div>
		);
	}
}
export default SearchBox;