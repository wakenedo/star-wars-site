import { BsGenderMale } from "react-icons/bs"
import { FaBirthdayCake, FaRegEye } from "react-icons/fa"
import { GiBodyHeight, GiHairStrands, GiWeight } from "react-icons/gi"
import { HiUser } from "react-icons/hi"
import { 
    DescriptionText, 
    PeopleBadgeContainer, 
    PeopleBadgeTitle, 
    TextContainer 
} from "./style"

export const PeopleBadge = () => {
    return (
        <PeopleBadgeContainer>
            <TextContainer>
            <PeopleBadgeTitle> Luke Skywalker : </PeopleBadgeTitle>
                        <DescriptionText>
                            <GiBodyHeight />
                            172 cm
                        </DescriptionText>
                        <DescriptionText>
                            <GiWeight />
                            72 kg
                        </DescriptionText>
                        <DescriptionText>
                            <GiHairStrands />
                            Blond
                        </DescriptionText>
                        <DescriptionText>
                            <HiUser />
                            Fair
                        </DescriptionText>
                        <DescriptionText>
                            <FaRegEye />
                            Blue
                        </DescriptionText>
                        <DescriptionText>
                            <FaBirthdayCake />
                            19 BBY
                        </DescriptionText>
                        <DescriptionText>
                            <BsGenderMale />
                            Male
                        </DescriptionText>
                    </TextContainer> 
        </PeopleBadgeContainer>
    )
} 