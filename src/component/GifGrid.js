import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category);
    console.log(category);

    console.log(data);

    return (
        <>
            <h3 className="animate__animated animate_=fadeIn"> {category}</h3>
            {loading && <p className="animated__animated animated__flash">Cargando..!</p>}
            <div className="card-grid">
                {
                    data.map(img => {
                        return <GifGridItem
                            key={img.id}
                            {
                            ...img
                            }></GifGridItem>
                    })
                }
            </div>
        </>

    )
}
