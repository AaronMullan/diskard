## About Diskârd:

The deploy of this site is at: https://diskard.vercel.app/

The Diskârd site is built with Next.js. At first the idea was to see how to fix one specific visual bug on http://www.ridwell.com. Somehow that snowballed into a doppelganger site.

The frontend is mostly inline styles, with some module.css in there just for variety I guess? Modules do give you media queries, which inline styles don't usually have, bailed out here by a useMediaQuery hook.

Form submissions are going to supabase, and the data can be seen at '/contacts/'.



## To run locally:

Clone this repo.

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
