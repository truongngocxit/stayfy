export default async function timeoutPromiseDelay(secs) {
  const promiseDelay = new Promise((resolve) => {
    setTimeout(() => {
      resolve(null);
    }, secs * 1000);
  });

  await promiseDelay;

  return null;
}
