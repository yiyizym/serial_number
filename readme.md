# 流水号

用 javascript 实现流水号基本功能
- 严格单调递增
- 可计算：1. 输入起始号，能计算出 1000 个之后的流水号；2. 输入起始和终点流水号，计算出间隔了多少个号
- 为防止读错，选择性地保留、去除一些字符数字：若保留数字 1 ，就去除字母 I 和 L ，若保留数字 0 ，就去除字母 O

## 原理
请看这篇[文章：《你知道 33 进制吗？》，作者：余晟](https://mp.weixin.qq.com/s?__biz=MzA3MDMwOTcwMg==&mid=2650004856&idx=1&sn=e23e2878cd0d72c81c85655e611e1183&chksm=8739bf51b04e3647a568c54cde1eace389f11618eb914b3a9ed3a927b6b689f9c39e1043f4ee&mpshare=1&scene=1&srcid=0519Ms1rqr503hQBlYeIClys&pass_ticket=8dpdusbb%2B7R%2Bic3SSw1W%2FL%2BTDtYXhcEFaVIAI766gEFpWqySuTPpSAf37jZL%2FNiz#rd)

## 具体实现细节
- 内部记录的是 10 位 33 进制流水号
- 用户看到和输入的是 10 位 33 进制去除字母 I 和 L 以及 O 的流水号

## 运行实例
1. 安装最新版本 nodejs
2. 在控制台，根目录下输入 `node index.js`