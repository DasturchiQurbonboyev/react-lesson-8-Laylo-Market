import axios from 'axios';
import React, { useState } from 'react'
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { toast } from 'react-toastify';


const API_URL = "https://dummyjson.com/auth/login";


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    console.log(username);
    console.log(password);
    const [showpassword, setShowpassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        axios
            .post(API_URL, { username, password })
            .then((response) => {
                const data = response.data;
                console.log(data);
                if (data.message === "Error") {
                    toast.error("Username or Password is incorrect");
                } else {
                    localStorage.setItem("token", data.token);
                    window.open("/admin", "_self");
                }
            })
            .catch((error) => {
                console.log("Error:", error);
                toast.error("Username or Password is incorrect");
            });
    }

    return (
        <>
            <section className="text-gray-600 body-font w-96 ml-auto mr-auto container">
                <div className="container px-5 py-24  ">
                    <form onSubmit={handleSubmit} className="  bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto mr-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
                        <div className="relative mb-4">
                            <label for="full-name" className="leading-7 text-sm text-gray-600">Email</label>
                            <input value={username} onChange={e => setUsername(e.target.value)} placeholder='atuny0' type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <label for="email" className="leading-7 text-sm text-gray-600">Password</label>
                        <div className="relative flex justify-between items-center  px-5 py-1 mb-4 bg-white bottom-1 rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200">
                            <input value={password} onChange={e => setPassword(e.target.value)} placeholder='9uQFF1Lh' type={showpassword ? "text" : "password"} id="email" name="email" className=" bg-white rounded border-none outline-none    focus:ring-indigo-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out" />
                            <button type='button' className='outline-none' onClick={() => setShowpassword(p => !p)}>
                                {password ? (showpassword ? <FaEyeSlash /> : <FaRegEye />) : <></>}
                            </button>
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Log In </button>
                        <p className="text-xs text-gray-500 mt-3">Literally you probably haven't heard of them jean shorts.</p>
                    </form>
                </div>
            </section>
        </>
    )
}

export default Login