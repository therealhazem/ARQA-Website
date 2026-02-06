export const ProductsQuery = `
*[_type == "Products"]{
  _id,
  name,
  category,
  features,
  images[]{ "url": asset->url }
}
`

export const FeaturedProductQuery = `
*[_type == "Products"]
| order(_createdAt desc)
[0...6]{
  _id,
  name,
  category,
  features,
  images[]{ "url": asset->url }
}
`
