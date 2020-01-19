
export default class FormatHelper {
  public static absoluteUrl (req: any, setLocalhost?: boolean) {
    let protocol = 'https:/';
    let host = req ? req.headers.host : window.location.hostname;
    if (host.indexOf('localhost') > -1) {
      if (setLocalhost) host = setLocalhost;
      protocol = 'http:/'
    }

    return {
      protocol: protocol,
      host: host
    }
  }
}
