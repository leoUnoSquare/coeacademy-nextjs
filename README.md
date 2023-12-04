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


## Pre-requisites:

An AWS account will be needed for deployments. The verification process could take up to 24 hours, so please **implement these steps as soon as possible**

  - Open the [Amazon Web Services home page](https://aws.amazon.com/). 
  - Choose `Create a new AWS account`.
  - Enter your account information, and then choose `Verify email address`. This will send a verification code to your specified email address.
  - Enter your verification code, and then choose `Verify`.
  - Enter a password for your root user, confirm it, and then choose `Continue` (1/5).
  - Choose `Personal account`, enter your personal information and accept terms & conditions (2/5).
  - Enter your debit card information. Make sure you card is enabled for internet transactions. Don't worry, **all activities to be done in the Next.js Academy will be under the AWS free tier program** (3/5).
  - Provide your phone number and solve captcha (4/5).
  - Enter the phone code to verify your account (5/5).
  - Select AWS Support (Basic) plan.


## Getting Started

- Firebase account: ToDo add tutorial

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
