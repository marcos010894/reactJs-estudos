import React from "react";


class ExempleProps extends React.Component{
  render(){    
    return (
      <div>
        <h1>Informações de usuario</h1>
        <p>{this.props.info.name}</p>
        <p>{this.props.info.idade}</p>
        <p>{this.props.info.sexo}</p>
      </div>
    )
  }
}

export default ExempleProps 