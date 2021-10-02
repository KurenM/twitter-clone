///////////////////////////
////いいね！用のJavasclipt
//////////////////////////

$(function(){
  //いいねがクリックされたとき
  $('.js-like').click(function(){
    const this_obj = $(this);
    const tweet_id = $(this).data('tweet-id');
    const like_id = $(this).data('like-id');
    const like_count_obj = $(this).parent().find('.js-like-count');
    let like_count = Number(like_count_obj.html());

    if(like_id){
      //いいね取り消し
      //非同期処理
      $.ajax({
        url:'like.php',
        type:'post',
        data:{
          'like_id':like_id
        },
        timeout:10000
      })
        //取り消し成功
        .done(()=>{
          //いいねカウント減らす
          like_count--;
          like_count_obj.html(like_count);
          this_obj.data('like_id',null);

          //いいねをグレーに
          $(this).find('img').attr('src','../Views/img/icon-heart.svg');
        })
        .fail((data)=>{
          alert('処理中にエラーがはっせいしました。');
          console.log(data);
        });
    }else{
      //いいね付与
      //非同期処理
      $.ajax({
        url:'like.php',
        type:'post',
        data:{
          'tweet_id':tweet_id
        },
        timeout:10000
      })
      //いいね！成功
        .done((data)=>{
        //いいねカウントプラス
        like_count++;
        like_count_obj.html(like_count);
        this_obj.data('like-id',true);

        //いいねを青に
        $(this).find('img').attr('src','../Views/img/icon-heart-twitterblue.svg');
        })
        .fail((data) => {
          alert('処理中にエラーがはっせいしました。');
          console.log(data);
        });
    }
  });

})