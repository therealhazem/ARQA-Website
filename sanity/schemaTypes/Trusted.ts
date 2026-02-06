import { defineField, defineType } from 'sanity'

export const Trusted = defineType({
    name: 'Company',
    title: 'Company Logos',
    type: 'document',
    fields: [
        defineField({
            name: 'Company_Name',
            title: 'Company Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'Image_URL',
            title: 'Image URL',
            type: 'url',
            validation: (rule) => rule.required().uri({
                scheme: ["http", "https"],
            }),
        }),
    ],
})