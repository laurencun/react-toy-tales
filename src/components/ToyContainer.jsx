import React from 'react';
// import { findRenderedComponentWithType } from 'react-dom/test-utils';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  const cardToShow = () => {
    return props.toysToDisplay.map(toy => {
      return <ToyCard key={toy.id} toy={toy} delToy={props.delToy}/>
    })
  }

  return(
   
    <div id="toy-collection">
      {/* Render the collection of ToyCards */}
      {cardToShow()}
    </div>
  );
}

export default ToyContainer;
