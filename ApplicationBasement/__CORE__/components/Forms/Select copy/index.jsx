import { v4 as uuidv4 } from 'uuid';
import Skeleton from '@mui/material/Skeleton';
import Select, { components } from 'react-select';
import { LuChevronsUpDown } from 'react-icons/lu';
import { selectStyles } from './selectStyles';
import './select.css';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
];

const DropdownIndicator = (props) => {
    return (
        <components.DropdownIndicator {...props}>
            <LuChevronsUpDown />
        </components.DropdownIndicator>
    );
};

export default function Selects({ title, onChange = () => null, loading = false, containerStyle, ...props }) {
    const placesID = uuidv4();

    return (
        <div className="mt-[15px] w-full" style={containerStyle}>
            <div className="mb-[10px] font-semibold">{title}</div>
            <div
                style={{
                    height: 40,
                    borderRadius: 10,
                    border: '1px solid #f2f2f2',
                }}
            >
                {loading ? (
                    <div className="pl-[10px] pr-[10px]">
                        <Skeleton animation="wave" height={40} />
                    </div>
                ) : (
                    <div id={placesID} className="flex" style={{ width: '100%' }}>
                        <Select
                            name="colors"
                            options={options}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            components={{ DropdownIndicator }}
                            style={{ height: '50px', width: '100%' }}
                            // menuPortalTarget={document.getElementById(placesID)}
                            menuPortalTarget={document.body}
                            onMenuOpen={() => {
                                document.getElementById(placesID).setAttribute('style', 'z-index:999999; width: 100%');
                            }}
                            onMenuClose={() => {
                                document.getElementById(placesID).setAttribute('style', 'z-index:9999;width: 100%');
                            }}
                            onChange={(e) => {
                                if (e) {
                                    onChange(e);
                                }
                            }}
                            isClearable={true}
                            styles={selectStyles}
                            cacheOptions
                            defaultOptions
                            {...props}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
