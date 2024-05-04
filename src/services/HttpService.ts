/* eslint-disable no-magic-numbers */
/* eslint-disable @typescript-eslint/no-explicit-any */
function requestInterceptor(options?: any) {
  const config = options ? { ...options } : {};

  config.method = options?.method || "GET";
  config.credentials = "include";

  if (!options.next) {
    config.cache = options?.cache || "no-cache";
  }

  config.headers = options.headers;

  return config;
}

function responseInterceptor(url: string, request: any, response: any) {
  let data: any;

  try {
    data = response
      .clone()
      .json()
      .catch(() => response.text());
  } catch (e) {
    data = null;
  }

  if ([200, 201, 204].includes(response.status)) {
    return Promise.resolve(data);
  }

  if ([401, 403].includes(response.status) && typeof window !== "undefined") {
    window.location.reload();
  }

  return Promise.reject(response);
}

export const httpService = async (url: string, params?: any) => {
  const options = requestInterceptor(params);
  const apiResponse = await fetch(url, options);

  return responseInterceptor(url, options, apiResponse);
};
