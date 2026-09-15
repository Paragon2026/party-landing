// Store listing — com.party.app is the Android applicationId (app/android/app/build.gradle).
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.party.app';

// Legal & Trust Center (party-app-legal Vercel project, cleanUrls rewrites).
const LEGAL = 'https://party-app-legal.vercel.app';
export const LEGAL_URLS = {
  terms: `${LEGAL}/terms-of-service`,
  privacy: `${LEGAL}/privacy-policy`,
  guidelines: `${LEGAL}/community-guidelines`,
  deletion: `${LEGAL}/account-deletion-policy`,
};
