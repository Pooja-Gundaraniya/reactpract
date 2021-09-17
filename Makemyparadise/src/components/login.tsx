import react from "react";
import logoimg from "../assets/logo.png"
import "./login.css"

export default function Login() {
    return (
        <div className="maincontainer">

            <div className='container'>
                <p> welcome to <br/>Make my Paradise</p>
            </div>

            <div className='login'>
                <header className="header_login">
                    <img src={logoimg} alt="not found"></img>
                    <h1>Login</h1>
                </header>
                <main className='main_login'>
                    <form>
                        <label>Username : </label><input type='text' placeholder="Enter your username"></input><br/><br/>
                        <label>Password : </label><input type='password' placeholder="Enter your password"></input><br/><br/>
                        <input type='checkbox'></input><label>Remember me</label><br/><br/><br/><br/>
                        <button className="btnlogin">Login</button>
                    </form>
                </main>
                <footer>
                    <label>Create a new accont</label><br/>
                    <a href="">click here</a>
                </footer>
            </div>
        </div>
    )
}