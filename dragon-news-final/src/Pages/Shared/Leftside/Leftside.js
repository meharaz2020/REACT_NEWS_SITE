 import React, { useState } from 'react';
 import { useEffect } from 'react';
import { Link } from 'react-router-dom';

 const Leftside = () => {
    const [categorys,setcategories]=useState([]);
    useEffect(()=>{
        fetch('https://server-indol-beta.vercel.app/news-categories')
        .then(res=>res.json())
        .then(data=>setcategories(data))
    },[]);
    return (
        <div>
            <h4 className='text-center'>All category: {categorys.length}</h4>
            <div  className='text-center'>
            {
                categorys.map(category=><p key={category.id}>
                    <Link to={`/category/${category.id}`} style={{ textDecoration: 'none' ,color:'blue'}} className="text-bold">{category.name}</Link>
                </p>)
            }
            </div>
        </div>
    );
 };
 
 export default Leftside;