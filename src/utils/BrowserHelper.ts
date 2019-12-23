export default class BrowserHelper {
  public static isMobile = (ua: string): boolean => /iPhone|iPad|iPod|Android/i.test(ua);
}
