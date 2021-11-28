import { GlobalStyle } from './styles/global'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Hero } from './components/Hero';
import { PeoplePage } from './components/Pages/People/PeoplePage';
import { PeopleTable } from './components/Pages/People/PeopleTable';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/PeopleTable' element={ <PeopleTable /> } />
        <Route path='/PeoplePage' element={ <PeoplePage />} />
        <Route path='/' element={ <Hero /> } />
                
      </Routes>

      <GlobalStyle />
    </Router>
  )
}

export default App
