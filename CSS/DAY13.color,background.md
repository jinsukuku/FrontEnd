# ๐ 13์ผ์ฐจ 
- 2021.09.09(๋ชฉ)
- ๋ชฉ์ฐจ : ์์๊ณผ ๋ฐฐ๊ฒฝ

<br>

## โ ์์๊ณผ ๋ฐฐ๊ฒฝ
### ๐ ์์ : HEX(16์ง์) , RGB , RGBA
- ํค์๋ : red, blue ์ ๊ฐ์ด ์์๋ช์ ์ง์  ์๋ ฅํด ์ฌ์ฉํ  ์ ์๋ค. `transparent`๋ ํฌ๋ช์ ์๋ฏธํ๋ค 
- ํค์๋ ์ธ์๋ RGB, HEX, RGBA ๋ฐฉ์์ผ๋ก ์์์ ์ง์ ํ  ์ ์๋ค
- RGB 3์ฐจ์ ์ขํ๊ณ๋ฅผ ์ฌ์ฉํด ์์์ ํํํ๊ธฐ๋ ํ๋ค 
    - `HEX` : `#` + 16์ง์ ํ๊ธฐ๋ฒ 
        - (์) #10823a : 10์ red, 82์ green, 3a๋ blue๋ฅผ ์๋ฏธํ๋ค 
        - 0~F ์ ์์ผ๋ก ์ฑ๋๋ฅผ ์๋ฏธํ๋ค. 0์ด ์ฑ๋๊ฐ ๊ฐ์ฅ ๋ฎ๊ณ , F๊ฐ ๊ฐ์ฅ ๋๋ค
    - `RGB` : rgb(0, 0, 0)
        - ์ฒซ๋ฒ์งธ ์ซ์๋ red, ๋๋ฒ์งธ ์ซ์๋ green, ๋ง์ง๋ง ์ซ์๋ blue๋ฅผ ์๋ฏธํ๋ค 
        - 255~0 ์ ์์ผ๋ก ์ฑ๋๋ฅผ ์๋ฏธํ๋ค. 255์ด ์ฑ๋๊ฐ ๊ฐ์ฅ ๋ฎ๊ณ , 0๊ฐ ๊ฐ์ฅ ๋๋ค
    - `RGBA` : rgba(0, 0, 0, 0)
        - rgb()์ ๋์ผํ์ง๋ง, ๋ง์ง๋ง ์ซ์๋ ํฌ๋ช๋(alpha)๋ฅผ ์๋ฏธํ๋ค
        - ํฌ๋ช๋(alpha)๋ 1~0์ ๋ฒ์๋ฅผ ๊ฐ์ง๋ค 
        - 0์ผ ๋๋ ์์ ํ ํฌ๋ชํด์ ธ `transparent`์ ๊ฐ์ ์ํ๊ฐ ๋๋ค

<br>


### ๐ `opacity`
```html
<div>์๋ํ์ธ์</div>
<div class="floating-box">๋ฐ๊ฐ์ต๋๋ค</div>
```
```css
div{ width:150px; height:150px; background-color:tomato;}
.floating-box {
    background-color:lightskyblue;
    position:fixed;
    left:50px; top:50px;
    opacity:0.5;
}
```

![example1301](./img/1301.png)

- ์์์ ๋ถํฌ๋ช๋๋ฅผ ์ค์ ํ๊ณ , ์ด๊ธฐ๊ฐ์ 1์ด๋ค
- ๋ถํฌ๋ช๋๋ 1.0 ~ 0.0 ์ ๋ฒ์๋ฅผ ๊ฐ์ง๋ค. ์์์  ์์ ์ซ์๋ ์๋ต ๊ฐ๋ฅํ๋ค (์) 0.5 = .5 
- `opacity`๋ฅผ ์กฐ์ ํ๋ฉด, ์์์ ๋ด๋ถ ์ปจํ์ธ ๊น์ง๋ ๋ถํฌ๋ช๋๊ฐ ์ ์ฉ๋๋ค 
- `background-color`๋ฅผ `rgba()`๋ฅผ ์ฌ์ฉํด ๋ถํฌ๋ช๋๋ฅผ ์กฐ์ ํ๋ฉด, <br> ์ด ๋๋ ๋ฐฐ๊ฒฝ ์์์๋ง ํฌ๋ช๋๊ฐ ์ ์ฉ๋๋ฏ๋ก, ์ปจํ์ธ ์๋ ์ํฅ์ ์ฃผ์ง ์๋๋ค


<br>


### ๐ `background-color`, `background-image`
```html
<div class="box1"></div>
<div class="box2"></div>
```
```css
    div{
        width: 300px; height:300px; 
        margin:10px; float:left; 
        border:1px solid gray;
        
        background-image: url(https://cdn-icons-png.flaticon.com/512/3069/3069172.png);
    }
    .box2{background-color:lightblue;}
```

![example1302](./img/1302.png)

- `background-color` : ๋ฐฐ๊ฒฝ์ ์์์ ๊ฒฐ์ ํ๋ค 
- `background-image` : ๋ฐฐ๊ฒฝ์ ์ด๋ฏธ์ง๋ฅผ ์ ์ํ๋ค
- ๋ ์์ฑ์ ๋ชจ๋ ์ฌ์ฉํ  ๋์๋, `background-color`๊ฐ `background-image`์ ๋ค์ ๋ ๋๋ง๋๋ค
- `background-image`๊ฐ ํฌ๋ชํ ๋ถ๋ถ์ ๊ฐ์ง๊ณ  ์๋ ๊ฒฝ์ฐ, ํฌ๋ชํ ๋ถ๋ถ์ `background-color`๊ฐ ๋ณด์ฌ์ง๊ฒ ๋๋ค 
- ์น ์ ๊ทผ์ฑโญ๏ธ
    - ์น ๋ธ๋ผ์ฐ์ ๋ ๋ฐฐ๊ฒฝ ์ด๋ฏธ์ง์๋ํด ์น ์ ๊ทผ์ฑ์ ์ํ ์ถ๊ฐ ์ ๋ณด๋ฅผ ์ ๊ณตํ์ง ์๋๋ค
    - ์คํฌ๋ฆฐ ๋ฆฌ๋๋ ๋ฐฐ๊ฒฝ ์ด๋ฏธ์ง์ ์กด์ฌ ์ ๋ฌด์กฐ์ฐจ ์ ์ ์๋ค
    - ์ด๋ฏธ์ง๊ฐ ์น ํ์ด์ง์ ๋ํ ์ดํด์ ํ์์ ์ธ ์ ๋ณด๋ฅผ ๊ฐ์ง๋ค๋ฉด, ๋ฌธ์ ๋ด๋ถ์์ ๊ตฌ์กฐ์ ์ผ๋ก ์ค๋ชํ๋ ๊ฒ์ ๊ถ์ฅํ๋ค 

<br>



### ๐ `background-repeat`
```html
<div class="box1"></div>
<div class="box2"></div>
<div class="box3"></div>
<div class="box4"></div>
```
```css
    div{ 
        width:240px; height:200px; margin-right:20px; float:left;
        background-image: url(https://cdn-icons-png.flaticon.com/512/3069/3069172.png);
    }
    .box1{ background-color:lightblue;  background-repeat: repeat ;} /* default */
    .box2{ background-color:lightgreen; background-repeat: repeat-x ;}
    .box3{ background-color:lightpink;  background-repeat: repeat-y ;}
    .box4{ background-color:lightcoral; background-repeat: no-repeat ;}
```

![example1303](./img/1303.png)


- ๋ฐฐ๊ฒฝ ์ด๋ฏธ์ง์ ๋ฐ๋ณต๊ณผ ๊ด๋ จ๋ ์์ฑ
- `repeat` : x์ถ ๋ฐฉํฅ๊ณผ y์ถ ๋ฐฉํฅ์ผ๋ก ๋ฐฐ๊ฒฝ ์ด๋ฏธ์ง๋ฅผ ๋ฐ๋ณตํ๋ค 
- `repeat-x` : x์ถ ๋ฐฉํฅ์ผ๋ก ๋ฐฐ๊ฒฝ ์ด๋ฏธ์ง๋ฅผ ๋ฐ๋ณตํ๋ค 
- `repeat-y` : y์ถ ๋ฐฉํฅ์ผ๋ก ๋ฐฐ๊ฒฝ ์ด๋ฏธ์ง๋ฅผ ๋ฐ๋ณตํ๋ค
- `no-repeat` : ๋ฐฐ๊ฒฝ ์ด๋ฏธ์ง๋ฅผ ๋ฐ๋ณตํ์ง ์๋๋ค

<br>



### ๐ `background-position`
- ๋ฐฐ๊ฒฝ ์ด๋ฏธ์ง์ ์์น๋ฅผ ์ง์ ํ  ๋ ์ฌ์ฉํ๋ค
- ์ด๊ธฐ๊ฐ : `background-position : 0 0`
- x์ถ ์์น์ y์ถ ์์น๋ฅผ ๊ณต๋ฐฑ์ผ๋ก ๊ตฌ๋ถ์ง์ด ์๋ ฅํ๋ค. ์๋ ฅ ์์๋ ์๊ด์๋ค
- `px` ๋ฑ์ ๋จ์๋ฅผ ์ฌ์ฉํ๋ ์ซ์ ๊ฐ ์ธ์๋, ํค์๋๋ฅผ ์ฌ์ฉํ  ์ ์๋ค
- ํค์๋ : `left` `right` `top` `bottom`
- ๋ฐ๋์ x์ถ ์์น์ y์ถ ์์น๋ฅด ๋ชจ๋ ์๋ ฅํ์ง ์์๋ ๋๋ค. ๊ฐ์ ํ๋๋ง ์ฌ์ฉํ  ์ ์๋ค


<br>


### ๐ `background-origin`

![example1304](./img/1304.png)


- ๋ฐฐ๊ฒฝ์ ์์ ์ `border-box`, `content-box`, `padding-box` ๋ด๋ถ ์ค ํ๋๋ก ์ง์ ํ  ์ ์๋ค
- ์ด๊ธฐ๊ฐ : `background-origin : padding-box`

<br>

### ๐ `background-size`


![example1305](./img/1305.png)

- ๋ฐฐ๊ฒฝ ์ด๋ฏธ์ง์ ํฌ๊ธฐ๋ฅผ ์ง์ ํ๋ค.
- ์ด๊ธฐ๊ฐ : `background-size : auto` โ ์ด๋ฏธ์ง์ ์๋ size๋ฅผ ์ ์ฉํ๋ค
- `px`, `em` ๋ฑ์ ๋จ์๋ฅผ ์ฌ์ฉํ๋ ์ซ์ ๊ฐ ์ธ์๋, ํค์๋๋ฅผ ์ฌ์ฉํ  ์ ์๋ค
- ์ซ์ ๊ฐ
    - ๊ณต๋ฐฑ์ผ๋ก ๊ตฌ๋ถํด `width`์ `height`๋ฅผ ์ง์ ํ๋ค
    - ๊ฐ์ ํ๋๋ง ์๋ ฅํ๋ฉด ์๋ ฅ ๊ฐ์ `width`์ ์ ์ฉ๋๊ณ , `height`๋ ๋ฐฐ๊ฒฝ ์ด๋ฏธ์ง์ ๋น์จ์ ๋ฐ๋ผ ๊ฒฐ์ ๋๋ค
    - ๋ง์ฝ `background-size : 100%`๋ผ๊ณ  ์ง์ ํ๋ฉด, ๋ฐฐ๊ฒฝ ์ด๋ฏธ์ง์ ๋๋น๊ฐ ์์์ `width`์ ๋์ผํ๊ฒ ์ง์ ๋๋ค
- ํค์๋
    - `auto` : `background-size`์ ์ด๊ธฐ๊ฐ์ผ๋ก, ์ด๋ฏธ์ง์ ์๋ size๋ฅผ ์ ์ฉํ๋ค
    - `contain` : ๋ฐฐ๊ฒฝ ์ด๋ฏธ์ง๊ฐ ์์ ๋ด๋ถ์ ์ ๋ค์ด๊ฐ๊ฒ ๋ฐฐ๊ฒฝ ์ด๋ฏธ์ง ํฌ๊ธฐ๋ฅผ ์กฐ์ ํ๋ค
    - `cover` : ๋ฐฐ๊ฒฝ ์ด๋ฏธ์ง๊ฐ ์์๋ฅผ ๊ฝ ์ฑ์ธ ์ ์๋๋ก ๋ฐฐ๊ฒฝ ์ด๋ฏธ์ง ํฌ๊ธฐ๋ฅผ ์กฐ์ ํ๋ค
    - `contain`๊ณผ `cover` ๋ชจ๋ ๋ฐฐ๊ฒฝ ์ด๋ฏธ์ง์ ๋น์จ์ ์ ์งํ๋ฉฐ ์์๋ฅผ ์ฑ์ด๋ค

<br>

### ๐ `background` ๋จ์ถ ์์ฑ(short hand)
- `background` ์์ฑ์ ๋จ์ถ ์์ฑ์ผ๋ก, ๊ณต๋ฐฑ์ ๊ตฌ๋ถ์๋ก ์ฌ์ฉํ๋ค
- ํฌํจํ๋ ํ์ ์์ฑ <br>
  `background-color`, `background-image`, <br>
  `background-origin`, `background-posiiton`, <br>
  `background-repeat`, `background-size`, <br>
  `background-attachment`, `background-clip`
- ์์ ์ธ๊ธํ์ง ์์ ์์ฑ์ ์์ฃผ ์ฌ์ฉํ์ง ์๋ ํธ (`background-attachment`, `background-clip`)

<br>

```css
/* background-color */
div { background : green; }

/* background-image & background-repeat */
div { background : url("test.png") no-repeat; }

/* background-origin & background-color */
div { background : border-box green; }

/* background-repeat & background-position/background-size & background-image */
div { background : no-repeat center/80% url("test.png") }
```
- ์์ ์์ ์ฒ๋ผ ๋ชจ๋  ํ์ ์์ฑ์ ์ฌ์ฉํ  ์๋ ์๊ณ , ํ์ํ ์์ฑ๋ง ์ฌ์ฉํ  ์๋ ์๋ค
- ๋ง์ฝ `background-color`๋ฅผ ์ฌ์ฉํ๋ ๊ฒฝ์ฐ๋ ํ์ ์์ฑ ์ค ๊ฐ์ฅ ๋ง์ง๋ง์ ์๋ ฅํด์ฃผ์ด์ผ ํ๋ค
- `background-position`์ `background-size`์ `/`๋ก ๊ตฌ๋ถํ๊ณ 
- `background-position / background-size`์ ์์๋ฅผ ์ง์ผ ์ฌ์ฉํ๋ค
- ๋ฐ๋ก ์ฌ์ฉํ์ง์์ ํ์ ์์ฑ์ ์ด๊ธฐ๊ฐ์ ๋ฐ๋ผ๊ฐ๋ค
---

### ๐ **`background` ์์ฑ์ ์ด๊ธฐ๊ฐ**
<table>
<tr>
    <th>์์ฑ</th>
    <th>์ด๊ธฐ๊ฐ</th>
</tr>
<tr>
    <th>background-image</th>
    <td>์ด๊ธฐ๊ฐ</td>
</tr>
<tr>
    <th>background-position</th>
    <td>0% 0%</td>
</tr>
<tr>
    <th>background-size</th>
    <td>auto auto</td>
</tr>
<tr>
    <th>background-repeat</th>
    <td>repeat</td>
</tr>
<tr>
    <th>background-origin</th>
    <td>padding-box</td>
</tr>
<tr>
    <th>background-clip</th>
    <td>border-box</td>
</tr>
<tr>
    <th>background-attachment</th>
    <td>scroll</td>
</tr>
<tr>
    <th>background-color</th>
    <td>transparent</td>
</tr>
</table>

<br>





