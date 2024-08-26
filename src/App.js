import { useState, useEffect } from 'react';
import {Square } from './components/square/Square';
import background from './scss/background.scss';

export default function Board() {
  //const [squares, setSquares] = useState(Array(9).fill(null));
  //const [descriptions, setSquares] = useState(Array(9).fill(null));

  const descriptions = ["First description", 
    "Another text for description", 
    "Hello number 3",
    "Desc 4",
    "",
    "Desc 5",
    "Desc 6",
    "Desc 7",
    "Desc 8"];

  const [description, setDescription] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(4);

  function handleClick(i) {
    setDescription("");
    setSelectedIndex(i);
  }

  const updateDescription = () => {
    if(selectedIndex >= 0){
      const currentDescription = descriptions[selectedIndex];
      if(description.length < currentDescription.length){
        const newDescription = description + currentDescription[description.length];
        setDescription(newDescription);
      }
    }
  };

  useEffect(() => {
    updateDescription();
  }, [ selectedIndex]);

  useEffect(() => {
    const interval = setInterval(() => updateDescription(), 50);

    return () => clearInterval(interval);
  }, [description, selectedIndex]);


  return (<>
    <div className='div-center'>
      <div className='div-title'>DanielMGC\portfolio&gt;</div>
      
      <div className='div-content'>
        <div className='div-border-top'></div>
          <div className='div-content-area'>
            <div className='div-square-area'>
              <div className='div-square-content'>
                <Square onSquareClick={() => handleClick(0)} selected={selectedIndex == 0} />
                <Square onSquareClick={() => handleClick(1)} selected={selectedIndex == 1} />
                <Square onSquareClick={() => handleClick(2)} selected={selectedIndex == 2} />
                <Square onSquareClick={() => handleClick(3)} selected={selectedIndex == 3} />
                <Square onSquareClick={() => handleClick(4)} selected={selectedIndex == 4} image={'face' + selectedIndex} />
                <Square onSquareClick={() => handleClick(5)} selected={selectedIndex == 5} />
                <Square onSquareClick={() => handleClick(6)} selected={selectedIndex == 6} />
                <Square onSquareClick={() => handleClick(7)} selected={selectedIndex == 7} />
                <Square onSquareClick={() => handleClick(8)} selected={selectedIndex == 8} />
              </div>
            </div>
            <div className='div-text-area'>
              {description}
            </div>
          </div>
        <div className='div-border-bottom'></div>
      </div>
      
    </div>
    
    <div className='wrap' >
      <div className='top-plane'></div>
      <div className='bottom-plane'></div>
    </div >
  </>
  );
}
