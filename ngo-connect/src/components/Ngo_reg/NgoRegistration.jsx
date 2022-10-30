import { useRef } from 'react';
import axios from 'axios';
import './NgoReg.css';
function NgoRegistration(){

    

    async function handleSubmit(e) {
        e.preventDefault();
        if(isValidPhone() && isValidMail()){
            //send data to backend
            let formData = new FormData(e.target);
            // console.log(data);
            const response = await axios.post("http://localhost:3000/ngo-registration", formData);
        }
        
        
    }

    function isValidPhone(){
        const phone = document.getElementById("phone");
        console.log(phone.value.length);
        if(phone.value.length != 10){
            alert("invalid number");
            return false;
        } else {
            return true;
        }
    }

    function isValidMail(){
        const mail = document.getElementById("mail");
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
        {
          return true;
        }
        else{
            alert("invalid mail");
            return false;
        }
    }

// <select name="Preferred Domain" id="Preferred Domain">
{/* <option value="volvo">Preferred Domain</option>
<option value="Education">Education</option>
<option value="Food">Food</option>
<option value="Clothes">Clothes</option>
<option value="Health Care">Health Care</option>

</select> */}

    return(
        <>
      <h1>NGO REGISTERATION</h1>

        <form id='form' class="container" onSubmit={handleSubmit}>
        <input type="text" placeholder="&#xf007;  Name of the NGO"/>
    
        <input type="text" name="number" placeholder="&#xf023; Registeration Number"/>
        <input type="text" name="owner" placeholder="&#xf023; Owner"/>
        <input id="phone" type="text" name="phone" placeholder="&#xf023; Phone Number"/>
        <input type="text" name="location" placeholder="&#xf023;  Location of NGO"/>
        <input id="mail" type="email" name="email" placeholder="&#xf023; Email"/>
        <input name='password' type="password" id="password" placeholder="&#xf023;  password"/>
        <i class="fas fa-eye" onclick="show()"></i>

        <input type="submit" value="SUBMIT" />
    </form>
        </>
    )
    
}
export default NgoRegistration