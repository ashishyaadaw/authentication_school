import React from "react";
export default function Services() {
	const services = [
		{
			title: "Git Version Control",
			src: "https://img.icons8.com/color/96/000000/git.png",
			description:
				"I understand that it's always neccesary skill to maintain the large codebase.",
		},
		{
			title: "Front-End Development",
			src: "/cliparts/icons8-front-end-64.png",
			description:
				"I have knowledge of HTML, CSS , Javascript and Some frameworks like Bootstrap, Tailwind and about 2 years of practice.",
		},
		{
			title: "Back-End Development",
			src: "/cliparts/icons8-backend-64.png",
			description:
				"I have practice of backend about 1 years in Nodejs, PHP , express JS , mySql and works on Form Validation, Authentication and more",
		},
		{
			title: "App Design",
			src: "/cliparts/icons8-app-design-66.png",
			description:
				"I have understanding design UI/UX which makes me look forward to generate user centric applications.",
		},
		{
			title: "Social Site Management",
			src: "/cliparts/icons8-manager-50.png",
			description:
				"Eagerly eye on tools and services launched by Social sites i.e Facebook , Instagram",
		},
		{
			title: "Video Editing",
			src: "/cliparts/icons8-video-editor-64.png",
			description:
				"Simple cut, spliting, chroma key effects, color adjustment.",
		},
	];
	return (
		<section id="services" class="container  text-left ">
			<h1 class="text-gray-100 m-10 text-center  text-7xl font-extrabold pt-20 mb-5 font-serif">
				Services
			</h1>
			<span class="absolute font-serif text-9xl right-0 mr-20 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 opacity-10">
				Services
			</span>
			<span class="text-gray-300 font-mono text-xl">
				{/* " Life is a mission - split it into targets and live your achivements! */}
				{/* " */}
			</span>
			<div class="grid grid-cols-3 gap-4 ml-10 mt-10 ">
				{services.map((service) => (
					<>
						<div class=" bg-gray-500/[0.25] rounded pt-10 pr-1 pb-10 pl-5 ">
							<img
								width="66"
								height="66"
								className="pt-5"
								src={service.src}
								alt="git"
							/>
							<h1 class="opacity-1 font-semibold font-poppins text-lg text-white">
								{service.title}
							</h1>
							<p className="text-white font-normal font-poppins text-sm">
								{service.description}
							</p>
						</div>
					</>
				))}
			</div>
		</section>
	);
}
