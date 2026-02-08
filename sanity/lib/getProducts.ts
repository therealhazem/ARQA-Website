import { client } from "./client"
import { FeaturedProductQuery } from "../queries/Products"

export async function getProducts(search = "", category = "") {
    const searchFilter = search
        ? `(
            name match "*${search}*" ||
            category match "*${search}*"
          )`
        : ""
    const categoryFilter = category
        ? `category match "*${category}*"`
        : ""
    const filters = [searchFilter, categoryFilter].filter(Boolean)
    const whereClause = filters.length
        ? `&& ${filters.join(" && ")}`
        : ""
    const query = `
        *[_type == "Products" ${whereClause}]{
            _id,
            name,
            category,
            features,
            images[]{ "url": asset->url }
        }
    `
    return await client.fetch(query)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getSpecificProduct(query: any) {
    return await client.fetch(query)
}

export async function getFeaturedProducts() {
    return await client.fetch(FeaturedProductQuery)
}
