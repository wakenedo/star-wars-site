import { SideBar } from './components/SideBar'
import { GlobalStyle } from './styles/global'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

    return (
      <Router>
        <SideBar />
        <GlobalStyle />
      </Router>
    )
  }

export default App
