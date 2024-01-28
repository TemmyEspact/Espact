import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import LoadingButton from '@mui/lab/LoadingButton';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialog({
    open,
    handleOnClose = () => null,
    title,
    content,
    actionButtonText,
    onClickActionButton = () => null,
    loading,
}) {
    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => handleOnClose()}
                aria-describedby="alert-dialog-slide-description"
                fullWidth
                maxWidth="sm"
            >
                <DialogTitle>{title ?? 'Notification'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">{content}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => handleOnClose()}>Close</Button>
                    {actionButtonText && (
                        <LoadingButton onClick={() => onClickActionButton()} loading={loading}>
                            {actionButtonText}
                        </LoadingButton>
                    )}
                </DialogActions>
            </Dialog>
        </div>
    );
}
