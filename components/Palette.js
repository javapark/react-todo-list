import React, {Component} from 'react'
import './Palette.css'

const Color = ({ color, active, onClick }) => {
  /* 구현 */
  return (
    <div class={`color ${active && 'active'}`} style={{background: color}} onClick={onClick}></div>
  );
}

const Palette = ({colors, selected, onSelect}) => {
  /* 구현 */
  const colorList = colors.map(
    (color) => (
      <Color color={color} active={selected===color} onClick={()=>onSelect(color)} key={color} />)
  );

  return (
    <div class="palette">{colorList}</div>
  );
};

export default Palette;