import React from 'react';

export default function Banner() {
	
	return (
		<div className="w-full h-[500px] overflow-hidden relative">
			<img src="https://images.unsplash.com/photo-1574120153654-453fb26e6bd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3270&q=80" alt="배너 이미지" className="top-1/2 left-1/2 absolute translate-y-[-50%] translate-x-[-50%]" />
		</div>
	)
}