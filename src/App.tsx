import { GlobalStyle } from './styles/global'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Hero } from './components/Hero';
import { PeoplePage } from './components/Pages/People/PeoplePage';
import { PeopleTable } from './components/Pages/People/PeopleTable';
import { FilmsTable } from './components/Pages/Films/FilmsTable';
import { FilmPage } from './components/Pages/Films/FilmPage';
import { FilmPageEP1 } from './components/Pages/Films/FilmPageEP1';
import { FilmPageEP4 } from './components/Pages/Films/FilmPageEP4';
import { FilmPageEP2 } from './components/Pages/Films/FilmPageEP2';
import { FilmPageEP3 } from './components/Pages/Films/FilmPageEP3';
import { FilmPageEP5 } from './components/Pages/Films/FilmPageEP5';
import { FilmPageEP6 } from './components/Pages/Films/FilmPageEP6';



function App() {

  return (
    <Router>
      <Routes>
        <Route path='/People' element={ <PeopleTable /> } />
        <Route path='/PeoplePage/:url' element={ <PeoplePage />} />
        <Route path='/Films' element={ <FilmsTable /> } />
        <Route path='/Films/Episode_1' element={ <FilmPageEP1 /> } />
        <Route path='/Films/Episode_2' element={ <FilmPageEP2 /> } />
        <Route path='/Films/Episode_3' element={ <FilmPageEP3 /> } />
        <Route path='/Films/Episode_4' element={ <FilmPageEP4 /> } />
        <Route path='/Films/Episode_5' element={ <FilmPageEP5 /> } />
        <Route path='/Films/Episode_6' element={ <FilmPageEP6 /> } />
        <Route path='/' element={ <Hero /> } />
                
      </Routes>

      <GlobalStyle />
    </Router>
  )
}

export default App
