export const companyLogosQuery = `
*[_type == "Company"]{
  _id,
  Company_Name,
  Image_URL
}
`
