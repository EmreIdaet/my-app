import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { useService } from "../../hooks/useService";
import { carServiceFactory } from "../../services/carService";

export const Edit = () => {
    const { onCarEditSubmit } = useAuthContext();
    const { carId } = useParams();
    const carService = useService(carServiceFactory);
    const { values, changeHandler, onSubmit, changeValues } = useForm({
        _id: '',
        name: '',
        model: '',
        year: '',
        description: '',
        url: '',
    }, onCarEditSubmit);

    useEffect(() => {
        carService.getOne(carId)
            .then(result => {
                changeValues(result);
            });
    }, [carId]);

    return (
        <section id="edit">
            <h1>Edit</h1>
            <form method="POST" onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={values.name} onChange={changeHandler}></input>

                <label htmlFor="model">Model</label>
                <input type="text" id="model" name="model" value={values.model} onChange={changeHandler}></input>

                <label htmlFor="year">Year</label>
                <input type="number" id="year" name="year" value={values.year} onChange={changeHandler}></input>

                <label htmlFor="description">Description</label>
                <input type="text" id="description" name="description" value={values.description} onChange={changeHandler}></input>

                <label htmlFor="url">URL</label>
                <input type="text" id="url" name="url" value={values.url} onChange={changeHandler}></input>
                <button type="submit" className="button">Save</button>
            </form>
        </section>
    )
}