

import { 
    DescriptionContainer,
    FilmsContainer,
    HomeWorldContainer,
    PeoplePageContainer, 
    SpeciesContainer,
    StarShipsContainer,
    VehiclesContainer
} from './style'

export function PeoplePage() {
    return (
        
        <PeoplePageContainer>
            This is PeoplePageContainer
           <DescriptionContainer>
               This is Description Container
           </DescriptionContainer>

            <HomeWorldContainer>
                This is HomeWorldContainer
            </HomeWorldContainer>

            <FilmsContainer>
                This is FilmsContainer
            </FilmsContainer>

            <SpeciesContainer>
                This is SpeciesContainer
            </SpeciesContainer>

            <VehiclesContainer>
                This is VehicleContainer
            </VehiclesContainer>

            <StarShipsContainer>
                This is StarShipsContainer
            </StarShipsContainer>            
        </PeoplePageContainer>
        
    )
}