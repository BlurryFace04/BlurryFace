import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

export default function Home() {
    const links = [
        // {name: "Projects", href: "/projects"},
        // {name: "Contact Me", href: "/contact"},
        {name: "Projects", href: "https://github.com/BlurryFace04"},
        {name: "Contact Me", href: "https://github.com/BlurryFace04"},
    ];

    return (
        <div
            className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
            <div className="my-16 flex justify-between items-center space-x-4 w-11/12 mx-auto">
                <div className="flex flex-col items-center justify-center w-1/12"></div>
                <div className="flex flex-col items-center justify-center w-3/5">
                    <h1 className="pb-4 font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r text-zinc-200 aos-init aos-animate">
                        Arnav Jain
                    </h1>
                    <h2 className="text-3xl font-bold text-zinc-300 mt-2">Blockchain Developer</h2>
                    <div className="w-2/3 mx-auto flex flex-col items-center">
                        <h2 className="mb-8 text-lg text-zinc-400 aos-init aos-animate mt-10 text-justify">
                            Hey there! I'm Arnav, a self-taught blockchain developer and a proud college dropout. I
                            started my journey in computer science at a university, but soon realized that I learn best
                            when I'm working on real-world projects and teaching myself. So, I took the plunge and
                            decided to focus full-time on what I love: diving into all sorts of tech challenges, from
                            blockchain to just about anything in computer science. Take a look around my site to see the
                            cool stuff I've been working on!
                        </h2>
                        <div
                            className="flex flex-col items-center max-w-xs mx-auto gap-5 sm:max-w-none sm:flex-row sm:inline-flex aos-init aos-animate"
                            data-aos="fade-down" data-aos-delay="400">
                            <Link className="w-full justify-center flex items-center whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-6 py-1.5  text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                               href={links[0].href}>{links[0].name}
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                     fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                     strokeLinejoin="round"
                                     className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                                    <line x1="5" x2="19" y1="12" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                            <Link className="w-full transition duration-150 ease-in-out bg-opacity-25 text-zinc-200 hover:text-white bg-transparent hover:bg-opacity-30"
                               href={links[1].href}>{links[1].name}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-1/5 ml-auto">
                    <img src="/Blurry.png" alt="Blurry Face" className="w-full h-auto"/>
                </div>
            </div>
            <Particles className="absolute inset-0 -z-10" quantity={100}/>
        </div>
    );
}
