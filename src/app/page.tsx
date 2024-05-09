import ProductsCatalog from "@/app/components/Products/ProductsCatalog";
export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-6xl mb-16">Test Ecommerce</h1>
      <ProductsCatalog />
    </main>
  );
}
