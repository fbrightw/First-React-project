import styled from 'styled-components'
import Select from "react-select";
import Profile from "./Profile";

export const StyledSelect = styled(Select)`{
  .Select__control {
    height: 40px;
    border: 1px solid #a1a1a1;
    border-radius: 0;
    cursor: pointer;
    width: 80%;
  }
    
  .Select__control:hover {
      border-color: darkslategray;
    }

  .Select__options {
    color: aqua;
    width: 100%;
  }
   
  .Select__indicator-separator {
      display: none;
    }
    
  .Select__menu {
      color: black;
    
    } 
}`;

export const StyledProfile = styled(Profile)`{
    margin-left: 25px;
    display: flex;
    position: fixed;
    align-items: center;
}`;
