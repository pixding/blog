## js不同方法的应用

+ test
+ exec
+ match
+ replace
+ search
+ split

### 一些关键概念

实例属性的概念

dotAll
flags
global
ignoreCase
lastIndex
multiline
source
sticky
unicode

compile
exec
test

es2015新增属性
[Symbol.match]
[Symbol.replace]
[Symbol.search]
[Symbol.split]




search 只能返回一个值，全局匹配对它无效

split 第一个参数可以是字符串或者是正则。正则用来匹配分隔符，全局模式无效。 第二个参数用来设置返回数组的长度。

match 带/g的全局匹配，返回所有匹配结果数组。 
非全局匹配，返回匹配结果和捕获项组成的数组

exec

replace方法
第二个参数是字符串时，


贪婪匹配和惰性匹配的差别
带？和 带+

关于$1-$9

RegExp在node和浏览器中不同表现   //todo