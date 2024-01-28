import React, { memo } from 'react';
import { LicenseInfo } from '@mui/x-data-grid-pro';
import { DataGridPro, GridRow, GridColumnHeaders } from '@mui/x-data-grid-pro';

LicenseInfo.setLicenseKey(
    'b5b3330d122f8dcdbb2d0e6aedcdff63Tz1PTFVCUkFJTklTSEVSRSxFPTQ4NDEwNjQwMTEyODAsUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y',
);
const MemoizedRow = memo(GridRow);
const MemoizedColumnHeaders = memo(GridColumnHeaders);

export default function DataTable() {
    const [hoveredRow, setHoveredRow] = React.useState(null);

    const onMouseEnterRow = (event) => {
        const id = Number(event.currentTarget.getAttribute('data-id'));
        setHoveredRow(id);
    };

    const onMouseLeaveRow = (event) => {
        setHoveredRow(null);
    };

    const rows = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
        { id: 3, col1: 'MUI', col2: 'is Amazing' },
    ];

    const columns = [
        { field: 'col1', headerName: 'Column 1', width: 150, minWidth: 150, maxWidth: 200 },
        { field: 'col2', headerName: 'Column 2', width: 150, resizable: false },
        {
            field: 'actions',
            headerName: '',
            width: 150,
            minWidth: 150,
            maxWidth: 200,
            editable: true,
            sortable: false,
            disableColumnMenu: true,
            description: 'This column has a value getter and is not sortable.',
            renderCell: (params) => {
                if (hoveredRow === params.id) {
                    return (
                        <Box
                            sx={{
                                // backgroundColor: "whitesmoke",
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <IconButton onClick={() => console.log(params.id)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton onClick={() => console.log(params.id)}>
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    );
                } else return null;
            },
        },
    ];

    return (
        <DataGridPro
            // {...data}
            // loading={data.rows.length === 0}
            slotProps={{
                row: {
                    onMouseEnter: onMouseEnterRow,
                    onMouseLeave: onMouseLeaveRow,
                },
            }}
            rows={rows}
            columns={columns}
            rowHeight={38}
            checkboxSelection
            disableRowSelectionOnClick
            slots={{
                Row: MemoizedRow,
                ColumnHeaders: MemoizedColumnHeaders,
            }}
        />
    );
}
