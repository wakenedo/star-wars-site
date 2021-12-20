import {
    TextTitle
} from '../../../../../styles/global'

import {
    FilmPagePlanetsText,
    FilmPagePlanetsTextContainer,
} from "./style"


export const FilmPagePlanetsBadge = () => {
    return (
        <FilmPagePlanetsTextContainer>
            <TextTitle>
                Tatooine
            </TextTitle>
            <FilmPagePlanetsText>
                Rotation Period : 23 Hours
            </FilmPagePlanetsText>
            <FilmPagePlanetsText>
                Orbital Period : 304 Days
            </FilmPagePlanetsText>
            <FilmPagePlanetsText>
                Diameter : 10465 Kilometers
            </FilmPagePlanetsText>
            <FilmPagePlanetsText>
                Climate : Arid
            </FilmPagePlanetsText>
            <FilmPagePlanetsText>
                Gravity : 1 Standard
            </FilmPagePlanetsText>
            <FilmPagePlanetsText>
                Terrain : Desert
            </FilmPagePlanetsText>
            <FilmPagePlanetsText>
                Surface Water : 1 %
            </FilmPagePlanetsText>
            <FilmPagePlanetsText>
                Population : 200.000
            </FilmPagePlanetsText>
        </FilmPagePlanetsTextContainer>

    )
}