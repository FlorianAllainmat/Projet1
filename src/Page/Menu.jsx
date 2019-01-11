import React from 'react';
import './Menu.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
        <Navbar id="Menu"color="dark" dark expand="md">
          <NavbarBrand href="">Madison Square Garden</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink><Link to="/">Accueil</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link to="/Artiste">Artiste</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Calendrier</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
    );
  }
}                                                                                      

