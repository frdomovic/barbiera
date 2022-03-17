import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo_white from "../../Assets/Images/logo_white.png";
import { setAdminSession, setWorkerSession } from "../../Auth/SessionFunctions";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleLogin = async (e) => {
    e.preventDefault();
    let status = 0;

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };
    await fetch("/login/regular", requestOptions)
      .then((result) => {
        status = result.status;
        return result.text();
      })
      .then((result) => {
        if (status === 202) {
          setAdminSession(result, username, "true");
          navigate("../admin-dashboard", { replace: true });
        } else if (status === 200) {
          setWorkerSession(result, username);
          navigate("../worker-dashboard", { replace: true });
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className='mb-auto h-screen flex justify-center items-center'>
      <div className='rounded-3xl bg-trans-green bg-opacity-80 h-80 w-80 -mt-48'>
        <div className='text-center mt-2 flex flex-col justify-center items-center'>
          <span className='text-white text-xl text-center'>
            PRIJAVA ZA DJELATNIKE
          </span>
          <img src={logo_white} alt='whitelogo' className='w-1/5' />
        </div>
        <div>
          <form
            className='mt-3 ml-8 mr-8 flex flex-col ju text-white'
            onSubmit={(e) => handleLogin(e)}
          >
            <input
              required
              type='text'
              placeholder='username'
              value={username}
              className='bg-trans-l-green rounded-3xl pl-4 bg-opacity-20 text-white'
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              required
              type='password'
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='bg-trans-l-green rounded-3xl pl-4 mt-6 bg-opacity-20  text-white'
            />
            <div className='flex justify-center items-center w-full'>
              <button
                type='submit'
                className='mt-10 w-auto pl-14 pr-14 bg-orange-ps rounded-3xl mb-10 shadow-3xl hover:bg-transparent hover:border hover:border-solid hover:border-yellow-500'
              >
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
