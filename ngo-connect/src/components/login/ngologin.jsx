import './ngologin.css'
import axios from 'axios'

export default function NgoLogin(){

  async function handleSubmit(e){
    e.preventDefault();
    let formData = new FormData(e.target);
    console.log([...formData]);
    try {
    const response = await axios.post('http://localhost:3000/ngo-login', formData);
    alert(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return(
    <>
    <body class="body">
    <div class="login-page">
      <div class="form">

        <form onSubmit={handleSubmit}>
          <input  required type="text" name='username' placeholder="&#xf007;  username"/>
          <input required  type="password" name='password' id="password" placeholder="&#xf023;  password"/>
          {/* <i class="fas fa-eye" onclick="show()"></i> */}
          <br />
          <br />
          <button>LOGIN</button>
          <p class="message"></p>
        </form>

        <form class="login-form">
          <p>Don't have an account?</p> 
          <button type="submit">SIGN UP</button>
        </form>
      </div>
    </div>

    </body>
    </>
  )
}

