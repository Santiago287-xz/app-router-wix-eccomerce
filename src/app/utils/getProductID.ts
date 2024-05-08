import { getWixClient } from "@/app/hooks/useWixClientServer";

export default async function getProducts(productID: string) {
	const wixClient = await getWixClient();
	try {
		return await wixClient.products
			.queryProducts()
			.eq("slug", decodeURIComponent(productID))
			.limit(1)
			.find();
	} catch (err) {
		console.error(err);
	}
}
