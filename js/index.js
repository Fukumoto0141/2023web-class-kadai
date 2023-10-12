function transition(event,element){
    event.preventDefault();//アンカーリンクのデフォルト挙動をdisable
    window.history.pushState(null, "", element.href);
    updateView();//ここで定義した関数を発火
}

let aList = document.querySelectorAll("a");
aList.forEach(a => {
  a.onclick = event => {
    event.preventDefault();//アンカーリンクのデフォルト挙動をdisable
    window.history.pushState(null, "", a.href);
    updateView();//ここで定義した関数を発火
  };
});

const updateView = () => {
  $(".openbtn").removeClass('active');
  $("nav").removeClass("in");
  $(".logo").removeClass("inactive");
  let url = '';
  if (window.location.pathname == '/' || window.location.pathname == '/2023web-class-kadai/') {
    url = '/home.html';
  } else {
    url = `${window.location.pathname}.html `;
  }
  $.ajax({
    url: `https://fukumoto0141.github.io/2023web-class-kadai/pages${url}`,  // 読み込むHTMLファイル
    dataType: 'html',
    success: function (html) {
      document.getElementById("main").innerHTML = html;
    }
  })

  switch (window.location.pathname){
    case '/':
      document.getElementsByClassName('scroll-guide')[0].style.visibility = 'visible';
      break;
    default:
      document.getElementsByClassName('scroll-guide')[0].style.visibility = 'hidden';

  }
  
};





window.addEventListener("popstate", () => {
  updateView();
});
updateView();//初期化処理
