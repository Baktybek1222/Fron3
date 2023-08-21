import firebase from './firebase.js';  
import React, { useEffect, useState } from 'react';  
import './UserList.css'  
import Header from './Header/Header.jsx';
import Header2 from './Header2/Header2.jsx';
import Div1 from './Div1/Div1.jsx';

 
  
const UserList = () => {  
    const ref = firebase.firestore().collection('user')  
    const [data, setdata] = useState([])  
  
    function getData() {  
        ref.onSnapshot((QuerySnapshot) => {  
            const items = []  
            QuerySnapshot.forEach((doc) => {  
                items.push(doc.data())  
            })  
            setdata(items)  
        })  
    }  
  
    useEffect(() => {  
        getData()  
    }, [])  
    console.log(data);  
  
  
  
    return (
        <div className='UsersList'>
            {data.map((elem, index) => (
                <div className='UserList' key={index}>
                    <Header/>
                            <Header2/>
                            <Div1/>
                             <div id='diiv1'> 
                            
                            <img src = {elem.img} id='i1'/> 
                            
                            
                            
                            <img src={elem.img1} id='i2'/> 
                            <img src={elem.img2} id='i3'/> 
                            <img src={elem.img4} id='i4'/> 
                            <img src={elem.img1} id='i5'/> 
                            <img src={elem.img6} id='i6'/> 
                            <img src={elem.img7} id='i7'/>  
                            
                            </div>  
                           
                            <p id='p1'>Смартфоны и планшеты</p> 
                            <div id='div1'>             
                            <p>{elem.name}</p>   
                            <p>{elem.descr}</p>  
                            <p>{elem.price}</p>  
                            </div> 
                            <div id='xx1' >
                            <div>
                            <img src={elem.tel1} id='vv1' />
                            <p id='x1'>{elem.p1}</p>
                            <p id='v1211'>{elem.p2}₽<img src={elem.icon}id='icn'/></p>
                            </div>
                            <div>
                            <img src={elem.tel2} id='vv2' />
                            <p id='x1'>{elem.p3}</p>
                            <p id='v1211'>{elem.p4}₽<img src={elem.icon}id='icn'/></p>
                            </div>
                            <div>
                            <img src={elem.tel3} id='vv3'  />
                            <p id='x1'>{elem.p5}</p>
                            <p id='v1211'>{elem.p6}₽<img src={elem.icon}id='icn'/></p>
                            </div>
                            <div>
                            <img src={elem.tel4} id='vv4' />
                            <p id='x1'>{elem.p7}</p>
                            <p id='v1211'>{elem.p8}₽<img src={elem.icon}id='icn'/></p>
                            </div>
                            <div>
                            <img src={elem.tel5} id='vv5'/>
                            <p id='x1'>{elem.p9}</p>
                            <p id='v1211'>{elem.p10}₽<img src={elem.icon}id='icn'/></p>
                            </div>
                            </div>
                            <div>
                                <p id='ll1'>Акции</p>
                                </div>
                            <div id='o1'>
                                <img src={elem.Ak1}/>
                                <img src={elem.Ak2}/>
                                <img src={elem.Ak3}/>
                                
                                </div>
                                <div>
                                <p id='o2'>Ноутбуки</p>
                                </div>
                                <div id='T2'>
                                <div id='t'>
                                    <img src={elem.imgT1} id='it1'/>
                                    <p id='pt1'>{elem.pT1}</p>
                                    <p id='ps1'>{elem.pTN1}₽<img src={elem.icon}id='icn'/></p>
                                    </div>
                                    <div>
                                    <img src={elem.imgT2}id='it1'/>
                                    <p id='pt1'>{elem.pT2
                            }</p>
                                    <p id='ps1'>{elem.pTN2}₽<img src={elem.icon}id='icn'/></p>
                                    </div>
                                    <div>
                                    <img src={elem.imgT3}id='it1'/>
                                    <p id='pt1'>{elem.pT3}</p>
                                    <p id='ps1'>{elem.pTN3}₽<img src={elem.icon}id='icn'/></p>
                                    </div>
                                    <div>
                                    <img src={elem.imgT4}id='it1'/>
                                    <p id='pt1'>{elem.pT4}</p>
                                    <p id='ps1'>{elem.pTN4}₽<img src={elem.icon}id='icn'/></p>
                                    </div>
                                    <div>
                                    <img src={elem.imgT5}id='it1'/>
                                    <p id='pt1'>{elem.pT5}</p>
                                    <p id='ps1'>{elem.pTN5}₽<img src={elem.icon}id='icn'/></p>
                                    </div>
                                    <div>
                                    <img src={elem.imgT6}id='it1'/>
                                    <p id='pt1'>{elem.pT6}</p>
                                    <p id='ps1'>{elem.pTN6}₽<img src={elem.icon}id='icn'/></p>
                                    </div>
                                    </div>
                                    <footer>
                            <div>
                            <section class="footer-columns">
                            <section>
                            <ul id='px100'>
                            <li>
                            <img src={elem.so1} alt="Image Alt Text"/>
                            </li>
                            <li>
                            <p class="kk1">+996771115059</p>
                            <p class="d11">справочная служба</p>
                            </li>
                            <li>
                            <p class="kk1">+996771115059</p>
                            <p class="d11">интернет-магазин</p>
                            </li>
                            <li>
                            <p></p>
                            </li>
                            </ul>
                            </section>
                           
                            </section>
                            </div>
                            <section class="footer-bottom">
                            <small>My Company Ltd. <span id="year"></span>, All rights reserved</small>
                            <span class="footer-bottom-links">
                            <p>Terms and Services</p>
                            <p>Privacy Policy</p>
                            </span>
                            </section>
                            </footer>
                            <ul id='c11'>
                            <h3>Product</h3>
                            <li>
                            <p>API</p>
                            </li>
                            <li>
                            <p>Pricing</p>
                            </li>
                            <li>
                            <p>Documentation</p>
                            </li>
                            <li></li>
                            </ul>
                </div>
            ))}
        </div>
    );
                        }  

              


                                   
                                    
                      

       
export default UserList;