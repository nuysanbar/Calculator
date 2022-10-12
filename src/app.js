import {useState} from 'react';
const App=()=>{
    const [equation,setEquation]=useState('');
    const saveNumber=(num)=>{
        setEquation(equation+num);
    }
    const calculate=()=>{
        const newList=equation.split(/\D/);
        const lists=equation.split(/\d/).filter((item)=>item!=="");
        let first="*/";
        let second="-+";
        for(let i=0; i<lists.length; i++){
            if(first.includes(lists[i])){
                if(lists[i]=="/"){
                let res=parseInt(newList[i]) / parseInt(newList[i+1]);
                newList.splice(i,2,res);
                console.log(newList);
                lists.splice(i,1);
                }
                if(lists[i]=="*"){
                let res=parseInt(newList[i]) * parseInt(newList[i+1]);
                newList.splice(i,2,res);
                lists.splice(i,1);
                }
            }}
        for(let i=0; i<lists.length; i++){
            if(second.includes(lists[i])){
                if(lists[i]=="+"){
                let res=parseInt(newList[i]) + parseInt(newList[i+1]);
                newList.splice(i,2,res);
                }
                if(lists[i]=="-"){
                let res=parseInt(newList[i]) - parseInt(newList[i+1]);
                newList.splice(i,2,res);
                }
            }
        }
        setEquation(newList[0]);
    }
    return (
        <main className="calculator">
            <input type="text" value={equation} className="results"/><br/>
            <button className="numbers nine" onClick={()=>saveNumber(9)}>9</button>
            <button className="numbers eight" onClick={()=>saveNumber(8)}>8</button>
            <button className="numbers seven" onClick={()=>saveNumber(7)}>7</button>
            <button className="numbers divide" onClick={()=>saveNumber("/")}>/</button><br/>
            <button className="numbers six" onClick={()=>saveNumber(6)}>6</button>
            <button className="numbers five" onClick={()=>saveNumber(5)}>5</button>
            <button className="numbers four" onClick={()=>saveNumber(4)}>4</button>
            <button className="numbers multiply" onClick={()=>saveNumber("*")}>*</button><br/> 
            <button className="numbers three" onClick={()=>saveNumber(3)}>3</button>
            <button className="numbers two" onClick={()=>saveNumber(2)}>2</button> 
            <button className="numbers one" onClick={()=>saveNumber(1)}>1</button>
            <button className="numbers add" onClick={()=>saveNumber("+")}>+</button> <br/>
            <button className="numbers zero" onClick={()=>saveNumber(0)}>0</button>
            <button className="numbers cancel" onClick={()=>{setEquation("")}}>X</button>
            <button className="numbers equal" onClick={calculate}>=</button>
            <button className="numbers minus" onClick={()=>saveNumber("-")}>-</button>              
        </main>
    )
}
export default App;