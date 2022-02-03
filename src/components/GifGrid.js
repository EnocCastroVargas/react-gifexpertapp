import React from 'react';
import { useFecthGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {


    const {data:images, loading} = useFecthGifs(category);
    
    
    // useEffect( () => {
    //     getGifs(category)
    //         .then(setImages);
    // }, [category]);


    return (
        <>
        <h3 className='animate__animated animate__fadeIn'>{category}</h3>

        {loading && <p className='animate__animated animate__flash'>Loading</p>}

        <div className='card-grid'>
            <ol>
                {
                    images.map(img => (
                        <GifGridItem 
                            key = {img.id}
                            {... img} 
                        />
                    ))
                }
            </ol>
        </div>
        </>
    );
};
