# Playlists Pulse

Welcome to Playlists Pulse, a versatile playlist manager that allows users to create, share, and discover music playlists
effortlessly. Whether you're curating your favorite tunes or exploring new sounds, our platform makes playlist
management a seamless experience.

This is a [Next.js](https://nextjs.org/) project bootstrapped
with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) used for the Next.js
Academy from the Unosquare's Javascript Center of Excellence.

## Features

- Firebase Integration: Utilizing the power of Firebase for backend operations,
  including [authentication](https://firebase.google.com/docs/auth/)
  with [NextAuth.js](https://www.npmjs.com/package/next-auth) and storage
  in [Firebase Cloudstore](https://firebase.google.com/docs/firestore/).
- User-Friendly Interface: Intuitive design for easy playlist submission with fields for name, URL, and description.
- Responsive Design: Enjoy a consistent and delightful experience across various devices.

## Screenshots

![login.png](docs%2Fimages%2Flogin.png)

![playlists.png](docs%2Fimages%2Fplaylists.png)

## Getting Started

First, you need to set up the environment variables and a Firebase project.

Start by copying the `.env.example` file on the root of the project and rename it to `.env.local`. Now fill the
`NEXTAUTH_SECRET` environment variable with a random string, e.g.
from [random.org](https://www.random.org/strings/?num=1&len=32&digits=on&upperalpha=on&loweralpha=on&unique=on&format=html&rnd=new).

To configure your Firebase project follow the [Configuring Firebase](docs%2Fconfiguring-firebase.md) tutorial.

Once you have your Firebase configuration ready, you can install the project dependencies by running:

> Note: the project requires Node >= 18.17.0

```bash
npm install
```

Now you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Try to create a new account and
log into the app.
