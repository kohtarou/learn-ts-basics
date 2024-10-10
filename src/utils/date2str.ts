import dayjs from "dayjs";
import 'dayjs/locale/ja'; // 日本語ロケールをインポート
import weekday from 'dayjs/plugin/weekday';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.locale('ja'); // 日本語ロケールを使用
dayjs.extend(weekday);
dayjs.extend(customParseFormat);


export const date2str = (dt: Date): string => {
  const year = dt.getFullYear();
  const month = String(dt.getMonth() + 1).padStart(2, "0");
  const day = String(dt.getDate()).padStart(2, "0");
  const hours = String(dt.getHours()).padStart(2, "0");
  const minutes = String(dt.getMinutes()).padStart(2, "0");
  return `${year}/${month}/${day} ${hours}:${minutes}`;
};