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
import {
  Button,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';


const App = ({ signOut, user }) => {


  return (
    <View >

      <body>
          <Navbar bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="/" >Home</Navbar.Brand>
              <Navbar.Brand href="/market">Market</Navbar.Brand>
              <Navbar.Brand href="/notes">Notes</Navbar.Brand>
              

              <DropdownButton id="dropdown-item-button" >
              <Dropdown.ItemText>{user.username}</Dropdown.ItemText>
              <Dropdown.Item as="button"><Navbar.Brand href="/profile">Profile</Navbar.Brand></Dropdown.Item>
              <Dropdown.Item as="button">Setting</Dropdown.Item>
              <Dropdown.Item as="button" onClick={signOut}> Sign Out</Dropdown.Item>
              </DropdownButton>
            </Container>

          </Navbar>
          <Router>

              <Routes>
                  <Route  exact path='/' element={<Home/>} />
                  <Route  exact path='/market' element={<Market/>} />
                  <Route  exact path='/notes' element={<Note/>} />
                  <Route  exact path='/profile' element={<Profile/>} />
              </Routes>
          </Router>
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