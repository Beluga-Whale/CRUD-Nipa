import React from 'react';
import Table from '../components/Table';

const Home = () => {
    return (
        <>
            <div className=" bg-pink-600 ">
                <div className="max-w-7xl w-full h-20 flex items-center justify-between mx-auto ">
                    <h1 className="text-white text-3xl font-semibold ">
                        NIPA Crud
                    </h1>
                </div>
            </div>
            <Table />
        </>
    );
};

export default Home;
