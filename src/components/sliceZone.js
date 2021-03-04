import React from 'react'
import Hero from './hero'
import CallToActionGrid from './callToActionGrid'

const SliceZone = ({body}) => {
    return(
        <div>
            {body && body.map((bodyContent, i) => {
                    if(bodyContent.type === 'hero'){
                        return (
                            <Hero 
                                title={bodyContent.primary.hero_title}
                                content={bodyContent.primary.hero_content}
                                backgroundImage={bodyContent.primary.background_image}
                                key={i}
                            />
                        )
                    }else if(bodyContent.type === 'calltoaction_grid'){
                        return(
                            <CallToActionGrid 
                                key={i}
                                callToActions={bodyContent.fields}
                                title={bodyContent.primary.section_title}
                            />
                        )
                    }
                    else{
                        return null
                    }
                })}
        </div>
    )
}

export default SliceZone