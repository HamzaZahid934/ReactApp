import React, { useState } from 'react'

const PrivacyPolicy = () => {

    const [car, setcar] = useState({
        brand: "ford",
        model: "mustang",
        year: 2020,
        CC: "4600cc",
        color: "Black"

    })

    const changecolor = (e) => {
        setcar(previousState => ({
            ...previousState,
            color: e.target.value
        }))
    }
    return (
        <div>
            <h1>car Details</h1>
            <h2>{car.brand}</h2>
            <h2>{car.model}</h2>
            <h3>The car is {car.year}make and is {car.CC} and the colour is {car.color}</h3>
            <input type='text' value={car.color} onChange={changecolor} placeholder='Enter the colour'></input>
            <button onClick={changecolor}>change the colour
            </button>
        </div>
    )
}

export default PrivacyPolicy