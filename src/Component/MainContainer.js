import React from 'react';
import '../index.css';
import Container from './Container';
import AddContainer from './AddContainer'

const MainContainer = ({swatches,newItem,newCallback}) => {
	return(
		<div className='flex-container'>
			<Container swatches={swatches} newItem={newItem} newCallback={newCallback} />
			<AddContainer newItem={newItem} newCallback={newCallback} />
		</div>
	)
}
export default MainContainer;