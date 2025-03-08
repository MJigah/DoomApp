import { getToken, removeUserSession } from "../utils/helper";

export async function request(
  url: any,
  payload: any,
  method: any,
  options: any = {},
  customToken?: string
) {
  const token = await getToken();
  const defaultHeader: { [key: string]: string } = {
    Authorization: `Bearer ${customToken || token}`,
    "X-API-KEY": customToken || token || "",
  };

  if (options.isPdf) {
    defaultHeader["Content-Type"] = "application/pdf";
  } else if (!options.isFormData) {
    defaultHeader["Content-Type"] = "application/json";
  }

  if (/GET/g.test(method)) {
    const genUrl = () => {
      const payloadKeys = Object.keys(payload);
      return payloadKeys.length === 0
        ? url
        : payloadKeys.reduce(
            (cum, index, i) =>
              `${cum}${index}=${payload[index]}${
                i === payloadKeys.length - 1 ? "" : "&"
              }`,
            `${url}?`
          );
    };

    url = genUrl();

    return fetch(url, {
      method,
      headers: Object.assign({}, defaultHeader),
    })
      .then((res) => {
        if (!res.ok) {
          return new Promise(async (resolve, reject) => {
            reject(await res.json());
          });
        } else {
          console.log(res);
          return !options.isDownload ? res.json() : res.blob();
        }
      })
      .then((jsonResponse) => {
        if (!jsonResponse.arrayBuffer) {
          console.log(`%c RESPONSE OF ${url}: `, "color: green;");
          console.log(jsonResponse);
          return jsonResponse;
        } else {
          const url = window.URL.createObjectURL(jsonResponse);
          var a = document.createElement("a");
          a.href = url;
          a.download = options.fileName;
          document.body.appendChild(a);
          a.click();
          a.remove();
        }
      })
      .catch((err) => {
        console.log(`%c ERROR OF ${url}: `, "color: red;");
        console.log(err);
        if (
          err?.message === "Invalid token" ||
          err?.message === "Session Expired"
        ) {
          removeUserSession();
        }

        if (err.message === "Failed to fetch") {
          err.message = "Network connection error";
        }

        return new Promise((resp, reject) => {
          reject(err);
        });
      });
  } else {
    return fetch(url, {
      method,
      headers: Object.assign({}, defaultHeader),
      body: options.isFormData ? payload : JSON.stringify(payload),
    })
      .then((res) => {
        if (!res.ok) {
          return new Promise(async (resolve, reject) => {
            reject(await res.json());
          });
        } else {
          return res.json();
        }
      })
      .then((jsonResponse) => {
        console.log(`%c RESPONSE OF ${url}: `, "color: green;");
        console.log(jsonResponse);
        return jsonResponse;
      })
      .catch((err) => {
        console.log(`%c ERROR OF ${url}: `, "color: red;");
        console.log(err);
        if (err.message === "Failed to fetch") {
          err.message = "Network connection error";
        }

        return new Promise((resp, reject) => {
          reject(err);
        });
      });
  }
}
