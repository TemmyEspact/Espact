import { memo, useState } from 'react';
import { LicenseInfo } from '@mui/x-data-grid-pro';
import { DataGridPro, GridRow, GridColumnHeaders, GRID_CHECKBOX_SELECTION_COL_DEF } from '@mui/x-data-grid-pro';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled, alpha } from '@mui/material/styles';
import { v4 as uuidv4 } from 'uuid';
import Pagination from './components/Pagination';
import Toolbar from './components/Toolbar';
import './style.css';
import { useEffect } from 'react';

LicenseInfo.setLicenseKey(
    'b5b3330d122f8dcdbb2d0e6aedcdff63Tz1PTFVCUkFJTklTSEVSRSxFPTQ4NDEwNjQwMTEyODAsUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y',
);
const MemoizedRow = memo(GridRow);
const MemoizedColumnHeaders = memo(GridColumnHeaders);

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        // anchorOrigin={{
        //     vertical: 'bottom',
        //     horizontal: 'right',
        // }}
        // transformOrigin={{
        //     vertical: 'top',
        //     horizontal: 'right',
        // }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        'borderRadius': 6,
        'marginTop': theme.spacing(1),
        'minWidth': 180,
        'color': theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        'boxShadow':
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            },
        },
    },
}));

export default function DataTable({
    loading,
    data = [],
    columns = [],
    toolbar = true,
    title,
    onlyView = true,
    onRowClick,
    noActionButton,
    pageActionButtonTitle,
    pageActionButtonHander,
    ...props
}) {
    const [searchText, setSearchText] = useState('');
    const [rows, setRows] = useState(data);

    const [selectedRow, setSelectedRow] = useState();
    const [contextMenu, setContextMenu] = useState(null);

    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState('');

    const handlePopoverOpen = (event) => {
        const field = event.currentTarget.innerText;
        setValue(field);
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const handleContextMenu = (event) => {
        event.preventDefault();
        setSelectedRow(Number(event.currentTarget.getAttribute('data-id')));
        setContextMenu(contextMenu === null ? { mouseX: event.clientX - 2, mouseY: event.clientY - 4 } : null);
    };

    const handleClose = () => {
        setContextMenu(null);
    };

    const buildProps = {
        ...props,
        ...(onRowClick && { onRowClick: (e) => onRowClick(e) }),
    };

    return (
        <div className="h-[100%] bg-white m-[10px] rounded-[10px]">
            <DataGridPro
                rows={rows}
                columns={columns}
                getRowId={(row) => row.serialNumber || uuidv4()}
                loading={loading}
                initialState={{
                    pinnedColumns: { right: ['Actions'], left: [GRID_CHECKBOX_SELECTION_COL_DEF.field] },
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10, 20, 30, 50]}
                pagination={true}
                rowHeight={38}
                // checkboxSelection
                disableRowSelectionOnClick
                slotProps={{
                    toolbar: {
                        printOptions: { disableToolbarButton: true },
                        title,
                        noActionButton,
                        pageActionButtonTitle,
                        pageActionButtonHander,
                        // value: searchText,
                        // onChange: (event) => requestSearch(event.target.value),
                        // clearSearch: () => requestSearch(''),
                    },

                    cell: {
                        // onMouseEnter: handlePopoverOpen,
                        // onDoubleClickCapture: handlePopoverOpen,
                        onMouseLeave: handlePopoverClose,
                        data,
                        // style: { userSelect: 'none' },
                        unselectable: 'on',
                        onselectstart: 'return false',
                        onmousedown: 'return false',
                        className: 'user-select-none',
                    },
                    row: {
                        onContextMenu: handleContextMenu,
                        style: { cursor: 'context-menu' },
                        title: false,
                        onlyView,
                    },
                }}
                // onCellClick={(params, e) => handlePopoverOpen(e)}
                slots={{
                    Row: MemoizedRow,
                    ColumnHeaders: MemoizedColumnHeaders,
                    toolbar: toolbar ? Toolbar : null,
                    pagination: Pagination,
                }}
                localeText={{
                    // toolbarColumns: 'my columns',
                    toolbarFilters: 'Filters',
                    // toolbarDensity: 'my density',
                    toolbarExport: 'Export CSV',
                    toolbarQuickFilterPlaceholder: 'Quick Search',
                }}
                // onRowClick={(e) => console.log(e)}
                {...buildProps}
            />
            <StyledMenu
                open={contextMenu !== null}
                onClose={handleClose}
                anchorReference="anchorPosition"
                anchorPosition={
                    contextMenu !== null ? { top: contextMenu.mouseY, left: contextMenu.mouseX } : undefined
                }
                slotProps={{
                    root: {
                        onContextMenu: (e) => {
                            e.preventDefault();
                            handleClose();
                        },
                    },
                }}
            >
                <MenuItem disableRipple>Action Menu</MenuItem>
                {!onlyView && <MenuItem disableRipple>Assign Case</MenuItem>}
                <MenuItem disableRipple>View Case</MenuItem>
            </StyledMenu>
            <Popover
                sx={{
                    pointerEvents: 'none',
                }}
                open={open}
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                onClose={handlePopoverClose}
                disableRestoreFocus
            >
                <Typography sx={{ p: 1 }}>{`${value}`}</Typography>
            </Popover>
        </div>
    );
}
