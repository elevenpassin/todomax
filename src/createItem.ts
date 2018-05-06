import { URL } from 'url';

export default function createItem(url: string) {
  const myURL: URL = new URL(url);
  const text = myURL.searchParams.get('text');
  const completed = myURL.searchParams.get('completed') === "true";

  if (!(text && completed)) {
    return false;
  }

  return {
    text,
    completed,
  };
}