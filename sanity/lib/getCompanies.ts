import { client } from './client'
import { companyLogosQuery } from '../queries/Company'

export async function getCompanies() {
    return await client.fetch(companyLogosQuery)
}
