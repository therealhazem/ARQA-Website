export const ProductGuidesQuery = `
*[_type == "Guides"]{
  _id,
  name,
  icon,
  "type": category,
  "desc": description,
  "prop": features,
  date,
}
`


export const HomeProductGuidesQuery = `
*[_type == "Guides"]
  | order(_createdAt desc)
  [0...4]{
    _id,
    name,
    icon,
    "type": category,
    "desc": description,
    "prop": features,
    date,
  }
`