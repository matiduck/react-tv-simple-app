"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
exports.Navbar = function () { return (<nav className="navbar navbar-expand navbar-dark bg-dark mb-3">
    <div className="container">
      <react_router_dom_1.NavLink className="navbar-brand" to="/">
        TV Maniac
      </react_router_dom_1.NavLink>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <react_router_dom_1.NavLink className="nav-link" to="/" exact>
              Home
            </react_router_dom_1.NavLink>
          </li>
          <li className="nav-item">
            <react_router_dom_1.NavLink className="nav-link" to="/search">
              Search
            </react_router_dom_1.NavLink>
          </li>
          <li className="nav-item">
            <react_router_dom_1.NavLink className="nav-link" to="/contact">
              Contact
            </react_router_dom_1.NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>); };
