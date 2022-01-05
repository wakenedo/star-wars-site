
import {FilmsBadge4,FilmsBadge5,FilmsBadge6} from '../../../../PagesFilmBadge';

import {
    //Default Styles
    SectionNoBackground,
    DefaultSectionDiv,
    Title,
    Content,

} from '../../../../../styles/global';


export const Films = () => {
    return (
        <SectionNoBackground>
            <Title>
                Films 
            </Title>
            <Content>
                <DefaultSectionDiv>
                    <FilmsBadge4 />
                    <FilmsBadge5 />
                    <FilmsBadge6 />
                </DefaultSectionDiv>
            </Content>
        </SectionNoBackground>
    )
}