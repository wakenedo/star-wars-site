import { GlobalStyle } from './styles/global'
import {  BrowserRouter as Router, Route } from 'react-router-dom';
import { Hero } from './components/Hero';
import { PeoplePage } from './components/Pages/People/PeoplePage';


function App() {

  return (
    <Router>
      <Hero />
      <GlobalStyle />
    </Router>
  )
}

export default App
