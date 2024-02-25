import { NavLink } from "react-router-dom";
import classNames from "classnames";

export default function Menu() {
    return (
        <nav className="mt-0.5 mb-1">
            <NavLink to="/" className="py-1 block group">
                {({ isActive }) => (
                    <div className={classNames("p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]", {
                        "font-bold": isActive
                     })}>
                            <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                                <path 
                                  fill="#e7e9ea"
                                  d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0l-9.071 5.99c-.26.173-.409.456-.409.757v13.183c0 .502.418.913.929.913H9.14c.51 0 .929-.41.929-.913v-7.075h3.909v7.075c0 .502.417.913.928.913h6.165c.511 0 .929-.41.929-.913V7.904c0-.301-.158-.584-.408-.758z"
                                />
                            </svg>
                        <div className="pr-4 text-xl">
                            Home
                        </div>
                    </div>
                )}
            </NavLink>
            <NavLink to="/explore" className="py-1 block group">
                {({ isActive }) => (
                    <div className={classNames("p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]", {
                        "font-bold": isActive
                     })}>
                            <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="block">
                                <path 
                                  fill="#e7e9ea"
                                  d="M 10.25 3.75 c -3.59 0 -6.5 2.91 -6.5 6.5 s 2.91 6.5 6.5 6.5 c 1.795 0 3.419 -0.726 4.596 -1.904 c 1.178 -1.177 1.904 -2.801 1.904 -4.596 c 0 -3.59 -2.91 -6.5 -6.5 -6.5 Z m -8.5 6.5 c 0 -4.694 3.806 -8.5 8.5 -8.5 s 8.5 3.806 8.5 8.5 c 0 1.986 -0.682 3.815 -1.824 5.262 l 4.781 4.781 l -1.414 1.414 l -4.781 -4.781 c -1.447 1.142 -3.276 1.824 -5.262 1.824 c -4.694 0 -8.5 -3.806 -8.5 -8.5 Z"
                                />
                            </svg>
                        <div className="pr-4 text-xl">
                            Explore
                        </div>
                    </div>
                )}
            </NavLink>
         </nav>
    )
}