import React,{useEffect} from "react";

export default  function Teste(){
   
   
    useEffect(() => {
        let url = "https://gist.githubusercontent.com/jeffdrumgod/82ce318339d591768356793fed9dd443/raw/918978b8b743c90a0d48c2f0ccbb226b2848b1ce/vtex-skujson-example.json"
        let cor = [];
        let tamanho = [];
        (async () => {            
            const r = await (
                await(
                    fetch(url)
                )
            ).json();

            for (var i=0;i<r.skus.length;i++) {
                cor.push(r.skus[i].dimensions.COR)
                tamanho.push(r.skus[i].dimensions.Tamanho)
            }
                        
            var novaCor = [...new Set(cor)]                
            console.log(novaCor)
            console.log(tamanho)
        })();
        
    }, [])
    
    return <h1>Hello world!</h1>
}