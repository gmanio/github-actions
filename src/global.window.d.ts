export {};

declare global {
  interface Window {
    gapi: any;
    init: () => void;
  }
}
