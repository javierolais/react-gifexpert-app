import React, {useState} from 'react';
import { AddCategory } from './component/AddCategory';
import { GifGrid } from './component/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     // setCategories(['Hunter x Hunter', ...categories]);
    //     setCategories(cats => [...cats, 'Hunter x Hunter'])
    // };
    return (
        <>
            <h2>GifExpertApp</h2>
            <hr></hr>

            <AddCategory setCategories={setCategories}> </AddCategory>

            {/* <button onClick={handleAdd}>Agregar</button> */}
            <ol>
                {
                    categories.map((categorie) => {
                        // return <li key = {categorie}> {categorie} </li>
                        return <GifGrid 
                        key={categorie}
                        category={categorie}>   
                        </GifGrid>
                    })
                }
            </ol>
        </>
    )
};

export default GifExpertApp;
