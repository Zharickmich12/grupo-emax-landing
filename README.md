# Enerplan · Landing de asesoramiento energético

Landing page para captar clientes en España interesados en ahorrar en su factura de luz y gas y solicitar una consulta gratuita. Prueba técnica de Grupo EMAX.

**Demo:** [grupo-emax-landing.vercel.app](https://grupo-emax-landing.vercel.app/)
**Diseño en Figma:** [Mockups](https://www.figma.com/design/ROVZzXWlTW8hX5hpOGWB81/enerplan?node-id=0-1&t=qeLJKzgMl011jIGg-1)

## Tecnologías

- **Next.js (App Router) + TypeScript**: rutas, fuentes optimizadas y metadatos SEO.
- **Tailwind CSS v4**: estilos con tokens propios definidos en `@theme` (`app/globals.css`).
- **Plus Jakarta Sans** con `next/font`.
- Sin librerías de UI ni plantillas: todos los componentes son propios.

## Organización del proyecto

```
app/            layout, página y estilos globales (tokens de diseño)
components/
  layout/       Header, Footer
  sections/     Hero, Problem, Solution, Benefits, HowItWorks, ContactForm
  ui/           Button, Container, SectionTitle, CheckIcon
content/es.json Todos los textos de la página
lib/content.ts  Acceso tipado al contenido
```

Los textos viven en `content/es.json`, separados del código. Así se pueden cambiar o traducir sin tocar los componentes.

## Decisiones de diseño

- **Paleta:** azul profundo para confianza y seriedad. El verde se reserva solo para acciones y checks, así que es lo que más llama la atención en cada pantalla.
- **Hero:** en lugar de una foto genérica, una comparativa visual antes/después (142€ → 85€). Enseña el beneficio principal en un vistazo.
- **Conversión:** el CTA aparece en el header, el hero y el banner de la solución, y los tres llevan al formulario de contacto.
- **Jerarquía:** un solo h1 y secciones con fondos alternados (blanco, gris, azul claro) para separar los bloques sin depender de líneas.
- **Responsive:** diseñado en Figma para móvil, tablet y escritorio. Las cuadrículas pasan de 1 a 2 y 3 columnas, y el header se convierte en menú hamburguesa en móvil.
- **Accesibilidad:** etiquetas ligadas a cada campo, errores anunciados con `aria-describedby`, foco visible, `prefers-reduced-motion` y HTML semántico.

## Formulario

El formulario valida en el cliente (nombre, teléfono y email obligatorios, con formato comprobado) y muestra un mensaje de confirmación. **El envío está simulado**: no hay backend conectado. En `components/sections/ContactForm.tsx` hay un comentario en el punto exacto donde iría la llamada a un endpoint real.

## Uso de IA

Usé IA como apoyo, no como sustituto.

- El diseño, la paleta, los tokens y la estructura de contenido los definí yo en Figma.
- Usé Claude para pasar los mockups a componentes de Next.js y para redactar borradores de textos.
- Después revisé el código generado, lo adapté a mi estructura de proyecto y ajusté detalles.
- Probé la web en móvil, tablet y escritorio antes de publicarla.

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abre http://localhost:3000. Para producción: `npm run build`.