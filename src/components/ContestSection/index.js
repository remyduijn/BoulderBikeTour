import '../../styles/Slogans.css';
import { useState } from "react";
import axios from "axios";

const url = "http://localhost:3000/api/v1/slogans";

const Slogans = () => {
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
 
  const handleSubmit = async (e) => { 
    e.preventDefault();
    try {
      const resp = await axios.post(url, { first_name: first_name, last_name: last_name, email: email, text: text });
      console.log(resp.data);
    } catch (error) {
      console.log(error.response);
    }
    alert("Thank you for your submission!");
    window.location.reload()
  }; 

  return (
    <div>
    <div className='wrapper'>
    <h1>Come up with a slogan for the race!</h1>
    <form onSubmit={handleSubmit}>
      <input placeholder="First name" id="first_name" value={first_name} onChange={(e) => setFirstName(e.target.value)} required/>
      <input placeholder="Last name" id="last_name" value={last_name} onChange={(e) => setLastName(e.target.value)} required/>
      <input type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
      <textarea placeholder="Slogan" id="text" maxLength="50" value={text} onChange={(e) => setText(e.target.value)} required/>
      <input type="submit" /> 
    </form>
    </div>
    </div>
  );
};

export default Slogans;