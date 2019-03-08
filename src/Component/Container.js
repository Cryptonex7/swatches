import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
const Container = ({swatches,newItem,newCallback}) => {
	return(
	       <div>
	       		<SearchBox newItem={newItem} newCallback={newCallback}/>
	       		{/*console.log(swatches)*/}
	       		<CardList swatches={swatches}/>
	       </div>
	)
}
export default Container;