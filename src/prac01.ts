export {};

import dayjs from "dayjs";
import 'dayjs/locale/ja'; // 日本語ロケールをインポート
import weekday from 'dayjs/plugin/weekday';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.locale('ja'); // 日本語ロケールを使用
dayjs.extend(weekday);
dayjs.extend(customParseFormat);

const dtFmt = "YYYY/MM/DD(ddd) HH:mm";
const deadline: Date = new Date(2024, 10, 2, 11, 45);
const cratedAt: Date = new Date(); // 引数なしで現在日時を取得

//期限 2024/11/02(土) 11:45(登録日 2024/10/08(火) 14:58)のような出力を得たい
const str =
  `期限 ${dayjs(deadline).format(dtFmt)}` +
  `(登録日 ${dayjs(cratedAt).format(dtFmt)})`;
console.log(str);


/*
const str =
  `期限 ${dayjs(deadline).format(dtFmt)}` +
  `(登録日 ${dayjs(cratedAt).format(dtFmt)})`;
console.log(str);
*/

/*
import dayjs from "dayjs"; // dayjsのインポート

const deadline: Date = new Date(2024, 10, 2, 11, 45);
const cratedAt: Date = new Date(); // 引数なしで現在日時を取得

const str =
  `期限 ${dayjs(deadline).format("YYYY/MM/DD HH:mm")}` +
  `(登録日 ${dayjs(cratedAt).format("YYYY/MM/DD HH:mm")})`;
console.log(str);
*/

/*
import { date2str } from "./utils/date2str";

const deadline: Date = new Date(2024, 10, 2, 11, 45);
const cratedAt: Date = new Date(); // 引数なしで現在日時を取得

let str = `期限 ${date2str(deadline)} (登録日 ${date2str(cratedAt)})`;
console.log(str);
*/

/*
const deadline: Date = new Date(2024, 10, 2, 11, 45);
const cratedAt: Date = new Date(); // 引数なしで現在日時を取得

const dlYear = deadline.getFullYear();
const dlMonth = String(deadline.getMonth() + 1).padStart(2, "0");
const dlDay = String(deadline.getDate()).padStart(2, "0");
const dlHours = String(deadline.getHours()).padStart(2, "0");
const dlMinutes = String(deadline.getMinutes()).padStart(2, "0");

const caYear = cratedAt.getFullYear();
const caMonth = String(cratedAt.getMonth() + 1).padStart(2, "0");
const caDay = String(cratedAt.getDate()).padStart(2, "0");
const caHours = String(cratedAt.getHours()).padStart(2, "0");
const caMinutes = String(cratedAt.getMinutes()).padStart(2, "0");

const str =
  `期限 ${dlYear}/${dlMonth}/${dlDay} ${dlHours}:${dlMinutes} ` +
  `(登録日 ${caYear}/${caMonth}/${caDay} ${caHours}:${caMinutes})`;
console.log(str);
*/



/*let name: string = "TypeScript";  
let priority: number = 3;
*/

/*
// Date型の変数 deadline の宣言と初期化
let deadline: Date = new Date(2024, 10, 2, 11, 45);

//deadlineの内容を yyyy/mm/dd hh:mm:ss の形式でコンソールに
//出力する。ここでは外部ライブラリを使用しない
const year = deadline.getFullYear();
const month = String(deadline.getMonth() + 1).padStart(2, '0'); // 月は0から始まるため +1
const day = String(deadline.getDate()).padStart(2, '0');
const hours = String(deadline.getHours()).padStart(2, '0');
const minutes = String(deadline.getMinutes()).padStart(2, '0');

console.log(`${year}/${month}/${day} ${hours}:${minutes}`);
*/

/*
const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
console.log(`Timezone: ${timeZone}`);
*/






/*
const todo = {
  name: "TypeScriptの勉強",
  priority: 3,
  isDone: false,
  deadline: new Date(2024, 9, 11, 9, 45),
};
*/


/*
console.log(`name の型は ${typeof name} です`);
console.log(`priority の型は ${typeof priority} です`);
*/

/*name = 4649;  エラーになる

priority = "High"; エラーになる 
*/


/*const todo = {
  name: "TypeScriptの勉強", // name = "..." ではない点に要注意
  priority: 3, // priority = "..." ではない点に要注意
};
console.log(`Todo 1 => ${todo.name}（優先度:${todo.priority})`);

console.log(JSON.stringify(todo, null, 2));
*/

/*
// Date型の変数 deadline の宣言と初期化
let deadline: Date = new Date(2024, 10, 2, 11, 45);


// 年、月、日、時間、分を取得
let year = deadline.getFullYear();
let month = (deadline.getMonth() + 1).toString().padStart(2, '0'); // 月は0から始まるので+1
let day = deadline.getDate().toString().padStart(2, '0');
let hours = deadline.getHours().toString().padStart(2, '0');
let minutes = deadline.getMinutes().toString().padStart(2, '0');

// フォーマットされた文字列を作成
let formattedDate = `${year}/${month}/${day} ${hours}:${minutes}`;
console.log(formattedDate); // "2024/11/02 11:45" の形式で出力される
*/