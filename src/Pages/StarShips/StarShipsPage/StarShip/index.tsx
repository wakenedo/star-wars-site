
import {
    //Default Styles
    SectionBackground1,
    DefaultSectionDiv,
    Title,
    TextTitle,
    DefaultTextP,
    Content,
    PlanetContainerText,
} from '../../../../styles/global';

import { StarShipsPageProps } from '..'

export const StarShip = ({ data }: StarShipsPageProps) => {

    console.log(
        'This is starship 🛸 data :',
        data,
    )

    return (
        <SectionBackground1 >
            <Title>
                Star Ship
            </Title>
            <Content>
                <DefaultSectionDiv>
                    <PlanetContainerText>
                        <TextTitle>
                            {data?.name}
                        </TextTitle>
                        <DefaultTextP>             
                            Model : {data?.model}
                        </DefaultTextP>
                        <DefaultTextP>         
                            Cost In Credits : {data?.cost_in_credits} 
                        </DefaultTextP>
                        <DefaultTextP>    
                            Lenght : {data?.lenght}
                        </DefaultTextP>
                        <DefaultTextP>
                            Max Atmosphering Speed: {data?.max_atmosphering_speed} 
                        </DefaultTextP>
                        <DefaultTextP>     
                            Crew : {data?.crew}
                        </DefaultTextP>
                        <DefaultTextP>   
                            Passengers : {data?.passengers} 
                        </DefaultTextP>
                        <DefaultTextP>    
                            Cargo Capacity: {data?.cargo_capacity}
                        </DefaultTextP>
                        <DefaultTextP>    
                            Consumables: {data?.consumables}
                        </DefaultTextP>
                        <DefaultTextP>    
                            Hyper Drive Rating: {data?.hyperdrive_rating}
                        </DefaultTextP>
                        <DefaultTextP>    
                            MGLT: {data?.MGLT}
                        </DefaultTextP>
                        <DefaultTextP>    
                            Star Ship Class: {data?.starship_class}
                        </DefaultTextP>
                    </PlanetContainerText>
                </DefaultSectionDiv>
            </Content>
        </SectionBackground1>
    )
}