import useAutocomplete from '@mui/material/useAutocomplete';
import { styled } from '@mui/system';

const Input = styled('input')(({ theme }) => ({
    'width': '100%',
    'height': '100%',
    'padding-left': '10px',
    'padding-right': '10px',
    'color': theme.palette.mode === 'light' ? '#000' : '#fff',
}));

const Listbox = styled('ul')(({ theme }) => ({
    'margin': 0,
    'width': '100%',
    'padding': 0,
    'zIndex': 1,
    'position': 'absolute',
    'listStyle': 'none',
    'backgroundColor': theme.palette.mode === 'light' ? '#fff' : '#000',
    'overflow': 'auto',
    'maxHeight': 200,
    'border': '1px solid rgba(0,0,0,.25)',
    '& li': {
        padding: '5px 10px',
    },
    '& li.Mui-focused': {
        backgroundColor: '#f2f2f2',
        cursor: 'pointer',
    },
    '& li:active': {
        backgroundColor: '#f2f2f2',
    },
}));

export default function Select({ options, onChange = () => null, ...props }) {
    const { getRootProps, getInputProps, getListboxProps, getOptionProps, groupedOptions } = useAutocomplete({
        options,
        getOptionLabel: (option) => option.label,
        onInputChange: (e) => {
            onChange({
                label: e.target.getAttribute('label'),
                value: e.target.getAttribute('value'),
            });
        },
    });

    return (
        <div className="h-full w-full relative">
            <div className="h-[100%] w-full mt-2" {...getRootProps()}>
                <Input {...getInputProps()} placeholder={props?.placeholder} />
            </div>
            {groupedOptions.length > 0 ? (
                <Listbox {...getListboxProps()}>
                    {groupedOptions.map((option, index) => {
                        return (
                            <li
                                {...getOptionProps({ option, index })}
                                label={option.label}
                                value={option.value}
                                key={index}
                            >
                                {option.label}
                            </li>
                        );
                    })}
                </Listbox>
            ) : null}
        </div>
    );
}
