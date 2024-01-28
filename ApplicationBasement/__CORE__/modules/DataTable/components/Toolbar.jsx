import {
    GridToolbarContainer,
    GridToolbarColumnsButton,
    GridToolbarFilterButton,
    GridToolbarExport,
    GridToolbarQuickFilter,
} from '@mui/x-data-grid-pro';

// const requestSearch = (searchValue) => {
//     console.log(searchValue);
//     setSearchText(searchValue);
//     const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
//     const filteredRows = data.filter((row) => {
//         return Object.keys(row).some((field) => {
//             return searchRegex.test(row[field].toString());
//         });
//     });
//     setRows(filteredRows);
// };

function escapeRegExp(value) {
    return value?.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export default function Toolbar({
    title,
    noActionButton = false,
    pageActionButtonTitle,
    pageActionButtonHander = () => null,
    value,
    onChange,
    clearSearch,
}) {
    const style = {
        height: 30,
        width: 120,
        color: '#000000',
        borderRadius: 7,
        textTransform: 'none',
        fontSize: 15,
        fontWeight: 500,
        border: '1px solid #FA6017',
        marginLeft: 10,
    };
    const style2 = {
        height: 30,
        width: 120,
        color: '#000000',
        borderRadius: 7,
        textTransform: 'none',
        fontSize: 15,
        fontWeight: 500,
        border: '1px solid #f2f2f2',
        marginLeft: 10,
    };
    return (
        <div className="mb-[10px] rounded-[10px]">
            <GridToolbarContainer>
                <div className="flex flex-1 flex-row justify-between items-center">
                    <div className="flex items-center">
                        <div className="text-[18px] text-[#000000] mr-[20px] font-semibold">{title}</div>
                        {/* <input onChange={(e) => onChange(e)} /> */}
                        {!noActionButton && (
                            <>
                                <GridToolbarQuickFilter style={{ ...style2, width: 200, paddingLeft: 10 }} />
                                <GridToolbarColumnsButton style={style2} />
                                <GridToolbarFilterButton style={{ ...style2 }} />
                            </>
                        )}
                    </div>
                    <div className="">
                        {!noActionButton && (
                            <GridToolbarExport
                                style={{ ...style, width: 170 }}
                                // csvOptions={{}}
                                // printOptions={{}}
                            />
                        )}
                        {pageActionButtonTitle && (
                            <div className="flex">
                                <button
                                    onClick={() => pageActionButtonHander()}
                                    className="pl-[10px] pr-[10px] h-[30px] border border-1 border-[#FA6017] rounded-[10px]"
                                >
                                    {pageActionButtonTitle}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </GridToolbarContainer>
        </div>
    );
}
