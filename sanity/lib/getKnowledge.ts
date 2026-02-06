/* eslint-disable @typescript-eslint/no-explicit-any */
import { client } from "./client";
import { knowledgeQuery } from "../queries/Knowledge";

export async function getKnowledge() {
    return await client.fetch(knowledgeQuery)
}
export async function getSpecificKnowledge(query: any) {
    return await client.fetch(query)
}
