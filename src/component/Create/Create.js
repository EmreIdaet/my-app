import { useForm } from "../../hooks/useForm";
import { useCarContext } from "../../contexts/CarContext";

export const Create = () => {
    const { onCreateCarSubmit } = useCarContext();
    const { values, changeHandler, onSubmit } = useForm({
        name: '',
        model: '',
        year: '',
        description: '',
        url: '',
    }, onCreateCarSubmit);

    /*const [values, setValues] = useState({
        name:'',
        model:'',
        year: '',
        description:'',
        url: '',
    });

    const onChangeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value}))
    };

    const onSubmit = (e) => {
        e.preventDefault();

        onCreateCarSubmit(values);
    };*/

    return (
        <section id="create">
            <h1>Create Record</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input value={values.name} onChange={changeHandler} type="text" id="name" name="name"></input>

                <label htmlFor="model">Model</label>
                <input value={values.model} onChange={changeHandler} type="text" id="model" name="model"></input>

                <label htmlFor="year">Year</label>
                <input value={values.year} onChange={changeHandler} type="number" id="year" name="year"></input>

                <label htmlFor="description">Description</label>
                <input value={values.description} onChange={changeHandler} type="text" id="description" name="description"></input>


                <label htmlFor="url">URL</label>
                <input value={values.url} onChange={changeHandler} type="text" id="url" name="url"></input>

                <button type="submit" className="button">Create</button>
            </form>
        </section>
    )
}