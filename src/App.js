import React, { useState, useEffect } from "react";
// import "./App.css";
import styled, { keyframes } from 'styled-components'
// import axios from "axios";

// import { API_KEY, BASE_URL } from "./constants/index";

import Image from './components/Image'

const kf = keyframes`
  0% {background-color: ${pr => pr.theme.blueLight};}
  50% {background-color: ${pr => pr.theme.pale};}
  100% {background-color: ${pr => pr.theme.blueLight};}
`

const StyledApp = styled.div`
  background-color: ${pr => pr.theme.black};
  padding-bottom: 5vh;
  h1 {
    color: ${pr => pr.theme.blueLight};
    font-size: ${pr => pr.theme.fontSize.header};
    padding: 2vh 0;
  }
`

const StyledRover = styled.div`
  button {
    background-color: ${pr => pr.theme.blueLight};
    color: ${pr => pr.theme.pale};
    font-size: ${pr => pr.theme.fontSize.large};
    border: solid 3px ${pr => pr.theme.pale};
    border-radius: 15px;
    padding: 5px;
    margin-bottom: 5%;
    width: 100%;
    /* animation: ${kf} 0.5s ease-in forwards; */
    &:hover {
      background-color: ${pr => pr.theme.pale};
      color: ${pr => pr.theme.black};
      transition: all 0.4s ease-in-out;
      /* animation: ${kf} 0.5s ease-in forwards; */
    }
  }
`

const StyledButtonsContainer = styled.div`
  width: 20vw;
  margin: auto;
`

export default function App() {
  // const [imageSet, setImageSet] = useState([]);
  const [currentCamera, setCurrentCamera] = useState(null);
  const [reClick, setReClick] = useState(0)
  const rovers = [{id: 0, name:"curiosity"}, {id: 1, name:"opportunity"}];

  console.log(rovers);
  const openImage = (cameraName) => {
    setCurrentCamera(cameraName);
    setReClick(reClick + 1)
  };

  const closeImage = () => {
    setCurrentCamera(null);
  };

  const Rover = (props) => (
    <StyledRover className='rover'>
      
      <button onClick={() => openImage(props.name)}>{props.name}</button>
    </StyledRover>
  );

  return (
    <StyledApp className='App'>
      <h1>Choose A Rover</h1>
      <StyledButtonsContainer className='rovers'>
        {
        rovers.map(rv => {
          return <Rover key={rv.id} name={rv.name} />
        })
      }
      </StyledButtonsContainer>
      {
        currentCamera && <Image camera={currentCamera} close={closeImage} reClick={reClick}/>
      }
    </StyledApp>
  );
}
