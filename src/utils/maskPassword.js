export default function maskPassword(password) {
  const first3Chars = password.slice(0, 3);
  const restChars = password.slice(3);
  const maskedRestChars = restChars.replaceAll(/./g, "*");

  return first3Chars + maskedRestChars;
}
