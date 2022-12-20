import React, { useState } from 'react';

function Contact() {
  return (
    <form>
      <div class="form-group">
        <label for="exampleFormControlInput1">Your email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Your message here</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </form>
  );
}

export default Contact;
