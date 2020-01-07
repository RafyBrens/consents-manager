export const validateEmail = email => {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
};
