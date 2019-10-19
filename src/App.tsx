import React from 'react'
import './App.scss'
import { Navbar } from './components/Navbar/Navbar'
import { SearchPage } from './components/SearchPage/SearchPage'
import { Route } from 'react-router'
import { HomePage } from './components/pages/HomePage'
import { ContactPage } from './components/pages/ContactPage'
import { withTitle } from './components/withTitle'

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="container">
        <Route path="/" exact component={withTitle(HomePage, 'Home')} />
        <Route
          path="/search"
          component={withTitle(SearchPage, 'Search Shows')}
        />
        <Route
          path="/contact"
          component={withTitle(ContactPage, 'Contact page')}
        />
      </main>
    </div>
  )
}

export default App
