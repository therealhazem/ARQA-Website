import { client } from "./client"
import { ProductsQuery, FeaturedProductQuery } from "../queries/Products"

export async function getProducts() {
    return await client.fetch(ProductsQuery)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getSpecificProduct(query: any) {
    return await client.fetch(query);
}

export async function getFeaturedProducts() {
    return await client.fetch(FeaturedProductQuery)
}