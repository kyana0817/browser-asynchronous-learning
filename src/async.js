// {
//   // async が返却する値は Promise オブジェクトでラップされる

//   async function func() {
//     return 'hello';
//   }

//   const msg = func();

//   console.log(msg);
// }

// {
//   // async というキーワードのついた関数定義は、Promiseを使った記述のシンタックスシュガー
//   // 上の関数と定義内容は同じ

//   function func() {
//     return new Promise((resolve) => {
//       resolve('hello');
//     });
//   }

//   const msg = func();

//   console.log(msg);
// }

// {
//   // async のキーワードが付いた関数には、特別なキーワード
//   // await を使用することができる

//   async function func() {
//     return 'hello';
//   }

//   // await は Promise 解決後の値を取得することができる
//   async function func2() {
//     const msg = await func();
//     console.log(msg)
//   }

//   func2()
// }

// {
//   // async を使った Fetch API の使い方

//   async function func() {
//     const res = await fetch('./api.json');
//     const data = await res.json();

//     console.log(data);
//   }

//   func();
// }

// {
//   // await はPromise 解決後の値を取得するために使用するものなので、
//   // 値がほしいタイミングで取得することもできる
  
//   async function func() {
//     const res = fetch('./api.json');
//     const data = (await res).json();

//     console.log(await data);
//   }

//   func();
// }

// {
//   // async を使ったときの例外処理

//   async function func() {
//     try {
//       const res = await fetch('./api.json');
//       const data = await res.json();
//       console.log(data)
//     } catch (e) {
//       console.error(e)
//     } finally {
//       console.log('finish!!')
//     }
//   }

//   func()
// }