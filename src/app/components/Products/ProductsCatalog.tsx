import getProducts from "@/app/utils/getProducts";
import Product from "./Product";

export default async function ProductsCatalog() {
    return (
        <section className="flex gap-4">
            {(await getProducts()).map((item, i) => <Product key={i} item={item}></Product>)}
        </section>
    );
}