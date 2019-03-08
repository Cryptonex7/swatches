import React from 'react';
import '../index.css';
const CardList = ({swatches}) =>{
	return(
	      <div>
	      	{
	      		swatches.map((swatch,i) => {
	      			//console.log('cardlist',swatch);
	      			const styleObj={
	      				background:swatch.color
	      			}
	      			return(
	      			       <div className='card' style={styleObj}>
					       		{swatch.name}
					       </div>
	      			)
	      		})
	      	}
	      </div>
	);
}

export default CardList;