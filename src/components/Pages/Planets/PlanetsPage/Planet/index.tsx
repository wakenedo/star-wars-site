import PlanetsImg from '../../../../../assets/PlanetImg.png'

import {
    //Default Styles
    SectionBackground1,
    DefaultSectionDiv,
    Title,
    TextTitle,
    DefaultTextP,
    Content,
} from '../../../../../styles/global';

import {
    PlanetBadgeTextContainer,
    DescriptionImage,
} from '../style'

import { PlanetPageProps } from '..'

export const Planet = ({ data }: PlanetPageProps) => {

    console.log(
        'This is planet 🌎 data :',
        data,
    )

    return (
        <SectionBackground1 >
            <Title>
                Planet
            </Title>
            <Content>
                <DefaultSectionDiv>
                    <DescriptionImage src={PlanetsImg} />
                    <PlanetBadgeTextContainer>
                        <TextTitle>
                            {data?.name}
                        </TextTitle>
                        <DefaultTextP>             
                            Climate : {data?.climate}
                        </DefaultTextP>
                        <DefaultTextP>         
                            Diameter : {data?.diameter} Km
                        </DefaultTextP>
                        <DefaultTextP>    
                            Gravity : {data?.gravity}
                        </DefaultTextP>
                        <DefaultTextP>
                            Orbital Period : {data?.orbital_period} Days
                        </DefaultTextP>
                        <DefaultTextP>     
                            Population : {data?.population}
                        </DefaultTextP>
                        <DefaultTextP>   
                            Rotation Period : {data?.rotation_period} Hours
                        </DefaultTextP>
                        <DefaultTextP>    
                            Surface Water : {data?.surface_water} %
                        </DefaultTextP>
                        <DefaultTextP>    
                            Terrain : {data?.terrain}
                        </DefaultTextP>
                    </PlanetBadgeTextContainer>
                </DefaultSectionDiv>
            </Content>
        </SectionBackground1>
    )
}