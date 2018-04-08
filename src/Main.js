import React, { Component } from "react";
import {
  Route,
//  NavLink,
  HashRouter
} from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import Home from "./Home";
import Page1 from "./Page1";
import Page2 from "./Page2"; 
import logo from "./img/logo.png";

import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';


class Main extends Component {
  
constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }


render() {

 const routeInfo = [
      { displayName: 'HOME',
        link: '/',
      },
      { displayName: 'PAGE1',
        link: '/page1',
      },
      { displayName: 'PAGE2',
        link: 'page2',
      },
    ];
   return (
	<HashRouter>
	   <div>
		<Navbar light color="blue-grey lighten-5" expand="lg" fixed="top" scrolling>
                    <NavbarBrand href="/">
                        <img src={logo} height="30"/>
                    </NavbarBrand>
		   { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav className="ml-auto" right>
                          <NavItem active>
                              <NavLink exact className="nav-link" to="/">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to="Page1">Page1</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to="Page2">Page2</NavLink>
                          </NavItem>
                          <NavItem>
                              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                              <DropdownToggle nav caret>Dropdown</DropdownToggle>
                              <DropdownMenu>
                                  <DropdownItem href="#">Action</DropdownItem>
                                  <DropdownItem href="#">Another Action</DropdownItem>
                                  <DropdownItem href="#">Something else here</DropdownItem>
                                  <DropdownItem href="#">Something else here</DropdownItem>
                              </DropdownMenu>
                              </Dropdown>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>



	 <div className="content">
            <AnimatedSwitch
              atEnter={{ opacity: 0 }}
              atLeave={{ opacity: 0 }}
              atActive={{ opacity: 1 }}
              className="switch-wrapper"
              >
                <Route exact path="/" component={Home}/>
                <Route path="/page1" component={Page1}/>
                <Route path="/page2" component={Page2}/>
            </AnimatedSwitch>
         </div>




	</div>

	</HashRouter>
     );
  }
}


export default Main;
