import React from "react"; 
import UserList from "./compon/UserList.jsx"; 
import Header from "./compon/Header/Header.jsx";
import Header2 from "./compon/Header2/Header2.jsx";
import Div1 from "./compon/Div1/Div1.jsx";
    


function App() { 
    
 
    return ( 
        // <div className='UsersList'> 
        //     {data.map((elem, index) => ( 
        //         <div className='UserList' key={index}> 
        //             <p>{elem.name}</p> 
        //             <p>{elem.descr}</p> 
        //             <p>{elem.price}</p> 
                     
        //             <button>ghbsdf</button> 
        //         </div> 
        //     ))} 
        // </div> 
        <div>
        <UserList/>
        <Header/>
        <Header2/>
        <Div1/>

        </div>

        
    ); 
} 
 
export default UserList;

