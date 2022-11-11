import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "@aws-amplify/ui-react/styles.css";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages";
import Note from "./pages/notepage";
import Market from "./pages/market";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Profile from "./pages/profile";
import Cancel from "./pages/Cancel";
import Success from "./pages/Success";
import NavbarComponent from "./pages/components/NavBar1";
import { Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { CartContext } from './CarContext';
import CartProduct from "./pages/components/CartProduct";
import {
  Button,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import CartProvider from "./CarContext";

const App = ({ signOut, user }) => {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);


  return (
    <View >

      <body>
        <CartProvider>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/" >Home</Navbar.Brand>
              <Navbar.Brand href="/market">Market</Navbar.Brand>
              <Navbar.Brand href="/notes">Notes</Navbar.Brand>
              
              <DropdownButton id="dropdown-item-button" title="-">
              <Dropdown.ItemText>{user.username}</Dropdown.ItemText>
              <Dropdown.Item as="button"><Navbar.Brand href="/profile">Profile</Navbar.Brand></Dropdown.Item>
              <Dropdown.Item as="button">Setting</Dropdown.Item>
              <Dropdown.Item as="button" onClick={signOut}> Sign Out</Dropdown.Item>
              </DropdownButton>
              <NavbarComponent />
              
            </Container>
            
          </Navbar>


          <Router>

              <Routes>
                  <Route  exact path='/' element={<Home/>} />
                  <Route  exact path='/market' element={<Market/>} />
                  <Route  exact path='/notes' element={<Note/>} />
                  <Route  exact path='/profile' element={<Profile/>} />
                  <Route  exact path='/success' element={<Success/>} />
                  <Route  exact path='/cancel' element={<Cancel/>} />
              </Routes>
          </Router>
          </CartProvider>
        <main>
        

        </main>
        <footer>
            
        
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/">
            {/*<img
                  alt=""
                  src="/logo.svg"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />*/}
                <p>&copy; Contuso 2022</p>
              </Navbar.Brand>
            </Container>
          </Navbar>
          </footer>
      </body>
        
    </View>
    
  );
};

export default withAuthenticator(App);