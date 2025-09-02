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
const propiedades=defineCollection({
    schema:z.object({
        titulo:z.string().nonempty(),
        ubicacion:z.string().nonempty(),
        tipo:z.string().nonempty(),
        estado:z.string().nonempty(),
        precio_uf:z.number().nonnegative(),
        superficie_total:z.number().nonnegative(),
        superficie_construida:z.number().nonnegative(),
        dormitorios:z.number().max(8).nonnegative(),
        pisos:z.number().max(4).nonnegative(),
        baños:z.number().max(5).nonnegative(),
        estacionamientos:z.number().nonnegative(),
        bodega:z.boolean(),
        gastos_comunes:z.number().nonnegative(),
        amoblado:z.boolean(),
        portada:z.string().nonempty(),
        galeria:z.array(z.string()).nonempty(),

    })
})

export const collections = {services,FAQ,propiedades};