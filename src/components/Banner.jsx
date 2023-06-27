import React from 'react';

export default function Banner() {
	
	return (
		<section className="h-96 bg-rose-300 relative">
			<div className="w-full h-full bg-cover bg-center bg-banner opacity-60"></div>
			<div className="absolute w-full top-32 text-center text-white">
				<h2 className="text-6xl font-bold ">Shop With Us</h2>
				<p className="text-2xl mt-6 font-pacifico">Best Products, High Quality!</p>
			</div>
		</section>
	)
}