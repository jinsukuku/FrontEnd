# ๐ HTML์ฐ์ต๋ฌธ์ (2)
- 2021.09.15(์) 

<br>

## ๐ 1๋ฒ
```css
.content{
    margin:10px 15px 20px;
    width:100px;
    height:100px;
    padding:10px;
    border:1ps solid #000;
}
```
<br>


## ๐ 2๋ฒ
```html
<nav>
    <span class="title">๋ค์นด๋ผ์ฟ ๋ฒ </span>
    <ul>
        <li>๋ก๊ทธ์ธ</li>
        <li>ํ์๊ฐ์</li>
        <li>๋ง์ดํ์ด์ง</li>
    </ul>
</nav>
```
```css
nav {
    height: 64px;
    border-bottom: 1px solid rgb(231, 231, 231);
    padding: 0px 16px;
}
.title {
    font-size: 24px;
    font-weight: bold;
    line-height: 64px;
}
.menu {
    margin: 0;
    float: right;
}
.menu > li {
    float: left;
    line-height: 64px;
    margin: 0px 10px;
    list-style: none;
}
```
### โ output
![html22](./img/html22.png)

<br>


## ๐ 3๋ฒ
```html
<div class="container">
  <div class="sns">
    <img src="sns1" alt="facebook">
  </div>
  <div class="sns">
    <img src="sns2" alt="instagram">
  </div>
  <div class="sns">
    <img src="sns3" alt="github">
  </div>
  <div class="sns">
    <img src="sns4" alt="youtube">
  </div>
  <div class="sns">
    <img src="sns5" alt="spotify">
  </div>
  <div class="sns">
    <img src="sns6" alt="tiktok">
  </div>
</div>
```
```css
.container {
    width: 400px;
    height: 400px;
    background-color: lightblue;
    
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    
    justify-items: center;
    align-items: center;
}
.sns {
    width: 100px;
    height: 100px;
    border-radius: 10px;
    border: 1px solid #000;
}
.sns img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
```
### โ output
![html23](./img/html23.png)

<br>


## ๐ 4๋ฒ
```html
<div class="wrap">
  <div class="content">
    <header>
      <h1>์ผ์ฑ์ ์</h1>
      <p>์ข๋ชฉ์ฝ๋ : 005930</p>
    </header>
    <main>
      <h2>ํ์ฌ์๊ฐ</h2>
      <p>
        ํ๊ตญ ๋ฐ CE, IM๋ถ๋ฌธ ํด์ธ 9๊ฐ ์ง์ญ์ด๊ด๊ณผ DS๋ถ๋ฌธ ํด์ธ 5๊ฐ ์ง์ญ์ด๊ด,
        Harman ๋ฑ 241๊ฐ์ ์ข์๊ธฐ์์ผ๋ก ๊ตฌ์ฑ๋ ๊ธ๋ก๋ฒ ์ ์๊ธฐ์์.
        ์ธํธ์ฌ์์๋ TV, ๋์ฅ๊ณ  ๋ฑ์ ์์ฐํ๋ CE๋ถ๋ฌธ๊ณผ ์ค๋งํธํฐ,
        ๋คํธ์ํฌ์์คํ, ์ปดํจํฐ ๋ฑ์ ์์ฐํ๋ IM๋ถ๋ฌธ์ด ์์.
        ๋ถํ์ฌ์(DS๋ถ๋ฌธ)์์๋ D๋จ, ๋ธ๋ ํ๋์ฌ, ๋ชจ๋ฐ์ผAP ๋ฑ์ ์ ํ์
        ์์ฐํ๋ ๋ฐ๋์ฒด ์ฌ์๊ณผ TFT-LCD ๋ฐ OLED ๋์คํ๋ ์ด ํจ๋์ ์์ฐํ๋
        DP์ฌ์์ผ๋ก ๊ตฌ์ฑ๋จ.
      </p>
    </main>
  </div>
  <article>
    <h2>์๊ฐ์ด์ก ์์</h2>
    <ol>
      <li>์ผ์ฑ์ ์</li>
      <li>SKํ์ด๋์ค</li>
      <li>NAVER</li>
      <li>์นด์นด์ค</li>
      <li>์ผ์ฑ๋ฐ์ด์ค๋ก์ง์ค</li>
      <li>์ผ์ฑ์ ์์ฐ</li>
      <li>์ผ์ฑSDI</li>
      <li>LGํํ</li>
      <li>ํ๋์ฐจ</li>
      <li>์ํธ๋ฆฌ์จ</li>
    </ol>
  </article>
</div>
```
```css
/* common */
* { margin: 0; }
h1, h2 { margin-bottom: 20px; }
p { line-height: 24px; }
header, main, article {
    padding: 0 30px;
    margin-bottom: 40px;
    box-sizing: border-box;
}

/* wrap */
.wrap {
    display: grid;
    grid-template-columns: 3fr 1fr;
}

/* header */
header {
    height: 180px;
    color: #fff;
    background-color: blue;
}
h1 { line-height: 100px;}

/* main */
main { padding: 0 40px; }

/* article */
article { 
    padding: 30px 20px; 
    min-width: 300px;
}
li {
    line-height: 40px;
    border-bottom: 1px solid #333;
}

/* mediaQuery */
@media screen and (max-width: 720px) {
    .wrap {display: block;}
}
```
### โ output
![html24](./img/html24.gif)

<br>


## ๐ 5๋ฒ
```html
<div class="wrap">
  <header>
    <h2>๋๊ธ <b>923</b></h2>
  </header>
  <div class="comment">
    <p class="userName">์ *์</p>
    <p class="date">2021.03.16</p>
    <p class="txt"> ... </p>
  </div>
  <div class="comment">
    <p class="userName">ํ*ํ</p>
    <p class="date">2021.03.21</p>
    <p class="txt"> ... </p>
  </div>
  <div class="comment">
    <p class="userName">์ด*์</p>
    <p class="date">2021.03.21</p>
    <p class="txt"> ... </p>
  </div>
  <div class="comment">
    <p class="userName">์ด*์ค</p>
    <p class="date">2021.03.16</p>
    <p class="txt"> ... </p>
  </div>
  <div class="comment">
    <p class="userName">๋ฐ*ํธ</p>
    <p class="date">2021.03.21</p>
    <p class="txt"> ... </p>
  </div>
  <div class="comment">
    <p class="userName">๊น*์ฑ</p>
    <p class="date">2021.03.21</p>
    <p class="txt"> ... </p>
  </div>
</div>
```
```css
* { margin: 0; font-family: sans-serif; }
body { background-color: #eee; }
.wrap {
    width: 360px;
    margin: 0 auto;
    box-sizing: border-box;
    background-color: #fff;
}
header {
    line-height: 48px;
    padding: 0 20px;
    border-bottom: 3px solid #000;
}
b { color: #06a27d; }
.comment {
    padding: 18px 20px;
    box-sizing: border-box;
    border-bottom: 1px solid #cecece;
}
.userName { font-weight: bold; }
.date {
    color: #939393;
    margin-bottom: 14px;
}
.txt {
    word-break: keep-all;
    line-height: 1.5;
}
```
### โ output
![html25](./img/html25.gif)

<br>

