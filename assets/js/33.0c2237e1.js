(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{199:function(a,t,s){"use strict";s.r(t);var e=s(0),n=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"修改git提交记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改git提交记录","aria-hidden":"true"}},[a._v("#")]),a._v(" 修改Git提交记录")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/jianglin521/picgoImg/raw/master/img/20210803151118.png",alt:""}})]),a._v(" "),s("p",[a._v("最近Github的服务不太稳定，感觉要凉的节奏？")]),a._v(" "),s("p",[a._v("这两天好不容易有空提交一下开源代码了，结果在公司提交的代码有记录，但是没有绿色，延迟？真的要凉")]),a._v(" "),s("p",[a._v("检查后发现原因是 git 本地设置的全局邮箱和用户名跟 github 网站的不一致")]),a._v(" "),s("p",[a._v("单独配置项目的邮箱和用户名却是可以显示绿色的")]),a._v(" "),s("p",[a._v("我在公司配置的是公司的邮箱，没有配置我自己的邮箱")]),a._v(" "),s("p",[a._v("写个脚本文件来处理一下吧")]),a._v(" "),s("p",[a._v("此方法也适用于当我们换邮箱了，想把已经提交过的 commit 的邮箱和用户名改成新的时候")]),a._v(" "),s("p",[a._v("先来看一下开始的提交记录")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/jianglin521/picgoImg/raw/master/img/20210803151211.png",alt:""}})]),a._v(" "),s("p",[a._v("先来把邮箱和名称配置一下")]),a._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[a._v("git config user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("name "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'jianglin'")]),a._v("\ngit config user"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("email "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'xxx@163.com'")]),a._v("\n")])])]),s("p",[a._v("这时候就可以用下面的脚本代码了")]),a._v(" "),s("p",[a._v("在项目根目录下创建 "),s("code",[a._v("name.sh")]),a._v(" 写入下面这段代码")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[a._v("#!/bin/sh")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" filter-branch --env-filter "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'\n\nOLD_NAME="jianglin"\nCORRECT_NAME="zhuang"\nCORRECT_EMAIL="XXX@163.com"\n\nif [ "'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GIT_AUTHOR_NAME")]),a._v('" = "'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$OLD_NAME")]),a._v('" ]\nthen\n    export GIT_AUTHOR_NAME="'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CORRECT_NAME")]),a._v('"\n    export GIT_AUTHOR_EMAIL="'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CORRECT_EMAIL")]),a._v('"\nfi\nif [ "'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$GIT_COMMITTER_NAME")]),a._v('" = "'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$OLD_NAME")]),a._v('" ]\nthen\n    export GIT_COMMITTER_NAME="'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CORRECT_NAME")]),a._v('"\n    export GIT_COMMITTER_EMAIL="'),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$CORRECT_EMAIL")]),a._v("\"\nfi\n'")]),a._v(" --tag-name-filter "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" -- --branches --tags\n")])])]),s("p",[a._v("把"),s("code",[a._v("OLD_EMAIL")]),a._v("、"),s("code",[a._v("CORRECT_NAME")]),a._v("、"),s("code",[a._v("CORRECT_EMAIL")]),a._v("改成自己的新旧邮箱用户名即可")]),a._v(" "),s("p",[a._v("然后我们来执行一下这个"),s("code",[a._v(".sh")]),a._v("文件")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("./name.sh\n")])])]),s("p",[a._v("如果"),s("code",[a._v("commit")]),a._v("记录比较多的话执行的时间会比较长")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/jianglin521/picgoImg/raw/master/img/20210803151234.png",alt:""}})]),a._v(" "),s("p",[a._v("再查看"),s("code",[a._v("git log")]),a._v("可以看到已经修改成功")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/jianglin521/picgoImg/raw/master/img/20210803151302.png",alt:""}})]),a._v(" "),s("p",[a._v("如果执行失败的话，执行一下这段命令")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" filter-branch -f --index-filter "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'git rm --cached --ignore-unmatch Rakefile'")]),a._v(" HEAD\n")])])]),s("p",[a._v("再运行"),s("code",[a._v("./email.sh")]),a._v("脚本")]),a._v(" "),s("p",[a._v("这时候虽然本地修改成功了，但是你还没有推送到远程")]),a._v(" "),s("p",[a._v("所以再执行一下命令")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("git")]),a._v(" push origin --force --all\n")])])]),s("p",[a._v("去看一下Github你就会发现之前的绿色加上了")])])}],!1,null,null,null);t.default=n.exports}}]);