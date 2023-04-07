import { useCarContext } from "../../contexts/CarContext"

import { CatalogItem } from "./CatalogItem/CatalogItem"

export const Catalog = () => {
    const { cars } = useCarContext();
    return (
        <section id="catalog">
            <h1>Cars Catalog</h1>
            <div className="catalogItems">
                {cars.map(x => <CatalogItem key={x._id} {...x} />)}

                {cars.length === 0 && <h3>No article yet</h3>}
            </div>
        </section>
    )
}