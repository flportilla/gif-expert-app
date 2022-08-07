import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    const handleAddCategory = (value = '') => {

        if (categories.includes(value)) return;

        setCategories([value, ...categories]);
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewvalue={handleAddCategory} />
            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }

        </>
    )
};
