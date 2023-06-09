import { useEffect, useState } from "react"

export default function Container1({letrasData, nivel, contain}){

const estilo1={
    backgroundColor:"black",
    width:"30px",
    height:"30px",
    verticalAlign: "middle",
    borderRadius:"5px",
    margin:"1px",
}
const estilo2={
    backgroundColor:"white",
    color:"white",
    width:"30px",
    height:"30px",
    verticalAlign: "middle",
    borderRadius:"5px",
    margin:"1px",
}
const estilo3={
    backgroundColor:"green",
    color:"white",
    width:"30px",
    height:"30px",
    verticalAlign: "middle",
    borderRadius:"5px",
    margin:"1px",
}

const cambiarColor1={
    backgroundColor:'ORANGE',
}
const cambiarColor2={
    backgroundColor:'grey',
}




function changeColor(index){
    if(nivel===1 && index===3){
        return cambiarColor1;
    }
    if(nivel===2 && contain === 1 && index!== 0){
        return cambiarColor1;
    }
    if(nivel===3 && contain===3 && index!== 0 && index!== 6 ){
        return cambiarColor1;
    }
    if(nivel===4 && contain===4 && index!== 0 && index!== 1 && index!== 6){
        return cambiarColor1;
    }
    if(nivel===5 && contain===6 && index!== 6){
        return cambiarColor1;
    }
}

    
return(
    <div>
        <table>
        <tbody>

        <tr >
            {letrasData.map((letra, index) => (
            <td style={changeColor(index) } key={index}>
                <button style={letra==="1"? estilo1 : letra===""? estilo2 : estilo3}>{letra==="1"? "" : letra}</button></td>    
            ))}


        </tr>
        </tbody>
        </table>

       
    </div>
    )

}