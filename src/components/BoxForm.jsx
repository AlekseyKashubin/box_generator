import React, { useState } from "react";

const BoxForm = props => {
    const { addFunction } = props

    const [boxData, setBoxData] = useState({
        kColor: ""

    })


    const formSubmit = (e) => {
        e.preventDefault()

        addFunction(boxData)

        setBoxData({
            kColor: "",

        })
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setBoxData(currentData => ({ ...currentData, [name]: value }))

    }

    return (
        <form onSubmit={formSubmit}>


            <div className="box-box">

                <h1 className="title">Add a box</h1>

                <label>Color : </label>
                <input onChange={handleChange} name="kColor" value={boxData.kColor} type="text"></input>

                <button>Add</button>


            </div>

        </form>
    )

}
export default BoxForm