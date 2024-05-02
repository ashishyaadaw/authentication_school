import { document } from "postcss";
import "./login.css";
import React, { useState } from "react";
export default function SetupAccount({ institute_name }) {
	const [userdata, setData] = useState([
		{
			first_name: "",
			last_name: "",
			email_address: "",
			password: "",
			confirm_password: "",
			phone_number: "",
		},
	]);
	return (
		<>
			<section className="m-10 h-full  from-neutral-900">
				<h1 className="text-left text-6xl font-semibold">Setup Your Account</h1>

				<ul className="flex ">
					<li className="m-2 mr-2">
						<div className="w-12 h-12 text-center text-white p-2 m-2 text-xl rounded-full bg-yellow-500">
							1
						</div>
						<p className="text-sm">Basic Information</p>
					</li>
					<li className="m-2 mr-4">
						<div className="w-12 h-12 text-center text-white p-2 m-2 text-xl rounded-full bg-slate-950">
							2
						</div>
						<p className="text-sm">Choose Plan</p>
					</li>
					<li className="m-2 mr-2">
						<div className="w-12 h-12 text-center text-white p-2 m-2 text-xl rounded-full bg-slate-950">
							3
						</div>
						<p className="text-sm">Select Payment</p>
					</li>
					<li className="m-2 mr-2">
						<div className="w-12 h-12 text-center text-white p-2 m-2 text-xl rounded-full bg-slate-950">
							4
						</div>
						<p className="text-sm">Finish</p>
					</li>
				</ul>
				<hr></hr>
			</section>
		</>
	);
}
export function BasicInformationSetup() {
	return (
		<>
			<div id="basic_information">
				<form className="w-[100%] flex gap-4  p-10">
					<div className="grid grid-rows-4 grid-flow-col gap-4">
						<div>
							<input
								type="text"
								name="first_name"
								id="first-name"
								placeholder="First Name"
								className="block m-3 min-w-72 pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								required
							/>
						</div>

						<div>
							<input
								type="mail"
								name="email_address"
								id="email_address"
								placeholder="Email Address"
								className="block m-3 min-w-72 pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								required
							/>
						</div>
						<div>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="Password"
								className="block m-3 min-w-72 pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								required
							/>
						</div>
					</div>
					<div className="grid grid-rows-4 grid-flow-col gap-4">
						<div>
							<input
								type="text"
								name="last-name"
								id="last-name"
								placeholder="Last Name"
								className="block m-3 min-w-72 pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								required
							/>
						</div>

						<div>
							<input
								type="text"
								name="phone_number"
								id="phone_number"
								placeholder="Phone number"
								className="block m-3 min-w-72 pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								required
							/>
						</div>
						<div>
							<input
								type="mail"
								name="confirm_password"
								id="confirm_password"
								placeholder="Confirm Password"
								className="block m-3 min-w-72 pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								required
							/>
						</div>
					</div>
				</form>
				<div className="float-end flex">
					<button className="rounded-3xl w-28 pl-4 pr-4 p-1 m-5 border text-yellow-500 border-yellow-500">
						SKIP
					</button>
					<button className="rounded-3xl flex font-semibold pl-4 pr-4 p-1 m-5 bg-yellow-500 border-2 border-yellow-500">
						NEXT
						<img
							width="28"
							className=" mix-blend-multiply"
							src="\cliparts\icons8-arrow.gif"
							alt="long-arrow-right--v2"
						/>
					</button>
				</div>
			</div>
		</>
	);
}
export function PlanSetup() {
	return (
		<>
			<div id="plan_selection">
				<div className="flex absolute  right-0 top-0 mt-32 mr-10">
					<button className="rounded-3xl text-center font-semibold w-36 pl-4 pr-4 p-1 m-5 bg-yellow-500 border-2 border-yellow-500">
						Yearly
					</button>
					<button className="rounded-3xl text-center font-semibold w-36 pl-4 pr-4 p-1 m-5 bg-yellow-500 border-2 border-yellow-500">
						Quaterly
					</button>
					<button className="rounded-3xl text-center font-semibold w-36 pl-4 pr-4 p-1 m-5 bg-yellow-500 border-2 border-yellow-500">
						Monthly
					</button>
				</div>
				<div className="w-[100%] flex h-[400px] place-content-center mt-4">
					<div className="flex gap-4 place-content-stretch ">
						<div className="min-w-72 bg-slate-50 shadow-lg rounded-sm h-96 hover:shadow-xl hover:border-2 hover:rounded-xl hover:border-yellow-500">
							<h1 className="font-semibold text-3xl">Free</h1>
							<ul className="text-left  mt-3 ml-3">
								<li className="mt-2">
									<span className="rounded-full text-white font-bold pl-1 pr-1 bg-yellow-500 text-sm mr-2">
										&#10003;
									</span>
									<span>Feature Information 1</span>
								</li>

								<li className="mt-2">
									<span className="rounded-full text-white font-bold pl-1 pr-1 bg-slate-950 text-sm mr-2">
										&#10007;
									</span>
									<span>Feature Information </span>
								</li>
							</ul>
							<div>
								<div className="absolute mt-56 ml-10">
									<del className="text-xl text-gray-500 font-bold">
										&#x20b9; 1000
									</del>
									&nbsp;
									<strong className="text-4xl text-slate-950 font-bold">
										&#x20b9; 1000
									</strong>
								</div>
							</div>
						</div>
						<div className="min-w-72 bg-slate-50 shadow-lg rounded-sm h-96 hover:shadow-xl hover:border-2 hover:rounded-xl hover:border-yellow-500">
							02
						</div>
						<div className="min-w-72 bg-slate-50 shadow-lg rounded-sm h-96 hover:shadow-xl hover:border-2 hover:rounded-xl hover:border-yellow-500">
							03
						</div>
						<div className="min-w-72 bg-slate-50 shadow-lg rounded-sm h-96 hover:shadow-xl hover:border-2 hover:rounded-xl hover:border-yellow-500">
							04
						</div>
					</div>
				</div>
				<div className="float-end flex">
					<button className="rounded-3xl w-28 pl-4 pr-4 p-1 m-5 border text-yellow-500 border-yellow-500">
						SKIP
					</button>
					<button className="rounded-3xl flex font-semibold pl-4 pr-4 p-1 m-5 bg-yellow-500 border-2 border-yellow-500">
						NEXT
						<img
							width="28"
							className=" mix-blend-multiply"
							src="\cliparts\icons8-arrow.gif"
							alt="long-arrow-right--v2"
						/>
					</button>
				</div>
			</div>
		</>
	);
}

export function PaymentSetup() {
	return (
		<>
			<div id="payment_section">
				<div className="w-[100%] flex h-[400px] place-content-center mt-4">
					<div className="w-1/5 bg-slate-50  rounded-sm ">
						<h1 className=" text-xl mt-10">Choose Payment Method</h1>
						<ul className="text-left  mt-3 ml-3">
							<li className="mt-2 flex">
								<input
									type="radio"
									name="payment_method"
									value={"g_pay_payment"}
								></input>
								<img width={70} height={20} src="/cliparts/g_pay.webp" />
							</li>
							<li className=" flex">
								<input
									type="radio"
									name="payment_method"
									value={"paytm_payment"}
								></input>{" "}
								&nbsp;&nbsp;
								<img width={70} src="/cliparts/Paytm-Logo.png" />
							</li>
							<li className="mt-5 flex">
								<input
									type="radio"
									name="payment_method"
									value={"visa_payment"}
								></input>{" "}
								&nbsp;&nbsp;
								<img
									className="mix-blend-multiply"
									width={70}
									src="/cliparts/visa.jpeg"
								/>
							</li>
						</ul>
					</div>
					<div className="w-4/5 flex place-content-center bg-slate-50 rounded-sm ">
						<div className="flex flex-2 gap-4 m-4">
							<div>
								<input
									type="text"
									name="first-name"
									id="first-name"
									placeholder="First Name"
									className="block min-w-72 pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
							<div>
								<input
									type="text"
									name="last-name"
									id="last-name"
									placeholder="Last Name"
									className="block min-w-72 pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="float-end flex">
					<button className="rounded-3xl w-28 pl-4 pr-4 p-1 m-5 border text-yellow-500 border-yellow-500">
						SKIP
					</button>
					<button className="rounded-3xl flex font-semibold pl-4 pr-4 p-1 m-5 bg-yellow-500 border-2 border-yellow-500">
						NEXT
						<img
							width="28"
							className=" mix-blend-multiply"
							src="\cliparts\icons8-arrow.gif"
							alt="long-arrow-right--v2"
						/>
					</button>
				</div>
			</div>
		</>
	);
}

export function FinishSetup() {
	return (
		<>
			<div id="finish_account-setup">
				<div className="w-[100%] flex h-[400px] place-content-left text-left mt-4">
					<div className="p-4 bg-slate-50  rounded-sm ">
						<h1 className=" text-xl font-semibold">Almost Done</h1>
						<div className="mt-10">
							<input
								type="text"
								name="licence_number"
								id="licence_number"
								placeholder="Enter Licence Number"
								className="block min-w-72 pl-5 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
							/>
							<small className="text-sm text-slate-800 ">
								<strong>Example : </strong>XXXX-XXXX-XXXX-XX
							</small>
							<br></br>
							<button className="rounded-3xl w-28 p-1 mt-10 border text-yellow-500 border-yellow-500">
								ACTIVATE
							</button>
							<br></br>
							<div className="mt-10">
								<span className="text-sm text-slate-800 ">
									Check your mail and paste code. Don't forget to check spam
									folder.
								</span>
							</div>
						</div>

						<h1></h1>
					</div>
				</div>
				<div className="float-end flex">
					<button className="rounded-3xl w-28 pl-4 pr-4 p-1 m-5 border text-yellow-500 border-yellow-500">
						SKIP
					</button>
					<button className="rounded-3xl flex font-semibold pl-4 pr-4 p-1 m-5 bg-yellow-500 border-2 border-yellow-500">
						Done
						<img
							width="28"
							className=" mix-blend-multiply"
							src="\cliparts\icons8-arrow.gif"
							alt="long-arrow-right--v2"
						/>
					</button>
				</div>
			</div>
		</>
	);
}
