import React, { useState } from 'react';
import validateEmail from '../helpers/validateEmail';

function Contact() {

  const [email, setEmail] = useState("");
  const [emailIsCorrect, setEmailIsCorrect] = useState(false);
  const [message, setMessage] = useState("");

  const inputChangeHandler = (element) => {
    if (element.target.id === "FormControlInput1") { //if email field
      const userInput = document.getElementById("FormControlInput1").value;
      setEmail(userInput);
      const isEmailCorrect = validateEmail(userInput); //email regex stuff
      setEmailIsCorrect(isEmailCorrect); //more email regex stuff
    } else if (element.target.id === "formTextArea") { //if message field
      const userInput = element.target.value;
      setMessage(userInput);
    }
  }

  return (
    <form>
      <div className="form-group">

        {email === "" ? 
        <div class="alert alert-danger" role="alert">
          Email field cannot be blank
        </div>
        :
          <p></p>
        }

        {emailIsCorrect === false ? 
        <div class="alert alert-danger" role="alert">
          Please enter a valid Email
        </div>
        :
          <p></p>
        }

        <label for="exampleFormControlInput1">Your email address</label>
        <input name="email" onChange={inputChangeHandler} type="email" className="form-control" id="FormControlInput1" placeholder="name@example.com" />
      </div>

      <div className="form-group">

        {message === "" ?
          <div class="alert alert-danger" role="alert">
            Message field cannot be blank
          </div>
          :
          <p></p>
        }

        <label for="exampleFormControlTextarea1">Your message here</label>
        <textarea onChange={inputChangeHandler} className="form-control" id="formTextArea" rows="3"></textarea>
      </div>

      <input type="submit" value="Submit"></input>
    </form>
  );
}

export default Contact;
