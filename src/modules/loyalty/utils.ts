export const fileToBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () =>
      resolve(
        r.result?.toString().split(",")[1] ?? ""
      );
    r.onerror = reject;
    r.readAsDataURL(file);
  });
