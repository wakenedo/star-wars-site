import { GlobalStyle } from './styles/global'
import { BrowserRouter as Router } from 'react-router-dom';
import { Hero } from './components/Hero';

function App() {

  return (
    <Router>
      <Hero />
      <GlobalStyle />
    </Router>
  )
}

export default App
