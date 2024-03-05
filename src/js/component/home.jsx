import React from "react";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
	const card=[
		{title:"First Card", description:"......juan juan", img:"https://picsum.photos/500/325"},
		{title:"Second Card", description:"++++++", img:"https://picsum.photos/500/325"},
		{title:"Third Card", description:"------", img:"https://picsum.photos/500/325"},
		{title:"Fourth Card", description:"******", img:"https://picsum.photos/500/325"},
	];
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<div className="container">
				<div className="cardStyle">
					<div className="row">
					{card.map((card, index)=>{
						return (
							<Card key={index} title={card.title} desciption={card.description} img={card.img} />
							)
					})}
					</div>
				</div>
			</div>
			<Footer/>
		</div>
	);
};

export default Home;
