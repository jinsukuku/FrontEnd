# π 11μΌμ°¨ 
- 2021.09.07(ν)
- λͺ©μ°¨ : μ νμ

<br>

## β μ νμ (selector)
- html μμλ₯Ό μ νν  λ μ¬μ©
- JavaScriptμμλ μ νμλ₯Ό μ¬μ©ν΄ htmlμμλ₯Ό μ ννλ€

<br>



### π μ£Όμ μ νμ 
```CSS
h1 { color : red; }
```
- **νμ μ νμ(type selector)** : νκ·Έ μ΄λ¦μ ν΅ν΄ μμλ₯Ό μ ννλ μ νμ 
- νλμ htmlλ¬Έμ λ΄λΆμ νΉμ  μμ λͺ¨λμ μ€νμΌμ μ μ©λλ€
- νΉμ  μμμ μΌκ΄μ μΌλ‘ μ μ©ν΄μΌνλ κ³΅ν΅ μ€νμΌμ μν΄ λ§μ΄ μ¬μ©νκ³ , CSSνμΌ μλ¨μ μμ±νλ νΈμ΄λ€

<br>

```html
<ul>
    <li id="title">μμ΄λλ νλμ μΉ λ¬Έμμ μ€λ³΅λ  μ μλ€</li>
    <li class="blue green">GREEN</li>
    <li class="blue">BLUE</li>
</ul>
```
```CSS
/* ID selector */
li#title { color:orange; }

/* class selector */
li.blue { color:blue; }
li.green { color:green; }
```

![example1101](./img/1101.png)


- νκ·Έμ idμ classλ₯Ό μ¬μ©ν΄ νΉμ  μμλ₯Ό μ ννλ€
- idλ `#` μ μ¬μ©ν΄ μ ννκ³ , clssλ `.`λ₯Ό μ¬μ©νλ€
- classλ νλμ μμμ μ¬λ¬κ°λ₯Ό μ§μ ν  μ μκ³ , μΊμ€μΊμ΄λ© μμΉμ μν΄ λμ€μ μμ±λ μ€νμΌμ΄ μ μ©λλ€

<br>


### π μμ± μ νμ (Attribute Selector)
- htmlνκ·Έκ° κ°λ μμ±κ°μ μ¬μ©ν΄ μμλ₯Ό μ νν  λ μ¬μ©νλ€

```html
<p><a href="sample1" target="_blank">SAMPLE01</a></p>
<p><a href="sample2.html" target="_blank">SAMPLE02</a></p>
<p><a href="test_sample3.html">SAMPLE03</a></p>
<p><a href="sample1">SAMPLE04</a></p>
```
```CSS
/* μμ± μ νμ (Attribute Selector) */
a[target] { color:hotpink; }
a[target="sample1"] { color:green; }
a[target^="test"] { color:orange; }
a[target$=".html"] { background-color:gray; }
a[target*="html"] { font-style:italic; }
```

![example1102](./img/1102.png)

- `[attr]` : htmlνκ·Έμ ν΄λΉ μμ±μ΄ μμΌλ©΄ μ ν
- `[attr=""]` : htmlνκ·Έμ μμ±κ°κΉμ§ λμΌνλ©΄ μ ν
- `[attr^="β­"]` : μμ±μ κ°μ΄ β­μΌλ‘ μμνλ μμ±κ°μ μ°Ύμμ μ ν 
- `[attr$="β­"]` : μμ±μ κ°μ΄ β­μΌλ‘ λλλ μμ±κ°μ μ°Ύμμ μ ν 
- `[attr*="β­"]` : μμ±μ κ°μ΄ β­μ ν¬ννλ κ²½μ°λ₯Ό μ°Ύμμ μ ν

<br>


### π κ°μν΄λμ€ μ νμ (Pseudo-Class Selector)
- κΈ°μ‘΄μ μ νμλ€μ κ°μ ν΄λμ€ μ νμλ₯Ό μΆκ°ν΄μ μ ννκΈ° μνλ μμμ λ²μλ₯Ό μ’ν μ μλ€
- κ°μ ν΄λμ€ μ νμλ class μ νμμ ν¨κ» μ¬μ©ν  μ μλ€
    - class μ νμμ ν¨κ» μ¬μ©ν  λ, λμΌν classλ₯Ό κ°μ§ μμ μ€ nλ²μ§Έ μμλ₯Ό μ ννλ κ²μ΄ μλλΌ
    - class μ νμλ‘ μ νν μμμ **νμ  μμ μ€ nλ²μ§Έ μμλ₯Ό μλ―Ένλ κ²μ΄λ―λ‘ μ£Όμνμ**


-------------

```html
<ul>
    <li class="fruit apple">μ¬κ³Ό</li>
    <li class="fruit banana">λ°λλ</li>
</ul>
<ol>
    <li class="moive insideout">μΈμ¬μ΄λμμ</li>
    <li class="moive toystory">ν μ΄μ€ν λ¦¬</li>
</ol>
```
```css
li:first-child { color:hotpink; }
li.movie:first-child { font-size:20px; }
```

![example1103](./img/1103.png)




1. `:first-child` : μ νν νκ·Έμ νμ  μμ μ€ μ²«λ²μ§Έ μμλ₯Ό μ ννλ€
2. `:last-child` : μ νν νκ·Έμ νμ  μμ μ€ λ§μ§λ§ μμλ₯Ό μ ννλ€
3. `:nth-child(n)` : μ νν νκ·Έμ νμ  μμ μ€ nλ²μ§Έ μμλ₯Ό μ ννλ€
4. `:nth-child(2n+1)` : μ νν νκ·Έμ νμ  μμ μ€ 2n+1λ²μ§Έ μμλ₯Ό μ ννλ€.
   - μ΄ λ, 2n+1μ΄λΌλ μμ μΈμλ λ€μν μμμ μ¬μ©ν  μ μλ€ (μ) n+3
5. `:nth-child(even)` : μ νν νκ·Έμ νμ  μμ μ€ μ§μλ²μ§Έ μμλ₯Ό μ ννλ€
6. `:nth-child(odd)` : μ νν νκ·Έμ νμ  μμ μ€ νμλ²μ§Έ μμλ₯Ό μ ννλ€

<br>

-------------

```html
<section>
    <div class="movie">ν μ΄μ€ν λ¦¬</div>
    <p class="movie">μ£Όν νΌμ</p>
    <p class="movie">μΈμ¬μ΄λμμ</p>
    <p class="movie">κ²¨μΈμκ΅­</p>
    <div class="movie">μ½μ½</div>
</section>
```
```css
p:first-of-type { color : orange; }
div:last-of-type { color : hotpink; }
.movie:first-of-type { background-color : gray; }
```


![example1104](./img/1104.png)


7. `:first-of-type` : μ νν νκ·Έ μμ μ€ μ²«λ²μ§Έ μμλ₯Ό μ ννλ€  
    - `.movie:first-of-type` : classμ νμμ ν¨κ» μ¬μ©νλ©΄ μμ μμ μμλ ν μ΄μ€ν λ¦¬μ μ£Όν νΌμμ μ€νμΌμ΄ μ μ©λλ€
    - μ΄λ ν νκ·ΈμΈμ§ λͺμνμ§ μκ³  classμ νμλ₯Ό μ¬μ©ν΄ μμλ₯Ό μ ννκΈ° λλ¬Έ
8. `:last-of-type` : μ νν νκ·Έ μμ μ€ λ§μ§λ§ μμλ₯Ό μ ννλ€
9. `:nth-of-type(n)` : μ νν νκ·Έ μμ μ€ nλ²μ§Έ μμλ₯Ό μ ννλ€
10. `:nth-of-type(even)` : μ νν νκ·Έ μμ μ€ μ§μλ²μ§Έ μμλ₯Ό μ ννλ€
11. `:nth-of-type(odd)` : μ νν νκ·Έ μμ μ€ νμλ²μ§Έ μμλ₯Ό μ ννλ€

<br>

-------------
```html
<form>
    <input type="text" placeholder="name">
    <input type="email" placeholder="email">
    <input type="password" placeholder="password" class="pw">
    <input type="submit">
</form>
``` 
```css
input:not(.pw) { background-color:pink; }
input:not([type=email]) { background-color:lightblue; }
input:not([placeholder]) { color:red; }
```

![example1105](./img/1105.png)


12. `A:not(B)` : A νκ·Έ μ€ Bκ° μλ μμλ₯Ό μ ννλ€

<br>

-------------
```html
<a href="sample1.html">Sample Link</a>
<a href="sample2.html">Visited Link</a>
```
```css
a:link{ color : tomato; } 
a:visited{ color : yellowGreen; } 
```

![example1106](./img/1106.png)


> λμ  κ°μ ν΄λμ€ : μ¬μ©μμ λμμΌλ‘ μΈν΄ λ°λλ μνμ λ°λ₯Έ μ νμ
13. `a:link` : λμ  κ°μ ν΄λμ€ μ νμ / μ°κ²°λ μΉμ λ°©λ¬Έν μ μ΄ μλ κ²½μ° 
14. `a:visited` : λμ  κ°μ ν΄λμ€  / μ°κ²°λ μΉμ λ°©λ¬Έν μ μ΄ μλ κ²½μ°  



<br>

-------------
```html
<input type="button" value="ν΄λ¦­νμΈμ">
<input type="button" value="ν΄λ¦­νμΈμ">
<input type="button" value="ν΄λ¦­νμΈμ">
```
```css
input[type=button]:hover { background-color:skyblue; }
input[type=button]:active { background-color:teal; }
input[type=button]:focus { background-color:teal; }
```

> λμ  κ°μ ν΄λμ€ : μ¬μ©μμ λμμΌλ‘ μΈν΄ λ°λλ μνμ λ°λ₯Έ μ νμ
15. `:hover` : μ¬μ©μκ° μμ μμ λ§μ°μ€λ₯Ό μ¬λ Έμ λ, μ€νμΌμ μ μ©μν€κΈ° μν μ νμ 
16. `:active` : μ¬μ©μκ° λ§μ°μ€λ₯Ό λλ₯Έ μμ λΆν° λΌλ μκ°κΉμ§, μ€νμΌμ μ μ©μν€κΈ° μν μ νμ
17. `:focus` : `tab`ν€λ₯Ό μ¬μ©νμ λ ν¬μ»€μ± λλ μκ°, μ€νμΌμ μ μ©μν€κΈ° μν μ νμ
- λμ  κ°μ ν΄λμ€λ₯Ό μ¬μ©ν  λμλ μ°μ μμμ μ£Όμνμ
    - LVHA μμ : `:link` β `:visited` β `:hover` β `:active`
    - `:active` μ νμλ₯Ό λ€λ₯Έ λμ  κ°μ ν΄λμ€λ³΄λ€ λ€μ λ°°μΉλλ‘ νλ€
    - **[μ°Έκ³ ]** https://developer.mozilla.org/ko/docs/Web/CSS/:active
    


<br>

-------------
```html
<div>
    <input type="text" placeholder="1"><
    <input type="text" placeholder="2">
    <input type="text" placeholder="3" disabled>
</div>
<div>
    <input type="checkbox" id="checkMe1" name="check1">
    <label for="checkMe1">CHECK ME!</label>
    <input type="checkbox" id="checkMe2" name="check2">
    <label for="checkMe2">CHECK ME!</label>
</div>
```
```css
input[type=text]:disabled { background-color:tomato; }
input[type=text]:enabled { background-color:skyblue; }
input[type=checkbox]:checked { outline:3px solid lightgreen; }
```

![example1107](./img/1107.png)




> λμ  κ°μ ν΄λμ€ : μ¬μ©μμ λμμΌλ‘ μΈν΄ λ°λλ μνμ λ°λ₯Έ μ νμ
18. `:enabled` : νμ±νλμ΄ μλ μμλ₯Ό μ ννλ€ 
19. `:disabled` : disabled μμ±μ κ°μ§κ³ , λΉνμ±νλμ΄ μλ μμλ₯Ό μ ννλ€ 
20. `:checked` : check-box λ radio-boxλ₯Ό μ²΄ν¬ν μνμΈ μμμ μ€νμΌμ μ μ©μν€κΈ° μν μ νμ


<br>