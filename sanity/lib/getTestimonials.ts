import { client } from "./client";
import { testimonialsQuery } from "../queries/Testimonials";

export async function getTestimonials() {
    return await client.fetch(testimonialsQuery)
}