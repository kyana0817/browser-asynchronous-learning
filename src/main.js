// setTimeout を使った非同期
{
  const elem = outputElement('settimeout_output');

  document.getElementById('settimeout_fire').addEventListener('click', () => {
    elem.text('処理開始！');
    setTimeout(() => {    
      elem.text('1秒経ちました！');
    }, 1000);
    elem.text('処理終了!!');
  });
  
  document.getElementById('settimeout_clear').addEventListener('click', () => {
    elem.clear();
  });
}

// Promise を使った非同期
{
  const elem = outputElement('promise_output');

  document.getElementById('promise_fire').addEventListener('click', () => {
    new Promise((resolve) => {
      elem.text('処理開始!');
      setTimeout(() => {
        resolve();
      }, 1000);
    })
      .then(() => {
        elem.text('1秒経ちました')
      })
      .then(() => {
        elem.text('処理終了!!');
      })
  })
  
  document.getElementById('promise_clear').addEventListener('click', () => {
    elem.clear();
  });
}

// Promise を使った非同期
{
  const elem = outputElement('async_output');

  document.getElementById('async_fire').addEventListener('click', async () => {
    elem.text('処理開始!');
    await new Promise((resolve) => {
      setTimeout(() => {
        elem.text('1秒経ちました')
        resolve();
      }, 1000);
    })
    elem.text('処理終了!!');
    
  })
  
  document.getElementById('async_clear').addEventListener('click', () => {
    elem.clear();
  });
}
