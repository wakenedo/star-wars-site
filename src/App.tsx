import { GlobalStyle } from './styles/global'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Hero } from './components/Hero';


import { PeoplePage } from './components/Pages/People/PeoplePage';
import { PlanetsPage } from './components/Pages/Planets/PlanetsPage';
import { FilmPage } from './components/Pages/Films/FilmPage';
import { SpeciesPage } from './components/Pages/Species/SpeciesPage';

import { PeopleTable } from './components/Pages/People/PeopleTable';
import { FilmsTable } from './components/Pages/Films/FilmsTable';
import { PlanetsTable } from './components/Pages/Planets/PlanetsTable';
import { SpeciesTable } from './components/Pages/Species/SpeciesTable';
import { VehiclesTable } from './components/Pages/Vehicles/VehiclesTable';
import { StarShipsTable } from './components/Pages/StarShips/StarShipsTable';




function App() {

  return (
    <Router>
      <Routes>
        <Route path='/People' element={ <PeopleTable /> } />
        <Route path='/Planets' element={ <PlanetsTable /> } />
        <Route path='/Films' element={ <FilmsTable /> } />
        <Route path='/Species' element={ <SpeciesTable /> } />
        <Route path='/Vehicles' element={ <VehiclesTable /> } />
        <Route path='/StarShips' element={ <StarShipsTable /> } />

        <Route path='/PeoplePage/:url' element={ <PeoplePage />} />
        <Route path='/PlanetsPage/:planetsUrl' element={ <PlanetsPage />} />
        <Route path='/FilmsPage/:filmsUrl' element={ <FilmPage />} />
        <Route path='/SpeciesPage/:speciesUrl' element={ <SpeciesPage />} />
    
        <Route path='/' element={ <Hero /> } />
                
      </Routes>

      <GlobalStyle />
    </Router>
  )
}

export default App
