# π 14μΌμ°¨ 
- 2021.09.10(κΈ)
- λͺ©μ°¨ : μ λλ©μ΄μ 

<br>

## β μ λλ©μ΄μ 
### π `animation`
```css
@keyframes test {
    from { margin-left : -20%; }
    to { margin-left : 100%; }
}
.test {
    animation : 4s linear 0s infinite alternate test;
}
```
- μμμ νμ¬ μ€νμΌμ λ³νλ₯Ό μ€ λ μ¬μ©
- `transition` μ μ¬μ©μκ° νΉμ  actionμ νμ λ μ€νλκ³ 
- `animation`μ μ¬μ©μμ actionμ΄ μμ λμλ μ§νν  μ μλ€
- κ·Έλ¦¬κ³  `trnansition`κ³Ό λ¬λ¦¬ λ€μμ μ€νμΌ μΈνΈλ₯Ό μ¬μνλλ‘ μ€μ ν  μ μλ€
- `animation` μ­μ λ¨μΆ μμ±(short hand)μ΄κ³  κ΄λ ¨ μμ±μ μ΄κΈ°κ°μ μλμ κ°λ€
    - `animation-name : none`
    - `animation-duration : 0s`
    - `animation-timing-function : ease`
    - `animation-delay : 0s`
    - `animation-iteration-count : 1` 
    - `animation-direction : normal`
    - `animation-fill-mode : none`
    - `animation-play-state : running`

<br>




### π `@keyframes`
```css
/* ν€νλ μ μ μ */
@keyframes test1 {
    from { left : -20%; }       /* 0% */
    to { left : 100%; }         /* 100% */
}
@keyframes test2 {
    0%   { /*left:0;*/ } /* μμμ μ μλ μ€νμΌκ³Ό λμΌνλ©΄ μλ΅ κ°λ₯ */
    20%  { left:20px; }
    50%  { left:40px; } 
    50%  { left:50px; }  /* λμ€μ μ§μ ν μ€νμΌμ΄ μ μ© */
    100% { left:70px; }
}

/* μ λλ©μ΄μ μ μ© */
.test1 { animation : test1 10s infinite; }
.test2 { 
    left : 0; 
    animation : test2 10s infinite alternate; 
}
```
- `transition`κ³Ό λ€λ₯΄κ² μ¬λ¬ μ€νμΌμ λ¬Άμ΄ νλμ μΈνΈλ‘ `@keyframes`μΌλ‘ μ μν΄ μ¬μ©νλ€
- κ°λ°μκ° μ λλ©μ΄μ μ€κ°μ νΉμ  μ§μ μ κ±°μΉ  μ μλ ν€νλ μμ μ€μ ν΄, μ€κ° μ μ°¨λ₯Ό μ μ΄ν  μ μλ€ 
- μ λλ©μ΄μμ λ§μ½ 10μ΄λμ μ€ννλ©΄
    1. `.test1` μ 0μ΄μ `from` μ€νμΌλ‘ μμν΄μ 10μ΄μ `to` μ€νμΌλ‘ μ λλ©μ΄μμ μ€ν λ° μ’λ£νλ€
    2. `.test2` λ 0μ΄μ `0%`μ€νμΌλ‘ μμν΄μ 2μ΄μ `20%`,<br>
    5μ΄μ `50%`μ μ§μ λ μ€νμΌμ κ±°μ³, 10μ΄μ `100%` μ€νμΌλ‘ λ§λ¬΄λ¦¬νλ€ 
- λμΌν μμ μ μ¬λ¬ μ€νμΌμ μ§μ νλ©΄, λμ€μ μ€μ λ μ€νμΌμ΄ μ μ©λλ€ 
- `animation` μμ±μ `alternate`λ₯Ό μ μ©νλ©΄, from β to β from .. μ μμ°μ€λ¬μ΄ μ λλ©μ΄μ μ²λ¦¬κ° λλ€

<br>




### π `animation-name`
- `transition` μ  `transition-property`μ ν΄λΉνλ μμ±μ΄λ€
- κ°λ°μκ° μ¬λ¬ μ€νμΌμ λ¬Άμ΄ νλμ μΈνΈλ‘ μ μν `@keyframes`μ μ΄λ¦μ μλ―Ένλ€
- `animation-name` μμ± κ·μΉ
    - λμλ¬Έμλ₯Ό κ΅¬λΆνλ€
    - λμλ¬Έμμ μ«μ 0~9, νΉμλ¬Έμλ `_` `-` λ§μ μ¬μ©νλ€ 
    - μμ½μ΄λ₯Ό μ¬μ©νμ§ μλλ€ (μ) `none`, `initial`, `inherit`, `revert`, `unset` ...
- μ¬λ¬ μμκ° κ°μ `@keyframe`μ κ³΅μ ν  μ μλ€

<br>




### π `animation-duration`
- `transition` μ `transition-duration`μ ν΄λΉνλ μμ±μ΄λ€
- μΌλ§λ§νΌμ μκ°μ κ±Έμ³μ `@keyframes`μ ν λ² μ€νν  κ²μΈκ°μ λν μ€μ   
- μ€ν μκ°μ μ μνλ―λ‘ `<time>`μλ£νμ μ¬μ©νλ€ 
- μ¬μ©ν  μ μλ λ¨μλ `ms`, `s`κ° μλ€
- `integer`μ `float`λ₯Ό μ¬μ©ν  μ μκ³ , μμ κ°μ μ¬μ©ν  μ μλ€ 

<br>




### π `animation-delay`
- `transition` μ `transition-delay`μ ν΄λΉνλ μμ±μ΄λ€
- μ λλ©μ΄μμ μμμ μ§μ° μκ°μ μ£ΌκΈ°μν μ€μ 
- μ§μ° μκ°μ μ μνλ―λ‘ `<time>`μλ£νμ μ¬μ©νλ€. λ¨μλ `ms`, `s`κ° μλ€
- `integer`μ `float`λ₯Ό μ¬μ©ν  μ μκ³ , **μμ κ°λ νμ©νλ€**
- μμλ₯Ό μ§μ νλ©΄ μ λλ©μ΄μμ μ¦μ μμνκ³ , μ λλ©μ΄μμ μ£ΌκΈ° μ€κ°μ delayκ° λ±μ₯νλ€

<br>




### π `animation-timing-function`
- `transition` μ `transition-timing-function`μ ν΄λΉνλ μμ±μ΄λ€
- μ λλ©μ΄μμ΄ μ€νλλ μ€κ° κ³Όμ μ μκ°μ μ‘°μ νκΈ° μν μμ±
- ν€μλ : `ease`, `ease-in`, `ease-out`, `ease-in-out`, `linear`, `cubic-bezier`, `steps` ...
- μ΄κΈ°κ° : `animation-timing-function : ease; `

<br>




### π `animation-iteration-count`
- `@keyframes`λ₯Ό λ°λ³΅νλ νμλ₯΄ μ§μ νκΈ° μν μμ±
- μ΄κΈ°κ° : `animation-iteration-count : 1;`
- 0.5 λ₯Ό λ£μ΄μ£Όλ©΄ `@keyframe`μ 50% κΉμ§λ§ μ€νλλ€ 

<br>




### π `animation-direction`
- `@keyframes`λ₯Ό μ§ν λ°©ν₯μ μ§μ νκΈ° μν μμ±
- μ΄κΈ°κ° : `animation-direction : normal`
- ν€μλ : `normal`, `reverse`, `alternate`, `alternate-reverse`
    - `normal` : from β to / `@keyframe`μ μ λ°©ν₯ μμλ‘ λ§€ μ¬μ΄ν΄μ΄ μ§ν 
    - `reverse` : to  β from / `@keyframe`μ μ­λ°©ν₯ μμλ‘ λ§€ μ¬μ΄ν΄μ΄ μ§ν
    - `alternate` : μ²«λ²μ§Έ μ€νμ `normal`, λ€μ μ€νμ `reverse`λ‘ λ§€ μ¬μ΄ν΄λ§λ€ λ°©ν₯μ λ€μ§λλ€ 
    - `alternate-reverse` : μ²«λ²μ§Έ μ€νμ `reverse`, λ€μ μ€νμ `normal`λ‘ λ§€ μ¬μ΄ν΄λ§λ€ λ°©ν₯μ λ€μ§λλ€ 

<br>


### π `animation-play-state`
```css
.test { animation : 4s linear 0s infinite alternate test; }
.test:hover{
    /* μμμ hoverνλ©΄ μ λλ©μ΄μμ΄ μΌμ μ μ§ */
    animation-play-state : paused;
}

```
- μ λλ©μ΄μ μ¬μ μ¬λΆλ₯Ό κ²°μ νκΈ° μν μμ± 
- μ΄κΈ°κ° : `animation-play-state : running`
- ν€μλ : `running`, `paused`
- `paused`λ₯Ό μ¬μ©νλ©΄ μ λλ©μ΄μμ΄ μΌμ μ μ§νλ€


<br>




### π `animation-fill-mode`
- μ λλ©μ΄μ μ€ν μ κ³Ό μ€ν νμ μμμ μ€νμΌμ μ§μ νλ λ°©λ²μ μ€μ 
- μ΄κΈ°κ° : `animation-fill-mode : none`
- ν€μλ : `none` `forwards` `backwards` `both`
    - `none` : μ λλ©μ΄μ μ€ν μ κ³Ό ν λͺ¨λ μμκ° μλ μ€νμΌμ μ μ§νλ€
        - μ λλ©μ΄μμ΄ μ¬μλ  λμλ§ `@keyframes` μ€νμΌμ κ°μ Έμ μ¬μ©νλ€ 
    - `forwards` : μ λλ©μ΄μ μ€ν ν `@keyframes`μ λ§μ§λ§ μ€νμΌ(100%/to)μ μ μ§νλ€ 
    - `backwards` : μ λλ©μ΄μ μ€ν μ  `@keyframes`μ μμ μ€νμΌ(0%/from)μ μ μ§νλ€ 
    - `both` : `forwards`μ `backwards`κ° λͺ¨λ μ μ©λλ€ 
----
<table>
<tr>
    <th>animation-fill-mode</th>
    <th>κΈ°μ‘΄ μ€νμΌ</th>
    <th rowspan="5">β</th>
    <th>@keyframes<br>μ²«λ²μ§Έ μ€νμΌ (from)</th>
    <th rowspan="5">β</th>
    <th>@keyframes<br>μ€κ° μ€νμΌ</th>
    <th rowspan="5">β</th>
    <th>@keyframes<br>λ§μ§λ§ μ€νμΌ (to)</th>
    <th rowspan="5">β</th>
    <th>κΈ°μ‘΄ μ€νμΌ</th>
</tr>
<tr>
    <th>none</th>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
</tr>
<tr>
    <th>forwards</th>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">X</td>
</tr>
<tr>
    <th>backwards</th>
    <td style="text-align:center;">X</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
</tr>
<tr>
    <th>both</th>
    <td style="text-align:center;">X</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">O</td>
    <td style="text-align:center;">X</td>
</tr>
</table>


<br>

### π `animation` λ¨μΆ μμ± (short hand)
- `animation`μ λ¨μΆ μμ±(short hand)μ΄κ³  κ΄λ ¨ μμ±μ μ΄κΈ°κ°μ μλμ κ°λ€
    - `animation-name : none`
    - `animation-duration : 0s`
    - `animation-timing-function : ease`
    - `animation-delay : 0s`
    - `animation-iteration-count : 1` 
    - `animation-direction : normal`
    - `animation-fill-mode : none`
    - `animation-play-state : running`
- μμ± μμλ μ€μνμ§ μμ§λ§ `animation-name`μ λ§μ§λ§μΌλ‘ μμ±νλ κ²μ κΆμ₯νλ€
- κΆμ₯ μμ± μμ<br>
  `duration`, `timing-function`, `delay`, `iteration-count`,  <br>
  `direction`, `fill-mode`, `play-state`, `name`

<br>



