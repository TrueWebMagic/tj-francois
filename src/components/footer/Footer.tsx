"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export function Footer() {

    const pathname = usePathname();
    const isHome = pathname === "/";
    const isPortfolio = pathname === "/portfolio";

    return (
        <footer className="text-center pb-3 md:relative md:overflow-hidden">
            <svg className="w-full -mb-[26vw] md:-mb-[30vw] -mt-[80vw] md:-mt-[95vw] lg:-mt-[100vw] xl:-mt-[105vw] md:py-14 relative -z-10" viewBox="0 0 640 960" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_113_1010)">
                    <path d="M-400 782.4L-352 776C-304 769.6 -208 756.8 -112 754.08C-16 751.52 80 758.88 176 747.2C272 735.52 368 704.48 464 694.72C560 684.8 656 696 752 712.32C848 728.48 944 749.92 992 760.48L1040 771.2V961.6H992C944 961.6 848 961.6 752 961.6C656 961.6 560 961.6 464 961.6C368 961.6 272 961.6 176 961.6C80 961.6 -16 961.6 -112 961.6C-208 961.6 -304 961.6 -352 961.6H-400V782.4Z" fill="#EDDCC4"/>
                </g>
                <defs>
                    <clipPath id="clip0_113_1010">
                        <rect width="1440" height="960" fill="white" transform="translate(-400)"/>
                    </clipPath>
                </defs>
            </svg>
            <div className="absolute left-0 bottom-0 -z-10 w-full h-[26vw] md:hidden bg-[#EDDCC4]"/>
            <div className="flex gap-8 w-full justify-center mb-8 font-medium md:w-fit md:absolute md:left-1/2 md:bottom-8 md:-translate-x-1/2">
                <a className={`mobile-link ${isHome ? 'active' : ''}`} href="/">Home</a>
                <a className={`mobile-link ${isPortfolio ? 'active' : ''}`} href="/portfolio">Portfolio</a>
                <a href="/#contact">Contact</a>
            </div>
            <div className="flex gap-10 md:gap-[2.5vw] lg:gap-8 xl:gap-9 w-full justify-center mb-8 items-center md:w-fit md:absolute md:right-8 lg:right-12 xl:right-20 md:bottom-16 md:m-0">
                <a className="x relative" href="https://x.com/vitalsocials" target="_blank">
                    <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.3784 10.5804L24.6852 0H22.4798L14.3987 9.18678L7.94433 0H0.5L10.2603 13.892L0.5 24.9872H2.70554L11.2394 15.2856L18.0557 24.9872H25.5L15.3779 10.5804H15.3784ZM12.3576 14.0144L11.3687 12.6311L3.50023 1.62377H6.88781L13.2378 10.507L14.2267 11.8904L22.4808 23.4372H19.0933L12.3576 14.015V14.0144Z" fill="black"/>
                    </svg>
                </a>
                <a className="insta relative" href="https://www.instagram.com/vitalsocials.co" target="_blank">
                    <svg width="28" height="27" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M7.83707 0.153411C5.80222 0.245224 4.03852 0.74272 2.61437 2.16086C1.18524 3.58645 0.693927 5.35713 0.601885 7.37082C0.54467 8.62767 0.210107 18.1229 1.18027 20.613C1.83451 22.2929 3.12305 23.5846 4.81835 24.2409C5.6094 24.5486 6.51242 24.7569 7.83707 24.8177C18.9131 25.319 23.0189 25.0461 24.7502 20.613C25.0574 19.8239 25.2689 18.9217 25.3273 17.6003C25.8336 6.49589 25.2453 4.08893 23.3149 2.16086C21.7838 0.633533 19.9828 -0.406151 7.83707 0.153411ZM7.93904 22.5844C6.72633 22.5298 6.06837 22.3278 5.62931 22.1578C4.52482 21.7285 3.69521 20.9023 3.26859 19.8043C2.52977 17.9122 2.77481 8.92565 2.84073 7.47153C2.90541 6.04718 3.19397 4.74542 4.19895 3.74045C5.44275 2.49972 7.04972 1.89165 17.9914 2.38547C19.4193 2.44998 20.7241 2.73795 21.7315 3.74045C22.9753 4.98116 23.5922 6.6005 23.0898 17.5002C23.035 18.7099 22.8323 19.3663 22.6619 19.8043C21.5363 22.689 18.9466 23.0894 7.93904 22.5844ZM18.1121 5.86203C18.1121 6.68339 18.78 7.35129 19.6046 7.35129C20.4293 7.35129 21.0984 6.68339 21.0984 5.86203C21.0984 5.04068 20.4293 4.37338 19.6046 4.37338C18.78 4.37338 18.1121 5.04068 18.1121 5.86203ZM6.57833 12.485C6.57833 16.0036 9.43783 18.8564 12.9652 18.8564C16.4927 18.8564 19.3522 16.0036 19.3522 12.485C19.3522 8.96628 16.4927 6.11533 12.9652 6.11533C9.43783 6.11533 6.57833 8.96628 6.57833 12.485ZM8.81966 12.485C8.81966 10.202 10.6754 8.34982 12.9652 8.34982C15.2551 8.34982 17.1108 10.202 17.1108 12.485C17.1108 14.7691 15.2551 16.6219 12.9652 16.6219C10.6754 16.6219 8.81966 14.7691 8.81966 12.485Z" fill="black"/>
                    </svg>
                </a>
                <a className="linkedin relative" href="https://www.linkedin.com/in/tj-francois" target="_blank">
                    <svg width="28" height="27" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.27087 8.3335C8.13382 8.3335 8.83337 7.63394 8.83337 6.771C8.83337 5.90805 8.13382 5.2085 7.27087 5.2085C6.40793 5.2085 5.70837 5.90805 5.70837 6.771C5.70837 7.63394 6.40793 8.3335 7.27087 8.3335Z" fill="#0F0F0F"/>
                        <path d="M5.70837 10.4167C5.70837 9.84138 6.17475 9.375 6.75004 9.375H7.79171C8.367 9.375 8.83337 9.84136 8.83337 10.4167V18.75C8.83337 19.3253 8.367 19.7917 7.79171 19.7917H6.75004C6.17475 19.7917 5.70837 19.3253 5.70837 18.75V10.4167Z" fill="#0F0F0F"/>
                        <path d="M11.9583 19.7917H13C13.5753 19.7917 14.0416 19.3253 14.0416 18.75V14.0625C14.0416 12.5 17.1666 11.4583 17.1666 13.5417V18.7504C17.1666 19.3257 17.633 19.7917 18.2083 19.7917H19.25C19.8253 19.7917 20.2916 19.3253 20.2916 18.75V12.5C20.2916 10.4167 18.7291 9.375 16.6458 9.375C14.5625 9.375 14.0416 10.9375 14.0416 10.9375V10.4167C14.0416 9.84136 13.5753 9.375 13 9.375H11.9583C11.383 9.375 10.9166 9.84138 10.9166 10.4167V18.75C10.9166 19.3253 11.383 19.7917 11.9583 19.7917Z" fill="#0F0F0F"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M21.3333 1.0415C23.0592 1.0415 24.4583 2.44062 24.4583 4.1665V20.8332C24.4583 22.5591 23.0592 23.9582 21.3333 23.9582H4.66663C2.94074 23.9582 1.54163 22.5591 1.54163 20.8332V4.1665C1.54163 2.44062 2.94074 1.0415 4.66663 1.0415H21.3333ZM21.3333 3.12484C21.9086 3.12484 22.375 3.59121 22.375 4.1665V20.8332C22.375 21.4085 21.9086 21.8748 21.3333 21.8748H4.66663C4.09133 21.8748 3.62496 21.4085 3.62496 20.8332V4.1665C3.62496 3.59121 4.09133 3.12484 4.66663 3.12484H21.3333Z" fill="#0F0F0F"/>
                    </svg>
                </a>
                <a className="threads relative" href="https://www.threads.net/@vitalsocials.co" target="_blank">
                    <Image src="./socialmedia/threads.svg" width={25} height={25} alt="Threads" />
                </a>
            </div>
            <div className="font-bold text-[20px] md:absolute md:left-8 lg:left-12 xl:left-20 md:bottom-[61px]">
                <a href="/">Vital Socials</a>
            </div>
            <div className="text-[13px] text-[#5F5F5F] mt-2">
                Copyright &copy; 2024 Vital Socials LLC
            </div>
        </footer>
    )
}