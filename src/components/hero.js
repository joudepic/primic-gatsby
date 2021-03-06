import React from 'react'
import RichText from './richText'
import styled from 'styled-components'

const HeroWrapper = styled.section`
    background: url('${props => props.backgroundImage}');
    height: calc(100vh - 66px);
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    text-align: center;
    color: white;

    div{
        max-width: 800px;
        margin: 0 auto;
        background: rgba(0,0,0,0.5)
    }
`

const Hero = ({ title, content,backgroundImage }) => {
    console.log(backgroundImage)
    return (
        <HeroWrapper backgroundImage={backgroundImage.url}>
            <div>
                <RichText render={title} />
                <p>{content}</p>
            </div>
        </HeroWrapper>
    )
}

export default Hero