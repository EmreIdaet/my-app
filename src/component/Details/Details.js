import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom"
import { useParams, useNavigate } from "react-router-dom";

import { useService } from "../../hooks/useService";
import { carServiceFactory } from '../../services/carService';
import { AuthContext } from "../../contexts/AuthContext";

export const Details = () => {
    const { userId } = useContext(AuthContext);
    const { carId } = useParams();
    const [carDetail, setCarDetail] = useState({});
    const carService = useService(carServiceFactory)

    const navigate = useNavigate();

    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                setCarDetail(result);
            });
    }, [carId]);

    const isOwner = carDetail._ownerId === userId;

    const onDeleteClick = async () => {
        carService.delete(carDetail._id);

        navigate('/catalog');

        window.location.reload(true);
    };

    return (
        <section id="details">
            <h1>Car Details</h1>
            <img src={carDetail.url} alt="CardImage"></img>
            <p>Name: {carDetail.name}</p>
            <p>Model: Model {carDetail.model}</p>
            <p>Year: {carDetail.year}</p>
            <p>{carDetail.description}</p>

            {isOwner && (
                <>
                    <Link to={`/catalog/${carDetail._id}/edit`} className="button btn">Edit</Link>
                    <button className="btn" onClick={onDeleteClick}>Delete</button>
                </>
            )}
        </section>
    )
}