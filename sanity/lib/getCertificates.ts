import { client } from "./client";
import { certificatesQuery } from "../queries/Certificates";

export async function getCertificates() {
    return await client.fetch(certificatesQuery)
}