import { useMemo } from "react";
import { InternetType } from "../modal";

export function getDate() {
  const date = new Date();
  let formatter = new Intl.DateTimeFormat("ru");
  return formatter.format(date);
}

export function getInternetResourse(data: InternetType) {
  const description = useMemo(() => {
    const date = getDate();
    if (data.title && data.lastName) {
      return `${data.title} / ${data.lastName} ${data.firstLetter}.${data.lastLetter}. [Электронный ресурс]. - URL: ${data.url} (${date})`;
    } else if (data.site && !data.title) {
      return `${data.site}. - Режим доступа: ${data.url}, ${date}`;
    } else {
      return `${data.title} [Электронный ресурс]. - URL: ${data.url} (${date})`;
    }
  }, []);
  return description;
}
