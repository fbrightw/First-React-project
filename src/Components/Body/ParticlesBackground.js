import React from 'react';
import Particles from "react-tsparticles";
import "../index.css"
import styled from "styled-components";

export const  ParticlesBackground = () => {
    return (
        <Particles
            className="particles"
            options={{
            background: {
             color: "#395f7c"
            },
            fpsLimit: 60,
            interactivity: {
             detectsOn: "canvas",
             events: {
              resize: true
            }},
        particles: {
         color: { value: "#ffffff" },
         number: {
          density: {
           enable: true,
           area: 1000
          },
          limit: 0,
          value: 400
         },
         opacity: {
          animation: {
           enable: true,
           minimumValue: 0.05,
           speed: 1,
           sync: false
          },
          random: {
           enable: true,
           minimumValue: 0.05
          },
          value: 1
         },
         shape: {
          type: "star"
         },
         size: {
          random: {
           enable: true,
           minimumValue: 0.5,
          }
         }
        }
       }} />
      )
}

export const ParticlesBackgroundStyled = styled(ParticlesBackground)`{
    width: 10vw;
    height: 100vh;
}`;