# coeacademy-nextjs

This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, you need to set up the environment variables and a Firebase project.

Start by copying the `.env.example` file on the root of the project and rename it to `.env.local`. Now fill the
`NEXTAUTH_SECRET` environment variable with a random string, e.g.
from [random.org](https://www.random.org/strings/?num=1&len=32&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html&rnd=new)

To configure your Firebase project follow the [Configuring Firebase](docs%2Fconfiguring-firebase.md) tutorial.

Once you have your Firebase configuration ready, you can install the project dependencies by running:

```bash
npm install
```

Now you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Try to create a new account and log into the app.
