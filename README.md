## Next 13 SSR POC

### General Concept

This was a spike to see how SSR works with the Next 13 app directory. The way the app works, the /hello route is Server Side Rendered, but not all of it. We are
rendering the zap steps on the server but the side bar and the status for the steps are using suspense and rendered client side. All of the data is stored in recoil state and
rendered in the components using useRecoilValue. There is a timeout used to simulate an async call to a server to get data.

There were two things that we learned:

1. Client Components (those using 'use client') can be rendered server side
2. Client Components can't be async components but can use async functions (like normal components) but Server Components (those without 'use client') can be async components .

## Instructions to run

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000/hello](http://localhost:3000/hello) with your browser to see the result.
