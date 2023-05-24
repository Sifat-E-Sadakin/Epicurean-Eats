import React from 'react';

const MenuAny = ({ item }) => {

    return (
        <div className='container mx-auto my-10'>
            <div className='grid lg:grid-cols-2 gap-5'>
                {
                    item.map(item => <div key={item._id} className='shadow-md rounded-md p-4'>
                        <div className='flex'>
                            <div className='w-[90px]'>
                                <img style={{ borderRadius: ' 0 200px 200px 200px' }} src={item.image} alt="" />
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
            <div className='flex justify-center'>
            <button className='btn btn-outline border-x-0 border-t-0 border-b-4'>Order your favorite food</button>
            </div>


        </div>
    );
};

export default MenuAny;