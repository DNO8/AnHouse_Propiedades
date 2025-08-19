import { defineCollection,z } from "astro:content";

const services = defineCollection({
    schema: z.object({
        titulo: z.string(),
        descripcion: z.string(),
        referencia:z.string(),
        mask:z.string(),
    })
});
const FAQ = defineCollection({
    type: 'content',
    schema: z.object({
        titulo: z.string(),
        descripcion: z.string(),
    })
})

export const collections = {services,FAQ};