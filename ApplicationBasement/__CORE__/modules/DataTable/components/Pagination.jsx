import { gridPageCountSelector, GridPagination, useGridApiContext, useGridSelector } from '@mui/x-data-grid-pro';
import MuiPagination from '@mui/material/Pagination';
import { styled } from '@mui/material/styles';

const StyledMuiPagination = styled((props) => <MuiPagination {...props} />)(({ theme }) => ({
    ul: {
        '& .MuiPaginationItem-root': {
            '&.Mui-selected': {
                background: '#FA6017',
                color: '#ffffff',
            },
        },
    },
}));

function Pagination({ page, onPageChange, className }) {
    const apiRef = useGridApiContext();
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <StyledMuiPagination
            color="primary"
            className={className}
            count={pageCount}
            page={page + 1}
            onChange={(event, newPage) => {
                onPageChange(event, newPage - 1);
            }}
        />
    );
}

export default function Paginations(props) {
    return <GridPagination ActionsComponent={Pagination} {...props} />;
}
