import { defineField, defineType } from 'sanity'

export const Testimonials = defineType({
    name: 'Testimonials',
    title: 'Testimonials',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'User Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'said',
            title: 'User Said',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'img',
            title: 'User Profile Pic',
            type: 'image',
            options: { hotspot: true },
            validation: (rule) => rule.required(),
            description: 'Upload image of the User',
        }),
    ],
})