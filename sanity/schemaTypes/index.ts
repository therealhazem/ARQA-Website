import { type SchemaTypeDefinition } from 'sanity'
import { Trusted } from './Trusted'
import { Products } from './Products'
import { Guides } from './guides'
import { Testimonials } from './testimonials'
import { Certificates } from './certificates'
import { Knowledge } from './knowledge'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [Trusted, Products, Guides, Testimonials, Certificates, Knowledge],
}
