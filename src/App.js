import React from "react";


class Exemple extends React.Component{
  render(){    
    return (
      <div>
        <p>{this.props.info.name}</p>
        <p>{this.props.info.idade}</p>
        <p>{this.props.info.sexo}</p>
      </div>
    )
  }
}

export default Exemple 