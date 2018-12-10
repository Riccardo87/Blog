import React, { Component } from 'react';
import './App.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Jumbotron,
  Container
} from 'reactstrap';

import Post from './component/Post'

import User from './component/User'

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      post: [],
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.setState({
        post: json
      })
      )
  }

  render() {
    return (
      <div className="App">

        <Navbar color="" light expand="md" className='navbar'>

          <NavbarBrand href="/">
            <b>Blog</b>
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>

            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink href="/components/">Post</NavLink>
              </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  User
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Comment
                  </DropdownItem>
                  <DropdownItem>
                    Photos
                  </DropdownItem>
                  <DropdownItem>
                    Todos
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        <div className='container'>

          <User />

        </div>

{/*}

          <Jumbotron fluid className='jumbotron' >

            {this.state.post.map(post => <Post id={post.id} title={post.title} body={post.body} />)}

          </Jumbotron>

    {*/}

      </div>
    );
  }
}

export default App;