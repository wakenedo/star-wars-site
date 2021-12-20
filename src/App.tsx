import { GlobalStyle } from './styles/global'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Hero } from './components/Hero';
import { PeoplePage } from './components/Pages/People/PeoplePage';
import { PeopleTable } from './components/Pages/People/PeopleTable';
import { FilmsTable } from './components/Pages/Films/FilmsTable';
import { FilmPage } from './components/Pages/Films/FilmPage';
import { FilmPageEP1 } from './components/Pages/Films/FilmPageEP1';
import { FilmPageEP4 } from './components/Pages/Films/FilmPageEP4';



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/People' element={ <PeopleTable /> } />
        <Route path='/PeoplePage' element={ <PeoplePage />} />
        <Route path='/Films' element={ <FilmsTable /> } />
        <Route path='/Films/Episode_1' element={ <FilmPageEP1 /> } />
        <Route path='/Films/Episode_2' element={ <FilmPage /> } />
        <Route path='/Films/Episode_3' element={ <FilmPage /> } />
        <Route path='/Films/Episode_4' element={ <FilmPageEP4 /> } />
        <Route path='/Films/Episode_5' element={ <FilmPage /> } />
        <Route path='/Films/Episode_6' element={ <FilmPage /> } />
        <Route path='/Films/Episode_7' element={ <FilmPage /> } />
        <Route path='/' element={ <Hero /> } />
                
      </Routes>

      <GlobalStyle />
    </Router>
  )
}

export default App
