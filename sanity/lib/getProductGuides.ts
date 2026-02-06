import { client } from "./client"
import { HomeProductGuidesQuery, ProductGuidesQuery } from "../queries/Guides"

export async function getProductGuides() {
    return await client.fetch(ProductGuidesQuery);
}

export async function getHomeProductGuides() {
    return await client.fetch(HomeProductGuidesQuery);
}
