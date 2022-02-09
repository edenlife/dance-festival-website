export function notUrl(value = "") {
    return !value.includes("https") && !value.includes(".com") && !value.includes("www")  && !value.includes("/")  && !value.includes("@");
  }