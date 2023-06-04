import { ofetch } from 'ofetch';

const api = {
  hostname: 'https://api.appworks-school.tw/api/1.0',
  async getProducts(category: string, paging: number) {
    const response = await ofetch(
      `${this.hostname}/products/${category}?paging=${paging}`,
    );
    return await response;
  },
  async getCampaigns() {
    const response = await ofetch(`${this.hostname}/marketing/campaigns`);
    return await response;
  },
  async searchProducts(keyword: string, paging: number) {
    const response = await ofetch(
      `${this.hostname}/products/search?keyword=${keyword}&paging=${paging}`,
    );
    return await response;
  },
  async getProduct(id: string) {
    const response = await ofetch(`${this.hostname}/products/details?id=${id}`);
    return await response;
  },
  async checkout(data: {}, jwtToken: string) {
    const response = await ofetch(`${this.hostname}/order/checkout`, {
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      }),
      method: 'POST',
    });
    return await response;
  },
  async signin(data: {}) {
    const response = await ofetch(`${this.hostname}/user/signin`, {
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      method: 'POST',
    });
    return await response;
  },
  async getProfile(jwtToken: string) {
    const response = await ofetch(`${this.hostname}/user/profile`, {
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      }),
    });
    return await response;
  },
};

export default api;
