# 弹窗和临时显示消息说明 #
========================
+ 1 组件介绍，需要引入jQuery库才可以使用
+ 2使用方法
+ 只需要修改obj中的参数，就可以对弹窗进行修改；
+ 
+ type是大类型，可以输入Toast(临时显示消息)或者Dialog(弹窗)
+ 每个大类型下有对应的四个小类型：
+ 
+ Toast：success(成功),cancel(失败),ban(禁止),text(纯文本)
+ Dialog：alert(弹窗),confirm(是否确认),prompt(输入框对话框),login(登录框对话框)
	例：var obj = {
		type:"Toast",
		coverType:"success",
	}
	具体使用方法请看使用方法.text
+ 3联系方式
+ qq:765514070