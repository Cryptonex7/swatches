import React from 'react';
import '../index.css';
let regex=/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

class SearchBox extends React.Component{	

	constructor(){
		super();
		this.state={
			hexCode:''
		}
	}

	validateHex = (event) =>{
		this.setState({
			hexCode:event.target.value
		})
	}
	
	render(){
		return(
	       <div id="box-div">
	       	<input type='text' placeholder='#C0FFEE' onChange={this.validateHex}/>
	       	<button disabled={!regex.test(this.state.hexCode)} onClick={() => this.props.newItem(this.state.hexCode,this.props.newCallback)}>
	       		Add Swatch
	       	</button>
	       </div>
		);
	}
}
export default SearchBox;