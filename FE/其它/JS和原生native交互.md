### android与js交互

#### Java调用Js
+ 第一步： Java 与 Js 彼此调用的前提是设置 WebView 支持 JavaScript 功能：mWebView.getSettings().setJavaScriptEnabled(true);
+ 第二步： 然后在 Java 代码中按照 "javascript:XXX" 的Url格式使用 WebView 加载访问：
mWebView.loadUrl("javascript:javaCallJs()");

#### Js调用Java
+ 第一步： 在Java对象中定义Js访问的方法，必须定义为public类型，并添加注解 @javascriptInterface。
+ 第二步： 将Java对象注入WebView中：mWebView.addJavascriptInterface(MyClass.this,'main');
+ 第三步： 在Js中使用 javascript:main.jsCallJava('xxxx')

### ios与js交互

#### UIWebView 和 WKWebView 区别