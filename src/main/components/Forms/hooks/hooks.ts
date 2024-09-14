import { useMemo } from "react";
import { InternetType, LiterType } from "../models";
import { formActions } from "../slice/formSlice";

export function getDate() {
  const date = new Date();
  let formatter = new Intl.DateTimeFormat("ru");
  return formatter.format(date);
}

let id = 1;

export function getInternetResourse(data: InternetType):LiterType[] {
    const date = getDate();
    let str = "";
    if (data.title && data.lastName) {
      str =  `${data.title} / ${data.lastName} ${data.firstLetter}.${data.lastLetter}. [Электронный ресурс]. - URL: ${data.url} (${date})`
    } else if (data.site && !data.title) {
      str = `${data.site}. - Режим доступа: ${data.url}, ${date}`
    } else {
      str = `${data.title} [Электронный ресурс]. - URL: ${data.url} (${date})`
    }
    return [{id: ++id, str: str}]
}
