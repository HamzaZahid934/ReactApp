import React from 'react'
import PrivacyPolicy from './PrivacyPolicy'



const About = (abt) => {
    const { titledata, descriptiondata } = abt

    let number = "0311000000"
    let location = "abc "
    return (
        <div>This is about page
            <h1>{titledata}</h1>
            <p>{descriptiondata}</p>
            <PrivacyPolicy numberdata={number} locationdata={location} />
        </div>
    )
}

export default About