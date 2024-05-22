# The T3-Sanity Starter Kit

My favorite way to spin up a Next.js app is with [`create-t3-app`](https://create.t3.gg), and my favorite CMS platform is [Sanity](https://sanity.io). Since I use both of these tools all the time, I thought I'd save myself the hassle of setting up Sanity by creating some sort of starter. I mainly made this for myself, but maybe I'll look into making it into an easy to copy GitHub template in the future.

## Features

* React Server Components, of course
* Sanity Studio embedded into the app
* Supercharged live editing (Presentation mode) powered by Tinloof's [Sanity Kit](https://github.com/tinloof/sanity-kit/tree/main/packages/sanity-studio) plugin
  * Enables page creation, page folders, and layout building directly inside the studio
* Type generation of your Sanity schema powered by Sanity TypeGen
* Tailwind CSS, plus Prettier's Tailwind plugin pre-configured
* The `t3-env` package, which enables typesafety for env variables!
* Zod out of the box if you need it
* Turbopack enabled for `next dev`

***

Giant WIP. Built by Mike ⚡️ 2024 :)
