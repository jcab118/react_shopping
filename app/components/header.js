import React, { Component } from 'react';
var Link = require("react-router-dom").Link;

export default class Header extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <nav className="text-center" class="navbar navbar-expand-lg navbar-light bg-light">
          <a className="text-center" class="navbar-brand" href="./">J. Cabrera - Full Stack Web Developer</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="text-center" class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
            <div id ="nav_bar">
              <li>
                <a class="nav-link" href="./">Home</a> 
              </li>
            </div>
            <div id="nav_bar"> 
              <li>
                <a class="nav-link" href="/contact">Contact</a>
              </li>
            </div>
            <div id="nav_bar"> 
              <li>
                <a class="nav-link" href="/services">Services</a>
              </li>
            </div>
          </ul>
          </div>
        </nav>
      </div>
    );
  }
};
