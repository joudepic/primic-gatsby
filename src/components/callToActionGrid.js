import React from 'react'
import styled from 'styled-components'
import RichText from './richText'
import CallToActionBlock from './callToActionBlock'

const CallToActionGridWrapper = styled.section`
    max-width: 800px;
    margin: 0 auto;

`

const CallToActionGrid = ({title, callToActions}) => {
    return(
        <CallToActionGridWrapper>
            <div style={{textAlign: 'center', marginTop: 50}}>
            <RichText render={title} />
            </div>
            {callToActions.map((calltoAction,i) => {
                return(
                    <CallToActionBlock 
                        featuredImage={calltoAction.featured_image.url}
                        title={calltoAction.call_to_action_title}
                        content={calltoAction.content}
                        buttonLabel={calltoAction.button_label}
                        buttonDestination={`/${calltoAction.button_destination._meta.uid}`}
                        key={i} 
                    />
                )
            })}
        </CallToActionGridWrapper>
    )
}

export default CallToActionGrid