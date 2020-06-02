;
(function(d, w) {
	var t = d.documentElement; //获取根元素html
	var evt = "orientationchange" in window ? "orientationchange" : "resize"; //如果是手机就监听orientationchange，如果是pc就监听resize

	//给docuemnt对象或window对象添加自定义监听事件
	d.addEventListener && w.addEventListener(evt, function() {
		// console.log("ok");
		var e = t.clientWidth; //获取当前页面视口宽度
		t.style.fontSize = (e / 375) * 12 + "px"; //给根元素重新设置字体大小
	}, false);
})(document, window)


function Dialog_box(obj) {

	this.type = obj.type; //大类型
	this.coverType = obj.coverType; //具体类型
	this.fontColor = obj.fontColor; //自定义文字颜色
	this.backgroundColor = obj.backgroundColor; //自定义背景颜色
	this.fontCont = obj.fontCont; //自定义文字
	this.iconColor = obj.iconColor; //自定义icon图标颜色
	this.divWidth = obj.divWidth;//自定义宽度
	this.divHeight = obj.divHeight;//自定义高度
	this.divLeft = obj.divLeft; //自定义盒子的left值
	this.divTop = obj.divTop; //自定义盒子的top值
	this.borderRadius = obj.borderRadius; //自定义盒子的圆角边框
	this.timer = obj.timer; //盒子的消失时间
	this.callback = obj.callback; //用户自定义的函数
	this.btn_cancel = obj.btn_cancel; //点击确认之后的函数
	this.btn_confirm = obj.btn_confirm; //点击取消之后的函数
	this.title = obj.title; //用户自定义标题
	this.input_box = obj.input_box; //输入框的内容
	this.input_password = obj.input_password;//登录框的密码
	this.isMouseDown = false; //鼠标状态，没按下为false，按下为true
	this.posX = 0; //保存鼠标点击时的x坐标
	this.posY = 0; //保存鼠标点击时的y坐标
	// this.size();
	this.tyPe();

}
//Toast
//def_ori是文字默认内容，def_fontColor是默认文字颜色，def_iconColor是icon的默认颜色,def_backgroundColor是盒子的默认背景颜色
//def_divWidth是盒子的宽，def_divHeight是盒子的高,def_divLeft是盒子的left值，def_divTop是盒子的top值,def_borderRadius是盒子的圆角边框值
Dialog_box.prototype.property = function(def_ori, def_fontColor, def_iconColor, def_backgroundColor, def_divWidth,
	def_divHeight, def_divLeft, def_divTop, def_borderRadius) {
	//如果文字内容不设置默认为ori，设置了为设置的文字
	if (this.fontCont == "" || this.fontCont == undefined) {
		$("#Toast p").text(def_ori);
	} else {
		$("#Toast p").text(this.fontCont);
	}
	//如果icon的颜色不设置，默认为color的颜色
	if (this.fontColor == "" || this.fontColor == undefined) {
		$("#Toast p").css("color", def_fontColor);
	} else {
		$("#Toast p").css("color", this.fontColor);
	}
	//如果文字颜色不设置，默认为fontColor的颜色，设置了为this.fontColor的颜色
	if (this.iconColor == "" || this.iconColor == undefined) {
		$("#Toast i").css("color", def_iconColor);
	} else {
		$("#Toast i").css("color", this.iconColor);
	}
	//如果背景颜色不设置，默认为fontColor的颜色，设置了为this.backgroundColor的颜色
	if (this.backgroundColor == "" || this.backgroundColor == undefined) {
		$("#Toast").css("backgroundColor", def_backgroundColor);
	} else {
		$("#Toast").css("backgroundColor", this.backgroundColor);
	}
	//如果宽度不设置，默认为divWidth的颜色，设置了为this.divWidth的颜色
	if (this.divWidth == "" || this.divWidth == undefined) {
		$("#Toast").css("width", def_divWidth);
	} else {
		$("#Toast").css("width", this.divWidth);
	}
	//如果高度不设置，默认为divHeight的颜色，设置了为this.divHeight的颜色
	if (this.divHeight == "" || this.divHeight == undefined) {
		$("#Toast").css("height", def_divHeight);
	} else {
		$("#Toast").css("height", this.divHeight);
	}
	//如果left不设置，默认为divLeft的颜色，设置了为this.divLeft的颜色
	if (this.divLeft == "" || this.divLeft == undefined) {
		$("#Toast").css("left", def_divLeft);
	} else {
		$("#Toast").css("left", this.divLeft);
	}
	//如果top不设置，默认为divTop的颜色，设置了为this.divTop的颜色
	if (this.divTop == "" || this.divTop == undefined) {
		$("#Toast").css("top", def_divTop);
	} else {
		$("#Toast").css("top", this.divTop);
	}
	//如果border-radius不设置，默认为divTop的颜色，设置了为this.divTop的颜色
	if (this.divTop == "" || this.divTop == undefined) {
		$("#Toast").css("borderRadius", def_borderRadius);
	} else {
		$("#Toast").css("borderRadius", this.borderRadius);
	}
}
// Dialog
Dialog_box.prototype.Dialogproperty = function(def_title, def_cont) {
	if (this.title == "" || this.title == undefined) {
		$("#bck #display .display_hd strong").text(def_title)
	} else {
		$("#bck #display .display_hd strong").text(this.title)
	}
	if (this.fontCont == "" || this.fontCont == undefined) {
		$("#bck #display .display_hb .display_hb_text").text(def_cont)
	} else {
		$("#bck #display .display_hb .display_hb_text").text(this.fontCont)
	}
	if (this.input_box == "" || this.input_box == undefined) {
		$("#bck #display .display_hb .display_hb_input").attr("placeholder", "自定义的消息内容");
	} else {
		$("#bck #display .display_hb .display_hb_input").attr("placeholder", this.input_box);
	}
}
//属性设置
	Dialog_box.prototype.addEvent = function() {
		//判断是移动端还是pc端
		// console.log(window.navigator.userAgent);
		this.device = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase()));
			this.clickEvent =this.device? "touchstart":"mousedown";
			this.moveEvent = this.device? "touchmove" : "mousemove";
			this.endEvent = this.device? "touchend" : "mouseup";
		// console.log(clickEvent,moveEvent,endEvent);
		//添加鼠标点击或手机点击事件
		var that =this;
		this.id.addEventListener(this.clickEvent,function(evt){
			var event = evt || window.event;
			//获取鼠标点击或手指点击式的视口坐标
			that.posX = that.device? event.touches[0].clientX : event.clientX;
			that.posY = that.device? event.touches[0].clientY : event.clientY;
			that.mouseX = that.id.offsetLeft;
			that.mouseY = that.id.offsetTop;
			that.isMouseDown = true; //鼠标按下
		});
		this.id.addEventListener(this.moveEvent,function(evt){
			if( !that.isMouseDown ){
				return false;
			}else{
				var event = evt || window.event;
				// 调用canvas画线，将鼠标移动时坐标作为lineTo()参数传入。注意上一次点击时的坐标点作为画线的起始坐标
				var x2 =  that.device? event.touches[0].clientX : event.clientX;
				var y2 = that.device? event.touches[0].clientY : event.clientY;
				that.id.style.left = that.mouseX + x2 - that.posX+"px";
				that.id.style.top = that.mouseY + y2 - that.posY+"px";
			}
		});
	this.id.addEventListener(this.endEvent,function(evt){
		that.isMouseDown = false; //鼠标未按下
		
		
	});
};


Dialog_box.prototype.tyPe = function() {
	if (this.type == "Toast") {
		//判断消失的时间，如果不设置默认为2S
		if (this.timer == "" || this.timer == undefined) {
			this.timer = 2000;
		} else {
			this.timer = this.timer;
		}
		var that = this;
		if (this.coverType == "success") {
			var str = $("<div id='Toast'><i class='iconfont icon-chenggong'></i><p></p></div>");
			$('body').append(str);
			$("#Toast").css("opacity", "1");
			
			that.property("操作成功", "#fff", "#fff", "hsla(0,0%,7%,.7)", "10rem", "10rem", "50%", "45%", "0.4rem");
			setTimeout(function(){
				$("#Toast").remove();
				if (that.callback == "" || that.callback == undefined) {

				} else {
					that.callback();
				}
			}, that.timer)
		} else if (this.coverType == "cancel") {
			var str = $("<div id='Toast'><i class='iconfont icon-chenggong'></i><p></p></div>");
			$('body').append(str);
			$("#Toast").css("opacity", "1");
			$("#Toast i").attr("class", "iconfont icon-cancel");
			this.property("操作失败", "#fff", "#fff", "hsla(0,0%,7%,.7)", "10rem", "10rem", "50%", "45%", "0.4rem")
			setTimeout(function() {
				$("#Toast").remove();
				if (that.callback == "" || that.callback == undefined) {

				} else {
					that.callback();
				}
			}, that.timer)
		} else if (this.coverType == "ban") {
			var str = $("<div id='Toast'><i class='iconfont icon-chenggong'></i><p></p></div>");
			$('body').append(str);
			$("#Toast").css("opacity", "1");
			$("#Toast i").attr("class", "iconfont icon-jinzhi");
			this.property("禁止操作", "#fff", "red", "hsla(0,0%,7%,.7)", "10rem", "10rem", "50%", "45%", "0.4rem")
			setTimeout(function() {
				$("#Toast").remove();
				if (that.callback == "" || that.callback == undefined) {

				} else {
					that.callback();
				}
			}, that.timer)
		} else if (this.coverType == "text") {
			var str = $("<div id='Toast'><p></p></div>");
			$('body').append(str);
			$("#Toast").css("opacity", "1");
			$("#Toast p").css("padding", "10px");
			this.property("纯文本", "#fff", "#fff", "hsla(0,0%,7%,.7)", "auto", "auto", "50%", "45%", "0.4rem")
			setTimeout(function() {
				$("#Toast").remove();
				if (that.callback == "" || that.callback == undefined) {

				} else {
					that.callback();
				}
			}, that.timer)
		}
	} else if (this.type == "Dialog") {
		var that = this;
		if (this.coverType == "alert") {
			var str = $("<div id='bck'><div id='display'><div class='display_hd'><strong>提示</strong></div><div class='display_hb'><p class='display_hb_text'>自定义的消息内容</p></div><div class='display_ft'><a href='#' class='confirm'>确定</a></div></div></div>")
			$('body').append(str);
			$("#bck").css("opacity", "1");
			$("#display").css("opacity", "1");
			this.id = $("#display")[0];
			console.log(this.id);
			this.addEvent();
			this.Dialogproperty("标题", "自定义的消息内容");
			$(".display_ft a").on("click", function() {
				if (that.btn_confirm == "" || that.btn_confirm == undefined) {

				} else {
					that.btn_confirm();
				}
				$("#bck").remove();
				$("#display").css("opacity", "0");
			})
			// <input type='text' name='' id='' value='' class='display_hb_input' placeholder='输入用户名'/>
			// <input type='text' name='' id='' value='' class='display_hb_password' placeholder='输入密码'/>
		} else if (this.coverType == "confirm") {
			var str = $("<div id='bck'><div id='display'><div class='display_hd'><strong>提示</strong></div><div class='display_hb'><p class='display_hb_text'>自定义的消息内容</p></div><div class='display_ft'><a href='#' class='cancel'>取消</a><a href='#' class='confirm'>确定</a></div></div></div>")
			$('body').append(str);
			$("#bck").css("opacity", "1");
			$("#display").css("opacity", "1");
			this.Dialogproperty("确定吗？", "自定义的消息内容");
			$(".display_ft a").on("click", function(evt) {
				//点击确认之后的函数
				if ($(this).attr("class") == "confirm") {
					if (that.btn_confirm == "" || that.btn_confirm == undefined) {
			
					} else {
						that.btn_confirm();
					}
					//点击取消之后的函数
				} else if ($(this).attr("class") == "cancel") {
					if (that.btn_cancel == "" || that.btn_cancel == undefined) {
			
					} else {
						that.btn_cancel();
					}
				}
				$("#display").css("opacity", "0");
				$("#bck").remove();
			})
		} else if (this.coverType == "prompt") {
			var str = $("<div id='bck'><div id='display'><div class='display_hd'><strong>提示</strong></div><div class='display_hb'><p class='display_hb_text'>自定义的消息内容</p><input type='text' name='' id='' value='' class='display_hb_input' placeholder='输入用户名'/></div><div class='display_ft'><a href='#' class='cancel'>取消</a><a href='#' class='confirm'>确定</a></div></div></div>")
			$('body').append(str);
			$("#bck").css("opacity", "1");
			$("#display").css("opacity", "1");
			this.Dialogproperty("标题", "自定义的消息内容");
			$(".display_ft a").on("click", function(evt) {
				var promptInputVal = $(".display_hb_input").val();
				//点击确认之后的函数
				if ($(this).attr("class") == "confirm") {
					if (that.btn_confirm == "" || that.btn_confirm == undefined) {
			
					} else {
						that.btn_confirm(promptInputVal);
					}
					//点击取消之后的函数
				} else if ($(this).attr("class") == "cancel") {
					if (that.btn_cancel == "" || that.btn_cancel == undefined) {
			
					} else {
						that.btn_cancel();
					}
				}
				$("#display").css("opacity", "0");
				$("#bck").remove();
			})
		}else if( this.coverType == "login" ){
			var str = $("<div id='bck'><div id='display'><div class='display_hd'><strong>提示</strong></div><div class='display_hb'><p class='display_hb_text'>自定义的消息内容</p><input type='text' name='' id='' value='' class='display_hb_input' placeholder='输入用户名'/><input type='text' name='' id='' value='' class='display_hb_password' placeholder='输入密码'/></div><div class='display_ft'><a href='#' class='cancel'>取消</a><a href='#' class='confirm'>确定</a></div></div></div>")
			$('body').append(str);
			$("#bck").css("opacity", "1");
			$("#display").css("opacity", "1");
			this.Dialogproperty("登录", "请输入账号密码");
			$(".display_ft a").on("click", function(evt) {
				var loginUserVal = $(".display_hb_input").val();
				var loginPasswordVal = $(".display_hb_password").val();
				//点击确认之后的函数
				if ($(this).attr("class") == "confirm") {
					if (that.btn_confirm == "" || that.btn_confirm == undefined) {
			
					} else {
						that.btn_confirm(loginUserVal,loginPasswordVal);
					}
					//点击取消之后的函数
				} else if ($(this).attr("class") == "cancel") {
					if (that.btn_cancel == "" || that.btn_cancel == undefined) {
			
					} else {
						that.btn_cancel();
					}
				}
				$("#display").css("opacity", "0");
				$("#bck").remove();
			})
		}
	}
}
