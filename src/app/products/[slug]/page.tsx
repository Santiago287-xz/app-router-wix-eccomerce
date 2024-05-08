import getProducts from "@/app/utils/getProducts";
import Image from "next/image";

export const dynamicParams = false

export const generateStaticParams = async () => await getProducts()

export default async function ProductAllData({ params }: { params: { slug: string, id: string } }) {//{ params }: { params: products.Product }
    const item = (await getProducts()).find(product => product.slug == params.slug)
    return (
        <main className="flex flex-col justify-center items-center h-screen">            
            <section className="h-fit w-[25rem] bg-transparent rounded-xl flex justify-center items-center flex-wrap flex-col p-4">
                <h2>{item?.name}</h2>
                <span className="text-green-400">{item?.price?.formatted?.discountedPrice}</span>
                <Image
                    src={item?.media?.mainMedia?.image?.url}
                    loading="lazy"
                    alt=""
                    style={{ viewTransitionName: item?.slug }}
                    width={item?.media?.mainMedia?.image?.width}
                    height={item?.media?.mainMedia?.image?.height}
                />
            </section>            
        </main>
    )
}