'use client';

const fb = {
  loadScript() {
    return new Promise<void>((resolve) => {
      (window as any).fbAsyncInit = () => {
        resolve();
      };
      (function (d, s, id) {
        var js,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        (js as any).src = 'https://connect.facebook.net/zh_TW/sdk.js';
        fjs?.parentNode?.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    });
  },
  init() {
    window['FB' as keyof typeof globalThis].init({
      appId: '700590737403665',
      cookie: true,
      xfbml: true,
      version: 'v10.0',
    });
  },
  getLoginStatus() {
    return new Promise((resolve) => {
      window['FB' as keyof typeof globalThis].getLoginStatus((response: unknown) => {
        resolve(response);
      });
    });
  },
  login() {
    return new Promise((resolve) => {
      window['FB' as keyof typeof globalThis].login(
        (response: unknown) => {
          resolve(response);
        },
        { scope: 'public_profile,email' },
      );
    });
  },
  logout() {
    return new Promise<void>((resolve) => {
      window['FB' as keyof typeof globalThis].logout(() => {
        resolve();
      });
    });
  },
};

export default fb;
