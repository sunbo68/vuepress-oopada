(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{746:function(s,t,a){"use strict";a.r(t);var n=a(18),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"创建项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[s._v("#")]),s._v(" 创建项目")]),s._v(" "),a("p",[s._v("如果这是你第一次使用 Django 的话，你需要一些初始化设置,也就是说，你需要用一些自动生成的代码配置一个 Django project —— 即一个 Django 项目实例需要的设置项集合，包括数据库配置、Django 配置和应用程序配置")]),s._v(" "),a("p",[s._v("打开命令行，cd 到一个你想放置你代码的目录，然后运行以下命令：")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("django"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("admin startproject oopanda "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("oopanda"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("项目名称"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"项目目录说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目目录说明"}},[s._v("#")]),s._v(" 项目目录说明")]),s._v(" "),a("p",[s._v("以下为"),a("code",[s._v("startproject")]),s._v("创建项目的目录")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("oopanda"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n    manage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n    oopanda"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n        __init__"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n        settings"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n        urls"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n        wsgi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("blockquote",[a("ul",[a("li",[s._v("manage.py：一个命令行工具，可以使你用多种方式对Django项目进行交互")]),s._v(" "),a("li",[s._v("内层oopanda/: 目录包含你的项目，它是一个纯 Python 包。它的名字就是当你引用它内部任何东西时需要用到的 Python 包名。 (比如 mysite.urls)\\")]),s._v(" "),a("li",[s._v("oopanda/"),a("strong",[s._v("init")]),s._v(".py: 一个空文件，它告诉Python这个目录应该被看做一个Python包")]),s._v(" "),a("li",[s._v("oopanda/settings.py: Django 项目的配置文件")]),s._v(" "),a("li",[s._v("oopanda/urls.py：项目的URL声明")]),s._v(" "),a("li",[s._v("oopanda/wsgi.py：项目与WSGI兼容的Web服务器入口")])])]),s._v(" "),a("h2",{attrs:{id:"项目运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目运行"}},[s._v("#")]),s._v(" 项目运行")]),s._v(" "),a("p",[s._v("通过cd命令进入到含有manage.py的目录下面.")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("python manage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py runserver  \n   运行结果"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("python manage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py runserver "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8090")]),s._v("\n   运行结果"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8888")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("python manage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py runserver "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.160")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8888")]),s._v("\n   运行结果"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.160")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8888")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("Watching "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("file")]),s._v(" changes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" StatReloader\nINFO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("django"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("utils"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("autoreload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("Watching "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("file")]),s._v(" changes "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" StatReloader\nPerforming system checks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\nSystem check identified no issues "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" silenced"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\nJune "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("03")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("41")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("37")]),s._v("\nDjango version "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.1")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" using settings "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'oopanda.settings'")]),s._v("\nStarting development server at http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8000")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("\nQuit the server "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" CTRL"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("BREAK"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);