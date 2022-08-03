import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './styles/global'

import { Hero } from './components/Hero';


import { PeoplePage, PeoplePageProps } from './Pages/People/PeoplePage';
import { PlanetPageProps, PlanetsPage } from './Pages/Planets/PlanetsPage';
import { FilmPage, FilmsPageProps } from './Pages/Films/FilmPage';
import { SpeciesPage, SpeciesPageProps } from './Pages/Species/SpeciesPage';
import { VehiclesPage, VehiclesPageProps } from './Pages/Vehicles/VehiclesPage';
import { StarShipsPage, StarShipsPageProps } from './Pages/StarShips/StarShipsPage';

import { PeopleTable } from './Pages/People/PeopleTable';
import { FilmsTable } from './Pages/Films/FilmsTable';
import { PlanetsTable } from './Pages/Planets/PlanetsTable';
import { SpeciesTable } from './Pages/Species/SpeciesTable';
import { VehiclesTable } from './Pages/Vehicles/VehiclesTable';
import { StarShipsTable } from './Pages/StarShips/StarShipsTable';


function App () {

  return (
    <Router>
      <Routes>
        <Route path='/People' element={ <PeopleTable /> } />
        <Route path='/Planets' element={ <PlanetsTable /> } />
        <Route path='/Films' element={ <FilmsTable /> } />
        <Route path='/Species' element={ <SpeciesTable /> } />
        <Route path='/Vehicles' element={ <VehiclesTable /> } />
        <Route path='/StarShips' element={ <StarShipsTable /> } />

        <Route path='/PeoplePage/:url' element={ <PeoplePage /> }  />
        <Route path='/PlanetsPage/:planetsUrl' element={ <PlanetsPage />} />
        <Route path='/FilmsPage/:filmsUrl' element={ <FilmPage />} />
        <Route path='/SpeciesPage/:speciesUrl' element={ <SpeciesPage />} />
        <Route path='/VehiclesPage/:vehiclesUrl' element={ <VehiclesPage />} />
        <Route path='/StarShipsPage/:starShipsUrl' element={ <StarShipsPage />} />
    
        <Route path='/' element={ <Hero /> } />
                
      </Routes>

      <GlobalStyle />
    </Router>
  )
}

export default App
