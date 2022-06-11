import React, {useState,useEffect,useRef} from 'react';

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ScrollToTop=()=>{

  const [isVisible,setVisible]=useState(false);

  const toggleVisibility=()=>{

 //console.log(window.pageYOffset)

    if(window.pageYOffset>400){
      document.getElementById("btn").style.display = "block";
      setVisible(true);
    }
    else
    {
      document.getElementById("btn").style.display = "none";
      setVisible(false);
    }
  }

  const scrollToTop=()=>{


    window.scrollTo({
      top:0,
      behavior:'smooth',
    });
  }

  useEffect(()=>{

    window.addEventListener('scroll',toggleVisibility)
    return () => {
      window.removeEventListener('scroll',toggleVisibility)
    }
  },[])

  return(


         <button type="button" id="btn"
                 onClick={scrollToTop} className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"

         ><FontAwesomeIcon icon={faArrowUp} aria-hidden="true"/></button>



  )
}


export default ScrollToTop

