import { useState } from "react";

export default function Contador () {
    const [contador, setContador] = useState(1);

    function almentaContados(){
        setContador(contador + 1)
    }

    return(
        <div>
            <h1>Valor da props.</h1>
            <h5>{contador}</h5>
            <button onClick={almentaContados}>Atualizar contados</button>
        </div>
    )
}

export function Pagina () {
    return <Contador/>
}