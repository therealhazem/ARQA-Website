export const certificatesQuery = `
*[_type == "Certificates"]{
  _id,
  name,
  description,
  "img": img.asset->url
}
`
