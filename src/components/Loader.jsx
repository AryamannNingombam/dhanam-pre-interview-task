import React from 'react'
import { Container,Spinner } from 'react-bootstrap'


export const Loader = () => {
  return (
    <Container
      fluid
      style={{
        color: 'white',
        minHeight: '100vh',
        width:"100%",
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
      }}
    >
      <Spinner
      style={{
        height:"40px",
        width:"40px"
      }}
      animation="border" />
    </Container>
  )
}
