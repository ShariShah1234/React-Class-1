import { useState } from 'react';
import './App.css';

// // function App() {
// //   // let a=12;
// //   // let b=1;
// //   // let pass="abcdsf"
// //   let arr=[{
// //     id: 1,
// //     name:"abc"
// //   },
// //   {
// //     id: 2,
// //     name:"efg"
// //   },
// //   {
// //     id: 3,
// //     name:"xyz"
// //   },
// //   {
// //     id: 4,
// //     name:"bvd"
// //   },{
// //     id: 5,
// //     name:"mnm"
// //   }
// // ]



// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //        {
// //       //  <p>The number is {a}</p>
// //       //  <p>The sq of {b} is </p>
// //       // <p>The password is {"*".repeat(pass.length)} is </p>
       
       
// //        arr.map((x,i)=>{ 
// //         return(
// //         <div key={i}>
// //           <p>Id = {x.id}</p>
// //           <p>name={x.name}</p>
// //         </div>)
// //        })}
// //       </header>
// //     </div>
// //   );
// // }
// // function App() {
// //   const [name,setName] = useState("Ali");
// //   let [count,setCount] = useState(0);
// //   let updateName = () =>{
// //     setName("AHMED")
// //   }
// //   let updateCount = () =>{
// //     setCount(++count)
// //   }
// //   return <div> 
// //       <p> {name} </p>
// //       <button onClick={updateName}>Update</button>
// //       <h2> {count} </h2>
// //       <button onClick={updateCount}>Update Count</button>                                                                 
// //   </div>

// }
// function App() {
// const [text,setText] = useState("")
// const [list,setList] = useState([])

// let add =()=>{
//   console.log(list)
//   list.push(text)
//   setList([...list])
//   setText("")
//   // setList([...list])

// }
// let del =(i)=>{
//   list.splice(i,1)
//   setList([...list])
// }
//  let edit =(i)=>{
//   console.log(list[i])
//   let x = prompt("enter value")
//   list[i]= x
//   setList([...list])

//  }

//   return <div> 
         
//     <input value={text} onChange={(e)=>{setText(e.target.value)}}/>
//     <button onClick={add}>Add</button>
//     {list.map((x,i)=>(
//       <p key={i}>
//         {x}
//         <button onClick={()=>del(i)}>DEL</button>
//          <button onClick={()=>edit(i)}>edit</button> 
      
//       </p>
//     ))}
//   </div>

// }
// export default App;


/////component//////

// import SmsButton from "./component/SmsButton"
// export default function App(){
//   return(
//     <>
//   <div> 
//     <h1>components</h1>
//     <SmsButton/>
//   </div>


//     </>
//   )
// }
