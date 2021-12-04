import { GlobalStyle } from './styles/global'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Hero } from './components/Hero';
import { PeoplePage } from './components/Pages/People/PeoplePage';
import { PeopleTable } from './components/Pages/People/PeopleTable';
import { FilmsTable } from './components/Pages/Films/FilmsTable';
import { FilmsPage } from './components/Pages/Films/FilmsPage';


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/People' element={ <PeopleTable /> } />
        <Route path='/PeoplePage' element={ <PeoplePage />} />
        <Route path='/Films' element={ <FilmsTable /> } />
        <Route path='/FilmsPage' element={ <FilmsPage /> } />
        <Route path='/' element={ <Hero /> } />
                
      </Routes>

      <GlobalStyle />
    </Router>
  )
}

export default App
