# ๐ 12์ผ์ฐจ 
- 2021.09.08(์)
- ๋ชฉ์ฐจ : ๋จ์์ ๊ฐ 

<br>

## โ ๋จ์์ ๊ฐ
- mdn์์ < > ์ ํจ๊ป ์์ฑ๋ ๊ฐ์ ๋จ์๋ฅผ ์๋ฏธํ๊ณ , ๊ทธ๋ ์ง ์์ ๊ฒฝ์ฐ๋ ํค์๋๋ฅผ ์๋ฏธํ๋ค


<br>

### ๐ ์ ๋ ๊ธธ์ด `px`
- ์ ๋ ๋จ์๋ ๋ชจ๋ํฐ์ ๋ณด์ฌ์ง๋ ๋ฌผ๋ฆฌ์ ์ธ ๊ฑฐ๋ฆฌ(๊ณ ์ ๊ฐ)๋ฅผ ์๋ฏธํ๋ค
- ์ ๋ ๋จ์์ ๋จ์๋ ๋ค์ํ์ง๋ง, ์ผ๋ฐ์ ์ผ๋ก `px`์ ์ฌ์ฉํ๋ค
- ์ ๋ ๋จ์๋ฅผ ์ฌ์ฉํด ํฌ๊ธฐ๋ฅผ ์ง์ ํ๊ฒ ๋๋ฉด, ํ๋ ๋ฐ ์ถ์ํ๊ฑฐ๋ ์ฌ์ฉ์๊ฐ ํธ์๋ฅผ ์ํด ํฌ๊ธฐ๋ฅผ ์กฐ์ ํ  ๋ ๋ฐ์๋์ง ์๋๋ค
- ์น ์ ๊ทผ์ฑ์ ์ธ ์ธก๋ฉด์์๋ ์ ๋ ๋จ์๋ฅผ ์ฌ์ฉํ์ง ์๋ ๊ฒ์ ๊ถ์ฅํ๋ค

---

- ์ ๋ ๋จ์ : `px`, `pt` ...
- ์๋ ๋จ์
    - ๊ธ๊ผด ์๋ ๊ธธ์ด : `em`, `rem` ...
    - viewport ๋ฐฑ๋ถ์จ ๊ธธ์ด : `vw`, `vh` ...
    - ์๋์ ์ผ๋ก ๊ฐ์ด ์ ์ฉ๋๋, ์ค์ ๋ก๋ `px` ๋จ์๋ก ๊ณ์ฐ๋์ด ๋ณด์ฌ์ง๋ค

<br>


### ๐ ์๋ ๊ธธ์ด `em`, `rem`
```html
<div class="parent">
    ์๋
    <div class="child child1">์๋ํ์ธ์</div>
    <div class="child child2">์๋ํ์ธ์</div>
    <div class="child child3">์๋ํ์ธ์</div>
</div>
<div class="test">ํ์คํธ</div>
```
```css
.parent { font-size:24px; }
.child1 { font-size:1em; }
.child2 { font-size:1.5em; }
.child3 { font-size:2em; }
.test { font-size:2em; }
```
><div class="parent" style="font-size:24px;">
>    ์๋
>    <div class="child child1" style="font-size:1em">์๋ํ์ธ์</div>
>    <div class="child child2" style="font-size:1.5em">์๋ํ์ธ์</div>
>    <div class="child child3" style="font-size:2em">์๋ํ์ธ์</div>
></div>
><div class="test" style="font-size:2em">ํ์คํธ</div>

<br>

1. `em`
    - `em` : ๋ถ๋ชจ์ ๊ธ์ ํฌ๊ธฐ๋ฅผ ๊ธฐ์ค์ผ๋ก, ์๋์ ์ผ๋ก ํฌ๊ธฐ๊ฐ ์กฐ์ ๋๋ค
    - `1em` : ๋ถ๋ชจ์ ๊ธ์ ํฌ๊ธฐ
    - `1.5em` : ๋ถ๋ชจ์ ๊ธ์ ํฌ๊ธฐ x 1.5
    - ๋ณ๋๋ก ๋ถ๋ชจ์ ๊ธ์ ํฌ๊ธฐ๊ฐ ์ ํด์ ธ ์์ง ์์ ๊ฒฝ์ฐ, ์น ๋ธ๋ผ์ฐ์ ์ ์ ํด์ง ๊ธฐ๋ณธ ๊ธ์ ํฌ๊ธฐ๋ฅผ ๊ธฐ์ค์ผ๋ก ์ผ๋๋ค

<br>

2. `rem`
    - `em`์ ํ์ฌ ์์์ ๋ถ๋ชจ ์์๋ฅผ ๊ธฐ์ค์ผ๋ก ํ๊ธฐ ๋๋ฌธ์ ๊ธฐ์ค์ ์ฐพ์ ๋ ๋ฒ๊ฑฐ๋กญ๋ค
    - ๋ฐ๋ฉด `rem`์ root(์ต์์ ๋ถ๋ชจ ์์)์ ํฌ๊ธฐ๋ฅผ ๊ธฐ์ค์ผ๋ก ํ๊ธฐ๋๋ฌธ์ ์ข ๋ ์ง๊ด์ ์ด๊ณ  ํธ๋ฆฌํ๋ค 
    - root(์ต์์ ๋ถ๋ชจ ์์)์ ํฌ๊ธฐ๋ ์น ๋ธ๋ผ์ฐ์ ์ ๊ธฐ๋ณธ ์ค์  ํฌ๊ธฐ๋ฅผ ์๋ฏธํ๋ค
    - `rem` : root(์ต์์ ๋ถ๋ชจ ์์)์ ๊ธ์ ํฌ๊ธฐ๋ฅผ ๊ธฐ์ค์ผ๋ก, ์๋์ ์ผ๋ก ํฌ๊ธฐ๊ฐ ์กฐ์ ๋๋ค
    - `1rem` : root์ ํฐํธ ์ฌ์ด์ฆ = ์น ๋ธ๋ผ์ฐ์ ์ ๊ธฐ๋ณธ ๊ธ์ ํฌ๊ธฐ






<br>


### ๐ ์๋ ๊ธธ์ด `vw`, `vh`

```html
<div class="contaniner"></div>
```
```css
body { margin:0; }
.container {
    background-color:tomato;
    width:50vw; height:60vh;
}
```

- `viewport` : ํ์ฌ ๋ณด์ด๋ ๋ธ๋ผ์ฐ์ ์ ํฌ๊ธฐ(ํ๋ฉด์ ํฌ๊ธฐ)๋ก, ๋๋ฐ์ด์ค๋ง๋ค `viewport` ์ ํฌ๊ธฐ๊ฐ ๋ค๋ฅด๋ค
- ๋ชจ๋  `viewport` ์ `width` ๋ `100vw`, `height`๋ `100vh`
- ์ด๋ฅผ ๊ธฐ์ค์ผ๋ก ์๋์ ์ธ ์์น๋ฅผ ์ฌ์ฉํด ๋ฐ์ํ์ ๋ง๋ค ์ ์๋ค


<br>




### ๐ ์๋ ๊ธธ์ด `vmin`, `vmax`

```html
<div class="contaniner"></div>
```
```css
body { margin:0; }
.container {
    background-color:tomato;
    width:100vwmin; height:100vwmin;
}
```

- `vmin` : `vw`์ `vh` ์ค, ๋ ์์ ๊ฐ
- `vmax` : `vw`์ `vh` ์ค, ๋ ํฐ ๊ฐ
- ๊ฐ๋ก ๋ชจ๋์ ์ธ๋ก๋ชจ๋๋ฅผ ๋์ํ๊ธฐ ์ํด ์ฃผ๋ก ์ฌ์ฉ๋๋ค

<br>



### ๐ percentage `%`
```html
<div class="parent">
    <div class="child"></div>
</div>
```
```css
.parent{ width:100px; height:100px; background-color:tomato; }
.child { width:100%; height:50%; background-color:coral; }
```

- ๋ถ๋ชจ ์์์ ํฌ๊ธฐ๋ฅผ ๊ธฐ์ค์ผ๋ก ์๋์ ์ธ ํฌ๊ธฐ๋ฅผ ์กฐ์ ํ  ์ ์๋ค

<br>



### ๐ ํจ์ ํ๊ธฐ๋ฒ `calac()`, `min()`, `max()`
```html
<div class="container">...</div>
```
```css
.container{
    width:calc(100% - 50px); 
    height:min(100%, 500px;
    background-color:wheat;
}
```
- `calac()` : ์๋ก ๋ค๋ฅธ ๋จ์์ ๊ณ์ฐ ๊ฒฐ๊ณผ๋ฅผ ์ ์ฉํ๊ณ  ์ถ์ ๋ ์ฌ์ฉํ๋ ํจ์ (์ฌ์น์ฐ์ฐ ๋ชจ๋ ๊ฐ๋ฅ)
    - ์ฐ์ฐ์ ์ข์ฐ์๋ ๋ฐ๋์ ๊ณต๋ฐฑ์ ๋ฃ์ด์ฃผ์ด์ผํ๋ค (์) 100% - 50px(O), 100%-50px(X)
- `min()` : ๋์ดํ ์ฌ๋ฌ ๊ฐ ์ค, ๊ฐ์ฅ ์์ ๊ฐ์ ์ ์ฉํ๋ค 
- `max()` : ๋์ดํ ์ฌ๋ฌ ๊ฐ ์ค, ๊ฐ์ฅ ํฐ ๊ฐ์ ์ ์ฉํ๋ค
- `min()`, `max()`๋ IE์์๋ ์ง์๋์ง ์๋๋ค


<br>




