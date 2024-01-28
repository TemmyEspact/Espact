import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import './index.css';

export default function CheckboxLabels({ title, ...props }) {
    return <FormControlLabel control={<Checkbox {...props} color="secondary" />} label={title} />;
}
