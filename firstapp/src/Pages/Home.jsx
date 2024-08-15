import React from 'react'

const Home = (prop) => {
    const { Companydata, aboutdata, addressdata } = prop
    return (
        <div> This isHome Page {Companydata} {aboutdata} {addressdata}</div>
    )
}

export default Home