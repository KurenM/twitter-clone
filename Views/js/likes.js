///////////////////////////
////いいね！用のJavasclipt
//////////////////////////

$(function(){
  //いいねがクリックされたとき
  $('.js-like').click(function(){
    const this_obj = $(this);
    const like_id = $(this).data('like-id');
    const like_count_obj = $(this).parent().find('.js-like-count');
    let like_count = Number(like_count_obj.html());

    if(like_id){
      //いいね取り消し
      //いいねカウント減らす
      like_count--;
      like_count_obj.html(like_count);
      this_obj.data('like-id',null);

      //いいねをグレーに
      $(this).find('img').attr('src','../Views/img/icon-heart.svg');
    }else{
      //いいね付与
      //いいねカウントプラス
      like_count++;
      like_count_obj.html(like_count);
      this_obj.data('like-id',true);

      //いいねを青に
      $(this).find('img').attr('src','../Views/img/icon-heart-twitterblue.svg');
    }
  });

})