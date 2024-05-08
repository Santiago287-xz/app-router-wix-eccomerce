import { getWixClient } from "@/app/hooks/useWixClientServer";
import { products } from "@wix/stores";

export default async function getProducts() : Promise<products.Product[]> {
	const wixClient = await getWixClient();
	try {
		return (await wixClient.products.queryProducts().limit(20).find()).items;
	} catch (err) {
		throw new Error('Error getting products: ' + err);
	}
}