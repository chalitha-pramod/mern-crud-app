import React from "react";

function Home() {
	const link = "https://github.com/chalitha-pramod";
	const target = "_blank";

	return (
		<div className="container">
			<h1>MERN Stack CRUD</h1>
			<p>
				<b>Front-end</b>: React.js + Bootstrap
			</p>
			<p>
				<b>Back-end</b>: Node.js
			</p>
			<p>
				<b>Database</b>: MongoDB 
			</p>
			<p>
				<b>Developed By</b>: chalitha-pramod
				<p>
					<a href={link} target={target}>
					chalitha-pramod
					</a>
				</p>
			</p>
		</div>
	);
}

export default Home;
