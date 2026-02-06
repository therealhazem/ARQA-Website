import { defineField, defineType } from 'sanity'

export const Guides = defineType({
    name: 'Guides',
    title: 'Product Guides',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Guide Title',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'icon',
            title: 'Guide Icon',
            type: 'string',
            options: {
                list: [
                    { title: 'Calendar', value: 'CalendarDays' },
                    { title: 'Book', value: 'BookOpen' },
                    { title: 'Heart', value: 'HeartPulse' },
                    { title: 'Stethoscope', value: 'Stethoscope' },
                    { title: 'Package', value: 'Package' },
                    { title: 'Clipboard', value: 'ClipboardList' },
                    { title: 'Shield', value: 'ShieldCheck' },
                    { title: 'Microscope', value: 'Microscope' },
                ],
                layout: 'dropdown',
            },
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Guide Category',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Guide Date',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Guide Description',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'features',
            title: 'Covered Topics',
            type: 'array',
            of: [{ type: 'string' }],
            validation: rule => rule.min(1),
        }),
    ],
})