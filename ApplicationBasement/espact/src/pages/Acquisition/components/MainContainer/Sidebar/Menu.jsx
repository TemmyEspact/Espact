import { Link } from 'react-router-dom';
import Icons from '@espact/components/Icons';

export default function Menu({ title, subtitle, icon, active, to = '/', embed }) {
    return (
        <Link to={to}>
            <button
                className={`${active && 'bg-[#4F4F56]'} ${
                    embed ? 'w-full pl-[10px]' : 'w-[244px] pl-[30px]'
                } h-[45px] rounded-r-lg mb-[10px] flex items-center`}
            >
                {icon && <Icons name={icon} active={active} />}
               <div className='flex flex-row justify-between w-full items-center'>
               <div className="text-white ml-[15px] text-start">{title}</div>
               <div className="ml-[15px] mr-[15px] text-[12px] text-primaryColor">{subtitle}</div>
               </div>
            </button>
        </Link>
    );
}
