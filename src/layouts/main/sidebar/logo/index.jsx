import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div className="py-0.5">
            <Link to="/" className="w-[52px] h-[52px] rounded-full flex items-center justify-center hover:bg-[#eff3f41a] transition-color">
            <svg viewBox="0 0 24 24" width={30} height={30}>
                <path 
                fill="#fff"
                d="M 18.244 2.25 h 3.308 l -7.227 8.26 l 8.502 11.24 H 16.17 l -5.214 -6.817 L 4.99 21.75 H 1.68 l 7.73 -8.835 L 1.254 2.25 H 8.08 l 4.713 6.231 Z m -1.161 17.52 h 1.833 L 7.084 4.126 H 5.117 Z"
                />
            </svg>
        </Link>
        </div>
    )
}