import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/routes'
import { RouterProvider } from 'react-router-dom'
import Header from './components/Header/Header'
import styled from 'styled-components'
import NavBar from './components/NavBar/NavBar'

const Container = styled.div`
  max-width: 100vw;
  margin: 0px 10%;
  background-color: --background;
`
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header></Header>
    <Container>
    <NavBar></NavBar>
      <RouterProvider router={router} />
    </Container>
  </React.StrictMode>,
)
