import React from "react";
import './login.css';
import {IoIosPerson} from "react-icons/io";
import {SlLock} from "react-icons/sl";
import {BiTrendingUp} from"react-icons/bi";
import {RxDotFilled} from"react-icons/rx";
 const Login = () => {

return(
        <div className="loginbody" >
            <form>
                
                <header style={{backgroundColor:"rgb(175, 31, 31)",color:"white",height:"35px",borderTopLeftRadius:"8px",borderTopRightRadius:"8px",textAlign:"center",fontFamily:"revert"}}><BiTrendingUp /> DIGITAL SIGNATURE</header>
                <h1 className="logo" >ʝօհղʂօղ-ʝօհղʂօղ</h1>
                <br />
                
                <label for = "sign"></label>
                <IoIosPerson color="rgb(109, 107, 107)" size="18px"></IoIosPerson>
                <input placeholder="Username" id="sign" name="sign" ></input>
                <br></br>
                <br />
                <label for = "password"></label>
                <SlLock color="rgb(109, 107, 107)" size="18px"></SlLock>
                <input  type="password" placeholder="******" id="password" name="password"/>
                <br />
                <input type="checkbox"></input>
                
                <h3 style={{fontSize:"12px",color:"#000000"}}>By signing,I confirm that:</h3>
                <h3 style={{fontSize:"12px",color:"#000000"}}><RxDotFilled/> All the product have been fully transformed and confirmed.</h3> 
                <h3 style={{fontSize:"12px",color:"#000000"}}><RxDotFilled/>If applicable,the label retention form have been fully completed.</h3>
                <button style={{backgroundColor:"rgb(248, 31, 31)",color:"white",width:"110px",height:"30px" ,border:"none",borderRadius:"4px"}}>CONFIRM</button>
                <button style={{backgroundColor:"rgb(0, 110, 255)",color:"white",width:"110px",height:"30px" ,border:"none",borderRadius:"4px",marginLeft:"10px"}}>CANCEL</button>
              

        </form>
        </div>
    )
}

export default Login;