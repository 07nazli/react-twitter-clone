import { Popover } from "@headlessui/react"

export default function More() {
    return (
        <Popover className="relative">
            <Popover.Button className="py-[3px] block group">
			    <div
			    className="p-3 rounded-full transition-colors inline-flex items-center gap-5 group-hover:bg-[#eff3f41a]">
				    <div className="w-[26.25px] h-[26.15px] relative">
					    <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="h-[1.641rem]">
						    <path
							fill="#e7e9ea"
							d="M3.75 12c0-4.56 3.69-8.25 8.25-8.25s8.25 3.69 8.25 8.25-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12zM12 1.75C6.34 1.75 1.75 6.34 1.75 12S6.34 22.25 12 22.25 22.25 17.66 22.25 12 17.66 1.75 12 1.75zm-4.75 11.5c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25S6 11.31 6 12s.56 1.25 1.25 1.25zm9.5 0c.69 0 1.25-.56 1.25-1.25s-.56-1.25-1.25-1.25-1.25.56-1.25 1.25.56 1.25 1.25 1.25zM13.25 12c0 .69-.56 1.25-1.25 1.25s-1.25-.56-1.25-1.25.56-1.25 1.25-1.25 1.25.56 1.25 1.25z"
						    />
					    </svg>
				    </div>
				    <div className="pr-4 text-xl">
				        More
				    </div>
				</div>
            </Popover.Button>
            <Popover.Panel className="w-[318px] absolute bottom-0 left-0 bg-black shadow-box rounded-xl">
			    <button
			    className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a] overflow-hidden">
				    <div className="w-[26.25px] h-[26.15px] relative">
					    <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="h-[1.641rem]">
						    <path
							fill="#e7e9ea"
							d="M12 3.786c-4.556 0-8.25 3.694-8.25 8.25s3.694 8.25 8.25 8.25c1.595 0 3.081-.451 4.341-1.233l1.054 1.7c-1.568.972-3.418 1.534-5.395 1.534-5.661 0-10.25-4.589-10.25-10.25S6.339 1.786 12 1.786s10.25 4.589 10.25 10.25c0 .901-.21 1.77-.452 2.477-.592 1.731-2.343 2.477-3.917 2.334-1.242-.113-2.307-.74-3.013-1.647-.961 1.253-2.45 2.011-4.092 1.78-2.581-.363-4.127-2.971-3.76-5.578.366-2.606 2.571-4.688 5.152-4.325 1.019.143 1.877.637 2.519 1.342l1.803.258-.507 3.549c-.187 1.31.761 2.509 2.079 2.629.915.083 1.627-.356 1.843-.99.2-.585.345-1.224.345-1.83 0-4.556-3.694-8.25-8.25-8.25zm-.111 5.274c-1.247-.175-2.645.854-2.893 2.623-.249 1.769.811 3.143 2.058 3.319 1.247.175 2.645-.854 2.893-2.623.249-1.769-.811-3.144-2.058-3.319z"
						    />
					    </svg>
				    </div>
				    <div className="pr-4 text-xl font-bold">
				        Connect
				    </div>
				</button>
				<button
			    className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a] overflow-hidden">
				    <div className="w-[26.25px] h-[26.15px] relative">
					    <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="h-[1.641rem]">
						    <path
							fill="#e7e9ea"
							d="M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z"
						    />
					    </svg>
				    </div>
				    <div className="pr-4 text-xl font-bold">
				        Monetization
				    </div>
				</button>
				<button
			    className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a] overflow-hidden">
				    <div className="w-[26.25px] h-[26.15px] relative">
					    <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="h-[1.641rem]">
						    <path
							fill="#e7e9ea"
							d="M 8 18 V 6 H 4.5 c -0.28 0 -0.5 0.22 -0.5 0.5 v 11 c 0 0.28 0.22 0.5 0.5 0.5 H 8 Z m 11.5 0 c 0.28 0 0.5 -0.22 0.5 -0.5 v -11 c 0 -0.28 -0.22 -0.5 -0.5 -0.5 H 16 v 12 h 3.5 Z M 10 6 v 12 h 4 V 6 h -4 Z M 4.5 20 C 3.12 20 2 18.88 2 17.5 v -11 C 2 5.12 3.12 4 4.5 4 h 15 C 20.88 4 22 5.12 22 6.5 v 11 c 0 1.38 -1.12 2.5 -2.5 2.5 h -15 Z"
						    />
					    </svg>
				    </div>
				    <div className="pr-4 text-xl font-bold">
				        Pro
				    </div>
				</button>
				<button
			    className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a] overflow-hidden">
				    <div className="w-[26.25px] h-[26.15px] relative">
					    <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="h-[1.641rem]">
						    <path
							fill="#e7e9ea"
							d="M 1.996 5.5 c 0 -1.38 1.119 -2.5 2.5 -2.5 h 15 c 1.38 0 2.5 1.12 2.5 2.5 v 13 c 0 1.38 -1.12 2.5 -2.5 2.5 h -15 c -1.381 0 -2.5 -1.12 -2.5 -2.5 v -13 Z m 2.5 -0.5 c -0.277 0 -0.5 0.22 -0.5 0.5 v 13 c 0 0.28 0.223 0.5 0.5 0.5 h 15 c 0.276 0 0.5 -0.22 0.5 -0.5 v -13 c 0 -0.28 -0.224 -0.5 -0.5 -0.5 h -15 Z m 8.085 5 H 8.996 V 8 h 7 v 7 h -2 v -3.59 l -5.293 5.3 l -1.415 -1.42 L 12.581 10 Z"
						    />
					    </svg>
				    </div>
				    <div className="pr-4 text-xl font-bold">
				        Ads
				    </div>
				</button>
				<button
			    className="px-4 h-14 w-full transition-colors inline-flex items-center gap-5 hover:bg-[#eff3f41a] overflow-hidden">
				    <div className="w-[26.25px] h-[26.15px] relative">
					    <svg viewBox="0 0 24 24" width={26.25} height={26.25} className="h-[1.641rem]">
						    <path
							fill="#e7e9ea"
							d="M 10.54 1.75 h 2.92 l 1.57 2.36 c 0.11 0.17 0.32 0.25 0.53 0.21 l 2.53 -0.59 l 2.17 2.17 l -0.58 2.54 c -0.05 0.2 0.04 0.41 0.21 0.53 l 2.36 1.57 v 2.92 l -2.36 1.57 c -0.17 0.12 -0.26 0.33 -0.21 0.53 l 0.58 2.54 l -2.17 2.17 l -2.53 -0.59 c -0.21 -0.04 -0.42 0.04 -0.53 0.21 l -1.57 2.36 h -2.92 l -1.58 -2.36 c -0.11 -0.17 -0.32 -0.25 -0.52 -0.21 l -2.54 0.59 l -2.17 -2.17 l 0.58 -2.54 c 0.05 -0.2 -0.03 -0.41 -0.21 -0.53 l -2.35 -1.57 v -2.92 L 4.1 8.97 c 0.18 -0.12 0.26 -0.33 0.21 -0.53 L 3.73 5.9 L 5.9 3.73 l 2.54 0.59 c 0.2 0.04 0.41 -0.04 0.52 -0.21 l 1.58 -2.36 Z m 1.07 2 l -0.98 1.47 C 10.05 6.08 9 6.5 7.99 6.27 l -1.46 -0.34 l -0.6 0.6 l 0.33 1.46 c 0.24 1.01 -0.18 2.07 -1.05 2.64 l -1.46 0.98 v 0.78 l 1.46 0.98 c 0.87 0.57 1.29 1.63 1.05 2.64 l -0.33 1.46 l 0.6 0.6 l 1.46 -0.34 c 1.01 -0.23 2.06 0.19 2.64 1.05 l 0.98 1.47 h 0.78 l 0.97 -1.47 c 0.58 -0.86 1.63 -1.28 2.65 -1.05 l 1.45 0.34 l 0.61 -0.6 l -0.34 -1.46 c -0.23 -1.01 0.18 -2.07 1.05 -2.64 l 1.47 -0.98 v -0.78 l -1.47 -0.98 c -0.87 -0.57 -1.28 -1.63 -1.05 -2.64 l 0.34 -1.46 l -0.61 -0.6 l -1.45 0.34 c -1.02 0.23 -2.07 -0.19 -2.65 -1.05 l -0.97 -1.47 h -0.78 Z M 12 10.5 c -0.83 0 -1.5 0.67 -1.5 1.5 s 0.67 1.5 1.5 1.5 c 0.82 0 1.5 -0.67 1.5 -1.5 s -0.68 -1.5 -1.5 -1.5 Z M 8.5 12 c 0 -1.93 1.56 -3.5 3.5 -3.5 c 1.93 0 3.5 1.57 3.5 3.5 s -1.57 3.5 -3.5 3.5 c -1.94 0 -3.5 -1.57 -3.5 -3.5 Z"
						    />
					    </svg>
				    </div>
				    <div className="pr-4 text-xl font-bold">
				        Settings and priacy
				    </div>
				</button>
            </Popover.Panel>
        </Popover>
    )
}