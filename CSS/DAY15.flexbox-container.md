# π 15μΌμ°¨ 
- 2021.09.11(ν )
- λͺ©μ°¨ : flexbox 

<br>

## β Flexbox
### π Flexbox κ°μ 
```css
.container { display : flex; }
.container>.item { width:50px; height:50px; }
```
- μμμ λ μ΄μμ μ€κ³λ₯Ό μν λ°©λ² 
- `display:inlin-block`κ³Ό `float`λ μνλ λ μ΄μμμ μ€μ νκΈ° νλ€λ€ 
- `display:flex`λ₯Ό λΆλͺ¨ μμμ μ¬μ©νλ©΄ μνλ λ μ΄μμμΌλ‘ μ€μ ν  μ μλ€ 
    - μμ μμλ€μ΄ κ°λ‘ μ λ ¬λλ€
    - λΆλͺ¨ μμμ ν¬κΈ°μ λ§μΆ° μμ μμμ `width`κ°μ΄ μλμΌλ‘ λ³κ²½λλ€  


<br>

### π Flexbox μ©μ΄
- `flex container` : `item`μ κ°μΈμ£Όλ λΆλͺ¨ μμ
- `flex item` : `container`μ μμ μμλ₯Ό μλ―Έ
- `flex container`μ `flex item`μ΄ μ¬μ©ν  μ μλ μμ±μ΄ λ€λ₯΄λ―λ‘ μ κ΅¬λΆν΄λμ
- `flexbox` λ 1μ°¨μμ μ§μ  ννμ μ λ ¬μ μλ―Ένλ€ 
- `main axis` : μ£ΌμΆμ κΈ°λ³Έ κ°(default)μ κ°λ‘μΆ 
- `cross axis` : κ΅μ°¨μΆμ κΈ°λ³Έ κ°(default)μ μΈλ‘μΆ
- `axis` μ κΈ°μ€μ λ³κ²½λ  μ μλ€

<br>

### π Container : `display`
- `display-outside` : **νμ  μμ**μμ λ°°μΉ λ°©λ²μ μ€μ 
    - ν€μλ : `inline` `block` `inline-block` 
- `display-inside` : **μμ μμ**λ₯Ό μ΄λ»κ² λ°°μΉν μ§λ₯Ό μ€μ 
    - ν€μλ : `flex` `grid` 
- `display-outside` μ `display-inline`μ ν¨κ» μ§μ νλ €λ©΄ 
    - CSS2μ μμ± λ°©μ(`display-legacy`) : `display : inline flex;`
    - CSS3μ μμ± λ°©μ : `display : inline-flex;` 

<br>

### π Container : `flex-direction`
```css
.container  {
    width:240px; height:240px; margin:10px;
    background-color:lightblue; 
    display:flex;  
}
.container1 {flex-direction:row;}
.container2 {flex-direction:row-reverse;}
.container3 {flex-direction:column;}
.container4 {flex-direction:column-reverse;}
```

![example1501](./img/1501.png)

- `main-axis` : μμ  κΈ°μ€ μΌμͺ½μμ μ€λ₯Έμͺ½μΌλ‘ ν₯νλ κ°λ‘μΆ(default)
- `cross-axis` : μμ  κΈ°μ€ μμμ μλλ‘ ν₯νλ μΈλ‘μΆ(default)
- `main-axis`μ `cros-axis` μ μμΉμ λ°©ν₯μ μ€μ νλ€
    - μμΉ : `main-axis`κ° μΈλ‘μΆ, `cross-axis`λ₯Ό κ°λ‘μΆμΌλ‘ μ§μ 
    - λ°©ν₯
        - `main-aixs`μ λ°©ν₯μ μμ  κΈ°μ€ μ€λ₯Έμͺ½ β μΌμͺ½μΌλ‘ λ³κ²½
        - `cross-aixs`μ λ°©ν₯μ μμ  κΈ°μ€ μλμͺ½ β μμͺ½μΌλ‘ λ³κ²½
- ν€μλλ³ κΈ°μ€μΆκ³Ό λ°©ν₯
<table>
    <tr>
        <th rowspan="2">/</th>
        <th colspan="2">main-axis</th>
    </tr>
    <tr>
        <th>κΈ°μ€μΆ</th>
        <th>λ°©ν₯</th>
    </tr>
    <tr>
        <th>row</th>
        <td>κ°λ‘μΆ</td>
        <td>μΌ β μ€</td>
    </tr>
    <tr>
        <th>row-reverse</th>
        <td>κ°λ‘μΆ</td>
        <td>μ€ β μΌ</td>
    </tr>
    <tr>
        <th>column</th>
        <td>μΈλ‘μΆ</td>
        <td>μ β μλ</td>
    </tr>
    <tr>
        <th>column-reverse</th>
        <td>μΈλ‘μΆ</td>
        <td>μλ β μ</td>
    </tr>
</table>  



<br>

### π Container : `flex-wrap`, `flex-flow` λ¨μΆ μμ±(short hand)
```css
.container  {
    width:120px; height:240px; margin:10px;
    background-color:lightpink; 
    display:flex;  
}
.container1 {flex-wrap:nowrap;}
.container2 {flex-wrap:wrap;}
.container3 {flex-wrap:wrap-reverse;}
```

![example1502](./img/1502.png)

- `flex-wrap` : `item`μ κ°μ λ‘ ν μ€λ‘ λ°°μΉμν¬ κ²μΈμ§ κ°νμ μ€ κ²μΈμ§μ λν΄ κ²°μ νλ μμ±
    - `nowrap` : `container` μ `width`, `height` μ λ§μΆ° `item`μ ν¬κΈ°λ₯Ό μ‘°μ νλ©° κ°μ λ‘ νμ€λ‘ λ°°μΉ (default)
    - `wrap` : `item`μ ν¬κΈ°λ₯Ό μ μ§νλ©° μ¬λ¬ μ€λ‘ λ°°μΉ 
    - `wrap-reverse` : `wrap`κ³Ό λμΌνλ μμκ° λ°μ λλ€
    - `warp` μ΄λ `wrap-reverse`λ₯Ό μ€μ νμ λμ ν κ°κ²©μ `container`μ `height`κ°μ μν₯μ λ°λλ€ 

----
```css
.container {
  display:flex;
  flex-flow:column wrap;
}
```
- `flex-flow` : `flex-wrap`κ³Ό `flex-direction`μ ν¨κ» μ€μ ν  μ μλ λ¨μΆ μμ±(short hand)
- κ³΅λ°±μ κ΅¬λΆμλ‘ μ¬μ©ν΄ `flex-wrap`κ³Ό `flex-direction`μ μμ±νλ€  

<br>

### π Container : `justify-content`
- `main-axis`λ₯Ό κΈ°μ€μΌλ‘ `item`μ μ λ ¬λ°©λ²μ μ€μ νλ μμ±
- μΉ λΈλΌμ°μ λ³λ‘ μ§μ μμ±μ΄ λ€λ₯΄λ―λ‘ νμΈνμ
- ν€μλ
  - `flex-start` : `main-axis` κ° μμνλ μμΉμ λ§κ² μ λ ¬  
  - `flex-end` : `main-axis` κ° λλλ μμΉμ λ§κ² μ λ ¬ 
  - `center` : `main-axis` μ κ°μ΄λ° μμΉμ λ§κ² μ λ ¬ 
  - `space-between` : `main-axis` μ μμκ³Ό λ μμΉλ₯Ό μ μ§νλ©° `item`μ¬μ΄μ κ°κ²©μ λμΌνκ² μ μ§ 
  - `space-around` : `main-axis` μ μμκ³Ό λ μμΉλ₯Ό μ μ§νμ§ μκ³ , `item`μ μ λ€ κ°κ²©μ λμΌνκ²
----
- `flex-direction` μ λ°λΌμ κ°μ ν€μλλ₯Ό μ¬μ©ν΄λ κ²°κ³Όκ° λ€λ₯΄λ€
```css
.container:nth-child(1){justify-content:flex-start;}
.container:nth-child(2){justify-content:flex-end;}
.container:nth-child(3){justify-content:center;}
.container:nth-child(4){justify-content:space-between;}
.container:nth-child(5){justify-content:space-around;}
.container:nth-child(6){justify-content:space-evenly;}
```
1. `flex-direction:row`
![example1601](./img/1601.png)
   
<br>

2. `flex-direction:row-reverse`
![example1602](./img/1602.png)

<br>




### π Container : `align-items`
- κΈ°λ³Έμ μΌλ‘ `flex box`λ νλμ νμ λ€λ£¨κ³  `main-axis`μ κ΄λ ¨μ΄ μλ€
- `flex box`κ° λ€λ£¨λ νμ΄ `cross-axis`λ΄μμ μ΄λμ μμΉν  κ²μΈκ°λ₯Ό κ²°μ νλ κ²μ΄ `align-items`
- `item`μ νμ΄ μ¬λ¬ νμ΄ λλ©΄, νλμ νλ§λ€ `container`λ‘ μΈμ§νλ€
- μ΄κΈ°κ° : `align-items:stretch`
- ν€μλ
  - `stretch` : `container`μ `cross-axis`λ₯Ό κΈ°μ€μΌλ‘ `flex-start`λΆν° `flex-end`κΉμ§ λμ΄λλ€
    - `item`μ λμ΄κ° μ€μ λμ΄ μμ§ μλ€λ©΄, `container`μ λμ΄λ§νΌ λμ΄λλ€
  - `flex-start` : `cross-axis` κ° μμνλ μμΉμ λ§κ² μ λ ¬  
  - `flex-end` : `cross-axis` κ° λλλ μμΉμ λ§κ² μ λ ¬ 
  - `center` : `cross-axis` μ κ°μ΄λ° μμΉμ λ§κ² μ λ ¬ 


<br>

### π Container : `align-content`
- μ¬λ¬ κ°μ `item`μ `cross-axis`μ μ΄λ»κ² μ λ ¬ν  κ²μΈκ°μ λν μμ± 
- ν€μλ
  - `flex-start` : `cross-axis` κ° μμνλ μμΉμ λ§κ² μ λ ¬  
  - `flex-end` : `cross-axis` κ° λλλ μμΉμ λ§κ² μ λ ¬ 
  - `center` : `cross-axis` μ κ°μ΄λ° μμΉμ λ§κ² μ λ ¬ 
  - `space-between` : `cross-axis` μ μμκ³Ό λ μμΉλ₯Ό μ μ§νλ©° `item`μ¬μ΄μ κ°κ²©μ λμΌνκ² μ μ§ 
  - `space-around` : `cross-axis` μ μμκ³Ό λ μμΉλ₯Ό μ μ§νμ§ μκ³ , `item`μ μ λ€ κ°κ²©μ λμΌνκ²


<br>


### π Container : `align-self`
- μ΄κΈ°κ° : `algn-items`μ κ°μ΄ κ·Έλλ‘ μ μ©
- νμ¬ μ νν `item`λ§ `algn-items` μ λ³κ²½νκΈ° μν΄ μ¬μ©νλ€ 

<br>















