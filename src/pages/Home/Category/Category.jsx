import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCart from '../NewsCart/NewsCart';

const Category = () => {

    let { id } = useParams();
   const categoryNews = useLoaderData();

    return (
        <div className='d-flex flex-column gap-4'>
            {

                 categoryNews.map(eachNews => <NewsCart key={eachNews._id} news={eachNews}></NewsCart>)
            }
        </div>
    );
};

export default Category;