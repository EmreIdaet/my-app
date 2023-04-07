import { useEffect, useState} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import { useService } from "../../hooks/useService";
import { carServiceFactory } from '../../services/carService';
import { useAuthContext } from "../../contexts/AuthContext";
import { useCarContext } from "../../contexts/CarContext";

export const Details = () => {
    const { userId } = useAuthContext();
    const { deleteCar } = useCarContext();
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
        const result = window.confirm(`Are you sure you want to delete ${carDetail.name} ${carDetail.model}`);
        
        if (result) {
            await carService.delete(carDetail._id);

            deleteCar(carDetail._id);

            navigate('/catalog');
        }
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