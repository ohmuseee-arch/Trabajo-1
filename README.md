# FitVirtual Frontend

Landing principal de una plataforma de entrenamiento online, construida con Next.js App Router, TypeScript y Tailwind CSS.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Lucide React
- Framer Motion
- Mock data local tipado

## Ejecutar local

```bash
npm install
npm run dev
```

Abrir `http://localhost:3000`.

## Validación

```bash
npm run lint
npm run build
```

## Rutas incluidas

- `/`

## Estructura principal

- `app/(site)` pagina principal
- `components/layout` shell compartido, header, footer y menu movil
- `components/home` secciones clave de la home
- `components/classes`, `components/progress`, `components/faq`, `components/trainer`
- `data/` mocks tipados para clases, FAQ, progreso y navegacion
- `types/` tipado de dominio
- `lib/utils.ts` utilidades comunes (`cn`)

## Notas de despliegue en Vercel

Proyecto listo para desplegar directamente en Vercel como app Next.js estándar.
