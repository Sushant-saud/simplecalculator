
(function () {
    let screen1=document.querySelector('.screen');
    let buttons1=document.querySelectorAll('.btn');
    let clear1=document.querySelector('.btn-clear');
    let equal1=document.querySelector('.btn-equal');

    buttons1.forEach(function(button){
      button.addEventListener('click',function(e){
        let value=e.target.dataset.num;
        screen1.value += value;
      })
    });
    equal1.addEventListener('click',function(e){
      if(screen1.value === '')
      {
        screen1.value="please enter";
      }
      else
      {
        let answer=eval(screen1.value);
        screen1.value=answer;
      }
    })
    clear1.addEventListener('click',function(e){
      screen1.value=" ";
    })
  }());
  