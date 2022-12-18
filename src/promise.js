// {
//   // Promise オブジェクトを生成
//   const promise = new Promise(resolve => {
//     resolve('hello');
//   });
  
//   // promise1 解決後の処理をアタッチ
//   const promise2 = promise.then((text) => {
//     return text + ' world';
//   });
  
//   // promise2 解決後の処理をアタッチ
//   const promise3 = promise2.then((text) => {
//     return text + '!';
//   });
  
//   // promise3 解決後の処理をアタッチ
//   promise3.then((text) => {
//     console.log(text);
//   });
// }

// {
//   // 同じことをメソッドチェーンでまとめてアタッチ
//   new Promise(resolve => {
//     resolve('hello');
//   })
//     .then((text) => {
//       return text + ' world';
//     })
//     .then((text) => {
//       return text + '!';
//     })
//     .then((text) => {
//       console.log(text);
//     });
// }

// {
//   new Promise(resolve => {
//     setTimeout(() => {
//       console.log('Hello World!');
//       resolve();
//     }, 1000);
//   })
//     .then(() => {
//       console.log('Yuya!!');
//     })
// }

// {
//   // Fetch API も Promise オブジェクトを返す
//   // ということは、、、
//   console.log(fetch('/api.json'));
// }

// {
//   // 解決後の処理をアタッチ
//   fetch('/api.json')
//     .then((res) => {
//       // レスポンスデータのJSONデータを解析するために使用する、
//       // jsonメソッドも Promise オブジェクトを返す
//       const data = res.json();
//       console.log(data);
//     })
// }

// {
//   // Fetch API の処理をメソッドチェーンでまとめてアタッチ
//   fetch('/api.json')
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
// }

// {
//   // 非同期の例外処理
//   const isError = false;

//   // 例外処理には、Promise オブジェクトのコールバック関数の２つ目の引数を使用する
//   new Promise((resolve, reject) => {
//     if (!isError) {
//       resolve('success!');
//     } else {
//       reject('failed...')
//     }
//   })
//    .then((msg) => {
//     console.log(msg);
//    })
//    .catch((e) => {
//     console.error(e)
//    })
// }

// {
//   // 非同期の例外処理
//   // Promise の例外処理はメソッドチェーンのどこでエラーになってもキャッチすることができる
//   const isError = false;

//   new Promise((resolve, reject) => {
//     if (!isError) {
//       resolve('success!');
//     } else {
//       reject('failed...')
//     }
//   })
//    .then((msg) => {
//     return msg + '!';
//    })
//    .then((msg) => {
//     return msg + '!';
//    })
//    .then((msg) => {
//     throw new Error('わざと');
//    })
//    .then((msg) => {
//     console.log(msg);
//    })
//    .catch((e) => {
//     console.error(e)
//    })
// }

// {
//   // Fetch APIの例外処理
//   fetch('/api.json')
//     .then((res) => {
//       // HTTP STATUS が 200番台つまり成功時にtrueになり、それ以外はfalseになる
//       if (!res.ok) {
//         throw new Error('通信失敗！！')
//       }

//       return res.json()
//     })
//     .then((data) => {
//       console.log(data)
//     })
//     .catch((e) => {
//       console.error(e);
//     })
// }

// {
//   // 通常時・例外時の最後の共通処理
//   const isError = false;
  
//   // finally メソッドは、通常時や例外時どちらのパターンであっても必ず実行される
//   new Promise((resolve, reject) => {
//     if (!isError) {
//       resolve('success!');
//     } else {
//       reject('failed...');
//     }
//   })
//     .then((msg) => {
//       console.log(msg)
//     })
//     .catch((e) => {
//       console.error(e)
//     })
//     .finally(() => {
//       console.log('finish!!')
//     })
// }
