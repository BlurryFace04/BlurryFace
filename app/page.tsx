import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<div className="my-16 flex justify-between items-center space-x-4 w-11/12 mx-auto">
				<div className="flex flex-col items-center justify-center w-1/12">
				</div>
				<div className="flex flex-col items-center justify-center w-3/5">
					<nav className="mb-4">
						<ul className="flex items-center justify-center gap-4">
							{navigation.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className="text-xl duration-500 text-zinc-400 hover:text-zinc-300"
								>
									{item.name}
								</Link>
							))}
						</ul>
					</nav>
					<h1 className="pb-4 font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r text-zinc-200 aos-init aos-animate">
						Arnav Jain
					</h1>
					<h2 className="text-3xl font-bold text-zinc-300 mt-2">
						Blockchain Developer
					</h2>
					<div className="w-2/3 mx-auto">
						<h2 className="mb-8 text-lg text-zinc-400 aos-init aos-animate mt-10 text-justify">
							Hey there! I'm Arnav, a self-taught blockchain developer and a proud college dropout. I started my journey in computer science at an university, but soon realized that I learn best when I'm working on real-world projects and teaching myself. So, I took the plunge and decided to focus full-time on what I love: diving into all sorts of tech challenges, from blockchain to just about anything in computer science. Take a look around my site to see the cool stuff I've been working on!
						</h2>
					</div>
				</div>
				<div className="w-1/5 ml-auto">
					<img src="/Blurry.png" alt="Arnav Jain" className="w-full h-auto" />
				</div>
			</div>
			<Particles
				className="absolute inset-0 -z-10"
				quantity={100}
			/>
		</div>
	);
}
