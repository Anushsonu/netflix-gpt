export const checkValidData = (email, password, name) => {
  const isEmailValid = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm.test(email);
  const isPasswordValid =
    /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/.test(password);
  if (!isPasswordValid) {
    return "Password not valid";
  }
  if (!isEmailValid) {
    return "Email not valid";
  }
  return null;
};
