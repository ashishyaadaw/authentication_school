import React from "react";
export default function About() {
	const about = [
		{
			name: "Ram Ashish Yadav",
			dob: "19 December 2003",
			address: "Gorakhpur, Uttar Pradesh , India.",
			zipcode: "273403",
			email: "ashishyaadaw@gmail.com",
			phone: "+91-63063-66766",
			projectcomplete: 7,
			cvUrl: "/docs/my_resume.pdf",
		},
	];
	return (
		<section id="about" class="container max-h-[650px] h-[650px] text-center">
			<h1 class="text-gray-100 m-10 text-center  text-7xl font-extrabold pt-20 mb-5 font-serif">
				About Me
			</h1>

			<span class="text-gray-300 font-mono text-xl ">
				" Life is a mission - split it into targets and live your achivements! "
			</span>
			<div class="flex">
				<div class="basis-2/5">
					<img src="/background/ashish.png" class="mt-10"></img>
				</div>
				<div class="basis-3/5 text-left">
					<span class="absolute font-quicksand text-8xl -mt-10 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 opacity-10">
						A<br></br>b<br></br>o<br></br>u<br></br>t
					</span>

					<ul class="font-quicksand leading-loose mt-10  ml-28 text-xl  text-gray-300">
						<li>
							<strong className="text-gray-100">Name : </strong>
							{about[0].name}
						</li>
						<li>
							<strong className="text-gray-100">Date of Birth : </strong>
							{about[0].dob}
						</li>
						<li>
							<strong className="text-gray-100">Address : </strong>
							{about[0].address}
						</li>
						<li>
							<strong className="text-gray-100">Zip code : </strong>
							{about[0].zipcode}
						</li>
						<li>
							<strong className="text-gray-100">Email : </strong>
							{about[0].email}
						</li>
						<li>
							<strong className="text-gray-100">Phone : </strong>
							{about[0].phone}
						</li>
						<br></br>
						<li>
							<strong className="text-3xl text-orange-500">
								{about[0].projectcomplete}{" "}
							</strong>
							Project complete
						</li>
					</ul>
					<a
						href={about[0].cvUrl}
						class="text-2xl  ml-28 font-quicksand bg-orange-500 cursor-pointer"
						download
					>
						Download CV
					</a>
				</div>
			</div>
		</section>
	);
}
