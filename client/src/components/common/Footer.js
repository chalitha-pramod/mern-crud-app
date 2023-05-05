const Footer = () => {
	const link = "https://github.com/chalitha-pramod";
	const target = "_blank";

	return (
		<div className="container">
			Copyright © <small>{new Date().getFullYear()}</small> chalitha-pramod{" "}
			<a href={link} target={target}>
				
			</a>
		</div>
	);
};

export default Footer;
