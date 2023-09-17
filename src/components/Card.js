import React, { Fragment } from 'react';


// props stands for parameters = declaration of parameters from the cards
const Card = (props) => {
    return(
             <Fragment>
                
                    <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                    {/* 
                    tc = text center
                    bg = background color  
                    dib = display inline block  
                    br3 = border  
                    pa3 = padding 
                    ma2 = margin  
                    grow = animation
                    bw2 = border width
                    shadow-5 = shadow */}
                
                    
                    {/* Change the test para random ang lalabas from robohash API or website 
                    using dollar curly braces
                    pero wag kalimutan iwrap sa curly brace ang source and instead of using single quote,
                    use the key `` na nasa tilde
                    <img alt='loko' src='https://robohash.org/test?200x200' /> */}
                        <img alt='loko' src={`https://robohash.org/${props.id}200x200`} />
                        <div>
                            <h2>{props.name}</h2>
                            <p>{props.email}</p>
                        </div>
                    </div>
            
            </Fragment>
    );
}

export default Card;