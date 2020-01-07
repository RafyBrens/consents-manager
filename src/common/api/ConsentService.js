import fetch from './fetchMock';

export default class ConsentService {
  baseUrl = process.env.API_URL;

  static async createConsent(data) {
    const result = fetch(`${this.baseUrl}/consent`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return result;
  }
}
