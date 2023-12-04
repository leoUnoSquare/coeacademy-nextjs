# Configuring Firebase

This how-to will guide you through setting up a Firebase project and link it to your app.

---

First, you need to register and log into [Firebase](https://firebase.google.com/).

Once you're logged in, navigate to the [Firebase console](https://console.firebase.google.com/) and select
**Add project**, then enter a project name and click **Continue**. For demo purposes we can skip the Google Analytics
configuration, so uncheck the **Enable Google Analytics for this project** checkbox and click **Create project**

Now we need to add a new web app, and then configure **Authentication** and **Cloud Firestore**.

## Adding a new app

On the **Project Overview** page, click on the ([**Web** icon](docs%2Fimages%2Ffirebase-add-web-app.png)). Fill in the
**App nickname** and click on the **Register app** button.

Now copy the generated variables to your `.env.local` file as follows:

```
// i.e. copy the `apiKey` value to NEXT_PUBLIC_FIREBASE_WEB_APP_API_KEY
 
const firebaseConfig = {
  apiKey: NEXT_PUBLIC_FIREBASE_WEB_APP_API_KEY,
  authDomain: NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: NEXT_PUBLIC_PROJECT_ID,
  storageBucket: NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: NEXT_PUBLIC_FIREBASE_WEB_APP_SENDER_ID,
  appId: NEXT_PUBLIC_FIREBASE_WEB_APP_APP_ID
};
```

Next, click on the **Continue to console** button.

> Note: you can retrieve these values again in the **Project settings** page on the **Your apps** section.

Now you need to create a new private key: on the [**Project settings**](images%2Ffirebase-project-settings.png) page
select the **Service accounts** tab, click the **Generate new private key** button and then **Generate key**. This will
download a `project-name-firebase-adminsdk.json` file.

Open the JSON file and copy the variables to your `.env.local` file as follows:

```
{
  "project_id": FIREBASE_PROJECT_ID,
  "private_key": FIREBASE_PRIVATE_KEY,
  "client_email": FIREBASE_CLIENT_EMAIL (this needs to be wrapped in double quotes in the `.env.local` file
}
```

## Firebase Authentication

To configure **Firebase Authentication**, navigate to the **Project Overview** page and click on **Authentication**. Then
click on **Get started**. Now, on the **Sign-in method** tab select **Email/Password**, then enable the checkbox and
click the **Save** button.

Now click on the **Add new provider** button, select **Google** and enable the checkbox. Fill the **Support email for
project** input and click **Save**.

## Configuring Cloud Firestore

On the **Project Overview** page click on **Cloud Firestore**, then click on the **Create database** button. Leave the
default values and click on **Next**. For demo purposes select **Start in test mode** and click **Enable**

Now you need to create two collections: `users` and `playlists`.

On the **Cloud Firestore** dashboard, click on **Start collection** and type `users` on the **Collection ID** input,
then click **Next**. Now fill the first document as follows (click **Auto-ID** to generate an ID):

![firebase-users-collection.png|400](docs%2Fimages%2Ffirebase-users-collection.png)

Repeat the same process to create a `playlists` collection and create the first document as follows:

![firebase-playlists-collection.png](docs%2Fimages%2Ffirebase-playlists-collection.png)
