import { useState } from 'react';

const PasswordTextField = ({ title, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="mt-[15px]">
            <div className="mb-[10px] font-semibold">{title}</div>
            <div className="px-4 py-2 rounded-md justify-between" style={{ border: '1px solid #f2f2f2' }}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••••"
                    {...props}
                    className="w-[90%] border-transparent focus:outline-none"
                />
                <span className="text-[#999CA0] cursor-pointer ml-2 w-[40px]" onClick={handleTogglePassword}>
                    {showPassword ? 'Hide' : 'Show'}
                </span>
            </div>
        </div>
    );
};

export default PasswordTextField;
