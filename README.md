# gallery-by-react
learning react on imooc
这是在慕课网学习的时候按照视频中所讲，经过版本更新后可以正确运行的代码

主要是改变是，
1.generator-react-webpack构建的项目，新版本中已经取消了对grunt的引用，因此目录结构与视频中的不同，并且没有grunt.file这个文件
不过所有的配置项都可以在cfg文件夹下面的各个文件中找到，最重要的文件配置是default.js，用来配置loader。

2.项目启动命令不是grunt.server,package.json中已经有说明，是node server.js --env=dev  或者  npm start。亲测有效。

3.node_module依赖安装的模块达到了697个，简直崩溃，第一次没有安装成功，第二次cmd中的进度条卡在了17%之后不动了，强制control+c暂停后，
其实依赖已经装好，项目可以启动（也是很无语）。

4.react版本更新到15.0以后，需要在main.js里面引用react-dom这个文件，不然有关react的DOM操作都无法完成，报错，ReactDOM is undefined。

5.其余的步骤按照视频中所讲，是可以运行的。
