import {useState} from "react";

import styled from "styled-components";

import { HeaderWrapper, Form, Input, Title, Button } from "./Header.styles";


function Header ({ userInputIP }) {
  const [inputData, setInputData] = useState("");

  function handleSubmit(event) {
    event.preventDefault()
    userInputIP(inputData)
  }

  function handleChange(event) {
    setInputData(event.target.value)
  }


  return (
    <HeaderWrapper>
      <Title>IP Address Tracker</Title>
      <Form onSubmit = {handleSubmit}>
        <Input 
          type="text"
          id="ip address"
          placeholder="Search for any IP address"
          onChange={handleChange}
        />
        <Button>
          <img src="./images/icon-arrow.svg"/>
        </Button>
      </Form>
    </HeaderWrapper>
  )
};


export default Header;