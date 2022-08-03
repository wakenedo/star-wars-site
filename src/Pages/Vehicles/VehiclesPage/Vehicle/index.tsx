
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

import { VehiclesPageProps } from '..'

export const Vehicle = ({ data }: VehiclesPageProps) => {

    console.log(
        'This is vehicle 🐛 data :',
        data,
    )

    return (
        <SectionBackground1 >
            <Title>
                Vehicle
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
                            Vehicle Class: {data?.vehicle_class}
                        </DefaultTextP>
                    </PlanetContainerText>
                </DefaultSectionDiv>
            </Content>
        </SectionBackground1>
    )
}