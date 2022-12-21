import React, { useState } from 'react';

function Contact() {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const inputChangeHandler = (element) => {
    if (element.target.id === "FormControlInput1") {
      const userInput = document.getElementById("FormControlInput1").value;
      setEmail(userInput);
    } else if (element.target.id === "formTextArea") {
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

        <label htmlFor="exampleFormControlInput1">Your email address</label>
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

        <label htmlFor="exampleFormControlTextarea1">Your message here</label>
        <textarea onChange={inputChangeHandler} className="form-control" id="formTextArea" rows="3"></textarea>
      </div>
    </form>
  );
}

export default Contact;
