export const parseText = (text: string, len: number): string => {
  return text.length > len ? (
    `${text.slice(0, len)} ...`
  ) : text;
}