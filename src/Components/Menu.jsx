import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';

const Menu = () => {

    let [menu , setMenu] = useState([]);

    useEffect(()=>{
        fetch('menu.json')
        .then(res=> res.json())
        .then(data=>{
            let popular = data.filter(item => item.category == 'popular')
            setMenu(popular)
        })
    },[])
    
    return (
        <div className='container mx-auto'>
            <SectionTitle subTitle={'Check it Out'} title={'from our menu'}></SectionTitle>
            <div  className='grid lg:grid-cols-2 gap-5 '>
                {
                    menu.map(item => <div key={item._id} className='shadow-md rounded-md p-4'>
                        <div className='flex'>
                            <div className='w-[90px]'>
                                <img style={{borderRadius:' 0 200px 200px 200px'}}  src={item.image} alt="" />
                            </div>
                            <div>
                                <h1 className='font-semibold'>{item.name}-----------</h1>
                                <p>{item.recipe}</p>
                            </div>
                            <div>
                                <h1 className='text-error'>${item.price}</h1>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Menu;