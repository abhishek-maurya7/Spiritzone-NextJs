'use client';
import { useState } from "react";

const Login: React.FC = () => {
    // state for login information
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    //state for error message
    const [errorMessage, setErrorMessage] = useState('');

    // onChange event handler, invoked when entering username and password
    // updates the state of credentials 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
        setErrorMessage('');
    };

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        // prevents default behaviour (i.e refresh)
        e.preventDefault();

        //mock data
        const users = [
            {
                username: "abhishek",
                password: "abhishekx"
            },
            {
                username: "micheal",
                password: "micheal"
            },
            {
                username: "Marcosx",
                password: "jack001"
            }
        ];

        //
        const isValid: boolean = users.some((user) => {
            return user.username === credentials.username && user.password === credentials.password;
        });

        //if true, login and redirect. otherwise, show error
        if (isValid) {
            console.log("Logged in");
            window.location.href = "/";
            sessionStorage.setItem('isLogged', 'true');
        } else if (credentials.username.length == 0 || credentials.password.length == 0) {
            setErrorMessage("Fields cannot be empty");
        } else if (credentials.username.length < 6 || credentials.password.length < 6) {
            setErrorMessage("min length of username and password is 6");
        } else {
            setErrorMessage("Invalid username or password");
        }
    };

    return (
        <>
            <section id="main" style={{ backgroundColor: "red" }}>
                <div className="container vh-100" style={{ backgroundImage: "url(https://wallpapercave.com/wp/wp9888521.jpg)", backgroundSize: 'cover', backgroundRepeat: "none" }}>
                    <div className="row">
                        <h3 className='text-center'>Login</h3>
                    </div>
                    <div className="row justify-content-center ">
                        {/* Login form */}
                        <form onSubmit={handleLogin} className="col-md-6 p-2 rounded" style={{ backgroundColor: 'rgba(2, 2, 2, 0.5)', boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)', WebkitBackdropFilter: 'blur(0px)', backdropFilter: 'blur(0px)' }}>
                            {/* username */}
                            <div className="mb-3">
                                <label htmlFor="username">Username</label>
                                <input onChange={handleChange} value={credentials.username} className='form-control' type="text" name="username" id="username" />
                            </div>
                            {/* password */}
                            <div className="mb-3">
                                <label htmlFor="password">Password</label>
                                <input onChange={handleChange} value={credentials.password} className='form-control' type="password" name="password" id="password" />
                            </div>
                            {/* error */}
                            {errorMessage && <div className="text-danger mb-3">{errorMessage}</div>}
                            {/* buttons */}
                            <div className="mb-3 d-flex justify-content-between">
                                <button className='btn btn-success' type="submit">Login</button>
                                <input className='btn btn-danger' type="reset" value="Reset" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
