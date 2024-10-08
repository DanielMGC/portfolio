import { useState, useEffect } from 'react';
import {Square } from './components/square/Square';
import background from './scss/background.scss';

export default function Board() {
  //const [squares, setSquares] = useState(Array(9).fill(null));
  //const [descriptions, setSquares] = useState(Array(9).fill(null));

  const descriptions = ["English version of my resume in PDF format.", 
    "Version française de mon CV en format PDF.", 
    "My GitGHub page with some of my code, including the one for this portfolio.",
    "Small web based game where the goal is to find the correct emoji the most number of times in 1 minute. Made with Angular.",
    "Hi! Welcome to my portfolio, where you can look at some of my creations, including code, art, design and editing (this page was made with React by the way).",
    "My Vimeo channel with some videos I created, showcasing a bit of editing and animation skills (had to use Vimeo because of some songs I used, which Youtube doesn't like too much).",
    "An interactive exercise in the area of ultrasonic damage inspection. Made with Three.js (3D graphics JavaScript library).",
    "Another interactive exercise in the area of ultrasonic damage inspection, this one made with JavaScript and CSS manipulation.",
    "Google Play page with a couple of Android apps I developed using Flutter. They're simple information apps made by demand, but showcase some of my app developing skills."];

  const linkTexts = [">>open file", 
    ">>ouvrir fichier", 
    ">>look at code",
    ">>play game",
    "",
    ">>look at videos",
    ">>open interactive exercise",
    ">>open interactive exercise",
    ">>go to apps"];

  const links = ["https://raw.githubusercontent.com/DanielMGC/portfolio/refs/heads/main/src/files/daniel-moises-gonzalez-clua-english-cv.pdf", 
    "https://raw.githubusercontent.com/DanielMGC/portfolio/refs/heads/main/src/files/daniel-moises-gonzalez-clua-cv-francais.pdf", 
    "https://github.com/DanielMGC?tab=repositories",
    "https://speed-game-vert.vercel.app/speed",
    "",
    "https://vimeo.com/user30800321",
    "https://danielmgc.github.io/scanplan/scanplan.html",
    "https://danielmgc.github.io/scanplan/scanning.html",
    "https://play.google.com/store/apps/developer?id=Daniel+Clua"];
  
  const [description, setDescription] = useState("");
  const [linkText, setLinkText] = useState("");
  const [link, setLink] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(4);
  const [underlineTimer, setUnderlineTimer] = useState(50);
  const [underlineCheck, setUnderlineCheck] = useState(false);


  function handleClick(i) {
    setDescription("");
    setLinkText("");
    setSelectedIndex(i);
  }

  const updateDescription = () => {
    if(selectedIndex >= 0){
      const currentDescription = descriptions[selectedIndex];
      const currentLinkText = linkTexts[selectedIndex];
      const currentLink = links[selectedIndex];
      let newDescription = description;
      let newLinkText = linkText;
      let newUnderlineTimer = underlineTimer;
      let newUnderlineCheck = underlineCheck;
      let descriptionFinished = false;

      if(newDescription[newDescription.length-1] == "_"){
        newDescription = newDescription.substring(0, newDescription.length - 2);
      }
      if(newLinkText[newLinkText.length-1] == "_"){
        newLinkText = newLinkText.substring(0, newLinkText.length - 2);
      }
      
      if(newDescription.length < currentDescription.length){
        newDescription += currentDescription[newDescription.length];
      } else {
        descriptionFinished = true;
      }
      if(descriptionFinished){
        if(newLinkText.length <currentLinkText.length){
          newLinkText += currentLinkText[newLinkText.length];
        } 
      }
      
      if(newUnderlineTimer > 0){
        newUnderlineTimer--;
      } else {
        newUnderlineCheck = !newUnderlineCheck;
        newUnderlineTimer = 50;
      }
      if(newUnderlineCheck){
        if(!descriptionFinished || currentLinkText == "")
          newDescription += " _";
        else 
          newLinkText += " _";
      }
      setUnderlineTimer(newUnderlineTimer);
      setUnderlineCheck(newUnderlineCheck);
      setDescription(newDescription);
      setLink(currentLink);
      setLinkText(newLinkText);
    }
  };

  useEffect(() => {
    updateDescription();
  }, [ selectedIndex]);

  useEffect(() => {
    const interval = setInterval(() => updateDescription(), 10);

    return () => clearInterval(interval);
  }, [description, linkText, selectedIndex, underlineCheck, underlineTimer]);


  return (<>
    <div className='div-center'>
      <div className='div-title'>DanielMGC\portfolio&gt;</div>
      
      <div className='div-content'>
        <div className='div-border-top'></div>
          <div className='div-content-area'>
            <div className='div-square-area'>
              <div className='div-square-content'>
                <Square onSquareClick={() => handleClick(0)} selected={selectedIndex == 0} image={'us-flag'} />
                <Square onSquareClick={() => handleClick(1)} selected={selectedIndex == 1} image={'fr-flag'} />
                <Square onSquareClick={() => handleClick(2)} selected={selectedIndex == 2} image={'github'} />
                <Square onSquareClick={() => handleClick(3)} selected={selectedIndex == 3} image={'time'} />
                <Square onSquareClick={() => handleClick(4)} selected={selectedIndex == 4} image={'face' + selectedIndex} />
                <Square onSquareClick={() => handleClick(5)} selected={selectedIndex == 5} image={'movie'}/>
                <Square onSquareClick={() => handleClick(6)} selected={selectedIndex == 6} image={'scanplan'}/>
                <Square onSquareClick={() => handleClick(7)} selected={selectedIndex == 7} image={'scanning'} />
                <Square onSquareClick={() => handleClick(8)} selected={selectedIndex == 8} image={'google-play'} />
              </div>
            </div>
            <div className='div-text-area'>
              {description}
              <p>
                <a href={link} target="_blank">{linkText}</a>
              </p>
            </div>
          </div>
        <div className='div-border-bottom'>
          <div className='div-email'><a href="mailto:daniel.moises.gc@gmail.com">daniel.moises.gc@gmail.com</a></div>
        </div>
      </div>
    </div>
    
    <div className='wrap' >
      <div className='top-plane'></div>
      <div className='bottom-plane'></div>
    </div >
  </>
  );
}
