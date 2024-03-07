import React from "react";
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";

const Home = () => {
	const card=[
		 
		{title:"First Card", description:"La idea es dividir los componentes de Bootstrap en diferentes componentes de función, todos se importarán en el componente principal Home.js", img:"https://picsum.photos/500/325"},
		{title:"Second Card", description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. ", img:"https://picsum.photos/500/325"},
		{title:"Third Card", description:"Modi consequatur corporis illum ratione officia fugit voluptates.", img:"https://picsum.photos/500/325"},
		{title:"Fourth Card", description:"Quo sapiente quia recusandae, vero, eaque doloribus non iste ex mollitia quae vel inventore.", img:"https://picsum.photos/500/325"},
	];
	return (
		<div>
			<Navbar/>
			<Jumbotron/>
			<div className="container">
				<div className="cardStyle" style={{ padding: '20px', margin:'2px'}}>
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
