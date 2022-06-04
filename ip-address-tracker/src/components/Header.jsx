import { useState, useRef, useEffect } from "react";

import { HeaderWrapper, Form, Input, Title, Button } from "./Header.styles";


function Header ({ userInputIP }) {
  const [inputData, setInputData] = useState("");
  const inputRef = useRef()

  function handleSubmit(event) {
    event.preventDefault()
    userInputIP(inputData)
  }

  function handleChange(event) {
    setInputData(event.target.value)
  }

  //to force autofocus the input element
  useEffect(() => {
    inputRef.current.focus();
  },[]);


  return (
    <HeaderWrapper>
      <Title>IP Address Tracker</Title>
      <Form onSubmit = {handleSubmit}>
        <Input 
          type="text"
          id="ip address"
          placeholder="Search for any IP address"
          onChange={handleChange}
          ref= {inputRef}
        />
        <Button>
          <img src="./images/icon-arrow.svg"/>
        </Button>
      </Form>
    </HeaderWrapper>
  )
};


export default Header;