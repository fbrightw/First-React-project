import React from 'react';

function StyledIcons(props) {
  return (
      <div className="close" onClick={props.onClick}>
        <i style={{color: 'gray', margin: '5px', cursor: 'pointer'}} className={props.className}></i>
      </div>
  );
}

export default StyledIcons;