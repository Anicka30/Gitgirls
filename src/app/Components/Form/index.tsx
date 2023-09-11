'use client'

import axios from "axios";
import { FormEvent, useState } from "react";

export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();


        setLoading(true);
        setError(false);
        setSuccess(true);

        const data = {
            name: name,
            email: email,
        };

        try {
            const response = await axios.post('/api/claim', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const response2 = await axios.post('https://eog42flrqi0c9hy.m.pipedream.net', data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.status === 200 && response2.status === 200) {
                setSuccess(true);
            } else {
                setError(true);
            }
        } catch (error) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-row gap-10">
          <div>Alien Head</div>
          <div className=" w-[1/4] h-[1/2] bg-purple-300 rounded gap-5 ">
            <form className="flex flex-col items-center" onSubmit={handleSubmit}>
              <h1>🤖/👁️</h1>
              <h2>Sign-up to bring your idea to life</h2>
              <label>Enter your Name:</label>
              <input type="text" onChange={(event) => setName(event.target.value)} />
              <label>Enter your email address:</label>
              <input type="email" onChange={(event) => setEmail(event.target.value)} />
              <div>
                <button type="submit" className="bg-[#f6ab49">
                  {loading ? <div className={""}></div> : <span>Submit</span>}
                </button>
              </div>
              {success && (
                <h3 className={"text-green-500 text-center"}>Successfully signed up!</h3>
              )}
              {error && (
                <h3 className={"text-red-500 text-center"}>
                  Error occurred. <br /> Please try again.
                </h3>
              )}
            </form>
          </div>
        </div>
      );
      
}