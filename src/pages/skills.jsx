import React from "react";
export default function Skills() {
	const myskills = [
		{
			skill: "HTML5",
			percentage: "77%",
		},
		{
			skill: "CSS",
			percentage: "90%",
		},
		{
			skill: "JAVASCRIPT",
			percentage: "70%",
		},
		{
			skill: "SEO",
			percentage: "80%",
		},
		{
			skill: "MYSQL",
			percentage: "70%",
		},
	];
	return (
		<section
			id="skills"
			class="container max-h-[650px] h-[650px] text-center w-full"
		>
			<h1 class="text-gray-100 m-10 text-center  text-7xl font-extrabold pt-20 mb-5 font-serif">
				My Skills
			</h1>
			<span class="absolute font-serif text-9xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 opacity-10">
				Skills
			</span>
			<span class="text-gray-300 font-mono text-xl">
				" Life is a mission - split it into targets and live your achivements! "
			</span>
			<div class="grid grid-cols-2 gap-4 ml-10 mt-10 ">
				{myskills.map((skill) => (
					<>
						<div class=" rounded h-20 p-2 pl-5">
							<div class="flex">
								<div class="basis-1/2 text-left">
									<strong class="opacity-1 text-2xl text-white">
										{skill.skill}
									</strong>
								</div>
								<div class="basis-1/2 text-right">
									<strong class=" text-2xl text-white">
										{skill.percentage}
									</strong>
								</div>
							</div>

							<div class="w-[97%] bg-gray-700/[.33]  h-2 mt-2 rounded">
								<div
									class="bg-orange-500 h-2 mt-2 rounded"
									style={{ width: skill.percentage }}
								></div>
							</div>
						</div>
					</>
				))}
			</div>
		</section>
	);
}
