import { useState } from "react";
import "./inbox.css";
export default function Inbox() {
	const [message, setMessage] = useState([
		{
			username: "ashishyaadaw",
			profilePhoto: "http://localhost:5173/cliparts/icons8-front-end-64.png",
			name: "Ram Ashish Yadav",
			message:
				"Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
		},
	]);
	let fileUrl = "/json/message.json";
	fetch(fileUrl)
		.then((res) => res.json())
		.then((data) => {
			setMessage(data);
		})
		.catch(console.error());

	return (
		<>
			<div
				id="inbox-container"
				style={{ height: "calc(100vh - 100px)" }}
				className="cboxntainer bg-white  rounded-lg w-96  top-16 right-1 z-50 fixed"
			>
				<div className="w-100 h-14 bg-green-700 rounded-t-lg">
					<div className="flex">
						<h1 className="text-white font-poppins text-2xl m-3 font-extrabold">
							Inbox
						</h1>
						<button
							id="inbox-close-btn"
							onClick={() => {
								document.getElementById("inbox-container").style.display =
									"none";
							}}
							className="m-3 p-1 bg-slate-50 right-0 rounded-full absolute inbox-close"
						>
							<svg
								data-v-6a943414=""
								width="24"
								height="24"
								xmlns="http://www.w3.org/2000/svg"
								class="close-icon   fill-orange-500"
							>
								<path d="M6.414 5A1 1 0 1 0 5 6.414L10.586 12 5 17.586A1 1 0 1 0 6.414 19L12 13.414 17.586 19A1 1 0 1 0 19 17.586L13.414 12 19 6.414A1 1 0 1 0 17.586 5L12 10.586 6.414 5Z"></path>
							</svg>
						</button>
					</div>
				</div>
				<div
					style={{ height: "calc(100vh - 158px)" }}
					className="inbox-container container  overflow-scroll overflow-x-hidden"
				>
					<ul className="pl-1">
						{message.map((item) => {
							return (
								<>
									<li className="w-100 h-auto border-b-stone-500 bg-slate-300 ">
										<div className="flex">
											<div className="rounded-full h-11 w-11 ml-6 m-1">
												<img
													className="rounded-full"
													src={item.profilePhoto}
													alt="no"
												/>
											</div>
											<ul class="text-sm mt-1 font-bold font-poppins">
												<li>{item.name}</li>
												<li class="font-normal">@{item.username}</li>
											</ul>
											<button className="m-2 mr-3 p-1 ml-28">
												<svg
													data-v-6a943414=""
													width="24"
													height="24"
													xmlns="http://www.w3.org/2000/svg"
													class="close-icon   fill-gray-500/50 hover:fill-gray-900"
												>
													<path d="M6.414 5A1 1 0 1 0 5 6.414L10.586 12 5 17.586A1 1 0 1 0 6.414 19L12 13.414 17.586 19A1 1 0 1 0 19 17.586L13.414 12 19 6.414A1 1 0 1 0 17.586 5L12 10.586 6.414 5Z"></path>
												</svg>
											</button>
										</div>
										<div className="message-container p-5">
											<p>{item.message}</p>
										</div>
									</li>
								</>
							);
						})}
					</ul>
				</div>
			</div>
			<div>
				<button
					className="cboxntainer bottom-16 right-1 z-49 fixed text-white"
					onClick={() => {
						document.getElementById("inbox-container").style.display = "block";
					}}
				>
					<img
						width="70"
						height="70"
						src="https://img.icons8.com/bubbles/70/speech-bubble-with-dots.png"
						alt="speech-bubble-with-dots"
					/>
				</button>
			</div>
		</>
	);
}
