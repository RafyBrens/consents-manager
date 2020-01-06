export default (url, request) => {
  const baseUrl = process.env.API_URL;

  const data = localStorage.getItem('consents') || '[]';
  const consents = JSON.parse(data);

  switch (url) {
    case `${baseUrl}/consent`: {
      const result = JSON.parse(request.body);

      // eslint-disable-next-line fp/no-mutating-methods
      consents.push({ id: Math.round(Math.random() * 1000000), ...result });

      localStorage.setItem('consents', JSON.stringify(consents));
      return createPromise(result);
    }
    case `${baseUrl}/consents`: {
      const result = JSON.parse(data);
      return createPromise(result);
    }
    default:
      return {};
  }
};

const createPromise = data =>
  new Promise(resolve => {
    window.setTimeout(() => {
      resolve(data);
    }, 500);
  });
