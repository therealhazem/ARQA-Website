export const testimonialsQuery = `
*[_type == "Testimonials"]{
  _id,
  name,
  said,
  "img": img.asset->url
}
`
