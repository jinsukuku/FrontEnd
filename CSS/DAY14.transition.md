# π 14μΌμ°¨ 
- 2021.09.10(κΈ)
- λͺ©μ°¨ : transition

<br>

## β νΈλ μ§μ
### π `transition`
- μμμ νμ¬ μ€νμΌμ λ³νλ₯Ό μ€ λ μ¬μ©
- μ΄ λ λ³ννλλ° μκ°μ°¨λ₯Ό μ£Όμ΄ λ³ννλ λͺ¨μ΅μ μκ°μ μΌλ‘ νμΈν  μ μκ² νλ€


<br>



### π `transition-property`
```css
.test1 { transition-property : width, height; }
.test2 { transition-property : color; }
.test3 { transition-property : all; }
.test4 { transition-property : none; }
```
- μμμ νμ¬ μ€νμΌ μ€ νΉμ  μμ±μλ§ λ³νλ₯Ό μ€ λ μ¬μ©
- μ¬λ¬ μ€νμΌμ λ³νν  λμλ `,`λ₯Ό κ΅¬λΆμλ‘ μ¬μ©
- λͺ¨λ  μ€νμΌμ λ³νν  λμλ `all`

<br>



### π `transition-duration`
```css
/* colorλ₯Ό 0.5μ΄λμ λ³ν */
.test1 { 
    transition-property : color;
    transition-duration : 500ms;
}

/* widthλ 0.5μ΄, heightλ 1μ΄λμ λ³ν */
.test2 { 
    transition-property : width, height;
    transition-duration : 500ms, 1s;
}

/* width, height 2μ΄λμ λ³ν */
.test2 { 
    transition-property : width, height;
    transition-duration : 2s;
}
```
- μμμ μ€νμΌμ λ³ννλλ° κ±Έλ¦¬λ μκ°μ μ§μ 
- `<time>` μλ£νμ μ¬μ©νκ³  λ¨μλ `ms`λ `s`μ μ¬μ©νλ€ (`1000ms`λ `1s`λ₯Ό μλ―Έ)
  
```css
/* λ§μ°μ€κ° μμμ μ¬λΌκ° λμλ§ transition μ μ© */
.test3 { width:200px; height:200px; background-color:lightyellow;}
.test3:hover { 
    width: 300px; height:300px; background-color:tomato;
    
    transition-property : all;
    transition-duration : 2s;
}
```

- `:hover`μ `transition`μ μ£Όκ² λλ©΄, λ§μ°μ€κ° μ¬λΌκ° λμλ μ μ©λμ§λ§ λ΄λ €μ¬ λμλ μ μ©λμ§ μλλ€

```css
/* λ§μ°μ€κ° μμμ μ¬λΌκ°κ³  λ΄λ €μ¬ λ λͺ¨λ transition μ μ© */
.test4 { 
    width:200px; height:200px; background-color:lightyellow;
    
    transition-property : all;
    transition-duration : 2s;
}
.test4:hover { width: 300px; height:300px; background-color:forestgreen}
```
  
- λ§μ°μ€κ° μ¬λΌκ°κ³  λ΄λ €μ¬ λ λͺ¨λ `transition`μ μ£Όκ³ μ νλ€λ©΄ μμμ μ€νμΌμ μ μ©ν΄μΌνλ€
- μλ gifλ₯Ό ν΅ν΄ μ°¨μ΄μ μ νμΈν΄λ³΄μ

![example1404](../img/1404.gif)

<br>



### π `transition-delay`
```css
/* 1μ΄ λλ μ΄ ν λͺ¨λ  μ€νμΌμ΄ 2μ΄λμ λ³ν */
.test1 {
    transition-property : all;
    transition-duration : 2s;
    
    transition-delay : 1s;
}
```
- `transition`μ΄ μ€νλκΈ° μ μ μ§μ°μν€κΈ°μν μμ±
- `<time>` μλ£νμ μ¬μ©νκ³  λ¨μλ `ms`λ `s`μ μ¬μ©νλ€ (`1000ms`λ `1s`λ₯Ό μλ―Έ)

<br>



### π `transition-timing-function`
- `transition`μ΄ μ€νλλ μ€κ° κ³Όμ μ μκ°μ μ‘°μ νκΈ° μν μμ±
- μλ₯Ό λ€μ΄ `color`κ° red β blueλ‘ λ³νν  λ, λ³΄λΌμμ κ±°μΉκ² λλλ° μ΄λ¬ν μ€κ° κ³Όμ μ μμλλ μκ°μ μ‘°μ 
- μ΄κΈ°κ° : `transition-timing-function : ease; `
- ν€μλ : `ease`, `ease-in`, `ease-out`, `ease-in-out`, `linear`, `cubic-bezier`, `step-start`, `step-end` ...
![example1405](../img/1405.gif)
- [μ°Έκ³ ] https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function

<br>



### π `transition` λ¨μΆ μμ± (short hand)
- `transition`κ³Ό κ΄λ ¨λ μμ±μ νλ²μ μ€μ ν  μ μλ λ¨μΆ μμ±
- μ΄κΈ°κ°
    - `transition-delay : 0s` 
    - `transition-duration : 0s` 
    - `transition-property : all` 
    - `transition-fiming-function : ease` 
- λμΌνκ² `<time`> μλ£νμ μ¬μ©νλ μμ±μ΄ μμΌλ―λ‘, μμ± μμκ° μ€μνλ€ 
- κΆμ₯ μμ± μμ : `property-name`, `duration`, `timing-function`, `delay`
<br>






### π `transform` + `transition` νμ© μμ
```css
.test1 {
    width:100px; height:100px;
    border:10px solid seagreen;
    background-color:lightblue;
    border-radius:30px;
    
    transition : all 2s ease-in-out;
    transform-origin:bottom right;
}
.test1:hover {
    transform : rotate(360deg);
}
```
![example1406](../img/1406.gif)
<br>





