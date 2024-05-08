import { Link } from 'next-view-transitions'
export default function ProductsPage() {
    return (
        <>
            <h1 className="text-4xl [view-transition-name:titulo]">Test Ecommerce</h1>
            <Link href={"/"}>Go Back →</Link>
        </>
    )
}