import { v4 as uuidv4 } from 'uuid';
import Skeleton from '@mui/material/Skeleton';
import './select.css';

import Select from './Select';
import MultiSelect from './Multi';

const d_options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

export default function Selects({
    title,
    type = 'single',
    onChange = () => null,
    loading = false,
    containerStyle,
    options,
    ...props
}) {
    const placesID = uuidv4();

    return (
        <div className="mt-[15px] w-full" style={containerStyle}>
            <div className="mb-[10px] font-semibold">{title}</div>
            <div
                style={{
                    minHeight: 40,
                    borderRadius: 10,
                    border: '1px solid #f2f2f2',
                }}
            >
                {loading ? (
                    <div className="pl-[10px] pr-[10px]">
                        <Skeleton animation="wave" height={40} />
                    </div>
                ) : (
                    <div style={{ width: '100%', minHeight: 30 }}>
                        {type == 'single' ? (
                            <Select
                                options={options || d_options}
                                onChange={(e) => onChange(e)}
                                {...props}
                                placeholder={title}
                            />
                        ) : (
                            <MultiSelect
                                options={options || d_options}
                                onChange={(e) => onChange(e)}
                                {...props}
                                placeholder={title}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
