import { Link } from "react-router-dom"

export const Home = () => {
    return(
        <section className="hero">
			<h1>Welcome to My Website</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor tellus a malesuada ultrices. Praesent eget risus quis urna tempor sodales.</p>
			<Link to="/catalog" className="btn">Learn More</Link>
		</section>
    )
}