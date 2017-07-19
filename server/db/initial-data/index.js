import "isomorphic-fetch";

export default function () {

}

export function getJsonByUrl (url) {
  return fetch(url)
    .then(response => {
      if (response.status >= 400) {
        throw new Error(`Bad response. res.status: ${res.satus}`);
      }
      return response.json();
    })
}
