import React from 'react'
import About from './About'


const Home = (prop) => {
    const { Companydata, aboutdata, addressdata } = prop
    let title = "HEllo"
    let description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur repellat cum veniam, fugit enim totam dolores et voluptas possimus. Mollitia corrupti velit porro qui laudantium nisi, quo repellendus optio laborum?"
    return (
        <div> This isHome Page {Companydata} {aboutdata} {addressdata} {About}
            <About titledata={title} descriptiondata={description} />
        </div>
    )
}

export default Home