# Front End build

Post --> Comment





## Goal

Submit new comment under the same comment id

## Process

2. 1.build new comment component
3. 2.
4. 









**navigation err**

Add the code below into the code block

```javascript
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};
```

[NavigationDuplicated 产生原因和解决方法](https://blog.csdn.net/m0_50520143/article/details/115748741)  





**4.date display in the experience, education form**

You need to change your system language to China Mainland, and choose the simplified language as your system language, then date tag will show your language type

 [html5 input type="datetime-local" 日期时间控件怎么设置中英文语言](https://segmentfault.com/q/1010000013095905)





**vue.reactive is not a function in vuejs2, change the vuex version back to 3.62**
[vue.reactive is not a function in vuejs2](https://stackoverflow.com/questions/71259109/vue-reactive-is-not-a-function-in-vuejs2)



## Sample Code test:Valina Javascript, Vue, React,Node JS, Java,Python

save the code snipate 

insert the code into the blog like ant design,put the icon and url 


code pen use the css, general pure javascript test

codesnadbox: react, vue

code, comment it, then write the logic. after that based on the logic, to use our understanding to write ourwn code. then test it and debug it to finish the code block

## UI Feature Description:PM will finish this part
**I.UI Flow:**
1.sign up, then go to the login page to fill the crenditional ;
2.then go the dashboard personal information page;
3.Dashboard Updae infomation update;
4.click the developement, then you will go to the develoer page sections;
5.click the developer, then it will go to the developer user profile page;
6.click the message board, it will show the the message list also you can post the message
7.you could follow up someone's message board, then comment it



**II.Pages Structure**

## 关于“export ‘watchEffect‘ was not found in ‘vue‘

install the version 3.2.0
```bash
npm i vue-router@3.2.0
```
[关于“export ‘watchEffect‘ was not found in ‘vue‘](https://blog.csdn.net/weixin_45603223/article/details/122909367)
