import React, { useState } from 'react'

export const AddCategory = ({ onNewvalue }) => {

    const [inputValuie, setinputValuie] = useState('')

    const handleInputChange = ({ target }) => {
        setinputValuie(target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const newValue = inputValuie.trim()
        if (newValue.length <= 1) return;

        onNewvalue(newValue)
        setinputValuie('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValuie}
                onChange={handleInputChange}
                placeholder="search gifs"
            />
        </form>
    )
}
