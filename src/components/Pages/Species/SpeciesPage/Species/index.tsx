
import {
    //Default Styles
    SectionBackground1,
    DefaultSectionDiv,
    Title,
    TextTitle,
    DefaultTextP,
    Content,
    PlanetContainerText,
} from '../../../../../styles/global';

import { SpeciesPageProps } from '..'

export const Species = ({ data }: SpeciesPageProps) => {

    console.log(
        'This is species 🐛 data :',
        data,
    )

    return (
        <SectionBackground1 >
            <Title>
                Species
            </Title>
            <Content>
                <DefaultSectionDiv>
                    <PlanetContainerText>
                        <TextTitle>
                            {data?.name}
                        </TextTitle>
                        <DefaultTextP>             
                            Classification : {data?.classification}
                        </DefaultTextP>
                        <DefaultTextP>         
                            Average Height : {data?.average_height} Cm
                        </DefaultTextP>
                        <DefaultTextP>    
                            Skin Colors : {data?.skin_colors}
                        </DefaultTextP>
                        <DefaultTextP>
                            Hair Colors : {data?.hair_colors} 
                        </DefaultTextP>
                        <DefaultTextP>     
                            Eye Colors : {data?.eye_colors}
                        </DefaultTextP>
                        <DefaultTextP>   
                            Average Lifespan : {data?.average_lifespan} Years
                        </DefaultTextP>
                        <DefaultTextP>    
                            Language : {data?.language}
                        </DefaultTextP>
                    </PlanetContainerText>
                </DefaultSectionDiv>
            </Content>
        </SectionBackground1>
    )
}