export const knowledgeQuery = `
*[_type == "Knowledge"]{
  _id,
  title,
  category,
  date,
  description,
  "img": img.asset->url
}
`
