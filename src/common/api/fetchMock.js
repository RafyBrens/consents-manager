export default (url, request) => {
  const baseUrl = process.env.API_URL;

  const data = localStorage.getItem('consents') || '[]';
  const consents = JSON.parse(data);

  switch (url) {
    // POST to consents
    case `${baseUrl}/consent`: {
      const result = JSON.parse(request.body);

      const newConsents = [
        ...consents,
        { ...result, id: Math.round(Math.random() * 1000000) },
      ];

      // Persist saved data to simualate database
      localStorage.setItem('consents', JSON.stringify(newConsents));
      return createPromise(result);
    }
    // Get consents
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

/* Create promise with delay to make the sensation a request is being performed */
const createPromise = data =>
  new Promise(resolve => {
    window.setTimeout(() => {
      resolve(data);
    }, 500);
  });

/* Based on the id of agreement, generate the text of all agreements selected  */
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
  return result.slice(0, result.length - 1);
};
