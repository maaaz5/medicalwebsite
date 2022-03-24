import React from "react";
import styled from "styled-components";
const ContactForm = () => {
  return (
    <NewsletterInput>
      <input type="email" placeholder="Your email" name="email" id="email" />
      <button class="submit" type="submit">
        Subscribe
      </button>
    </NewsletterInput>
  );
};
const NewsletterInput = styled.div`
  padding: 0em 0em 5em 0em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;

  input[type="email"] {
    outline: none;
    border: 1px solid #e6e6e6;
    background-color: #f9f9f9;
    padding: 15px 20px;
    width: 100%;
    font-size: 1rem;
    color: #737373;
    font-weight: bold;
    border-radius: 5px 00px 0px 5px;
    width: 50%;
  }
  button {
    color: #ffffff;
    background-color: #ff685b;
    outline: none;
    border: none;
    padding: 15px 20px;
    font-size: 0.8rem;
    letter-spacing: 1px;
    font-weight: bold;
    border-radius: 0px 5px 5px 0px;
  }
`;
export default ContactForm;
