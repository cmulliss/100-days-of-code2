# misc

## emett

(https://code.visualstudio.com/docs/editor/emmet)

lorem20 tab

.test for a class
hash test for an id
li*10 for a list of 10 items

ul>li*3>span.hello$
gives:
```html
    <ul>
        <li><span class="hello1"></span></li>
        <li><span class="hello2"></span></li>
        <li><span class="hello3"></span></li>
    </ul>
```

## live server troubleshooting:
Another option is to kill what's running on port 5500.

At the command line:
lsof -i :5500 <--tells you what's running on 5500, returning a PID (process ID).
kill -9 ### where ### is the PID.

Then go back into VSC and start Live Server again. Works for me.

## notes

* can put a container class inside a nav
