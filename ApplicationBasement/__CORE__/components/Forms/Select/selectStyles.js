export const selectStyles = {
    menuPortal: (base) => ({ ...base, zIndex: 9999 }),
    menu: (provided) => ({ ...provided, zIndex: '9999 !important' }),
    option: (provided, state) => {
        return {
            ...provided,
            'borderBottom': '1px solid #f8f8f8',
            'color': 'black',
            'backgroundColor': 'white',
            '&:hover': {
                backgroundColor: '#f8f8f8',
                color: 'black',
            },
            'menuPortal': (provided) => ({ ...provided, zIndex: 9999 }),
            'menu': (provided) => ({ ...provided, zIndex: 9999 }),
        };
    },
    control: (styles) => ({
        ...styles,
        '&:hover': {
            border: '1px solid rgba(18, 18, 18, 0.3)',
        },
        'border': '1px solid rgba(18, 18, 18, 0.1)',
        'boxShadow': 'none',
        'borderRadius': '10px',
    }),
    singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';
        return { ...provided, opacity, transition };
    },
    placeholder: (provided) => {
        return { ...provided };
    },
    indicatorSeparator: (provided) => {
        return {
            indicatorSeparator: null,
        };
    },
    dropdownIndicator: (provided) => {
        return {
            ...provided,
            color: '#FF6720',
            // '&:hover': {
            //     color: 'rgba(20, 97, 101, 255)',
            // },
        };
    },
    input: (provided) => {
        return {
            ...provided,
        };
    },
};
