export {};

declare global {
  interface Window {
    gapi: {
      load: any,
      auth2: any,
      isSignedIn: () => boolean;
    }
  }
}
