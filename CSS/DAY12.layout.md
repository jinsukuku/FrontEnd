# π 12μΌμ°¨ 
- 2021.09.08(μ)
- λͺ©μ°¨ : λ μ΄μμ

<br>

## β λ μ΄μμ (layout)
### π `display`
1. `inline`
    - (μ) `span` `a` ... 
    - μμ­μ κΈ°λ³Έ ν¬κΈ°κ° λ΄λΆ μ½νμΈ  ν¬κΈ°λ‘ μ§μ 
    - μμ­μ ν¬κΈ°λ₯Ό `width`, `height`λ‘ μ€μ ν  μ μλ€  
    - λ΄λΆ μ¬λ°±(padding)κ³Ό μΈλΆ μ¬λ°±(margin)μ topκ³Ό bottomμ μ§μ ν  μ μλ€
    - `inline` μμλ κ°λ‘ λ°°μΉκ° λλ€ 
2. `block` 
    - (μ) `div` `section` ... 
    - μμ­μ κΈ°λ³Έ λλΉκ° λΆλͺ¨ μμμ λλΉλ‘ μ§μ . λμ΄λ μ»¨νμΈ  ν¬κΈ°λ‘ μ§μ 
    - μμ­μ ν¬κΈ°λ₯Ό `width`, `height`λ‘ μ€μ ν  μ μλ€ 
    - `width`λ₯Ό μ§μ νμ§ μμΌλ©΄ κ°λ‘ μ μ²΄λ₯Ό μ°¨μ§νλ€
    - `block` μμλ μΈλ‘ λ°°μΉκ° λλ€
3. `inline-block`
    - (μ) `input` ... 
    - μμ­μ ν¬κΈ°λ₯Ό `width`, `height`λ‘ μ€μ ν  μ μλ€ 
    - `inline-block` μμλ κ°λ‘ λ°°μΉκ° λλ€ 
    - λ΄λΆ μ¬λ°±(padding)κ³Ό μΈλΆ μ¬λ°±(margin)μ topκ³Ό bottomμ μ§μ ν  μ μλ€
4. `none` 
    - outputμμ ν΄λΉ μμκ° λ³΄μ΄μ§ μλλ‘ μ€μ νλ€ 

<br>

### π μμλ₯Ό μμ λ λ°©λ² 
- λ°©λ²1. `display : none` : μμκ° μ°¨λ¦¬νλ μλ¦¬λ μμ κ³ , μμλ₯Ό λμ λ³΄μ΄μ§ μλλ‘ μ¨κΈ΄λ€
- λ°©λ²2. `visibility : hidden` : μμκ° μ°¨λ¦¬νλ μλ¦¬λ λΉμλκ³ , μμλ§ λμ λ³΄μ΄μ§μλλ‘ μ¨κΈ΄λ€ 
- μ°¨μ΄μ  : λ¬Έμμ λ μ΄μμμ λ³κ²½ μ¬λΆ

<br>

### π `normal flow` : μμμ λ μ΄μμμ κ°μ λ‘ λ³ννμ§ μμμ λμ λ°°μΉλ₯Ό μλ―Έ
<br>

### π `float`
- `float`λ `normal flow`λ₯Ό λ²μ΄λ μμμ λ μ΄μμμ κ°μ λ‘ λ³νμν¬ λ μ¬μ©νλ€
- λ€μ μμμ λ μ΄μμμ κ·Έλλ‘ λ°μ€ ννμ΄κ³ , `float`κ° μ μ©λ μμλ λ€μ μμμ μμ λ₯λ₯ λ μλ ννλ‘ μλ¦¬νλ€
- νμ¬λ `float`λ³΄λ€ `flex box`λ₯Ό μ¬μ©ν΄ λ μ΄μμμ μ‘λ κ²μ κΆμ₯νλ€ 
---
1. `left` : λΆλͺ¨ μμ λ΄λΆμμ μΌμͺ½μ μλ¦¬νκ² λκ³ , λ¨μ μλ¦¬μ λ€μ μμμ μ»¨νμΈ κ° μ±μμ§λ€
2. `right` : λΆλͺ¨ μμ λ΄λΆμμ μ€λ₯Έμͺ½μ μλ¦¬νκ² λκ³ , λ¨μ μλ¦¬μ λ€μ μμμ μ»¨νμΈ κ° μ±μμ§λ€
3. `none` : `normal flow` λ₯Ό κ°μ λ‘ λ³νμν€μ§ μλ ν€μλ / default

<br>

### π `position`
- `position`μ μμμ μμΉλ₯Ό μ΄λ ν μμμ μμΉλ₯Ό κΈ°μ€μΌλ‘ μΌμ λ³κ²½ν  λ μ¬μ©νλ€
- μμ± `top`, `bottom`, `left`, `right` μ μ¬μ©ν΄ μμΉλ₯Ό λ³κ²½νλ€
- μμ±μ κ°μλ μμλ₯Ό μ¬μ© μ μλ€ (μ) top : -20px
- `top` κ³Ό `bottom`μ κ°μ λͺ¨λ μ§μ νκ² λλ©΄ `top`μ΄ μ°μ  μ μ©λλ€
- `left` κ³Ό `right`μ κ°μ λͺ¨λ μ§μ νκ² λλ©΄ `top`μ΄ μ°μ  μ μ©λλ€
- μ¦, μλ‘ λ°λκ° λλ κ°μ λμμ μ§μ νλ©΄ `top`κ³Ό `left`κ° μ°μ  μ μ©λκ³ , λ€λ₯Έ κ°μ λ¬΄μνλ€
- **[μ°Έκ³ ]** https://developer.mozilla.org/ko/docs/Web/CSS/position_value
---
1. `static` : `normal flow` λ₯Ό κ°μ λ‘ λ³νμν€μ§ μλ ν€μλ / `default`
    - `static` μΌ λμλ `top`, `bottom`, `left`, `right` μμ±μ μ¬μ©ν  μ μλ€
2. `relative` : μκΈ° μμ μ κΈ°μ€μΌλ‘ μΌλλ€. κ·Έλ κΈ° λλ¬Έμ `static`μΌ λμ κ°μ λ μ΄μμμ κ°μ§λ€ 
    - `relative` μΌ λμλ `top`, `bottom`, `left`, `right` μμ±μ μ¬μ©ν  μ μλ€
3. `absolute` : κ°μ₯ κ°κΉμ΄ λΆλͺ¨ μμ μ€ `position`μ΄ `static`μ΄ μλ μμλ₯Ό κΈ°μ€μΌλ‘ μμΉλ₯Ό μ§μ νλ€ 
    - μμΉμ κ΄λ ¨λ μμ±μ μ¬μ©νμ§ μμΌλ©΄ `float` λ₯Ό μ£Όμμ λμ²λΌ, λ€μ μμμ μμ λ₯λ₯ λ μλ ννλ‘ μλ¦¬νλ€
    - μμΉμ κ΄λ ¨λ μμ±μ μ¬μ©νλ©΄ κ°μ₯ κ°κΉμ΄ μ‘°μ μμ μ€ `position`μ΄ `static`μ΄ μλ μμλ₯Ό μ°Ύμ κΈ°μ€μΌλ‘ μΌλλ€ 
    - λ§μ½ μμ μμκ° λͺ¨λ `static`μΈ κ²½μ°, `<body>` λ₯Ό κΈ°μ€μΌλ‘ μΌλλ€ 
4. `fixed` : `viewport` λ₯Ό κΈ°μ€μΌλ‘ μμΉλ₯Ό μ§μ νλ€ 
    - `viewport` λ₯Ό κΈ°μ€μΌλ‘ μμΉλ₯Ό μ§μ νκΈ°λλ¬Έμ, μ€ν¬λ‘€μ μ΄λν΄λ ν­μ κ°μ μμΉμ μ‘΄μ¬νλ€ 
5. `sticky`
    - κ°μ₯ κ°κΉμ΄, μ€ν¬λ‘€μ λμμ΄λλ μ‘°μμ κΈ°μ€μΌλ‘ μΌλλ€. (μΌλ°μ μΌλ‘ `<body>`)
    - μΈλ‘μ κ΄λ ¨λ μμΉ μμ±μ `nomarl flow`μ λμΌνκ² μ μ§νλ€, μ€ν¬λ‘€μ κ±Έλ¦¬λ μκ° μ§μ λ μμΉλ₯Ό μ μ§νκ² λλ€
    


<br>

### π `overflow`
- μ»¨νμΈ κ° λλ¬΄ λ§μμ, λμ³ νλ₯Ό λ μ΄λ»κ² λμν  κ²μΈκ°μ λν λ°©λ²μ μ§μ νλ€
- λ¨μΆ μμ±(short hand)μΌλ‘, `overflow-x`, `overflow-y`λ₯Ό νλ²μ μ€μ νλ€ 
---
1. `visible` : λμ³ νλ₯΄λ μ»¨νμΈ λ₯Ό κ·Έλλ‘ λ³΄μ¬μ€λ€. λ§μ½ μλμ λ€λ₯Έ μμκ° μλ€λ©΄ μ»¨νμΈ κ° κ²ΉμΉκ² λλ€ / default
2. `hidden` : λμ³ νλ₯΄λ μ»¨νμΈ λ₯Ό μ¨κΈ΄λ€
3. `scroll` : μ€ν¬λ‘€μ μ¬μ©ν΄ ν΄λΉ λΈλ­ λ΄λΆμμ λͺ¨λ  μ»¨νμΈ κ° λ³΄μ΄λλ‘ νλ€  
4. `auto` : λΈλΌμ°μ κ° μλμΌλ‘ κ°μ μ ννλ€. μ»¨νμΈ κ° λμ³νλ₯΄μ§ μμ λμλ `visible`, λμ³νλ₯Ό λμλ `scroll`μ μ¬μ©νλ€

<br>

### π `z-index`
- `position`μ μ¬μ©ν μμμ zμΆμ μμλ₯Ό μ§μ νλ€
- μμ± κ°μΌλ‘λ `auto`(default) μ μ μλ₯Ό μ¬μ©νλ€. μ΄ λ μμ μ μμ μμ μ μλ₯Ό λͺ¨λ μ¬μ©ν  μ μλ€
- λ°λ‘ μ§μ νμ§ μμΌλ©΄, κΈ°λ³Έ μμλλ‘ μμ΄κ² λλλ° μ΄ μμλ μ½λλ₯Ό μμ±ν μμμ `position` κ°μ λ°λΌ λ€λ₯΄λ€
- `position`μ΄ `static`μΈ μμκ° `static`μ΄ μλ μμλ³΄λ€ μμ  μμλ₯Ό κ°μ§λ€
- `position`μ΄ `static`μ΄ μλ μμλ `z-index` κ°μ μ¬μ©ν΄ zμΆμ μμλ₯Ό λ³κ²½ν  μ μλ€ 
- [μ°Έκ³ ] https://developer.mozilla.org/ko/docs/Web/CSS/z-index


















