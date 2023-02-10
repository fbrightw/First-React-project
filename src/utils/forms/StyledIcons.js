import React from 'react';




function StyledIcons(props) {
  return (
      <div className="icons" onClick={props.onClick}>
        <i style={{color: 'gray', margin: '5px', cursor: 'pointer'}} className={props.className} id={props.id}></i>
      </div>
  );
}

export default StyledIcons;