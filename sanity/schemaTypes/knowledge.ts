import { defineField, defineType } from 'sanity'

export const Knowledge = defineType({
    name: 'Knowledge',
    title: 'Knowledge',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Report title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Report Category',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Report Date',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'short description',
            type: 'text',
            rows: 5,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'report',
            title: 'Report description',
            type: 'array',
            of: [{ type: 'block' }], // rich text editor
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'img',
            title: 'Report Image',
            type: 'image',
            options: { hotspot: true },
            validation: (rule) => rule.required(),
            description: 'Upload image of the Report',
        }),
    ],
})