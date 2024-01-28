import Button from '@espact/components/Button';

export default function Buttons({ title, ...props }) {
    return (
        <div className="flex flex-row">
            <div className="flex-1">
                <Button
                    title={title}
                    className="w-[90px] h-[28px] bg-[#FA6017] border-[1px] border-[#FA6017] rounded-[8px] text-[#FFFFFF]"
                    {...props}
                />
            </div>
        </div>
    );
}
