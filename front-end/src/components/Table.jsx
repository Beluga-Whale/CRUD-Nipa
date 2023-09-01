import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Button } from '@mui/material';
import ModalEdit from './ModalEdit';
const Table = () => {
    const [gridApi, setGridApi] = useState(null);
    const [tableData, setTableData] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [idUpdate, setIdUpdate] = useState('');
    const onGridReady = params => {
        setGridApi(params);
    };
    const getTicket = async () => {
        await axios
            .get('http://localhost:7000/api/tickets')
            .then(res => setTableData(res.data));
    };
    useEffect(() => {
        getTicket();
    }, [setTableData]);

    const openModalEdit = id => {
        setIdUpdate(id);
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const BtnUpdate = params => {
        return (
            <Button onClick={() => openModalEdit(params.data._id)}>
                Update
            </Button>
        );
    };
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
            sortable: true,
        },
        {
            headerName: 'CreateAt',
            field: 'createdAt',
            sortable: true,
        },
        {
            headerName: 'UpdateAt',
            field: 'updatedAt',
            sortable: true,
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
            field: '_id',
            cellRenderer: BtnUpdate,
        },
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
                {isModalOpen && (
                    <ModalEdit
                        id={idUpdate}
                        isModalOpen={isModalOpen}
                        closeModal={closeModal}
                    />
                )}
            </div>
        </div>
    );
};

export default Table;
