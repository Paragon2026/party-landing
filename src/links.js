// Store listing — com.party_app is the Android applicationId (app/android/app/build.gradle).
export const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.party_app';

// Legal pages, served by the app (party-app-rpg project, cleanUrls rewrites).
const LEGAL = 'https://findyour.party';
export const LEGAL_URLS = {
  terms: `${LEGAL}/terms-of-service`,
  privacy: `${LEGAL}/privacy-policy`,
  guidelines: `${LEGAL}/community-guidelines`,
  deletion: `${LEGAL}/account-deletion-policy`,
};

// The app itself, on the web: without an account it opens on « Découvrir sans compte ».
export const WEB_APP_URL = 'https://findyour.party/';
