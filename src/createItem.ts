import { URL, URLSearchParams, UrlWithStringQuery } from 'url';

export default function createItem(url: string) {
  const myURL = new URL(url);
  console.log(myURL);
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