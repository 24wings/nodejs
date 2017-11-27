```bash
$ nmap -u  xxxx

```

端口状态
|状态|含义|
|---|---|
|Open|端口开启，有程序监听此端口|
|Closed|端口关闭，数据能到达主机，但是没有程序监听此端口。|
|Filtered|数据未能到达主机。|
|Unfiltered|数据能到达主机，但是Nmap无法判断端口开启还是关闭。|
|Open|filtered|端口没有返回值，主要出现在UDP，IP，FIN，NULL和Xmas扫描|
|Closed|filtered|只出现在IP ID idle 扫描。|



版本
参数| 含义|
|---|---|
--version|版本| 


扫描参数
|参数|含义
|-sL|不做扫描，仅完成DNS解析和网址的转换|
|-sP|默认发送 ICMP请求和TCP的请求 (80端口)
|-PN| 不用ping|
|-PE -PP -PM| 未知|
|-PO | 协议列表
|-PR|ARP ping|


扫描输入
|参数|含义|
|||


TCP扫描类型
|参数 |含义|
|---|---|
|-sS |TCP SYN扫描（匿名扫描，默认不加类型，需要root权限，扫描速度快）|
|-sT |TCP全连接扫描（不需要root权限，TCP扫描的默认模式，端口状态和SYN相同,耗时长）|

UDP扫描
|参数|含义|
|-sU||
|-sUV|更准确|
|-sO |获取服务器支持那些协议


性能优化
|参数|含义|
|---|---|
|-sV|开放端口的服务和系统|
|--version-intensity|设置探测的深度|
|--version-light|相当于0-2|
|--version-all|相当0-9|






----
##### 参考阅读
* [Nmap基本使用教程](https://www.cnblogs.com/Acewipe/p/7589022.html)


