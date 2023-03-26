import { Link } from "react-router-dom"


export const CatalogItem = ({
    _id,
    name,
    url,
    description,
}) => {
    return (
        <div className="cards">
            <div className="card">
                <img src={url} alt="CardImage"></img>
                <div className="card-info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                    <Link to={`/catalog/${_id}`} className="btn">Details</Link>
                </div>
            </div>
        </div>
    )
}