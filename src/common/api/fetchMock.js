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
      const newData = consents.map(c => ({
        ...c,
        agreementsText: getAgreementsText(c.agreements),
      }));
      return createPromise(newData);
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

const items = {
  1: 'Receive newsletter',
  2: 'Be shown targeted ads',
  3: 'Contribute to anonymous visit statistics',
};

const getAgreementsText = agreements => {
  const result = agreements.reduce(
    (text, element) => `${text} ${items[Number(element)]},`,
    ''
  );
  return result;
};
