# ๐ 9์ผ์ฐจ 
- 2021.09.05(์ผ)
- ๋ชฉ์ฐจ : ํผ ๊ด๋ จ ์์

<br>

## โ `<form>` : ํผ ์์ 
### ๐ `<form>`
- ์ฌ์ฉ์์๊ฒ ์ ๋ณด๋ฅผ ์๋ ฅ๋ฐ๊ธฐ ์ํ ์์
- ์ฌ์ฉ์์ ์ ๋ณด๋ฅผ ์ฃผ๊ณ ๋ฐ๋๋ค๋ ๋ถ๋ถ์์ ๋ํํ ์ปจํธ๋กค์ผ๋ก ๋ณธ๋ค
- ๋จ๋ ์ฌ์ฉ ์ output์ด ๋ฐ๋ก ์๋ค
- `<form>` ํ๊ทธ๋ ๋ด๋ถ์ ์ฝํ์ธ ๋ฅผ ํ๋๋ก ๋ฌถ์ด์ค๋ค


<br>

### ๐ `<button>`
- `<form>` ๋ด๋ถ์์ ์ฌ์ฉ๋๋ ํด๋ฆญ ๊ฐ๋ฅํ ๋ฒํผ
- JavaScript๋ฅผ ์ฌ์ฉํด์ ์ํ๋ ๊ธฐ๋ฅ์ ์ค์ ํ  ์ ์๋ค
- JavaScript๋ฅผ ์ฌ์ฉํ๊ธฐ ์ ์๋ ๋ณ๋ค๋ฅธ ๊ธฐ๋ฅ์ด ์๋ `<button>` ๋์  `<div>`๋ฅผ ์ฌ์ฉํ๋ฉด ์๋ ๊น?
- ์น ์ ๊ทผ์ฑ์ธก๋ฉด์์ ๋ฒํผ์ ์ญํ ์ ํ๋ ์์์ธ ๊ฒฝ์ฐ `<button>`์ ์ฌ์ฉํ๋ ๊ฒ์ ๊ถ์ฅํ๋ค
- ์์ฑ
    - `name` ์์ฑ : ์๋ก ๋ค๋ฅธ `<form>` ์์๋ ์ค๋ณต ๊ฐ๋ฅ (๋์ผ `<form>` ๋ด๋ถ์์๋ ์ค๋ณต ๋ถ๊ฐ๋ฅ)
    - `value` ์์ฑ : ๋ฒํผ์ ํ์คํธ๋ฅผ ์ค์ ํ  ์ ์๋ค
    - `<button type="">...</button>` : ๋ฒํผ์ ํ๋๋ฐฉ์์ ์ค์ 
        - `submit` : ๋ฒํผ์ด ์๋ฒ๋ก ๋ฐ์ดํฐ๋ฅผ ์ ์ถ
        - `reset` : ๋ชจ๋  ์ปจํธ๋กค์ ์ด๊ธฐ๊ฐ์ผ๋ก ๋๋๋ฆฐ๋ค. `<input type="reset">`๊ณผ ๊ฐ์ ์ญํ 
        - `button` : ๊ธฐ๋ณธ ๊ฐ (default)
- `<input type=button>` VS `<button type="button">`

    <table>
        <tr style="text-align:center">
            <th>/</th>
            <th>input</th>
            <th>button</th>
        </tr>
        <tr>
            <th style="text-align:center">type</th>
            <td style="text-align:center" colspan="2">reset / submit / button</td>
        </tr>
        <tr>
            <th style="text-align:center">value</th>
            <td>- ๊ธฐ๋ณธ ๊ฐ์ ๊ฐ๋๋ค<br>- reset : ์ด๊ธฐํ<br>- submit : ์ ์ถ</td>
            <td>- ๊ธฐ๋ณธ ๊ฐ ์์</td>
        </tr>
        <tr>
            <th style="text-align:center">ํํ</th>
            <td>- ๋น ์์<br>- ์์์ ์์ฑ์ผ๋ก ๊ฐ์ ์ค์ <br>- ํ์คํธ๋ง ๊ฐ๋ฅํ๋ค</td>
            <td>
                - ์ฌ๋ ํ๊ทธ์ ๋ซ๋ ํ๊ทธ๋ฅผ ๊ฐ๋๋ค<br>
                - ์์ ์์๋ฅผ ๊ฐ์ง ์ ์๋ค<br>
                - ๋ค๋ฅธ ํ๊ทธ๋ก ์ปจํ์ธ ๋ฅผ ๊ฐ์ ์ ์๋ค<br>
                - ํ์คํธ ์ธ์ ์ปจํ์ธ ๋ฅผ ๊ฐ์ง ์ ์๋ค (์) ์ด๋ชจ์ง<br>
                - but ์น ์ ๊ทผ์ฑ์ ์ํด ํ์คํธ๋ฅผ ํจ๊ป ์ฌ์ฉํ์
            </td>
        </tr>
    </table>




<br>

### ๐ `<select>`
```html
<label for="food">์ข์ํ๋ ์์</label>
<select name="food" id="food" required>
    <option value="">-- ์ ํํด์ฃผ์ธ์ --</option>
    <option value="apple">์ฌ๊ณผ</option>
    <option value="banana">๋ฐ๋๋</option>
    <option value="peach">๋ณต์ญ์</option>
</select>
```
- ์ ํ ์ต์ ๋ฉ๋ด๋ฅผ ๋๋กญ๋ค์ด ํํ๋ก ์ ๊ณตํ๋ ์ปจํธ๋กค
- ์ ํ์ง๋ `<select>` ์ ์์ ์์์ธ `<option>`์ ์ฌ์ฉํ๋ค
- `<select>` ์ `name`๊ฐ๊ณผ ์ ํํ `<option>`์ `value`๋ฅผ ์ฌ์ฉํด ์๋ฒ์ ์ ์ถํ๋ค

- `value` ์์ฑ
    ```html
    <option>-- ์ ํํด์ฃผ์ธ์ --</option>
    ```
    - `value` ์์ฑ์ ๊ฐ์ด ์๋ค๋ฉด, `<option>`์ ์ฝํ์ธ ๋ฅผ ์๋ฒ์ ์ ์ถํ๋ค
    ```html
    <option value="">-- ์ ํํด์ฃผ์ธ์ --</option>
    ```
    - `value` ์์ฑ์ ์์ ๊ฐ์ด ๋ช์ํ๋ฉด ์๋ฒ์ ์ฝํ์ธ ๋ฅผ ์ ์กํ์ง ์๋๋ค
    <br>
      
```html
<label for="food">์ข์ํ๋ ์์</label>
<select name="food" id="food" required>
    <option value="apple" selected>์ฌ๊ณผ</option>
    ...
```

- `required` ์์ฑ : `<option>` ์ ํ์ ์ ํ์ผ๋ก ์ค์ ํ๊ธฐ์ํ ์์ฑ
- `selected` ์์ฑ : ์ต์ด ์ ํ ๊ฐ์ผ๋ก ์ค์ 

      
```html
<label for="food">์ข์ํ๋ ์์</label>
<select name="food" id="food" required>
    <optgroup label="fruit">
      <option value="apple">์ฌ๊ณผ</option>
      <option value="banana">๋ฐ๋๋</option>
      <option value="peach">๋ณต์ญ์</option>
    </optgroup>
    <optgroup label="vegetable">
      <option value="potato">๊ฐ์</option>
      <option value="carrot">๋น๊ทผ</option>
    </optgroup>
</select>
```

- `<optgroup>` : `<option>` ๊ฐ์ ๊ทธ๋ฃนํ ํ๊ธฐ์ํ ์์ 




<br>

### ๐ `<datalist>`
```html
<label for="movie">์ข์ํ๋ ์ํ</label>
<input type="text" id="movie" name="movie" list="movieList">

<datalist id="movieList">
  <option>์ฃผํ ํผ์</option>
  <option>ํ ์ด์คํ ๋ฆฌ</option>
  <option>๊ฒจ์ธ์๊ตญ</option>
  <option>์ธ์ฌ์ด๋์์</option>
</datalist>
```
- `<input>` ์ `list` ์์ฑ๊ณผ ํจ๊ป ์ฌ์ฉํ๋ค 
- ์ ํ ๊ฐ๋ฅํ, ํน์ ์ถ์ฒํ๋ ์ ํ์น๋ฅผ ๋ํ๋ด๋ `<option>`๋ฅผ ์์ ์์๋ก ๊ฐ๋๋ค 
- `<datalist>` ์ `id`์ `<input>`์ `list`์์ฑ๋ฅผ ์ฌ์ฉํด ์๋ก ์ฐ๊ฒฐํ๋ค 



<br>

### ๐ `<textarea>`
```html
<label for="review">ํ๊ธฐ ์์ฑ :</label>
<textarea id="review" name="review" rows="5" cols="33">
  ํญ์ ์ฃผ๋ฌธํด์ ๋จน๋๋ฐ ์ง์ง ์๋ ๋ง๊ณ  ๋ง๋ ์ต๊ณ ์์ !
  ์ค๋๋ ๋ง์๊ฒ ๋จน์์ต๋๋ค~
</textarea>
```

- ๋ฉํฐ๋ผ์ธ ํ์คํธ๋ฅผ ์๋ ฅ๋ฐ์ ์ ์๋ ์์
- ๊ฐํ์ด๋ ๊ณต๋ฐฑ์ ์๋ ฅํด๋ ๊ทธ๋๋ก output์ผ๋ก ๋ณด์ฌ์ง๋ค
- `rows`์ `cols`์์ฑ์ ์ฌ์ฉํด ๊ธฐ๋ณธ ํฌ๊ธฐ๋ฅผ ์ค์ ํ  ์ ์๋ค
- ๊ธ์จ์ฒด์ ๋ฐ๋ผ์ `rows`์ `cols`์์ฑ์ ์ฌ์ฉํด ์ค์ ํ ํฌ๊ธฐ๊ฐ ๋ค๋ฅผ ์ ์๋ค
- ์์ฑ : `readonly` `disable` `placeholder` `required` ๋ฑ 


















