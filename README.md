# jsonmenu
選單無限層套件

基於客戶經常修改html原始檔案造成架構跑掉，故製作了這個套件，使用陣列的方式讓網頁可以直接渲染出多層選單

使用軟體
<br>
<ul>
    <li>Boostrap</li>
    <li>jQuery</li>
</ul>
<br>

```
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/css/bootstrap.min.css" />
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
 <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.2.0/js/bootstrap.min.js"></script>
```

<br>
引入套件
```
//這是資料陣列
<script src="listjson.js"></script>
//這是資料陣列
<script src="listjson2.js"></script>
//這是套件
<script src="jsonmenu.js"></script>
```
<br>

使用套件
<br>
```
 $('.navbar-right').jsonmenu({
      autoclick: false,
      listjson: listjson
  })
  $('.left-menu').jsonmenu({
      autoclick: false,
      listjson: listjson2
  })
  ```
  
  <br>
  
  相關說明
  <br>
  autoclick: 'true'或'false' -滑鼠移入時候要不要自動展開
  <br>
  listjson: '你的陣列名字'
  
  <br>
  陣列規則
  <br>
  eventTitle: '選單名字'
  <br>
  eventLink: '選單連結'
  <br>
  iconImage: '第一層選單如果你有icon的話，連結放這裡'
  <br>
  eventParent: '選單的父親名字'
  <br>
  subParent: '如果是第二層以下的話，請在這裡填寫選單的父親名字'
  
