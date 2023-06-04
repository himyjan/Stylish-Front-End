# Next.js + Turbopack App Directory Playground

[Turbopack](https://turbo.build/pack) is a new incremental bundler optimized for JavaScript and TypeScript, written in Rust by the creators of Webpack and Next.js at [Vercel](https://vercel.com). On large applications Turbopack updates 10x faster than Vite and 700x faster than Webpack ([benchmark](https://turbo.build/pack/docs/benchmarks)). For the biggest applications the difference grows even more stark with updates up to 20x faster than Vite.

This playground is a mirror of the [Next.js v13 App Directory Playground](https://github.com/vercel/app-playground), but uses Turbopack as the Next.js development server (`next dev --turbo`).

**As a reminder, Turbopack is currently in alpha and not yet ready for production. We appreciate your ongoing support as we work to make it ready for everyone.**

## Running Locally

1. Install dependencies: `yarn`
1. Start the dev server: `yarn dev`

**Note:** The playground uses [Tailwind CSS](https://tailwindcss.com). However, Turbopack does not yet support fully [PostCSS](https://turbo.build/pack/docs/features/css#postcss), but it does support CSS and CSS Modules. [As a workaround](https://turbo.build/pack/docs/features/css#tailwind-css), we run Tailwind through it's CLI upon `postinstall`. For live reload of CSS, you can run Tailwind in another process with the `--watch` flag or install `concurrently` and modify your `dev` script:

```bash
yarn add concurrently --dev
```

Then modify your `dev` script in `package.json`:

```json
{
  "scripts": {
    "dev": "concurrently \"next dev --turbo\" \"npm run tailwind --watch\""
  }
}
```

For more information, see: https://turbo.build/pack/docs/features/css#tailwind-css

## Documentation

https://nextjs.link/with-turbopack

## Providing Feedback

https://nextjs.link/turbopack-feedback



Example app with styled-components
This example features how you use a different styling solution than styled-jsx that also supports universal styles. That means we can serve the required styles for the first render within the HTML and then load the rest in the client. In this case we are using styled-components.

This example uses the Rust-based SWC in Next.js for better performance than Babel.

Currently, only the ssr and displayName transforms have been implemented. These two transforms are the main requirement for using styled-components in Next.js.

Deploy your own
Deploy the example using Vercel or preview live with StackBlitz

Deploy with Vercel

How to use
Execute create-next-app with npm, Yarn, or pnpm to bootstrap the example:
