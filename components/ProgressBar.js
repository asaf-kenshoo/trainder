import React from "react";

const ProgressBar = (props) => {
  const {completed} = props;
  if (completed < 25){
    this.text = 'Beginner'
    this.color = "#decd35"
  }
  else if (completed < 50){
    this.text = 'Professional'
    this.color ="#f0852e"
  }
  else if (completed < 75){
    this.text = 'Expert'
    this.color ="#4fe399"
  }
  else{
    this.text = 'Master'
    this.color ="#73b9eb"
  }
  const containerStyles = {
    height: 15,
    width: '85%',
    backgroundColor: "#e0e0de",
    borderRadius: 30,
    margin: 26
  }
  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: this.color,
    borderRadius: 'inherit',
    textAlign: 'right'
  }

  const labelStyles = {
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
  }

  const labelStyles1 = {
    padding: 0,
    color: this.color,
    fontWeight: 'bold',
    textAlign: 'left'
  }

  return (
  
    <div style={containerStyles}>
      <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
      </div>
      <div >
          <span style={labelStyles1}>{`${this.text}`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;