# ð 12ì¼ì°¨ 
- 2021.09.08(ì)
- ëª©ì°¨ : í°í¸/íì¤í¸ ê´ë ¨ ìì±

<br>

## â í°í¸/íì¤í¸ ê´ë ¨ ìì± 
### ð í°í¸/íì¤í¸ ê´ë ¨ ìì±
```html
<div>
    <p class="default"> í°í¸ì íì¤í¸ì ê´ë ¨ë<br>ìì±ì ììë´ëë¤ </p>
    <p class="text"> í°í¸ì íì¤í¸ì ê´ë ¨ë<br>ìì±ì ììë´ëë¤ </p>
</div>
```
```css
.text {
    color : tomato;
    font-size : 20px; 
    font-style : italic;
    font-weight : 400;
    font-family : Verdana, Arial, Helvetica, sans-serif;
}
```
![example1116](./img/1116.png)

<br>

1. `color` : ê¸ì ììì ì§ì íë¤. ìì í¤ìë, hex ê° ë±ì ê°ì¼ë¡ ê°ì§ë¤ 
   
2. `font-size` : ê¸ì í¬ê¸°ë¥¼ ì§ì íë¤. í¬ê¸° í¤ìë, px, em ë±ì ë¨ìë¥¼ ì¬ì©íê¸°ë íë¤
    - [ì°¸ê³ ] https://developer.mozilla.org/ko/docs/Web/CSS/font-size
    
3. `font-style` : ê¸ì ì¤íì¼ì ì§ì íë¤. `italic`, `oblique` ë±ì ê°ì ê°ëë¤
    - ê¸°ë³¸ê°ì `normal`ì´ê³ , ê¸ì¨ì²´ì ë°ë¼ì ì ì©ëë ì¤íì¼ì ííê° ë¤ë¥´ë¤
    - [ì°¸ê³ ] https://developer.mozilla.org/en-US/docs/Web/CSS/font-style
    
4. `font-weight` : ê¸ìì êµµê¸°ë¥¼ ì§ì íë¤.
    - ì¼ë°ì ì¼ë¡ 100ë¨ìë¡ ê°ì ì¬ì©íê³ , êµµê¸° í¤ìëë¥¼ ì¬ì©íê¸°ë íë¤ (ì) normal, bold, bolder ....
    - ê¸ì¨ì²´ë§ë¤ ì§ìíë ê¸ì êµµê¸°ê° ë¤ë¥´ê¸°ëë¬¸ì, íì¸íê³  ì¬ì©íì
    - [ì°¸ê³ ] https://developer.mozilla.org/ko/docs/Web/CSS/font-weight

5. `font-family` : ê¸ì¨ì²´ë¥¼ ì¤ì íë¤
    - ì¹ ë¸ë¼ì°ì ë OSì ë°ë¼ì ê¸°ë³¸ ê¸ì¨ì²´ê° ì¤ì ëë¤
    - ì¬ë¬ê°ì ê¸ì¨ì²´ë¥¼ ì¤ì íë©´, ì¬ì© ì¸ì´ë ì¬ì© íê²½ì ë°ë¼ì ì¬ì© ê°ë¥í ê¸ì¨ì²´ê° ì¬ì©ëë¤ 
    - Generic family : ê°ì¥ ë§ì§ë§ì ëë¶ë¶ì ë¸ë¼ì°ì ê° ì§ìíë Generic familyë¥¼ ì¬ì©íë¤
        - ì¢ë¥ : `sans-serif`, `serif` , `cursive` ë± ..
    - [ì°¸ê³ ] https://developer.mozilla.org/en-US/docs/Web/CSS/font-family

<br>

----
```html
<div>
    <p class="default"> í°í¸ì íì¤í¸ì ê´ë ¨ë<br>ìì±ì ììë´ëë¤ </p>
    <p class="text"> í°í¸ì íì¤í¸ì ê´ë ¨ë<br>ìì±ì ììë´ëë¤ </p>
</div>
```
```css
.text {
    background-color : gray; 
    line-height : 40px; 
}
```

![example1117](./img/1117.png)

<br>

6. `line-height` : íê°ì ì¤ì íë¤
    - ê¸ì¨ì²´ì ë°ë¼ì íê° ì¤ì ì´ ë¤ë¥´ë¤
    - íµì¼ê°ì ì£¼ê¸°ìí´ì ìí©ì ë°ë¼ ì¤ì íë ê²ì ì¶ì²íë¤

<br>

### ð fontì ë¨ì¶ ìì± (short-hand)
```css
.default {
   font-size : 20px;
   font-family : 'sans-serif';
   font-weight : bold;
   font-style : italic;
   line-height : 40px;
}
```
```css
.test{
   font : italic bold 20px/40px 'sans-serif';
}
```
- ê°ì ë§¥ë½ì CSS ìì±(short-hand)ì íë²ì ë¬¶ì´ ì¤íì¼ì ì ì©í  ë ì¬ì©íë¤
- `font`ì ë¨ì¶ ìì±(short-hand)ì ìì±í  ëì ë¹¼ë¨¹ì ìì±ì `initial` ê°ì´ ì ì©ëë ì£¼ìíì
- `font-family` ë ë¨ì¶ ìì±(short-hand) ì¤ í­ì ë§ì§ë§ì ìì¹í´ì¼íë¤
- `font-weight`, `font-style`ì ë°ëì `font-size`ë³´ë¤ ìì ìì±íë¤
- [ì°¸ê³ ] https://developer.mozilla.org/en-US/docs/Web/CSS/font



<br>

### ð `letter-spacing` ê³¼ `word-spacing`
- ê¸ì¨ì²´ì ë°ë¼ ì í©í ì¬ë°±ì´ ì í´ì ¸ ìë¤. 
- ì´ë¥¼ ë¤ë£¨ê³  ì¶ì ë `letter-spacing` ì `word-spacing` ë¥¼ ì¬ì©íë¤
- ìë ¥ ê°ì ê¸°ë³¸ ì¬ë°±ì +,-ëì´ ì ì©ëë¤
- ì¬ì© ê°ë¥í ë¨ìë `px`, `em`, `%` ë± ì´ ìë¤
- ì¬ì¤ ê¸°ë³¸ê°ì´ ê°ì¥ ìµì ì ê°ê²©ì´ë¯ë¡, ê°ê²©ì ë°ë¡ ì¡°ì íì§ ìë ê²ì´ ê°ëì±ì´ ì¢ì ì¹ ì ê·¼ì±ì ë¶í©íë¤
 
<br>

```css
.test { 
   letter-spacing:5px;     /* ê¸°ë³¸ ê¸ì ê°ê²© + 5pxì ìë¯¸ */
   word-spacing:-5px;      /* ê¸°ë³¸ ë¨ì´ ê°ê²© - 5pxì ìë¯¸ */
}   
```

1. `letter-spacing` : ê¸ìê°ì ì¬ì´ ê°ê²© (default:normal)
   - **[ì°¸ê³ 1]** https://developer.mozilla.org/ko/docs/Web/CSS/letter-spacing
2. `word-spacing` : ë¨ì´ê°ì ì¬ì´ ê°ê²© (default:normal)
   - **[ì°¸ê³ 2]** https://developer.mozilla.org/ko/docs/Web/CSS/word-spacing

<br>

### ð `text-align` 
```css
.test { text-align : center; }
```
- íì¤í¸ ì ë ¬ì í  ë ì¬ì©íë¤
- `left`, `center`, `right`, `justify` ë±ì ê°ì ê°ì§ë¤
- `text-align`ì ì¬ì©íê¸° ìí´ìë ììê° ë¸ë¡ ìì(block) ì´ì´ì¼ë§ íë¤
- ììì `width`ê°ì´ ëë¬´ ì¢ì ëìë ì ëë¡ ì ì©ëì§ ìì ì ìë¤ 
- **[ì°¸ê³ ]** https://developer.mozilla.org/ko/docs/Web/CSS/text-align

<br>

### ð `text-indent` 
```css
.test { text-indent : 10px; }
```
- íì¤í¸ì ì²« ì¤ì ë¤ì¬ì°ê¸°ê° íìí  ë ì¬ì©íë¤ 
- `px`, `em`, `%` ë±ì ë¨ìì í¨ê» ì¬ì©í  ì ìë¤
- `text-indent`ì ì¬ì©íê¸° ìí´ìë ììê° ë¸ë¡ ìì(block) ì´ì´ì¼ë§ íë¤
- **[ì°¸ê³ ]** https://developer.mozilla.org/en-US/docs/Web/CSS/text-indent
 

<br>

### ð `text-decoration` 
```css
.test { 
   color : tomato;
   text-decoration : line-through underline blue 3px double;  
}
```
- `text`ì ê´ë ¨ë ìì±ì í ì¤ë¡ ìì±íë ë¨ì¶ ìì±(short-hand)ì´ë©°, ìì±ì ììë ìê´ìë¤
- 4ê°ì ìì±ì íëë¡ í©ì¹ ë¨ì¶ ìì±(short-hand)<br>
  :  `text-decoration-line`, `text-decoration-color`, `text-decoration-style`, `text-decoration-thickness`
- ìì±ì ë°ë¡ë°ë¡ ì¬ì©íê¸°ë³´ë¤ ë¨ì¶ ìì±(short-hand)ì ë ë§ì´ ì¬ì©íë¤ 
- `text-decoration-line`ì íëì ê°ë§ì ê°ì§ë ê²ì´ ìëë¼, ì¤ì²©í´ìë ì¬ì©í  ì ìë¤
- `text-decoration-line`ì ì¤ì²©íì¬ ì¬ì©í  ëìë ë¶ì¬ì ì¬ì©í´ì¼íë¤
- ë°ë¡ ììì ì¤ì íì§ ìì¼ë©´ `text-decoration`ì ê¸ììê³¼ ê°ì ììì ê°ì§ë¤.
- `text-decoration-line`ì ê° : `normal`, `underline`, `overline`, `line-through`
- `text-decoration-style`ì ê° : `solid`, `double`, `dotted`, `dashed`, `wavy`
- **[ì°¸ê³ ]** https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration
 
<br>

### ð `word-break` 
```html
<p lang="en">...</p>
<p lang="ko">...</p>
<p class="test test1" lang="en">...</p>
<p class="test test1" lang="ko">...</p>
<p class="test test2" lang="en">...</p>
<p class="test test2" lang="ko">...</p>
```
```css
p { width:40px; background-color:gray;}
p.test { background-color:tomato; }
p.test1 { word-break:break-all; }
p.test2 { word-break:keep-all; }
```
- íì¤í¸ê° ìì ì ì½íì¸  ë°ì¤ë¥¼ ëì¹ê² ë ìí©ì¼ ë, ê°íì í  ì§ë¥¼ ì§ì í  ë ì¬ì©íë¤
- ì¸ì´ì ë°ë¼ì ëì ë°©ìì´ ì¡°ê¸ ë¤ë¥´ë¤ 
- `word-break` ì í¤ìë : `normal`, `break-all`, `keep-all` ...
   - `normal` : default ê°ì¼ë¡ ì¸ì´ë§ë¤ ë§ë ì¤ì ì ì ì©íë¤
   - `break-all` : htmlë¬¸ìë¥¼ í/ì¤/ì¼ ì¸ì ì¸ì´ë¡ ìì±íì ë ì¬ì© (ìì´) â ì í´ì§ ë°ì¤ë¥¼ ëì³ì ë²ìë¥¼ ë²ì´ëë¤
   - `keep-all` : htmlë¬¸ìë¥¼ í/ì¤/ì¼ ì¸ì´ë¡ ìì±íì ë ì¬ì©  â ì í´ì§ ë°ì¤ ë´ìì ê°íëë¤
- **[ì°¸ê³ ]** https://developer.mozilla.org/en-US/docs/Web/CSS/word-break
 


<br>

### ð `text-transform` 
```css
.test { text-transform : uppercase ; }
```
- ì¬ì© ê°ë¥í ì¸ì´ê° íì ì ì´ë¼, íêµ­ì´ìë ì¬ì©í  ì ìë¤ (ìì´ë ê°ë¥íë¤)
- `text-transform`ì ì¬ì©í´ì ëìë¬¸ì ì¤ì ì ë°ê¾¸ë ê²ì ì¤íì¼ì ì ì©íë ê²ì´ë¯ë¡, ì¤ì  htmlë¬¸ììë ë°ìëì§ ìëë¤.
- `uppercase` : ëª¨ë  ê¸ìë¥¼ ëë¬¸ìë¡ ë³ê²½
- `lowercase` : ëª¨ë  ê¸ìë¥¼ ìë¬¸ìë¡ ë³ê²½ 
- `capitalize` : ëª¨ë  ë¨ì´ì ì²« ê¸ìê° ëë¬¸ìë¡ ë³ê²½ 
- **[ì°¸ê³ ]** https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform
 
















