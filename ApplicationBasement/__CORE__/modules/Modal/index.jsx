import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';

export default function TransitionsModal({ open, onRequestClose, children, ...props }) {
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={onRequestClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
            {...props}
        >
            {children}
        </Modal>
    );
}
