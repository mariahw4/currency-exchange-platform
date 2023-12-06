import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import './App.css'
import Footer from './components/footer'
import Header from './components/Header'
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row'

function App() {

  return (
    <>
    <Container fluid>

      <Header />
      <Row>

      <Nav />
      <Outlet />
      </Row>
      <Footer />
    </Container>
    </>
  )
}

export default App
