import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
const Table = () => {
    const [gridApi, setGridApi] = useState(null);
    const [tableData, setTableData] = useState(null);
    const onGridReady = params => {
        setGridApi(params);
    };
    const getTicket = () => {
        axios
            .get('http://localhost:7000/api/tickets')
            .then(res => setTableData(res.data));
    };
    useEffect(() => {
        getTicket();
    }, []);
    const columns = [
        {
            headerName: 'ID',
            field: '_id',
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
            field: 'createdAt',
        },
        {
            headerName: 'UpdateAt',
            field: 'updatedAt',
        },
        {
            headerName: 'Status',
            field: 'status',
            sortable: true,
            filter: true,
            // floatingFilter: true,
        },
        // {
        //     headerName: 'Action',
        //     cellRenderer: BtnUpdate,
        // },
    ];

    return (
        <div className="max-w-7xl mx-auto mt-4">
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
