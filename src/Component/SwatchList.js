import React from 'react';
import '../index.css';

class SwachList extends React.Component{

  render(){

    let color = this.props.add(this.props.color1, this.props.color2);
    if(!this.props.color1 || !this.props.color2)
      color='';
    const styleObj1={
      background:this.props.color1
    }
    const styleObj2={
      background:this.props.color2
    }
    const styleObj3={
      background:color
    }
    const { color1, color2 }=this.props;
    return(
      <div className="flex-center">
        <div className="card"  style={styleObj1} >{ (color1.length===4 || color1.length===7) && color1 }</div>
        <div className="card"  style={styleObj2} > { (color2.length===4 || color2.length===7) && color2 }</div>
        <div className="card"  style={styleObj3} >{ color.length===7 && color!==NaN && color }</div>
      </div> 
    )
  }
}
export default SwachList;