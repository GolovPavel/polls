import {ACCESS_TOKEN} from "../constants/api";

export const request = options => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append('Authorization', `Bearer ${localStorage.getItem(ACCESS_TOKEN)}`);
  }

  const requestOptions = {
    ...{ headers },
    ...options
  };

  return fetch(options.url, requestOptions).then(response => {
      if (!response.ok) {
        return response.json().then(text => Promise.reject(text))
      }

      return response.json()
    }
  )
};

