var MigratoryDataClient = {};

MigratoryDataClient.a=function(){return navigator.userAgent&&navigator.userAgent.indexOf("ANTGalio")!==-1?"Opera":navigator.userAgent&&navigator.userAgent.indexOf("Chrome")!==-1&&navigator.userAgent.indexOf("WebKit")!==-1?"WebKit Chrome":navigator.userAgent&&navigator.userAgent.indexOf("Android")!==-1?"WebKit Android":navigator.userAgent&&navigator.userAgent.indexOf("iPhone")!==-1?"WebKit iPhone":navigator.userAgent&&navigator.userAgent.indexOf("WebKit")!==-1?"WebKit":navigator.userAgent&&navigator.userAgent.indexOf("MSIE")!==
-1?"IE":navigator.userAgent&&navigator.userAgent.indexOf("Gecko")!==-1?"Gecko":navigator.userAgent&&navigator.userAgent.indexOf("Opera Mobi")!==-1?"Opera Mobile":navigator.userAgent&&navigator.userAgent.indexOf("Opera Mini")!==-1?"unknown":window.opera?"Opera":"unknown"};MigratoryDataClient.b=function(a){if(!document.body)throw"Error: The document doesn't have a body!";var b=true;if(this.c==="unknown"){b=false;if(a)if(this.d===null)throw"Error: Browser not supported!";else this.d(this.NOTIFY_UNSUPPORTED_BROWSER)}return b};
MigratoryDataClient.e=function(){if(document.readyState==="complete")this.f();else if(document.addEventListener){document.addEventListener("DOMContentLoaded",this.f,false);window.addEventListener("load",this.f,false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",this.f);window.attachEvent("onload",this.f);var a=false;try{a=window.frameElement==null}catch(b){}document.documentElement.doScroll&&a&&this.g()}};
MigratoryDataClient.g=function(){if(!MigratoryDataClient.h){try{document.documentElement.doScroll("left")}catch(a){setTimeout(MigratoryDataClient.g,1);return}MigratoryDataClient.f()}};MigratoryDataClient.i=function(a){this.h?a():this.j.push(a)};MigratoryDataClient.f=function(){if(!MigratoryDataClient.h)if(document.body){MigratoryDataClient.h=true;for(var a=0;a<MigratoryDataClient.j.length;a++)MigratoryDataClient.j[a]();MigratoryDataClient.j=null}else setTimeout(MigratoryDataClient.f,13)};
MigratoryDataClient.k=function(a){var b=window.location.protocol,c=window.location.host,d=window.location.port;if(c.indexOf("localhost")===0)return{l:"localhost:80",m:a+"/"};if(d.length>0&&c.lastIndexOf(":")!==-1)c=c.substring(0,c.lastIndexOf(":"));var e=a.indexOf("//");if(e===-1)return null;var f=a.substring(0,e);if(b!==f)return null;a=a.substring(f.length+2);e=a.indexOf("/");if(e!==-1)a=a.substring(0,e);e=a.lastIndexOf(":");b="";if(e!==-1){b=a.substring(e+1);a=a.substring(0,e)}if(navigator.userAgent&&
navigator.userAgent.indexOf("ANTGalio")!==-1){e=80;if(f==="https:")e=443;if(b!==""&&b!==e&&d!==e)if(b!==d)return null}else if(b!==d)return null;if(a.length<4)return null;var g=-1;e=a.length-1;for(var i=c.length-1;e>=0&&i>=0;e--,i--)if(a.charAt(e)!==c.charAt(i)){g=e;break}d="";if(g===-1)if(e===-1&&i===-1){e=a.indexOf(".");d=a.substring(e+1)}else if(e===-1)if(c.charAt(i-1)===".")d=a;else{e=a.indexOf(".");if(e===-1)return null;d=a.substring(e+1)}else{if(i===-1)if(a.charAt(e-1)===".")d=c;else{e=c.indexOf(".");
if(e===-1)return null;d=c.substring(e+1)}}else{e=a.indexOf(".",g+1);if(e===-1)return null;d=a.substring(e+1)}if(d.length<4||d.indexOf(".")===-1)return null;d+=b.length>0?":"+b:"";a=f+"//"+a+(b.length>0?":"+b:"")+"/";if(this.n>=2){c=d.split(".");if(c.length>=this.n)d=c.slice(-1*this.n).join(".")}return{l:d,m:a}};MigratoryDataClient.o=function(a){return this.k(a)===null};
MigratoryDataClient.p=function(a,b){if(a.name)a=a.name;else{var c=a.toString();a=c.substring(c.indexOf("function")+8,c.indexOf("("));a=a.replace(/^\s+|\s+$/g,"");if(a.length===0)a="anonymous";if(a==="anonymous"&&typeof b==="object")for(var d=0;d<b.length;d++)for(var e in b[d])if(b[d].hasOwnProperty(e)&&typeof b[d][e]==="function")if(b[d][e].toString()===c)return e}return a};
MigratoryDataClient.q=function(a){if(a===null||a===undefined||typeof a==="number"||typeof a==="boolean")return a;else if(typeof a==="string")return'"'+a+'"';else if(typeof a==="function")return this.p(a,this)+"()";else if(a instanceof Array)return this.r(a);var b="{",c=0;for(var d in a){if(c>0)b+=", ";if(a.hasOwnProperty(d))b+=d+":"+this.q(a[d]);c++}b+="}";return b};
MigratoryDataClient.s=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){var b=Math.random()*16|0;return(a=="x"?b:b&3|8).toString(16)})};
MigratoryDataClient.t=function(a,b){var c=MigratoryDataClient.u;if(a>0){if(a<=this.v)c=a*MigratoryDataClient.w-Math.floor(Math.random()*MigratoryDataClient.w);else if(MigratoryDataClient.x===MigratoryDataClient.TRUNCATED_EXPONENTIAL_BACKOFF){a=a-this.v;c=Math.min(MigratoryDataClient.y*Math.pow(2,a)-Math.floor(Math.random()*MigratoryDataClient.y*a),MigratoryDataClient.z)}else c=MigratoryDataClient.y;if(b!==undefined&&c<MigratoryDataClient.u)c=MigratoryDataClient.u}return c};
MigratoryDataClient.a0=function(a,b){for(var c=0;c<a.length;c++)if(a[c]===b)return c;return-1};MigratoryDataClient.a1=function(a){for(var b=[],c=0;c<a.length;c++)b.push(a[c]);return b};MigratoryDataClient.a2=function(a,b){for(var c=[],d=0;d<a.length;d++)this.a0(b,a[d])===-1&&c.push(a[d]);return c};MigratoryDataClient.a3=function(a,b){for(var c=[],d=0;d<a.length;d++)this.a0(b,a[d])!==-1&&c.push(a[d]);return c};
MigratoryDataClient.a4=function(a,b){for(var c=this.a1(a),d=0;d<b.length;d++)this.a0(a,b[d])===-1&&c.push(b[d]);return c};
MigratoryDataClient.a5=function(a,b,c,d,e){var f=this.p(arguments.callee.caller,this);if(typeof a!=="object"||typeof a.length!=="number")throw"Error: "+f+". The argument should be a list!";if(c!==null&&a.length<c)throw"Error: "+f+". The list argument should have at minimum "+c+" elements!";if(b!==null)for(var g=0;g<a.length;g++)if(typeof a[g]!==b)throw"Error: "+f+". The list argument should contain only '"+b+"' elements, the "+g+"-th element is not of type '"+b+"'!";if(typeof d==="object"&&typeof d.test===
"function")for(g=0;g<a.length;g++)if(!d.test(a[g]))throw"Error: "+f+". "+e+". The "+g+"-th element is the cause of the error!";};MigratoryDataClient.r=function(a){for(var b="[",c=0;c<a.length;c++){if(c>0)b+=", ";b+=this.q(a[c])}b+="]";return b};
MigratoryDataClient.a6=function(a,b){if(a===this.a7.a8)this.a9(b);else if(a===this.a7.aa)this.ab(b);else if(a===this.a7.ac)this.ad(b);else if(this.ae!==null)if(this.ae.af===this.ag&&a===this.a7.ag)this.ah(b);else if(this.ae.af===this.ai&&a===this.a7.ai)this.aj(b);else this.ae.af===this.ak&&a===this.a7.ak&&this.al(b)};
MigratoryDataClient.ah=function(a){var b=a[this.a7.am];if(b!==undefined)this.an(this.ao,this.ap.aq[b]);else{if(this.ar!==this.as){b=a[this.a7.at];if(b===undefined){MigratoryDataClient.an(this.ao,"server subscribe response is missing the session id");return}this.au=b;b=a[this.a7.av];if(b!==undefined&&b!==null)if(b==1)MigratoryDataClient.aw=true;this.ax=a[this.a7.ay];a=this.ar;this.ar=this.as;this.b0=this.az=0;this.b1();if(a!==this.b2){this.b3.b4[this.b5].b6++;if(a===null||this.b7)this.b8({type:this.NOTIFY_SERVER_UP,
info:""})}else this.b3.b4[this.b5].b9++;this.b7=false}this.ba()}};MigratoryDataClient.aj=function(a){a=a[this.a7.am];a!==undefined?this.an(this.ao,this.ap.aq[a]):this.ba()};
MigratoryDataClient.a9=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a[d],f=this.a7.bb,g=this.a7.bc,i=this.a7.bd,k=this.a7.be,l=this.a7.bf;if(e[f]===undefined||e[g]===undefined)return;var j=false;if(e[l]!==undefined)if(e[l]==this.bg)j=true;l=[];i=e[i];k=e[k];if(i!==undefined&&k!=undefined)if(i instanceof Array)for(var m=0;m<i.length;m++)l[m]={name:i[m],value:k[m]};else l[0]={name:i,value:k};f={subject:e[f],content:e[g],fields:l,isSnapshot:j};g=this.a7.bh;if(e[g]!==undefined){g=((new Date).getTime()&
16777215)-e[g];if(g>-14400000)f.latency=g}if(MigratoryDataClient.aw==true&&this.bi[f.subject]===undefined){g=parseInt(e[this.a7.bj]);e=parseInt(e[this.a7.bk]);j=this.bl[f.subject];if(j===undefined){this.bl[f.subject]={seqid:7E4,seq:0,recovery:false};j=this.bl[f.subject]}else j.seq++;if(j.seqid!==g){j.seqid=g;j.seq=e;j.recovery=false}else if(j.seq!==e)if(j.recovery==false){j.seq--;if(e<=j.seq)continue;MigratoryDataClient.bm();return}else{j.recovery=false;if(e>j.seq){g={type:this.NOTIFY_DATA_RESYNC,
info:f.subject};this.b8(g)}else continue;j.seq=e}else if(j.recovery==true){j.recovery=false;g={type:this.NOTIFY_DATA_SYNC,info:f.subject};this.b8(g)}}b[c]=f;c++}if(c>0){this.b3.b4[this.b5].bn++;this.b8(b)}};MigratoryDataClient.an=function(a,b){a=a+", "+b;b=this.b3.b4[this.b5].aq;if(b[a]===undefined)b[a]=1;else b[a]++;this.b0++;this.bm()};
MigratoryDataClient.ab=function(a){var b=this.a7.bo,c=this.a7.bb;if(!(a[b]===undefined||a[c]===undefined))switch(a[b]){case "a":a={type:this.NOTIFY_SUBSCRIBE_ALLOW,info:a[c]};this.b8(a);break;case "d":a={type:this.NOTIFY_SUBSCRIBE_DENY,info:a[c]};this.b8(a);break}};
MigratoryDataClient.b8=function(a){this.bp.push(a);setTimeout(function(){var b=MigratoryDataClient.bp.shift();if(b&&b instanceof Array)MigratoryDataClient.bq.call(window,b);else MigratoryDataClient.d!==null&&MigratoryDataClient.d.call(window,b)},0)};MigratoryDataClient.al=function(a){this.ad(a);this.ba()};MigratoryDataClient.ad=function(a){var b=a[this.a7.br];a=a[this.a7.bo];b!==undefined&&b!==null&&this.b8({type:MigratoryDataClient.bs(a),info:b})};
MigratoryDataClient.bs=function(a){if(a===undefined||a===null)return MigratoryDataClient.NOTIFY_PUBLISH_FAILED;switch(a){case "NOT_SUBSCRIBED":return MigratoryDataClient.NOTIFY_PUBLISH_NO_SUBSCRIBER;case "OK":return MigratoryDataClient.NOTIFY_PUBLISH_OK;case "DENY":return MigratoryDataClient.NOTIFY_PUBLISH_DENIED;default:return MigratoryDataClient.NOTIFY_PUBLISH_FAILED}};
MigratoryDataClient.bt=function(){this.b3.bu=(new Date).getTime();this.b3.b4[this.b5].bv++;this.bw!==null&&this.b1();this.ae!==null&&this.ae.af===this.bx&&this.ba();var a=(new Date).getTime();if(a-this.by>=this.bz){this.by=a;a={};a.af=this.bx;this.c0(a)}};MigratoryDataClient.b1=function(){this.bw!==null&&clearTimeout(this.bw);this.bw=setTimeout(function(){MigratoryDataClient.b0++;MigratoryDataClient.bm()},this.c1)};
MigratoryDataClient.bm=function(){this.b3.b4[this.b5].c2++;if(this.c3!==null){clearTimeout(this.c3);this.c3=null}this.c4();this.c5();this.c6();if(this.ar!==null)this.ar=this.c7;this.c8.push(this.c9[this.b5]);this.ax=this.au=this.b5=null;this.az++;if(this.bw!==null){clearTimeout(this.bw);this.bw=null}if(!this.b7&&(this.az===this.ca||this.az===this.c9.length)){this.b7=true;var a={type:this.NOTIFY_SERVER_DOWN,info:""};MigratoryDataClient.d!==null&&MigratoryDataClient.d.call(window,a)}a=false;if(MigratoryDataClient.aw==
true){a=true;for(var b in this.bl){var c=this.bl[b];if(c.seqid!=7E4)if(c.recovery==true)a=false;else c.recovery=true}}if(MigratoryDataClient.cb)if(this.c9.length>0){b={};b.af=this.cc;this.c0(b)}MigratoryDataClient.cd=false;if(this.ce.length>0){b={};b.af=this.ag;if(a==true)b.cf=true;b.ce=this.ce;this.c0(b)}};

MigratoryDataClient.cg = function() { 

	console.log("Step 3");

	this.ch();

	var a = this.c9[this.b5].m;

	if (MigratoryDataClient.cb) {
		encoding = this.ci;

		console.log("Step 3.1");
		transport = this.webSocket; // only here
	}
	
	if ("/" !== a.substring(a.length-1, a.length)) {
		a += "/";
	}
	
	var b = MigratoryDataClient.t(this.b0,this.cc);
	this.ck = setTimeout(function() {
		MigratoryDataClient.ck = null;
		MigratoryDataClient.an(MigratoryDataClient.cl,MigratoryDataClient.ae.af);
	}, b);

	transport.call(this, a, this.b5, null);
};

MigratoryDataClient.cm=function(){this.ch();var a=false,b=this.c9[this.b5].m,c=this.o(b),d=null;if(!MigratoryDataClient.cd&&MigratoryDataClient.token!=="")d=MigratoryDataClient.token;if(!MigratoryDataClient.cb){if(!this.co||!c)b=this.cp(b);if(!c&&!this.cq(b,this.b5))return}this.ce=this.a4(this.ce,this.ae.ce);var e=c&&!this.cr?this.cs:null,f=null,g=null,i=this.ct,k=this.a7,l=null,j=null;if(MigratoryDataClient.cb){i=this.cu;e=this.ci}else if(this.c==="IE"&&c&&MigratoryDataClient.cv){i=this.cw;k=this.cx;e=
this.cy}if(this.ar!==this.as){if(!MigratoryDataClient.cb)if(this.c==="IE"&&!c)if(this.cz){e=this.d0;i=this.d1}else{e=this.d2;f="MigratoryDataClient0.d3";g=this.d4;i=this.d5;k=this.cx}else if(this.c==="IE"&&MigratoryDataClient.cv&&this.cz){a=true;e=this.d0;i=this.d6;k=this.cx}else{i=this.d7;if(this.c==="WebKit Android")i=this.d8;e=c&&!this.cr?this.cs:i;i=this.d9}l=navigator.userAgent;j=this.da}var m=null;if(this.ae.db!==undefined&&this.ae.db!==null)m=this.ae.db;c="";for(var h=0;h<this.ae.ce.length;h++){if(h>
0)g=f=null;if(!MigratoryDataClient.cd)MigratoryDataClient.cd=true;c+=this.dc(this.ae.ce[h],e,f,g,this.au,k,this.ae.cf,d,a,l,j,m);j=l=null}if("/"!==b.substring(b.length-1,b.length))b+="/";a=MigratoryDataClient.u;if(MigratoryDataClient.cb===false)a=MigratoryDataClient.t(this.b0,this.ag);this.ck=setTimeout(function(){MigratoryDataClient.ck=null;MigratoryDataClient.an(MigratoryDataClient.cl,MigratoryDataClient.ae.af)},a);i.call(this,b,this.b5,c)};
MigratoryDataClient.dd=function(){this.ch();var a=this.c9[this.b5].m,b=this.o(a);if(!MigratoryDataClient.cb){if(!this.co||!b)a=this.cp(a);if(!b&&!this.cq(a,this.b5))return}this.ce=this.a2(this.ce,this.ae.ce);if(this.ar!==this.as){this.ba();for(b=0;b<this.ae.ce.length;b++)delete this.bi[this.ae.ce[b]]}else{var c=b&&!this.cr?this.cs:null,d=this.ct,e=this.a7;if(MigratoryDataClient.cb){c=this.ci;d=this.cu}else if(this.c==="IE"&&b&&MigratoryDataClient.cv&&this.cz){d=this.cw;e=this.cx;c=this.cy;if("/"!==
a.substring(a.length-1,a.length))a+="/"}var f="";for(b=0;b<this.ae.ce.length;b++){f+=this.de(this.ae.ce[b],c,this.au,e);delete this.bi[this.ae.ce[b]]}this.ck=setTimeout(function(){MigratoryDataClient.ck=null;MigratoryDataClient.an(MigratoryDataClient.cl,MigratoryDataClient.ae.af)},this.u);d.call(this,a,this.b5,f)}};
MigratoryDataClient.df=function(){this.ch();var a=this.c9[this.b5].m,b=this.o(a);if(!MigratoryDataClient.cb){if(!this.co||!b)a=this.cp(a);if(!b&&!this.cq(a,this.b5))return}if(this.ar!==this.as)this.ba();else{var c=b&&!this.cr?this.cs:null,d=this.ct,e=this.a7,f=this.ax;if(MigratoryDataClient.cb){c=this.ci;d=this.cu;f=null}else if(this.c==="IE"&&b&&MigratoryDataClient.cv&&this.cz){d=this.cw;e=this.cx;c=this.cy;if("/"!==a.substring(a.length-1,a.length))a+="/"}b=MigratoryDataClient.dg(this.au,e,c,f);
this.ck=setTimeout(function(){MigratoryDataClient.ck=null;MigratoryDataClient.an(MigratoryDataClient.cl,MigratoryDataClient.ae.af)},this.u);d.call(this,a,this.b5,b)}};
MigratoryDataClient.dh=function(){this.ch();var a=this.c9[this.b5].m,b=this.o(a);if(!MigratoryDataClient.cb){if(!this.co||!b)a=this.cp(a);if(!b&&!this.cq(a,this.b5))return}var c=b&&!this.cr?this.cs:null,d=this.ct,e=this.a7;if(this.ar!==this.as){a=this.ae.di.closure;a!==undefined&&a!==null&&this.b8({type:MigratoryDataClient.NOTIFY_PUBLISH_FAILED,info:a});this.ba()}else{var f=this.token,g=this.ax;if(MigratoryDataClient.cb){d=this.cu;c=this.ci;g=f=null}else if(this.c==="IE"&&b&&MigratoryDataClient.cv){d=
this.cw;e=this.cx;c=this.cy}if(this.ar===this.as){b=this.dj(this.ae.di,c,this.au,e,f,g);if("/"!==a.substring(a.length-1,a.length))a+="/";this.ck=setTimeout(function(){MigratoryDataClient.ck=null;MigratoryDataClient.an(MigratoryDataClient.cl,MigratoryDataClient.ae.af)},this.u);d.call(this,a,this.b5,b)}}};MigratoryDataClient.ba=function(){if(this.dk.length!==0){this.dk.shift();this.c5();this.dl(false)}};

MigratoryDataClient.c0 = function(a) {
	console.log("Step 5");
	this.dk.push(a);
	this.dm(false);
};

MigratoryDataClient.dl = function(a) {
	// This function is called
	if (this.dk.length !== 0) {
		// But this is not called
		setTimeout(function() {
			MigratoryDataClient.dm(a);
		}, 0);
	}
};

MigratoryDataClient.dm = function(bool) {

	console.log("Step 4.1");
	// NOTE: This function is a sigle way to create WebSocket instance

	if (this.dn) {
		if (this.b(true)) {
			if (! (! bool && (this.ae !== null || this.dk.length === 0))) {
				this.ae = this.dk[0];
				switch (this.ae.af) {
					case this.ag: this.cm(); break;
					case this.ai: this.dd(); break;
					case this.bx: this.df(); break;
					case this.cc: this.cg(); console.log("Step 4"); break; // only here
					case this.ak: this.dh(); break;
				}
			}
		}
	}
};

MigratoryDataClient.dp = function() {
	this.dn = true;
	this.dl(false);
};

MigratoryDataClient.c4=function(){for(;this.dk.length>0;){var a=this.dk[0];switch(a.af){case this.ag:var b=a.dq;a=this.a2(a.ce,this.ce);if(a.length>0){this.ce=this.a4(this.ce,a);for(var c=0;c<a.length;c++){this.bl[a[c]]={seqid:7E4,seq:0,recovery:false};if(b!==undefined&&b!==null&&b>=100){b=Math.floor(b/100)*100;this.bi[a[c]]=b}}}break;case this.ai:a=this.a3(a.ce,this.ce);if(a.length>0){this.ce=this.a2(this.ce,a);for(c=0;c<a.length;c++){delete this.bi[a[c]];delete this.bl[a[c]]}}break;case this.ak:if(a.di.closure!==
undefined&&a.di.closure!==null){b={type:this.NOTIFY_PUBLISH_FAILED,info:a.di.closure};MigratoryDataClient.d!==null&&MigratoryDataClient.d.call(window,b)}break}this.dk.shift()}};MigratoryDataClient.c5=function(){this.ae=null;if(this.ck!==null){clearTimeout(this.ck);this.ck=null}if(this.dr!==null&&this.dr.readyState&&this.dr.readyState!==4){if(typeof XMLHttpRequest!=="undefined")this.dr.aborted=true;this.dr.abort()}this.dr!==null&&delete this.dr;this.dr=null};

MigratoryDataClient.c6 = function() {

	if (this.ds !== null) {
		clearTimeout(this.ds);
		this.ds = null;
	}
	
	if (this.wsocket !== null) {

		if (this.wsocket.du !== "HTML5") {
			if (this.wsocket.du === "XDR_HTML5") {
				var a = document.getElementById("MigratoryDataClient1");
				a !== null && a.contentWindow.postMessage("disconnect", "*");
			}
		} else if (this.wsocket.getElementById) {
			a = this.wsocket.getElementById("dv");
			if (a !== null) {
				a.src = "";
				this.wsocket.body.removeChild(a);
				delete a;
			}
			
			delete this.wsocket;
			this.wsocket = null;
			CollectGarbage();
		} else {

			if (MigratoryDataClient.cb) {
				this.wsocket.close();
			} else {

				if (this.wsocket.dw !== undefined) {
					clearTimeout(this.wsocket.dw);
					this.wsocket.dw = undefined;
				}
				
				this.wsocket.readyState && this.wsocket.readyState !== 4 && this.wsocket.abort();
				this.wsocket.du === "XDR_STREAM" && this.wsocket.abort();
			}
			
			delete this.wsocket;
			this.wsocket = null;
		}
	}
};

MigratoryDataClient.dx = function() {

	this.c5();
	this.c6();
	this.b5 = null;
	this.c9 = [];
	this.b3.b4 = [];
	this.ar = null;
	this.ce = [];
	this.bi = {};
	this.ax = this.au = null;
	this.c8 = [];
	this.az = 0;
	this.dy = this.b7 = false;
	this.dk = [];
	this.bi = {};
	this.bl = {};
	this.aw = this.cd = false;
	
	if (this.bw !== null) {
		clearTimeout(this.bw);
		this.bw = null;
	}
};

MigratoryDataClient.dz = function() {

	if (this.o(this.c9[this.b5].m) && !this.cr) {

		if (this.ds !== null) {
			clearTimeout(this.ds);
			this.ds = null;
		}
		
		if (this.wsocket !== null) {
			this.wsocket.responseText = "";
			this.wsocket.e0 = 0;
		}

	} else {
		this.ar = this.b2;
		this.c6();
		this.ax = this.au = null;
		MigratoryDataClient.cd = false;

		if (this.ce.length > 0) {

			var a = {};
			a.af = this.ag;

			if (MigratoryDataClient.aw == true) {
				a.cf = true;
			}
			
			a.ce = this.ce;
			this.c0(a); // TODO: make it work
		}
	}
};

MigratoryDataClient.ch=function(){if(this.b5===null)this.b5=this.e1()};
MigratoryDataClient.e1=function(){var a=this.a2(this.c9,this.c8);if(a.length===0){this.c8=[];a=this.c9}if(a.length===0)throw"Error: e1() No available servers!";for(var b=0,c=0;c<a.length;c++)b+=a[c].e2;var d=-1;if(b===0)d=Math.floor(a.length*Math.random());else{var e=Math.floor(b*Math.random());for(c=b=0;c<a.length;c++){b+=a[c].e2;if(b>e){d=c;break}}}return this.a0(this.c9,a[d])};
MigratoryDataClient.cp=function(a){var b=this.k(a);if(b===null||this.d4!==null&&b.l!==this.d4)throw"Error: Invalid common parent domain of the servers! Cause server is '"+a+"'.";if(this.d4===null){this.d4=b.l;if(b.l.indexOf(":")===-1)document.domain=b.l}return b.m};MigratoryDataClient.cq=function(a,b){var c="MigratoryDataClient2"+b;if(window.frames[c]===undefined||window.frames[c].e3===undefined){this.e4(a,b);return false}return true};
MigratoryDataClient.e4=function(a,b){b="MigratoryDataClient2"+b;var c=document.getElementById(b);if(!c){c=document.createElement("iframe");c.name=b;c.id=b;c.style.display="none";document.body.appendChild(c)}this.ck=setTimeout(function(){MigratoryDataClient.ck=null;c.src="";c.parentNode.removeChild(c);MigratoryDataClient.an(MigratoryDataClient.cl,"iframe")},this.u);if("/"!==a.substring(a.length-1,a.length))a+="/";c.src=a+"_"+this.e5(this.d4,"e3","MigratoryDataClient.e6")};
MigratoryDataClient.e6=function(){clearTimeout(this.ck);this.ck=null;this.dl(true)};MigratoryDataClient.e7=function(a){return this.cr?new XMLHttpRequest:this.e8(a)};
MigratoryDataClient.e8=function(a){if(a){if(this.e9)this.e9.responseText="";else this.e9={open:function(b,c){b=MigratoryDataClient.ea(c);MigratoryDataClient.eb.connect("0",b.host,b.port,"MigratoryDataClient.ec")},setRequestHeader:function(){},send:function(b){MigratoryDataClient.eb.write("0","POST / HTTP/1.1\r\nContent-Length: "+b.length+"\r\n\r\n"+b)},readyState:4,status:200,responseText:"",abort:function(){this.responseText="";MigratoryDataClient.eb.close("0")}};return this.e9}if(this.ed)this.ed.responseText=
"";else this.ed={open:function(b,c){b=MigratoryDataClient.ea(c);MigratoryDataClient.eb.connect("1",b.host,80,"MigratoryDataClient.ee")},setRequestHeader:function(){},send:function(b){MigratoryDataClient.eb.write("1","POST / HTTP/1.1\r\nContent-Length: "+b.length+"\r\n\r\n"+b)},readyState:4,status:200,responseText:"",abort:function(){this.responseText="";MigratoryDataClient.eb.close("1")}};return this.ed};
MigratoryDataClient.ea=function(a){var b,c;b=a.indexOf("https://")==0?"https://":"http://";a=a.substring(b.length);var d=a.indexOf("/");if(d!=-1){c=a.substring(0,d);a.substring(d)}else c=a;d=c.lastIndexOf(":");if(d!=-1){a=c.substring(d+1);c=c.substring(0,d)}else a=b=="https://"?"443":"80";return{host:c,port:a}};MigratoryDataClient.ee=function(a){if(this.dr){this.dr.responseText+=a;this.ef()}};MigratoryDataClient.ec=function(a){if(this.wsocket){this.wsocket.responseText+=a;this.eg()}};
MigratoryDataClient.eh=function(){this.b(false);var a=document.createElement("div");document.body.appendChild(a);var b=document.createElement("div");b.id="MigratoryDataClient3";a.appendChild(b);setTimeout(function(){var c="flash-transport.swf";if(typeof MigratoryDataClientFlashTransport==="string")c=MigratoryDataClientFlashTransport;swfobject.embedSWF(c,"MigratoryDataClient3","0","0","9",false,{readyCallback:"MigratoryDataClient.ei"},{allowFullScreen:false,allowScriptAccess:"always"},{id:"MigratoryDataClient4",
name:"MigratoryDataClient4"})},0)};MigratoryDataClient.ei=function(){MigratoryDataClient.eb=document.getElementById("MigratoryDataClient4");if(!MigratoryDataClient.eb)throw"Error: Could not get the reference of the flash-transport.swf!";MigratoryDataClient.dp()};
MigratoryDataClient.cw=function(a,b,c){b=document.getElementById("MigratoryDataClient5");if(b===null){b=document.createElement("iframe");b.id="MigratoryDataClient5";b.style.display="none";document.body.appendChild(b)}var d=(new Date).getTime();b.src=a+"_"+c+d};
MigratoryDataClient.d5=function(a,b,c){this.wsocket=new ActiveXObject("htmlfile");this.wsocket.open();MigratoryDataClient.d4.indexOf(":")===-1?this.wsocket.write("<html><head><script>document.domain='"+MigratoryDataClient.d4+"';<\/script></head><body></body></html>"):this.wsocket.write("<html><head></head><body></body></html>");this.wsocket.close();this.wsocket.parentWindow.MigratoryDataClient0=this;b=this.wsocket.createElement("iframe");b.id="dv";this.wsocket.body.appendChild(b);this.wsocket.ej=0;b.src=a+"_"+c};
MigratoryDataClient.d3=function(a){MigratoryDataClient.ek(a);MigratoryDataClient.wsocket.ej+=a.length;MigratoryDataClient.wsocket.ej>=MigratoryDataClient.el&&MigratoryDataClient.ae===null&&MigratoryDataClient.ar!==MigratoryDataClient.b2&&MigratoryDataClient.dz()};
MigratoryDataClient.d6=function(a,b,c){this.wsocket={};this.wsocket.du="XDR_HTML5";MigratoryDataClient.ej=0;b=document.getElementById("MigratoryDataClient1");if(b===null){b=document.createElement("iframe");b.id="MigratoryDataClient1";b.style.display="none";document.body.appendChild(b)}var d=(new Date).getTime();b.src=a+"_"+c+d};
MigratoryDataClient.em=function(a){if(a.data.indexOf(MigratoryDataClient.a7.en)!==-1){MigratoryDataClient.ek(a.data);MigratoryDataClient.ej+=a.data.length;MigratoryDataClient.ej>=MigratoryDataClient.el&&MigratoryDataClient.ae===null&&MigratoryDataClient.ar!==MigratoryDataClient.b2&&MigratoryDataClient.dz()}};
MigratoryDataClient.d1=function(a,b,c){window.frames["MigratoryDataClient2"+b].e3("window.parent.MigratoryDataClient.wsocket = new XDomainRequest();");this.wsocket.e0=0;this.wsocket.du="XDR_STREAM";this.wsocket.onload=function(){MigratoryDataClient.eo()};this.wsocket.onprogress=function(){MigratoryDataClient.eo()};this.wsocket.onerror=function(){};this.wsocket.ontimeout=function(){};try{this.wsocket.open("POST",a);this.wsocket.send(c)}catch(d){}};
MigratoryDataClient.eo=function(){var a=this.wsocket;if(a.responseText){for(var b=a.responseText.substring(a.e0),c=b.indexOf(this.a7.ep);c!==-1;){b=b.substring(0,c);this.ek(b);a.e0+=c+1;b=a.responseText.substring(a.e0);c=b.indexOf(this.a7.ep)}a.e0>=this.el&&this.ae===null&&this.ar!==this.b2&&this.dz()}};
MigratoryDataClient.d9=function(a,b,c){var d=this.o(a);if(d)this.wsocket=this.e7(true);else window.frames["MigratoryDataClient2"+b].e3("window.parent.MigratoryDataClient.wsocket = new XMLHttpRequest();");this.wsocket.e0=0;this.wsocket.onreadystatechange=function(){MigratoryDataClient.eg()};this.wsocket.open("POST",a,true);d&&this.c.indexOf("WebKit")===0&&this.wsocket.setRequestHeader("Content-Type","text/plain");this.wsocket.send(c)};
MigratoryDataClient.eg=function(){var a=this.wsocket;if(!(a===null||a.readyState!==3&&a.readyState!==4||a.status!==200)){if(this.c.indexOf("Opera")!==-1){this.wsocket.dw!==undefined&&clearTimeout(this.wsocket.dw);this.wsocket.dw=setTimeout(function(){MigratoryDataClient.wsocket.dw=undefined;MigratoryDataClient.eg()},this.eq)}if(a.responseText){for(var b=a.responseText.substring(a.e0),c=b.indexOf(this.a7.ep);c!==-1;){b=b.substring(0,c);this.ek(b);a.e0+=c+1;b=a.responseText.substring(a.e0);c=b.indexOf(this.a7.ep)}a.e0>=this.el&&
this.ae===null&&this.ar!==this.b2&&this.dz()}}};MigratoryDataClient.er=function(){if(typeof XMLHttpRequest==="undefined"){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(b){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(c){}throw"Error: The browser does not support XMLHttpRequest!";}else return new XMLHttpRequest};
MigratoryDataClient.ct=function(a,b,c){var d=this.o(a);if(d)this.dr=this.e7(false);else window.frames["MigratoryDataClient2"+b].e3("window.parent.MigratoryDataClient.dr = ("+this.er.toString()+")();");this.dr.onreadystatechange=function(){MigratoryDataClient.ef()};this.dr.open("POST",a,true);d&&this.c.indexOf("WebKit")===0&&this.dr.setRequestHeader("Content-Type","text/plain");if(this.c.indexOf("IE")===0){this.dr.setRequestHeader("Content-Type","text/plain");this.dr.setRequestHeader("Connection",
"close")}this.dr.send(c)};MigratoryDataClient.ef=function(){var a=this.dr;a===null||typeof XMLHttpRequest!=="undefined"&&typeof a.aborted!=="undefined"&&a.aborted!==null&&a.aborted==true||a===null||a.readyState!==4||a.status!==200||a.responseText&&this.ek(a.responseText)};

MigratoryDataClient.webSocket = function(url) {

	var wsUrl;
	if (url.substring(0, url.indexOf("://")) === "http") {
		wsUrl = "ws://" + url.substring(url.indexOf("://") + 3) + "WebSocketConnection";

	} else {
		wsUrl = "wss://" + url.substring(url.indexOf("://") + 3) + "WebSocketConnection-Secure";
	}

	console.log("Step 2");
	this.wsocket = MigratoryDataClient.createWebSocket(wsUrl); // only here

	this.et = MigratoryDataClient.s();

	this.wsocket.eu = this.et;

	this.wsocket.onmessage = function(b) {
		MigratoryDataClient.ev(b.data);
	};

	this.wsocket.onopen = function() {
		MigratoryDataClient.ba();
	};

	this.wsocket.onclose = function() {
		if (MigratoryDataClient.ew != false) if (MigratoryDataClient.et === this.eu) {
			MigratoryDataClient.c5();
			MigratoryDataClient.b0++;
			var b = MigratoryDataClient.t(MigratoryDataClient.b0);
			MigratoryDataClient.c3 = setTimeout(function() {
				MigratoryDataClient.bm();
			}, b);
		}
	};
};

MigratoryDataClient.createWebSocket = function(url) {

	alert("Step 1: creating WebSocket");

	if (window.WebSocket) {
		console.log("Step 1.1: new WebSocket");
		return new WebSocket(url); // only here

	} else if (window.MozWebSocket) {
		return new MozWebSocket(url);
	}

	return null;
};

MigratoryDataClient.cu=function(a,b,c){this.wsocket!=null&&this.wsocket.readyState===1&&this.wsocket.send(c)};
MigratoryDataClient.ev=function(a){var b=MigratoryDataClient.wsocket;if(!(b===null||b.readyState!==1))if(a){b=a;for(var c=b.indexOf(MigratoryDataClient.a7.ep);c!==-1;){b=b.substring(0,c);MigratoryDataClient.ek(b);b=a.substring(c+1);c=b.indexOf(MigratoryDataClient.a7.ep)}}};
MigratoryDataClient.ek=function(a){for(var b=0,c=[],d="\u0000",e={},f=0;;){var g=a.indexOf(this.a7.en,b);if(g===-1)break;if(g-b>0){b=a.substring(b,g);d=b.charAt(0);e=this.ex(b);if(d===this.a7.a8){c[f]=e;f++}else this.a6(d,e)}b=g+1}f>0&&d!=="\u0000"&&this.a6(d,c);this.bt()};
MigratoryDataClient.ex=function(a){if(this.a7.ey[a.charAt(0)]!==undefined){for(var b=1,c={};;){if(b>=a.length)break;var d=a.charAt(b),e=a.indexOf(this.a7.ez,b+1);if(e===-1)return c;if(this.a7.f0[d]!==undefined){b++;var f="";switch(this.a7.f1[d]){case this.ap.f2:f=this.f3(this.a7,a.substring(b,e));break;case this.ap.f4:f=MigratoryDataClient.f5(this.a7,a.substring(b,e));break}b=c[d];if(b===undefined)c[d]=f;else if(c[d]instanceof Array)c[d][c[d].length]=f;else{c[d]=[];c[d][0]=b;c[d][1]=f}}b=e+1}return c}};
MigratoryDataClient.e5=function(a,b,c){var d="";d+=this.cx.f6;d+=this.cx.f7;d+=this.f8(this.cx,a);d+=this.cx.ez;d+=this.cx.f9;d+=this.f8(this.cx,b);d+=this.cx.ez;d+=this.cx.fa;d+=this.f8(this.cx,c);d+=this.cx.ez;d+=this.cx.en;return d};
MigratoryDataClient.dc=function(a,b,c,d,e,f,g,i,k,l,j,m){var h="";h+=k?f.fb:f.ag;h+=f.bb;h+=this.f8(f,a);h+=f.ez;if(b!==null){h+=f.fc;h+=this.fd(f,b);h+=f.ez;if(this.c.indexOf("Opera")!==-1){h+=f.fe;h+=this.fd(f,1);h+=f.ez}}if(this.bi[a]!==undefined){h+=f.ff;h+=this.fd(f,this.bi[a]);h+=f.ez}if(c!==null){h+=f.fa;h+=this.f8(f,c);h+=f.ez}if(i!==null){h+=f.fg;h+=this.f8(f,i);h+=f.ez}if(d!==null){h+=f.f7;h+=this.f8(f,d);h+=f.ez}if(e!==null){h+=f.at;h+=this.fd(f,e);h+=f.ez}if(g!==undefined)if(this.bl[a]!==
undefined&&this.bl[a].seqid!==7E4){h+=f.bj;h+=this.fd(f,this.bl[a].seqid);h+=f.ez;h+=f.bk;h+=this.fd(f,this.bl[a].seq+1);h+=f.ez}if(l!==null){h+=f.fh;h+=this.f8(f,l);h+=f.ez}if(j!==null){h+=f.fi;h+=this.fd(f,j);h+=f.ez}if(m!==null){h+=f.fj;h+=this.fd(f,m);h+=f.ez}h+=f.en;return h};
MigratoryDataClient.de=function(a,b,c,d){var e="";e+=d.ai;e+=d.bb;e+=this.f8(d,a);e+=d.ez;if(this.bi[a]!==undefined){e+=d.ff;e+=this.fd(d,this.bi[a]);e+=d.ez}if(c!==null){e+=d.at;e+=this.fd(d,c);e+=d.ez}if(b!==null){e+=d.fc;e+=this.fd(d,b);e+=d.ez}e+=d.en;return e};MigratoryDataClient.dg=function(a,b,c,d){var e="";e+=b.bx;e+=b.at;e+=this.fd(b,a);e+=b.ez;if(c!==null){e+=b.fc;e+=this.fd(b,c);e+=b.ez}if(d!==null){e+=b.ay;e+=this.fd(b,d);e+=b.ez}e+=b.en;return e};
MigratoryDataClient.dj=function(a,b,c,d,e,f){var g="";g+=d.ak;g+=d.bb;g+=this.f8(d,a.subject);g+=d.ez;g+=d.bc;g+=this.f8(d,a.content);g+=d.ez;if(a.closure!==undefined&&a.closure!==null){g+=d.br;g+=this.f8(d,a.closure);g+=d.ez}if(a.fields!==undefined&&a.fields!==null)for(var i=0;i<a.fields.length;i++){var k=a.fields[i].name,l=a.fields[i].value;g+=d.bd;g+=this.f8(d,k);g+=d.ez;g+=d.be;g+=this.f8(d,l);g+=d.ez}if(b!==null){g+=d.fc;g+=this.fd(d,b);g+=d.ez;if(this.c.indexOf("Opera")!==-1){g+=d.fe;g+=this.fd(d,
1);g+=d.ez}}if(c!==null){g+=d.at;g+=this.fd(d,c);g+=d.ez}if(f!==null){g+=d.ay;g+=this.fd(d,f);g+=d.ez}if(e!==null){g+=d.fg;g+=this.f8(d,e);g+=d.ez}g+=d.en;return g};MigratoryDataClient.cx={};MigratoryDataClient.cx.en="!";MigratoryDataClient.cx.ep="z";MigratoryDataClient.cx.ez="$";MigratoryDataClient.cx.fk="~";MigratoryDataClient.cx.fl=" ";MigratoryDataClient.cx.fm='"';MigratoryDataClient.cx.fn="#";MigratoryDataClient.cx.fo="%";MigratoryDataClient.cx.fp="'";MigratoryDataClient.cx.fq="/";
MigratoryDataClient.cx.fr="<";MigratoryDataClient.cx.fs=">";MigratoryDataClient.cx.ft="[";MigratoryDataClient.cx.fu="\\";MigratoryDataClient.cx.fv="]";MigratoryDataClient.cx.fw="^";MigratoryDataClient.cx.fx="`";MigratoryDataClient.cx.fy="{";MigratoryDataClient.cx.fz="|";MigratoryDataClient.cx.g0="}";MigratoryDataClient.cx.g1="";MigratoryDataClient.cx.ag="&";MigratoryDataClient.cx.ai="(";MigratoryDataClient.cx.a8=")";MigratoryDataClient.cx.bx="*";MigratoryDataClient.cx.f6="+";
MigratoryDataClient.cx.g2=",";MigratoryDataClient.cx.aa="0";MigratoryDataClient.cx.fb="2";MigratoryDataClient.cx.ak="5";MigratoryDataClient.cx.ac="8";MigratoryDataClient.cx.bb="&";MigratoryDataClient.cx.bc="(";MigratoryDataClient.cx.bk=")";MigratoryDataClient.cx.bj="*";MigratoryDataClient.cx.fc="+";MigratoryDataClient.cx.at=",";MigratoryDataClient.cx.f7="-";MigratoryDataClient.cx.fa=".";MigratoryDataClient.cx.f9="?";MigratoryDataClient.cx.am="0";MigratoryDataClient.cx.g3="1";
MigratoryDataClient.cx.bh="2";MigratoryDataClient.cx.fe="3";MigratoryDataClient.cx.br="4";MigratoryDataClient.cx.av="5";MigratoryDataClient.cx.fg="7";MigratoryDataClient.cx.bo="8";MigratoryDataClient.cx.ay="9";MigratoryDataClient.cx.bd="D";MigratoryDataClient.cx.be="E";MigratoryDataClient.cx.ff="G";MigratoryDataClient.cx.bf="J";MigratoryDataClient.cx.fh="K";MigratoryDataClient.cx.fi="L";MigratoryDataClient.cx.fj="N";MigratoryDataClient.cx.g4={};
(function(a){var b=a.g4;b["\u0000"]="y";for(var c=1;c<8;c++)b[String.fromCharCode(c)]=String.fromCharCode(c+39);b["\u0008"]="x";for(c=9;c<21;c++)b[String.fromCharCode(c)]=String.fromCharCode(c+39);b["\u0015"]="=";for(c=22;c<32;c++)b[String.fromCharCode(c)]=String.fromCharCode(c+41);b[a.en]="I";b[a.ep]="w";b[a.ez]="J";b[a.fk]="K";b[a.fl]="L";b[a.fm]="M";b[a.fn]="N";b[a.fo]="O";b[a.fp]="P";b[a.fq]="_";b[a.fr]="Q";b[a.fs]="R";b[a.ft]="S";b[a.fu]="T";b[a.fv]="U";b[a.fw]="V";b[a.fx]="W";b[a.fy]="X";b[a.fz]=
"Y";b[a.g0]="Z";b[a.g1]="v"})(MigratoryDataClient.cx);MigratoryDataClient.cx.g5={};(function(a){for(var b in a.g4)if(a.g4.hasOwnProperty(b))a.g5[a.g4[b]]=b})(MigratoryDataClient.cx);MigratoryDataClient.a7={};MigratoryDataClient.a7.en="";MigratoryDataClient.a7.ep="\u0019";MigratoryDataClient.a7.ez="\u001e";MigratoryDataClient.a7.fk="\u001f";MigratoryDataClient.a7.g6="\u0000";MigratoryDataClient.a7.g7="\n";MigratoryDataClient.a7.g8="\r";MigratoryDataClient.a7.fm='"';MigratoryDataClient.a7.fu="\\";
MigratoryDataClient.a7.ag="\u0001";MigratoryDataClient.a7.ai="\u0002";MigratoryDataClient.a7.a8="\u0003";MigratoryDataClient.a7.bx="\u0004";MigratoryDataClient.a7.f6="\u0005";MigratoryDataClient.a7.g2="\u0006";MigratoryDataClient.a7.aa="\t";MigratoryDataClient.a7.fb="\u000c";MigratoryDataClient.a7.ak="\u0010";MigratoryDataClient.a7.ac="\u0013";MigratoryDataClient.a7.bb="\u0001";MigratoryDataClient.a7.bc="\u0002";MigratoryDataClient.a7.bk="\u0003";MigratoryDataClient.a7.bj="\u0004";
MigratoryDataClient.a7.fc="\u0005";MigratoryDataClient.a7.at="\u0006";MigratoryDataClient.a7.f7="\u0007";MigratoryDataClient.a7.fa="\u0008";MigratoryDataClient.a7.f9="\t";MigratoryDataClient.a7.am="\u000b";MigratoryDataClient.a7.g3="\u000c";MigratoryDataClient.a7.bh="\u000e";MigratoryDataClient.a7.fe="\u000f";MigratoryDataClient.a7.br="\u0010";MigratoryDataClient.a7.av="\u0011";MigratoryDataClient.a7.fg="\u0013";MigratoryDataClient.a7.bo="\u0014";MigratoryDataClient.a7.ay="\u0015";
MigratoryDataClient.a7.bd="\u001b";MigratoryDataClient.a7.be="\u001c";MigratoryDataClient.a7.ff="\u001d";MigratoryDataClient.a7.bf="'";MigratoryDataClient.a7.fh="#";MigratoryDataClient.a7.fi="$";MigratoryDataClient.a7.fj="(";MigratoryDataClient.a7.g4={};(function(a){var b=a.g4;b[a.en]="\u0001";b[a.ez]="\u0002";b[a.fk]="\u0003";b[a.g6]="\u0004";b[a.g7]="\u0005";b[a.g8]="\u0006";b[a.fm]="\u0007";b[a.fu]="\u0008";b[MigratoryDataClient.cx.en]="\t";b[a.ep]="\u000b"})(MigratoryDataClient.a7);
MigratoryDataClient.a7.g5={};(function(a){for(var b in a.g4)if(a.g4.hasOwnProperty(b))a.g5[a.g4[b]]=b})(MigratoryDataClient.a7);MigratoryDataClient.a7.ey={};(function(a){a.ey[a.ag]=true;a.ey[a.ai]=true;a.ey[a.a8]=true;a.ey[a.bx]=true;a.ey[a.f6]=true;a.ey[a.g2]=true;a.ey[a.aa]=true;a.ey[a.fb]=true;a.ey[a.ak]=true;a.ey[a.ac]=true})(MigratoryDataClient.a7);MigratoryDataClient.a7.f0={};
(function(a){a.f0[a.bb]=true;a.f0[a.bc]=true;a.f0[a.bk]=true;a.f0[a.bj]=true;a.f0[a.fc]=true;a.f0[a.at]=true;a.f0[a.f7]=true;a.f0[a.fa]=true;a.f0[a.f9]=true;a.f0[a.am]=true;a.f0[a.g3]=true;a.f0[a.bh]=true;a.f0[a.fe]=true;a.f0[a.av]=true;a.f0[a.fg]=true;a.f0[a.bo]=true;a.f0[a.ay]=true;a.f0[a.bd]=true;a.f0[a.be]=true;a.f0[a.ff]=true;a.f0[a.bf]=true;a.f0[a.fh]=true;a.f0[a.fi]=true;a.f0[a.br]=true;a.f0[a.fj]=true})(MigratoryDataClient.a7);MigratoryDataClient.ap={};MigratoryDataClient.ap.g9=1;
MigratoryDataClient.ap.ga=2;MigratoryDataClient.ap.f4=3;MigratoryDataClient.ap.f2=4;MigratoryDataClient.ap.gb={};(function(a){var b=a.gb;b.bb=a.f4;b.bc=a.f4;b.gc=a.f4;b.bk=a.f2;b.bj=a.f2;b.fc=a.f2;b.at=a.f2;b.f7=a.f4;b.fa=a.f4;b.f9=a.f4;b.am=a.f2;b.g3=a.f4;b.bh=a.f2;b.fe=a.f2;b.fg=a.f4;b.bo=a.f4;b.ay=a.f2;b.bd=a.f4;b.be=a.f4;b.bf=a.f4;b.fh=a.f4;b.fi=a.f2;b.br=a.f4;b.av=a.f2})(MigratoryDataClient.ap);MigratoryDataClient.a7.f1={};MigratoryDataClient.cx.f1={};
(function(){for(var a in MigratoryDataClient.ap.gb)if(MigratoryDataClient.ap.gb.hasOwnProperty(a)){MigratoryDataClient.a7.f1[MigratoryDataClient.a7[a]]=MigratoryDataClient.ap.gb[a];MigratoryDataClient.cx.f1[MigratoryDataClient.cx[a]]=MigratoryDataClient.ap.gb[a]}})();MigratoryDataClient.ap.aq={};MigratoryDataClient.ap.aq[0]="UNKNOWN_SESSION_ID";MigratoryDataClient.f8=function(a,b){for(var c="",d=0;d<b.length;d++){var e=a.g4[b.charAt(d)];if(e!==undefined){c+=a.fk;c+=e}else c+=b.charAt(d)}return c};
MigratoryDataClient.f5=function(a,b){for(var c="",d=0;d<b.length;d++){var e=b.charAt(d);if(e===a.fk){if(d+1>=b.length||a.g5[b.charAt(d+1)]===undefined)throw"Error: f5() Illegal argument '"+b+"'!";e=a.g5[b.charAt(d+1)];d++}c+=e}return c};
MigratoryDataClient.fd=function(a,b){if((b&4294967168)===0){var c=String.fromCharCode(b),d=a.g4[c];return d===undefined?c:a.fk+d}var e;e=(b&4278190080)!==0?24:(b&16711680)!==0?16:8;c=[];for(d=0;d<10;d++)c.push(0);for(var f=0,g=0;e>=0;){var i=b>>e&255;g++;c[f]|=i>>g;d=a.g4[String.fromCharCode(c[f])];if(d!==undefined){c[f]=a.fk.charCodeAt(0);c[f+1]=d.charCodeAt(0);f++}f++;c[f]|=i<<7-g&127;e-=8}d=a.g4[String.fromCharCode(c[f])];if(d!==undefined){c[f]=a.fk.charCodeAt(0);c[f+1]=d.charCodeAt(0);f++}f++;
a="";for(d=0;d<f;d++)a+=String.fromCharCode(c[d]);return a};
MigratoryDataClient.f3=function(a,b){var c="Error: f3() Illegal argument '"+b+"'!",d=0,e=-1,f=0,g,i=b.length,k=0;if(i===1)return b.charCodeAt(0);else if(i===2&&b.charAt(0)===a.fk){g=a.g5[b.charAt(1)];if(g!==undefined)return g.charCodeAt(0);else throw c;}for(;i>0;i--){g=b.charAt(k);k++;if(g===a.fk){if(i-1<0)throw c;i--;g=b.charAt(k);k++;g=a.g5[g];if(g===undefined)throw c;}else g=g;if(e>0){f|=g.charCodeAt(0)>>e;d=d<<8|f;f=g.charCodeAt(0)<<8-e}else f=g.charCodeAt(0)<<-e;e=(e+7)%8}return d};
MigratoryDataClient.NOTIFY_UNSUPPORTED_BROWSER="NOTIFY_UNSUPPORTED_BROWSER";MigratoryDataClient.NOTIFY_SERVER_DOWN="NOTIFY_SERVER_DOWN";MigratoryDataClient.NOTIFY_SERVER_UP="NOTIFY_SERVER_UP";MigratoryDataClient.NOTIFY_DATA_RESYNC="NOTIFY_DATA_RESYNC";MigratoryDataClient.NOTIFY_DATA_SYNC="NOTIFY_DATA_SYNC";MigratoryDataClient.NOTIFY_PUBLISH_OK="NOTIFY_PUBLISH_OK";MigratoryDataClient.NOTIFY_PUBLISH_FAILED="NOTIFY_PUBLISH_FAILED";MigratoryDataClient.NOTIFY_PUBLISH_DENIED="NOTIFY_PUBLISH_DENIED";
MigratoryDataClient.NOTIFY_PUBLISH_NO_SUBSCRIBER="NOTIFY_PUBLISH_NO_SUBSCRIBER";MigratoryDataClient.NOTIFY_SUBSCRIBE_ALLOW="NOTIFY_SUBSCRIBE_ALLOW";MigratoryDataClient.NOTIFY_SUBSCRIBE_DENY="NOTIFY_SUBSCRIBE_DENY";MigratoryDataClient.CONSTANT_WINDOW_BACKOFF="CONSTANT_WINDOW_BACKOFF";MigratoryDataClient.TRUNCATED_EXPONENTIAL_BACKOFF="TRUNCATED_EXPONENTIAL_BACKOFF";
MigratoryDataClient.notifyAfterReconnectRetries=function(a){if(typeof a!=="number"||a<1)throw"Error: notifyAfterReconnectRetries() should have a positive number as an argument!";this.ca=a};

MigratoryDataClient.setServers = function(a) {
	console.log("setServers()");
	this.ew = true;
	this.a5(a, "string", 1, /^(\d+)?\s*https?:\/\/(\w|-)+(\.(\w|-)+)*(:\d+)?$/i, "Error: setServers() - the argument should be a list of URLs, and each URL could be optionally preceded by a weight");
	
	for (var b = [], c = 0; c < a.length; c++) {
		var d = /https?:\/\/(\w|-)+(\.(\w|-)+)*(:\d+)?$/i.exec(a[c])[0],e=/^\d+/.exec(a[c]);
		
		if (e === null) {
			e = 100;
		} else {
			e = parseInt(e[0]);
			
			if ( e > 100) {
				throw "Error: setServers() - the weight needs to be an integer between 0 and 100!";
			}
		}

		this.co || this.cp(d);
		b.push({
			m: d,
			e2: e
		});
	}
	
	this.c9 = b;
	this.b3.b4 = [];
	
	for (c=0; c < a.length; c++) {
		this.b3.b4[c] = {};
		this.b3.b4[c].b6 = 0;
		this.b3.b4[c].c2 = 0;
		this.b3.b4[c].b9 = 0;
		this.b3.b4[c].bv = 0;
		this.b3.b4[c].bn = 0;
		this.b3.b4[c].aq = {};
	}
	
	if (MigratoryDataClient.cb) { 
		a = {};
		a.af = this.cc;
		this.c0(a);
	}
};

MigratoryDataClient.getSubjects=function(){return this.a1(this.ce)};MigratoryDataClient.setMessageHandler=function(a){if(typeof a!=="function")throw"Error: setMessageHandler() should have a function as an argument!";this.bq=a};
MigratoryDataClient.setStatusHandler=function(a){if(typeof a!=="function")throw"Error: setStatusHandler() should have a function as an argument!";this.d=a};MigratoryDataClient.subscribe=function(a){MigratoryDataClient.subscribeWithHistory(a,0)};
MigratoryDataClient.subscribeWithHistory=function(a,b){this.a5(a,"string",1,/^\/[^\/*]+\/([^\/*]+\/)*([^\/*]+|\*)$/,"Error: subscribe() - a subject is invalid");if(this.c9.length===0)throw"Error: subscribe() - the servers are not configured!";if(this.bq===null)throw"Error: subscribe() - the message handler is not configured!";if(typeof b!=="number"||b<0)throw"Error: subscribeWithHistory() - the second argument should be a positive number or zero!";a=this.a2(a,this.ce);if(a.length!==0){if(this.dy===
false)this.dy=true;var c={};c.af=this.ag;c.dq=0;if(b!=0)c.db=b;c.ce=a;this.c0(c)}};

MigratoryDataClient.setNumberOfSubdomainLevels = function(a) {

	console.log("setNumberOfSubdomainLevels()");

	if (typeof a !== "number" || a < 2) {
		throw "Error: setNumberOfSubdomainLevels() should have a positive number larger or equal to 2 as an argument!";
	}

	if (this.c9.length > 0) {
		throw "Error: Error: setNumberOfSubdomainLevels() Unable to set the number of subdomain levels when servers are already configured - use the api call setNumberOfSubdomainLevels() before the api call setServers()!";
	}

	this.n = a
};

MigratoryDataClient.subscribeWithConflation=function(a,b){this.a5(a,"string",1,/^\/[^\/*]+\/([^\/*]+\/)*([^\/*]+|\*)$/,"Error: subscribe() - a subject is invalid");if(this.c9.length===0)throw"Error: subscribeWithConflation() - the servers are not configured!";if(this.bq===null)throw"Error: subscribeWithConflation() - the message handler is not configured!";a=this.a2(a,this.ce);if(a.length!==0){if(b>=100){b=Math.floor(b/100)*100;for(var c=0;c<a.length;c++)this.bi[a[c]]=b}else b=0;if(this.dy===false)this.dy=
true;c={};c.af=this.ag;c.dq=b;c.ce=a;this.c0(c)}};MigratoryDataClient.unsubscribe=function(a){this.a5(a,"string",1,/^\/[^\/*]+\/([^\/*]+\/)*([^\/*]+|\*)$/,"Error: unsubscribe() - a subject is invalid");a=this.a3(a,this.ce);if(a.length!==0){var b={};b.af=this.ai;b.ce=a;this.c0(b)}};MigratoryDataClient.disconnect=function(){this.ew=false;this.b(false)&&this.dx()};

MigratoryDataClient.setEntitlementToken = function(token) {

	console.log("Set the entitlement token");

	if (this.ce.length === 0) {
		this.token = token;
		this.cd = false;
	} else {
		throw "Error: setEntitlementToken() - unable to set the entitlement token when there are running subject subscriptions!";
	}
};

MigratoryDataClient.getInfo=function(){s="Date: "+(new Date).toString()+"\n";s+="Uptime: "+((new Date).getTime()-this.b3.gd)+" ms\n";s+="window.location: "+window.location+"\n";s+="document.domain: "+document.domain+"\n";s+="User-agent: "+navigator.userAgent+"\n";s+="Detected browser: "+this.c+"\n";s+="Servers: ";for(var a=0;a<this.c9.length;a++){if(a>0)s+=", ";s+=this.c9[a].e2+" "+this.c9[a].m}s+="\nSubjects: "+this.ce.toString()+"\n";s+="Connection status ["+(this.b5===null?null:this.c9[this.b5].m)+
"]: "+this.ar+"\n";s+="Time from last server activity: "+(this.b3.bu!==null?(new Date).getTime()-this.b3.bu:null)+" ms\n";s+="Servers down before notify: "+this.ca+"\n";s+="Consecutive server down count: "+this.az+" times\n";for(a=0;a<this.b3.b4.length;a++){s+="\nServer up ["+this.c9[a].m+"]: "+this.b3.b4[a].b6+" times\n";s+="Server down ["+this.c9[a].m+"]: "+this.b3.b4[a].c2+" times\n";s+="Server connection recycled ["+this.c9[a].m+"]: "+this.b3.b4[a].b9+" times\n";s+="Received server events ["+
this.c9[a].m+"]: "+this.b3.b4[a].bv+"\n";s+="Received messages ["+this.c9[a].m+"]: "+this.b3.b4[a].bn+"\n";for(var b in this.b3.b4[a].aq)if(this.b3.b4[a].aq.hasOwnProperty(b))s+="Error ["+this.c9[a].m+"] x"+this.b3.b4[a].aq[b]+" times : "+b+"\n"}return s};

MigratoryDataClient.publish = function(a) {

	console.log("publish()");

	if (this.c9.length === 0) {
		throw "Error: publish() - the servers are not configured, use setServers() first!";
	}
	
	if (a === undefined || a === null) {
		throw "Error: publish() - the message argument is undefined or null!";
	}
	
	if (a.subject === undefined || a.subject === null) {
		throw "Error: publish() - the subject of the message is undefined or null!";
	}
	
	if (!/^\/[^\/*]+\/([^\/*]+\/)*([^\/*]+|\*)$/.test(a.subject)) {
		throw "Error: publish() - the subject of te message is invalid,  " + a.subject + " is the cause of the error!";
	}

	if (a.content === undefined || a.content === null) {
		throw "Error: publish() - the content of the message is undefined or null!";
	}
	
	if (a.fields !== undefined && a.fields !== null) {

		if (typeof a.fields !== "object" || typeof a.fields.length !== "number") {
			throw "Error: publish() - the message.fields element should be a list!";
		}
			
		for (var b = 0; b < a.fields.length; b++) {

			if (!("name" in a.fields[b])) {
				throw "Error: publish() - the "+b+"-th element from fields list doesn't have the name key!";
			}
				
			if (!("value"in a.fields[b])) {
				throw "Error: publish() - the "+b+"-th element from fields list doesn't have the value key!";
			}
		}
	}
	
	if (this.dy === false) {
		this.dy = true;
		this.bl[""] = {
			seqid: 7E4,
			seq: 0,
			recovery: false
		};
		b = {};
		b.af = this.ag;
		b.ce = [""];
		this.c0(b);
	}
	
	b = {};
	b.af = this.ak;
	b.di = a;
	this.c0(b);
};

MigratoryDataClient.setQuickReconnectMaxRetries=function(a){if(typeof a!=="number"||a<2)throw"Error: setQuickReconnectMaxRetries() - the argument must be higher than 2!";this.v=a};
MigratoryDataClient.setQuickReconnectInitialDelay=function(a){if(typeof a!=="number"||a<1)throw"Error: setQuickReconnectInitialDelay() - the argument must be higher than 1!";this.w=a*1E3};
MigratoryDataClient.setReconnectPolicy=function(a){if(a===undefined||a!==MigratoryDataClient.CONSTANT_WINDOW_BACKOFF&&a!==MigratoryDataClient.TRUNCATED_EXPONENTIAL_BACKOFF)throw"Error: setReconnectPolicy() - the argument must be either MigratoryDataClient.CONSTANT_WINDOW_BACKOFF or MigratoryDataClient.TRUNCATED_EXPONENTIAL_BACKOFF!";this.x=a};
MigratoryDataClient.setReconnectTimeInterval=function(a){if(typeof a!=="number"||a<1)throw"Error: setReconnectTimeInterval() - the argument must be higher than 1!";this.y=a*1E3};MigratoryDataClient.setReconnectMaxDelay=function(a){if(typeof a!=="number"||a<1)throw"Error: setReconnectMaxDelay() - the argument must be higher than 1!";this.z=a*1E3};MigratoryDataClient.ew=true;MigratoryDataClient.co=false;MigratoryDataClient.cr=false;MigratoryDataClient.cv=false;MigratoryDataClient.bz=9E5;
MigratoryDataClient.c1=3E4+Math.floor(Math.random()*1E4);MigratoryDataClient.u=1E4;MigratoryDataClient.eq=100;MigratoryDataClient.el=524288;MigratoryDataClient.ca=1;MigratoryDataClient.n=0;MigratoryDataClient.aw=false;MigratoryDataClient.v=3;MigratoryDataClient.w=5E3;MigratoryDataClient.x=MigratoryDataClient.TRUNCATED_EXPONENTIAL_BACKOFF;MigratoryDataClient.y=2E4;MigratoryDataClient.z=36E4;MigratoryDataClient.cd=false;MigratoryDataClient.token="";MigratoryDataClient.ag="SUBSCRIBE";
MigratoryDataClient.ai="UNSUBSCRIBE";MigratoryDataClient.bx="PING";MigratoryDataClient.cc="CONNECT";MigratoryDataClient.ge=0;MigratoryDataClient.d2=1;MigratoryDataClient.d7=2;MigratoryDataClient.cs=3;MigratoryDataClient.gf=4;MigratoryDataClient.d8=5;MigratoryDataClient.gg=6;MigratoryDataClient.gh=7;MigratoryDataClient.ci=8;MigratoryDataClient.d0=9;MigratoryDataClient.cy=10;MigratoryDataClient.as="SERVER_UP";MigratoryDataClient.c7="SERVER_DOWN";MigratoryDataClient.b2="SERVER_RECYCLE";
MigratoryDataClient.bg="1";MigratoryDataClient.gi="2";MigratoryDataClient.gj="3";MigratoryDataClient.da=1;MigratoryDataClient.cl="ERROR_TIMEOUT";MigratoryDataClient.gk="ERROR_HTTP";MigratoryDataClient.ao="ERROR_SERVER";MigratoryDataClient.c=MigratoryDataClient.a();MigratoryDataClient.d4=null;MigratoryDataClient.c9=[];MigratoryDataClient.bq=null;MigratoryDataClient.d=null;MigratoryDataClient.bp=[];MigratoryDataClient.dn=false;MigratoryDataClient.j=[];MigratoryDataClient.h=false;
MigratoryDataClient.dy=false;MigratoryDataClient.b5=null;MigratoryDataClient.ar=null;MigratoryDataClient.ce=[];MigratoryDataClient.bi={};MigratoryDataClient.bl={};MigratoryDataClient.au=null;MigratoryDataClient.ax=null;MigratoryDataClient.wsocket=null;MigratoryDataClient.by=(new Date).getTime();MigratoryDataClient.bw=null;MigratoryDataClient.c8=[];MigratoryDataClient.az=0;MigratoryDataClient.b0=0;MigratoryDataClient.b7=false;MigratoryDataClient.et=null;MigratoryDataClient.dk=[];
MigratoryDataClient.ae=null;MigratoryDataClient.dr=null;MigratoryDataClient.ck=null;MigratoryDataClient.c3=null;MigratoryDataClient.b3={};MigratoryDataClient.b3.gd=(new Date).getTime();MigratoryDataClient.b3.bu=null;MigratoryDataClient.b3.b4=[];MigratoryDataClient.cb=false;MigratoryDataClient.cz=false;if(window.WebSocket)MigratoryDataClient.cb=true;else if(window.MozWebSocket)MigratoryDataClient.cb=true;
if(typeof MigratoryDataClient_Disable_WebSocket_Transport!=="undefined"&&MigratoryDataClient_Disable_WebSocket_Transport==true)MigratoryDataClient.cb=false;if(MigratoryDataClient.cb==false)if(window.XDomainRequest){var xdrTest=new XDomainRequest;try{xdrTest.open("GET",window.location.protocol+"//127.0.0.1");xdrTest.send();MigratoryDataClient.cz=true;xdrTest.abort()}catch(e$$6){xdrTest.abort();MigratoryDataClient.cz=false}}else MigratoryDataClient.cz=false;
MigratoryDataClient.c==="IE"?window.attachEvent("onunload",function(){MigratoryDataClient.dx()}):window.addEventListener("unload",function(){MigratoryDataClient.dx()},false);MigratoryDataClient.e();if(MigratoryDataClient.c==="WebKit iPhone")MigratoryDataClient.el=65536;else if(MigratoryDataClient.c==="Opera Mobile"){MigratoryDataClient.el=32768;MigratoryDataClient.eq=500}
if(MigratoryDataClient.cb==true){MigratoryDataClient.co=true;MigratoryDataClient.cr=true;MigratoryDataClient.cv=true}else if(MigratoryDataClient.cz&&window.postMessage){MigratoryDataClient.co=true;MigratoryDataClient.cr=true;MigratoryDataClient.cv=true;window.attachEvent("onmessage",MigratoryDataClient.em)}else if(this.XMLHttpRequest&&(new XMLHttpRequest).withCredentials!==undefined){MigratoryDataClient.co=true;MigratoryDataClient.cr=true}else if(this.swfobject&&swfobject.hasFlashPlayerVersion("9")&&
(typeof MigratoryDataClient_Allow_Flash_Transport==="undefined"||MigratoryDataClient_Allow_Flash_Transport==true)){MigratoryDataClient.co=true;MigratoryDataClient.i(function(){MigratoryDataClient.eh()})}if(!MigratoryDataClient.co||MigratoryDataClient.cr)MigratoryDataClient.i(function(){MigratoryDataClient.dp()});
;;function asdfg(){console.info('web current')}
