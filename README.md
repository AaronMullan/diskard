## About Diskârd:

The deploy of this site is at: https://diskard.vercel.app/

The Diskârd site is built with Next.js. At first the idea was to see how to fix one specific visual bug on http://www.ridwell.com. Somehow that snowballed into a doppelganger site.

The frontend is mostly inline styles, with some module.css in there just for variety I guess? Modules do give you media queries, which inline styles don't usually have, bailed out here by a useMediaQuery hook.

Form submissions are going to supabase, and the data can be seen at '/contacts/'.

Apart from that the data is just static.  An example of a site with data fetched from a CMS is at https://github.com/AaronMullan/tables.
