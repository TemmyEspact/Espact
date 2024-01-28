import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export default function ButtonWrapper({ title, ...props }) {
    const BootstrapButton = styled(Button)({
        'boxShadow': 'none',
        'textTransform': 'none',
        'fontSize': 16,
        'padding': '6px 12px',
        'border': '1px solid',
        'lineHeight': 1.5,
        '&:hover': {
            boxShadow: 'none',
        },
    });
    return (
        <BootstrapButton variant="contained" {...props}>
            {title}
        </BootstrapButton>
    );
}
