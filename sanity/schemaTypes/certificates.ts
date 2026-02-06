import { defineField, defineType } from 'sanity'

export const Certificates = defineType({
    name: 'Certificates',
    title: 'Certificates',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Certificates Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Certificates Description',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'img',
            title: 'Certificate Logo',
            type: 'image',
            options: { hotspot: true },
            validation: (rule) => rule.required(),
            description: 'Upload image of the User',
        }),
    ],
})