import React from 'react'

const ContactForm = () => {
  return (
    <div> {/* Right Column */}
    <div className="flex items-center justify-center">
      <form class="form-control" action="">
        <p class="title font-akira">Contact Us</p>
        <div class="input-field">
          <input required="" class="input" type="text" />
          <label class="label" for="input">
            Enter Name
          </label>
        </div>
        <div class="input-field">
          <input required="" class="input" type="text" />
          <label class="label" for="input">
            Enter Email
          </label>
        </div>
        <div class="input-field">
          <input required="" class="input" type="textbox" />
          <label class="label" for="input">
            Enter Message
          </label>
        </div>
        <a>Forgot your password?</a>
        <button class="submit-btn">Sign In</button>
      </form>
    </div></div>
  )
}

export default ContactForm