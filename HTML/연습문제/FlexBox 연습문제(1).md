# π FlexBox μ°μ΅λ¬Έμ (1)
- 2021.09.13(μ) 
- Flexbox μ λν μ΄ν΄κ° λΆμ‘±νλ€κ³  λκ»΄μ λ¬Έμ νλ©΄μ κ°λ μ¬μ λ¦¬!
- http://flexboxfroggy.com/#ko μ 24κ° μ°μ΅ λ¬Έμ 


![flexbox](./img/flexbox.png)

<br>

### π 1λ² 
```css
#pond {
    display:flex;
    justify-content:flex-end;
}
```
- `justify-content` : main-axisλ₯Ό κΈ°μ€μΌλ‘ itemμ μ λ ¬λ°©λ²μ μ€μ νλ μμ±
- `flex-direction` μ λ°λΌμ κ°μ ν€μλλ₯Ό μ¬μ©ν΄λ κ²°κ³Όκ° λ€λ₯΄λ€
- μ§κΈμ `flex-direction`μ΄ κΈ°λ³Έκ°μΈ `row`μ΄λ―λ‘, 
- `justify-content:flex-end;`λ₯Ό μ¬μ©ν΄ μ€λ₯Έμͺ½ λμΌλ‘ κ°κ΅¬λ¦¬λ₯Ό μ΄λ
<br>

### π 2λ² 
```css
#pond {
    display:flex;
    justify-content:center;
}
```
- `justify-content` μ μ¬μ©ν  μ μλ ν€μλλ μλμ κ°λ€
    - `flex-start` : main-axis κ° μμνλ μμΉμ λ§κ² μ λ ¬
    - `flex-end` : main-axis κ° λλλ μμΉμ λ§κ² μ λ ¬
    - `center` : main-axis μ κ°μ΄λ° μμΉμ λ§κ² μ λ ¬
    - `space-between` : main-axis μ μμκ³Ό λ μμΉλ₯Ό μ μ§νλ©° itemμ¬μ΄μ κ°κ²©μ λμΌνκ² μ μ§
    - `space-around` : main-axis μ μμκ³Ό λ μμΉλ₯Ό μ μ§νμ§ μκ³ , itemμ μ λ€ κ°κ²©μ λμΌνκ²

<br>


### π 3-4λ²
```css
/* 3λ² */
#pond {
    display:flex;
    justify-content:space-around;
}

/* 4λ² */
#pond {
    display:flex;
    justify-content:space-between;
}
```
- `space-between` κ³Ό `space-around` λͺ¨λ `item`μ¬μ΄ κ°κ²©μ λμΌνκ² λ§μΆ°μ€λ€
- `space-between` κ³Ό `space-around`μ μ°¨μ΄μ μ μ£Όμνμ
    - `space-between` : main-axis μ μμκ³Ό λ μμΉλ₯Ό μ μ§ O
    - `space-around` : main-axis μ μμκ³Ό λ μμΉλ₯Ό μ μ§ X

<br>


### π 5λ² 
```css
#pond {
    display:flex;
    align-items:flex-end;
}
```
- κΈ°λ³Έμ μΌλ‘ `flex box`λ νλμ νμ λ€λ£¨κ³  `main-axis`μ κ΄λ ¨μ΄ μλ€
- `flex box`κ° λ€λ£¨λ νμ΄ `cross-axis` λ΄μμ μ΄λμ μμΉν  κ²μΈκ°λ₯Ό κ²°μ νλ κ²μ΄ `align-items`
- `flex-direction`λ `main-axis`μ `cross-axis`μ μΆ, λ°©ν₯μ λ€λ£¨λ―λ‘
- `align-items`λ `flex-direction`μ μν₯μ λ°λλ€
- 5λ² λ¬Έμ μμμ `cross-axis` λ μΈλ‘μΆ, μμμ μλλ‘ ν₯νκΈ°λλ¬Έμ
- `align-items:flex-end`λ₯Ό μ¬μ©ν΄ λ¬Έμ μμ μνλ λλ‘ μΈλ‘ μ λ ¬ν  μ μλ€

<br>


### π 6λ² 
```css
#pond {
    display:flex;
    justify-content:center;
    align-items:center;
}
```
- `flex-direction`μ΄ `row`, `row-reverse` μΌ λμ
    - κ°λ‘ μ λ ¬μ `justify-content`
    - μΈλ‘ μ λ ¬μ `align-items`
- `flex-direction`μ΄ `column`, `column-reverse` μΌ λμ
    - κ°λ‘ μ λ ¬μ `align-items`
    - μΈλ‘ μ λ ¬μ `justify-content`


<br>


### π 7λ² 
```css
#pond {
    display:flex;
    justify-content:space-around;
    align-items:flex-end;
}
```
<br>


### π 8λ² 
```css
#pond {
    display:flex;
    flex-direction:row-reverse;
}
```
- `main-axis`μ `cross-axis` μ μμΉμ λ°©ν₯μ μ€μ νλ€
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


### π 9λ² 
```css
#pond {
    display:flex;
    flex-direction:column;
}
```
- `flex-direction:column;` λ₯Ό μ¬μ©ν΄ `main-axis`μ κΈ°μ€ μΆμ μΈλ‘μΆμΌλ‘, 
- λ°©ν₯μ μμμ μλλ‘ ν₯νκ² `flex-direction`μ λ³κ²½νλ€

<br>


### π 10λ² 
```css
#pond {
    display:flex;
    flex-direction:row-reverse;
    justify-content:flex-end;
}
```
<br>


### π 11λ² 
```css
#pond {
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
}
```
- `flex-direction`μ΄ μ€μ ν λ°©ν₯μ μμ μ§μ μ λ§μΆλ €λ©΄ `justify-content:flex-start`,
- λ μ§μ μ λ§μΆλ €λ©΄ `justify-content:flex-end` μ μ¬μ©ν΄ μ λ ¬ν  μ μλ€

<br>



### π 12λ² 
```css
#pond {
    display:flex;
    flex-direction:column-reverse;  
    justify-content:space-between;
}
```

- `flex-direction`μ κ°μΌλ‘ `reverse`κ° λΆμ ν€μλλ₯Ό μ¬μ©νλ©΄ `item`μ μμκ° λ€μ§νλ€
- `row` μΌ λμλ `1` `2` `3` `4` `5` μ μμκ°
- `row-reverse` μΌ λμλ `5` `4` `3` `2` `1` λ‘ λ³κ²½λλ€
- `column` μΌ λμλ<br>
    `1`<br>
    `2`<br>
    `3`<br>
    `4`<br>
    `5`<br>
- `column-reverse` μΌ λμλ μλμ μμμ κ°λ€ <br>
    `5`<br>
    `4`<br>
    `3`<br>
    `2`<br>
    `1`<br>


<br>

