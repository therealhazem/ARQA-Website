import { defineField, defineType } from 'sanity'

export const Products = defineType({
    name: 'Products',
    title: 'Products',
    type: 'document',
    fieldsets: [
        {
            name: 'technicalSpecs',
            title: 'Technical Specifications',
            description: 'Detailed technical info about the product',
        },
    ],
    fields: [
        defineField({
            name: 'name',
            title: 'Product Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'category',
            title: 'Product Category',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Product description',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'features',
            title: 'Product Features',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (rule) => rule.min(1),
        }),

        defineField({
            name: 'images',
            title: 'Product Images',
            type: 'array',
            of: [{ type: 'image', options: { hotspot: true } }],
            validation: (rule) => rule.min(1),
            description: 'Upload one or more images for the product',
        }),

        // --- Technical Specifications Section ---
        defineField({
            name: 'material',
            title: 'Material',
            type: 'string',
            fieldset: 'technicalSpecs',
        }),
        defineField({
            name: 'thickness',
            title: 'Thickness',
            type: 'string',
            fieldset: 'technicalSpecs',
        }),
        defineField({
            name: 'length',
            title: 'Length',
            type: 'string',
            fieldset: 'technicalSpecs',
        }),
        defineField({
            name: 'colorOptions',
            title: 'Color Options',
            type: 'string',
            fieldset: 'technicalSpecs',
        }),
        defineField({
            name: 'certifications',
            title: 'Certifications',
            type: 'string',
            fieldset: 'technicalSpecs',
        }),
        defineField({
            name: 'shelfLife',
            title: 'Shelf Life',
            type: 'string',
            fieldset: 'technicalSpecs',
        }),
        defineField({
            name: 'packaging',
            title: 'Packaging',
            type: 'string',
            fieldset: 'technicalSpecs',
        }),
        defineField({
            name: 'certificates',
            title: 'Certifications Logos',
            type: 'array',
            of: [{
                type: 'image',
                options: {
                    hotspot: true,
                },
            },
            ],
            validation: (rule) => rule.min(1),
        }),
    ],
})
