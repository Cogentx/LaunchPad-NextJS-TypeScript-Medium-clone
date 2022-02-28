import { createCurrentUserHook, createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';

/* next-sanity BREAKING CHANGES
Change Log
All notable changes will be documented in this file.

0.5.0 - 2022-02-16
Features
Upgraded @sanity/groq-store to v0.3.0 which includes a new beta of groq-js that improves performance, especially when using projections.
BREAKING
Upgraded @sanity/client to v3, see its CHANGELOG for details.
createPortableTextComponent is removed.
createImageUrlBuilder is removed.
See the README for migration instructions.
--- README ---
createImageUrlBuilder is removed
This utility is no longer wrapped by next-sanity and you'll need to install the dependency yourself:

$ npm install @sanity/image-url
// or
$ yarn add @sanity/image-url
-import { createImageUrlBuilder } from 'next-sanity'
+import createImageUrlBuilder from '@sanity/image-url'
*/

export const config = {
  /**
   * Find your project ID and dataset in `sanity.json` in your studio project.
   * These are considered “public”, but you can use environment variables
   * if you want differ between local dev and production.
   *
   * https://nextjs.org/docs/basic-features/environment-variables
   **/
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: '2021-10-21', // Learn more: https://www.sanity.io/docs/api-versioning
  /**
   * Set useCdn to `false` if your application require the freshest possible
   * data always (potentially slightly slower and a bit more expensive).
   * Authenticated request (like preview) will always bypass the CDN
   **/
  useCdn: process.env.NODE_ENV === 'production',
};

// Setup the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 **/
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
