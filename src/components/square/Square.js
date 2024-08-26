import square from './square.scss';
//import face from '../../images/face-neutral.png'; // Tell Webpack this JS file uses this image

export function Square({onSquareClick, selected, image='empty'}) {

    return (<>
      <div className={selected? "square selected" : "square"} onClick={onSquareClick}>
        <div className='sql1'>
          <div className='sql2'>
            <div className='sql3'>
              <div className='sql4'>
                <div className='div-image'>
                  <img src={require(`../../images/${image}.png`)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

    );
    //return <button className="square" onClick={onSquareClick}>{value}</button>;
  }
  