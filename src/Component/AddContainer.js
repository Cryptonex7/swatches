import React from 'react';
import '../index.css';
import SwatchList from './SwatchList';
let item=0;
let regex=/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
function initItems(cb) {
    const data = [
        { color1: "#FF0000", color2: "#00FF000" },
    ];
    setTimeout(()=>cb(data), 2000)
}
function newItem(color1,color2, cb) {
    const data = {
        color1: color1,
        color2: color2
    };
    item++;
    setTimeout(()=>cb(data), 500);
}
class AddContainer extends React.Component{
  constructor(){
    super();
    this.state={
      swatchesAdd:[
        {
          color1:'',
          color2:'',
        }
      ],
      color1:'',
      color2:'',
    }
  }
  componentDidMount(){
    initItems(this.callback);
  }
  callback = (data) =>{
    this.setState({
      swatchesAdd:[...data]
    });
  }
  changeColor1 = (event)=> {
    this.setState({
      color1:event.target.value
    })
  }
  changeColor2 = (event) => {
    this.setState({
      color2:event.target.value
    })
  }  
  render(){
    
    {console.log('Render',this.state.swatchesAdd[item])}
    if(!this.state.swatchesAdd[0].color1 && !this.state.swatchesAdd[0].color2){
      return(
             <div className='loading swatch'>Loading...</div>
      )
    }
    else{
      {
        console.log('Addition',this.state.swatchesAdd[item]);
        console.log('Add',regex.test(this.state.swatchesAdd[item].color1));
      }
      return(
          <div className='swatch'>
            <input className='reduce' type='text' placeholder='#FF0000' onChange={this.changeColor1} />+ 
            <input className='reduce' type='text' placeholder='#00FF000' onChange={this.changeColor2}/> 
            <button disabled={!regex.test(this.state.swatchesAdd[item].color1) && !regex.test(this.state.swatchesAdd[item].color2)}>
              Add Color
            </button>
          </div>
      )
    }
  }
}
export default AddContainer;