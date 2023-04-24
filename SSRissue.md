Hello friends,

## Request

I would like to suggest an option to allow a selector to be cached respective to a `RecoilRoot` rather than the application.

## Context

From a strictly client side approach, caching globally/application level doesn't seem to cause any problems. However, I am trying to use recoil in a Server Side Rendered application using Nextjs 13. I am seeing an undesired behavior where a selector is not rerun on the server when rendering a page if it has been run because the page has been requested previously. It seems that the cache is not tied to a `RecoilRoot`, which makes sense based off [of the documentation](https://recoiljs.org/docs/api-reference/core/RecoilRoot/#using-multiple-recoilroots). This is undesireable because it increases the risk of cached data being accessed accidentally or stale data being rendered.

## Code Suggestion

I would suggest adding an option to a selector allowing a user to specify if the cache should be tied to a `RecoilRoot`.

## Questions

1. Is this how recoil is designed to work with SSR?
2. Is there a reason that I shouldn't try to use recoil with SSR?
