import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import logo from "../images/fb-leverage-of-coding.jpg";
import { Link } from "react-router-dom";



// !Lokal resimleri gosterilbilmek icin imporrt yontemiyle eklemek gerekiyor. Aksi taktirde resimler gozukmuyor.

function MyNav() {
  return (
    <div>
      <Navbar className="p-4" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="http://localhost:3000">
          <img id="navbar-foto" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link> <Link to="/personel1">Calisanlarimiz</Link> </Nav.Link>
            <Nav.Link> <Link to="/personel2">Musterilerimiz</Link> </Nav.Link>
            <NavDropdown title="Ufak Calismalar" id="basic-nav-dropdown">
              <NavDropdown.Item href="../ufakcalismalar/sayi.html">Sayi Oyunu</NavDropdown.Item>
              <NavDropdown.Item href="http://localhost:3000/form1">Form1</NavDropdown.Item>
              <NavDropdown.Item href="http://localhost:3000/form2">Form2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form>
            <div className="d-flex">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default MyNav;
