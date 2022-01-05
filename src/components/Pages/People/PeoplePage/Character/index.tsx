import { useEffect, useState } from 'react'

import { GiBodyHeight, GiHairStrands, GiWeight } from 'react-icons/gi'
import { HiUser } from 'react-icons/hi'
import { FaBirthdayCake, FaRegEye } from 'react-icons/fa'
import { BsGenderMale } from 'react-icons/bs'

import CharacterImg from '../../../../../assets/CharacterImg.png'



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
    TextContainerA,
    CharacterPlaceholderImg,
} from '../style'
import { PeoplePageProps } from '..'


export const Character = ({ data }: PeoplePageProps) => {

    console.log(
        'This is character 🤠 data :',
        data,
    )


    return (
        <SectionBackground1 >
            <Title>
                Character
            </Title>
            <Content>
                <DefaultSectionDiv>

                    <CharacterPlaceholderImg src={CharacterImg} />
                    <TextContainerA>
                        <TextTitle>
                            {data?.name}
                        </TextTitle>
                        <DefaultTextP>
                            <GiBodyHeight />
                            {data?.height} Cm
                        </DefaultTextP>
                        <DefaultTextP>
                            <GiWeight />
                            {data?.mass} Kg
                        </DefaultTextP>
                        <DefaultTextP>
                            <GiHairStrands />
                            {data?.hair_color}
                        </DefaultTextP>
                        <DefaultTextP>
                            <HiUser />
                            {data?.skin_color}
                        </DefaultTextP>
                        <DefaultTextP>
                            <FaRegEye />
                            {data?.eye_color}
                        </DefaultTextP>
                        <DefaultTextP>
                            <FaBirthdayCake />
                            {data?.birth_year}
                        </DefaultTextP>
                        <DefaultTextP>
                            <BsGenderMale />
                            {data?.gender}
                        </DefaultTextP>
                    </TextContainerA>
                </DefaultSectionDiv>
            </Content>
        </SectionBackground1>
    )
}