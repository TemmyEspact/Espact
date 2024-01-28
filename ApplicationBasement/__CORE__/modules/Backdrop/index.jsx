import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function BackDrop({ open, handleOnClose }) {
    return (
        <div>
            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={open}
                // onClick={() => handleOnClose()}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        </div>
    );
}
