import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

const Nav = ({ fetchSearchedData }) => {
  const [input, setInput] = useState("")
  // Searching images
  const searchPhoto = (e) => {
    e.preventDefault();
    fetchSearchedData(input);
  }
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand className="text-info fw-bold fs-5">Image Galary</Navbar.Brand>
        <Form className="d-flex" onSubmit={searchPhoto}>
          <Form.Control
            type="text"
            placeholder="Search Images"
            className="me-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button variant="outline-primary" className="text-white fw-bold" type="submit">Search</Button>
        </Form>
      </Container>
    </Navbar>

  )
}

export default Nav