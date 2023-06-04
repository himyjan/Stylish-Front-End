'use client';

const tappay = {
  setupSDK() {
    window['TPDirect' as keyof typeof globalThis].setupSDK(
      '12348',
      'app_pa1pQcKoY22IlnSXq5m5WP5jFKzoRG58VEXpT7wU62ud7mMbDOGzCYIlzzLF',
      'sandbox',
    );
  },
  setupCard(
    numberElement: undefined,
    expirationDateElement: undefined,
    ccvElement: undefined,
  ) {
    window['TPDirect' as keyof typeof globalThis].card.setup({
      fields: {
        number: {
          element: numberElement,
          placeholder: '**** **** **** ****',
        },
        expirationDate: {
          element: expirationDateElement,
          placeholder: 'MM / YY',
        },
        ccv: {
          element: ccvElement,
          placeholder: '後三碼',
        },
      },
      styles: {
        '.valid': {
          color: 'green',
        },
        '.invalid': {
          color: 'red',
        },
      },
    });
  },
  canGetPrime() {
    return window['TPDirect' as keyof typeof globalThis].card.getTappayFieldsStatus().canGetPrime;
  },
  getPrime() {
    return new Promise((resolve) => {
      window['TPDirect' as keyof typeof globalThis].card.getPrime((result: unknown) => {
        resolve(result);
      });
    });
  },
};

export default tappay;
