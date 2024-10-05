export {};
const todo = {
  name: "TypeScriptの勉強", // name = "..." ではない点に要注意
  priority: 3, // priority = "..." ではない点に要注意
};
console.log(`Todo 1 => ${todo.name}（優先度:${todo.priority})`);

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