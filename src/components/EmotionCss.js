import styled from '@emotion/styled'

const EmotionSocialText = styled.h6`
    position: relative;
    margin: ${props => props.margin || '0 0 10px'};
    font-size: 12px;
    color: #b5b5b5;
    text-align: center;

    &:before, &:after {
        content: "";
        border-top: 1px solid #b5b5b5;
        display: block;
        width: 60px;
        position: absolute;
        top: 5px;
    }
    &:before {
        left: 30px;
    }
    &:after {
        right: 30px;
    }
`
const EmotionSocialLogo = styled.img`
    width: 30px;
    height: 30px;
`

export { 
    EmotionSocialText,
    EmotionSocialLogo
}