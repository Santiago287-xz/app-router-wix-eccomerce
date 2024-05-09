import { products } from "@wix/stores";
import Image from "next/image";
import { Link } from 'next-view-transitions'

export default function Product({ item }: { item: products.Product }) {
    return (
        <article>
            <Link href={"/products/" + item.slug} className="h-full w-[15rem] bg-transparent border rounded-xl flex justify-center items-center flex-wrap flex-col p-4">
                <h2>{item.name}</h2>
                <span className="text-green-400">{item?.price?.formatted?.discountedPrice}</span>
                <Image
                    src={item?.media?.mainMedia?.image?.url}
                    loading="lazy"
                    alt=""
                    style={{ viewTransitionName: item.slug }}
                    width={item?.media?.mainMedia?.image?.width}
                    height={item?.media?.mainMedia?.image?.height}
                />
            </Link>
        </article>
    )
}