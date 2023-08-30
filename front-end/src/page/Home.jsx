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
            <div className="max-w-7xl w-full mx-auto ">
                <div className="flex items-center justify-between mt-5">
                    <h1 className="text-2xl font-bold text-slate-700">Home</h1>
                    <button className="text-lg font-medium bg-blue-600 text-white p-3 rounded-lg hover:bg-white hover:border-blue-600 hover:border-2 hover:text-blue-600">
                        Add Ticket
                    </button>
                </div>
            </div>
            <Table />
        </>
    );
};

export default Home;
