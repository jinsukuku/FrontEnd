# π FlexBox μ°μ΅λ¬Έμ (2)
- 2021.09.13(μ) 
- Flexbox μ λν μ΄ν΄κ° λΆμ‘±νλ€κ³  λκ»΄μ λ¬Έμ νλ©΄μ κ°λ μ¬μ λ¦¬!
- http://flexboxfroggy.com/#ko μ 24κ° μ°μ΅ λ¬Έμ 


![flexbox](./img/flexbox.png)

<br>

### π 13λ² 
```css
#pond {
    display:flex;
    flex-direction:row-reverse;
    justify-content:center;
    align-items:flex-end;
}
```
- `flex-direction:row-reverse` μΌ λμλ
- `justify-content` λ κ°λ‘ μ λ ¬, `align-items`λ μΈλ‘ μ λ ¬!
<br>


### π 14λ² 
```css
#pond {
    display:flex;
}
.yellow{
    order:3;
}
```
- `order` μμ±μ `container`κ° μλ `item`μ μ¬μ©κ°λ₯νλ€
- `container`μμ μ ν΄μ§ μμκ° μλ, λ€λ₯Έ μμλ₯Ό `item`μ λΆμ¬ν  λ μ¬μ©νλ€

<br>


### π 15λ² 
```css
#pond {
    display:flex;
}
.yellow{
    order:-1;
}
```
- `order`λ `<number>` μλ£νμ μ¬μ©νλ©°, μμλ μ¬μ© κ°λ₯νλ€
- μ΄κΈ°κ°μ `order:0;` μ΄λ―λ‘ μλ¬΄λ¦¬ μμ μ«μλ₯Ό λ£μ΄λ κ°μ₯ λ§¨ μμΌλ‘ κ°μ§ μλλ€ **μ£Όμ!**
- κ°μ₯ λ§¨ μμΌλ‘ λ³΄λ΄κ³  μΆμ λμλ μμλ₯Ό λ£μ΄μ£Όλλ‘ νμ


<br>


### π 16λ² 
```css
#pond {
  display: flex;
  align-items: flex-start;
}

.yellow {
    align-self : flex-end;
}
```
- `container`μμ `algn-items`μΌλ‘ μ λ ¬μ 
- `align-self`μ μ¬μ©ν΄ `item` νλ νλμ μ€μ μ λ³κ²½ν  μ μλ€
<br>


### π 17λ² 
```css
#pond {
  display: flex;
  align-items: flex-start;
}

.yellow {
    order:1;
    align-self:flex-end;
}
```
<br>


### π 18λ² 
```css
#pond {
    display:flex;
    flex-wrap : wrap;
}
```
- `flex-wrap` μ `item`μ ν νμΌλ‘ λ°°μΉν  κ²μΈμ§, μ¬λ¬ νμΌλ‘ λ°°μΉν  κ²μΈμ§μ λν μμ±μ΄λ€
- μ΄κΈ°κ° : `flex-wrap:nowrap;`
- ν€μλ
    - `nowrap` : `container` μ `width`, `height` μ λ§μΆ° `item`μ ν¬κΈ°λ₯Ό μ‘°μ νλ©° κ°μ λ‘ νμ€λ‘ λ°°μΉ (default)
    - `wrap` : `item`μ ν¬κΈ°λ₯Ό μ μ§νλ©° μ¬λ¬ μ€λ‘ λ°°μΉ 
    - `wrap-reverse` : `wrap`κ³Ό λμΌνλ μμκ° λ°μ λλ€
- `warp` μ΄λ `wrap-reverse`λ₯Ό μ€μ νμ λμ ν κ°κ²©μ `container`μ `height`κ°μ μν₯μ λ°λλ€ 


<br>


### π 19λ² 
```css
#pond {
    display:flex;
    flex-wrap:wrap;
    flex-direction:column;
}
```
<br>


### π 20λ² 
```css
#pond {
    display:flex;
    flex-flow:column wrap;
}
```
- `flex-flow`λ `flex-direction`μ `flex-wrap` μμ±μ νλ²μ μ¬μ©ν  μ μλ λ¨μΆμμ±μ΄λ€
- μλ‘ μ¬μ©νλ ν€μλκ° λ€λ₯΄λ―λ‘ μμλ μ€μνμ§ μλ€
- `flex-direction`μ `flex-wrap`λ₯Ό μλ ₯ν  λμ κ³΅λ°±μ κ΅¬λΆμλ‘ μ¬μ©νλ€

<br>


### π 21λ² 
```css
#pond {
    display:flex;
    flex-wrap:wrap;
    align-content:flex-start;
}
```
- `flex-wrap:wrap` μΌ λ, `align-content`μ μ¬μ©νλ©΄, ν μ¬μ΄μ κ°κ²©μ μ‘°μ ν  μ μλ€
- FLEXBOX FROGGY μ μ€λͺμ μλμ κ°λ€ 
    - `flex-start`: μ¬λ¬ μ€λ€μ μ»¨νμ΄λμ κΌ­λκΈ°μ μ λ ¬ν©λλ€.
    - `flex-end`: μ¬λ¬ μ€λ€μ μ»¨νμ΄λμ λ°λ₯μ μ λ ¬ν©λλ€.
    - `center`: μ¬λ¬ μ€λ€μ μΈλ‘μ  μμ κ°μ΄λ°μ μ λ ¬ν©λλ€.
    - `space-between`: μ¬λ¬ μ€λ€ μ¬μ΄μ λμΌν κ°κ²©μ λ‘λλ€.
    - `space-around`: μ¬λ¬ μ€λ€ μ£Όμμ λμΌν κ°κ²©μ λ‘λλ€.
    - `stretch`: μ¬λ¬ μ€λ€μ μ»¨νμ΄λμ λ§λλ‘ λλ¦½λλ€.

<br>


### π 22λ² 
```css
#pond {
    display:flex;
    flex-wrap:wrap;
    align-content:flex-end;
}
```
- `align-content`μ `align-items` μ°¨μ΄μ μ μ κΈ°μ΅ν΄λμ
<br>



### π 23λ² 
```css
#pond {
    display:flex;
    flex-direction:column-reverse;
    align-content:center;
}
```
<br>




### π 24λ² 
```css
#pond {
    display:flex;
    flex-wrap:wrap-reverse;
    flex-direction:column-reverse;
    justify-content:center;
    align-content:space-between;
}
```

![flexbox_final](./img/flexbox_final.png)

- `align-content`μ `align-items` μ μ°¨μ΄κ° μ’ ν·κ°λ €μ ν€λ§Έλ€
- `flex-box` κ΄λ ¨ μμ±μ λ§μ΄ λ€λ£¨κ³  κ³΅λΆν΄λ΄μΌκ² λ€
- κ·Έλ¦¬κ³  μ¬κΈ°μλ λ€λ£¨μ§ μμλ `flex-grow`, `flex-shrink` λ±μ μμ±μ λν κ³΅λΆλ νμνλ€


<br>

