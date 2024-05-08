import ProductsCatalog from "@/app/components/Products/ProductsCatalog";
import { Link } from 'next-view-transitions'
export default async function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-6xl [view-transition-name:titulo]">Test Ecommerce</h1>
      <p className='mt-4 [view-transition-name:text]'>Lorem ipsum dolor, sit amet conse eius quam exercitationem iste commodi delectus qui amet nisi quim exercitationem is dem aperiam officia quibusdam maiores nulla aspernatur obcaecati quo. Est, expedita.</p>
      <Link href='/test'>Go to /test</Link>
      <Link href="/products" className="mb-8">Go to /products</Link>
      <ProductsCatalog />
    </main>
  );
}
