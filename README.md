# Safarify
A small but cool script wraps website screenshots into browser window

Demo: http://44px.ru/labs/safarify/demo.html

## Setup

The script uses jQuery. Include it as well as the script file. Add these lines to the `head` of your webpage:

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="safarify/js.js"></script>
```
Also, don't forget to link styles:
```html
<link href="safarify/style.css" rel="stylesheet" type="text/css">
```

## Use
All you need to do is just add `class="safarify"` to the image you want to safarify
```html
<img class="safarify" src="http://lorempixel.com/500/500" />
```
