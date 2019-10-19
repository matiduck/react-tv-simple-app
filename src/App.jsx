"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("./App.scss");
var Navbar_1 = require("./components/Navbar/Navbar");
var SearchPage_1 = require("./components/SearchPage/SearchPage");
var react_router_1 = require("react-router");
var HomePage_1 = require("./components/pages/HomePage");
var ContactPage_1 = require("./components/pages/ContactPage");
var withTitle_1 = require("./components/withTitle");
function App() {
    return (<div>
      <header>
        <Navbar_1.Navbar />
      </header>
      <main className="container">
        <react_router_1.Route path="/" exact component={withTitle_1.withTitle(HomePage_1.HomePage, 'Home')}/>
        <react_router_1.Route path="/search" component={withTitle_1.withTitle(SearchPage_1.SearchPage, 'Search Shows')}/>
        <react_router_1.Route path="/contact" component={withTitle_1.withTitle(ContactPage_1.ContactPage, 'Contact page')}/>
      </main>
    </div>);
}
exports.default = App;
