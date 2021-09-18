import './Login.css'
function Login() {
    return (
        <div className='login'>
            <img src ='https://pngimg.com/uploads/amazon/amazon_PNG28.png'/>
            <div className ='loginDesc' >
                <h1>Signin</h1>
                <p className ='loginP'>Email</p>
                <input placeholder='username' type='text' />
                <p className ='loginP'>Password</p>
                <input placeholder ='password' type ='text'/>
                <button>Log In</button>
            </div>

        </div>
    )
}

export default Login
