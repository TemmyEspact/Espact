import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import LinearProgress from '@mui/material/LinearProgress';

export default function RequestPreloader({ open, handleOnClose, props }) {
    return (
        <>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleOnClose}
                closeAfterTransition
                {...props}
            >
                <div className="absolute top-0 left-0 right-0">
                    <LinearProgress />
                    <div className="w-full flex justify-end pr-[20px] pt-[5px]">
                        <CircularProgress color="inherit" size={25} />
                    </div>
                </div>
            </Modal>
        </>
    );
}
