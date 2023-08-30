import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
const Table = () => {
    const [gridApi, setGridApi] = useState(null);
    const [tableData, setTableData] = useState([
        {
            id: 1,
            title: 'Dane',
            description: 30,
            contact: 'THAI',
            createAt: '14/06/2555',
            updateAt: '14/07/2555',
            status: 'Pending',
        },
        {
            id: 2,
            title: 'Tom',
            description: 10,
            contact: 'THAI',
            createAt: '1/06/2555',
            updateAt: '14/06/2555',
            status: 'Pending',
        },
        {
            id: 3,
            title: 'Jane',
            description: 21,
            contact: 'JAPAN',
            createAt: '11/06/2555',
            updateAt: '13/06/2555',
            status: 'Accepted',
        },
        {
            id: 4,
            title: 'TopNEE',
            description: 35,
            contact: 'JAPAN',
            createAt: '14/06/2555',
            updateAt: '14/06/2555',
            status: 'Resolved',
        },
        {
            id: 5,
            title: 'TopGUN',
            description: 35,
            contact: 'TAIWAN',
            createAt: '14/06/2555',
            updateAt: '14/06/2555',
            status: 'Pending',
        },
        {
            id: 6,
            title: 'Mind',
            description: 35,
            contact: 'TAIWAN',
            createAt: '14/06/2555',
            updateAt: '14/06/2555',
            status: 'Rejected',
        },
    ]);
    const onGridReady = params => {
        setGridApi(params);
    };
    const handleClick = () => {
        alert('TEST');
    };
    const BtnUpdate = params => {
        return (
            <button
                onClick={() => handleClick()}
                className="bg-blue-600 text-white rounded-lg px-3 font-semibold"
            >
                Up Date
            </button>
        );
    };

    const columns = [
        {
            headerName: 'Id',
            field: 'id',
        },
        {
            headerName: 'Title',
            field: 'title',
        },
        {
            headerName: 'Description',
            field: 'description',
        },
        {
            headerName: 'Contact',
            field: 'contact',
        },
        {
            headerName: 'CreateAt',
            field: 'createAt',
        },
        {
            headerName: 'UpdateAt',
            field: 'updateAt',
        },
        {
            headerName: 'Status',
            field: 'status',
            sortable: true,
            filter: true,
            // floatingFilter: true,
        },
        {
            headerName: 'Action',
            cellRenderer: BtnUpdate,
        },
    ];

    return (
        <div className="max-w-7xl mx-auto mt-12">
            <div
                className="ag-theme-alpine"
                style={{ height: 500, width: '100%' }}
            >
                <AgGridReact
                    rowData={tableData}
                    columnDefs={columns}
                    onGridReady={onGridReady}
                />
            </div>
        </div>
    );
};

export default Table;
