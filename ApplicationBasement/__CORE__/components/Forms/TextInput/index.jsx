export default function TextInput({ title, height, textarea, ...props }) {
    return (
        <div className="mt-[15px]">
            {title ? (
                <>
                    <div className="mb-[10px] font-semibold">{title}</div>
                    {textarea ? (
                        <textarea
                            className="w-full focus:outline-none"
                            style={{
                                height: height ?? 100,
                                borderRadius: 10,
                                border: '1px solid #f2f2f2',
                                padding: 15,
                                backgroundColor: '#f1f1f0',
                                color: '#4A4A4A',
                            }}
                            {...props}
                        ></textarea>
                    ) : (
                        <input
                            className="w-full focus:outline-none"
                            style={{
                                height: height ?? 40,
                                borderRadius: 10,
                                border: '1px solid #f2f2f2',
                                paddingLeft: 15,
                                backgroundColor: '#f1f1f0',
                                color: '#4A4A4A',
                            }}
                            {...props}
                        />
                    )}
                </>
            ) : (
                <>
                {textarea ? (
                    <textarea
                        className="w-full focus:outline-none"
                        style={{
                            height: height ?? 100,
                            borderRadius: 10,
                            border: '1px solid #f2f2f2',
                            padding: 15,
                            backgroundColor: '#f1f1f0',
                            color: '#4A4A4A'
                        }}
                        {...props}
                    ></textarea>
                ) : (
                    <input
                        className="w-full focus:outline-none"
                        style={{
                            height: height ?? 40,
                            borderRadius: 10,
                            border: '1px solid #f2f2f2',
                            paddingLeft: 15,
                            backgroundColor: '#f1f1f0',
                            color: '#4A4A4A'
                        }}
                        {...props}
                    />
                )}
            </>
            )}
        </div>
    );
}
