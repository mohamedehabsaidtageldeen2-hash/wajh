var CATS=["رجال وسيدات أعمال","رؤساء تنفيذيون","أطباء","محامون","رواد أعمال","أكاديميون","مبرمجون ومصممون","فنانون وإعلاميون","مؤسسات تقنية","شركات عائلية","جهات حكومية","مؤسسات تعليمية"];
var KEY="wajh_v2",FKEY="wajh_favs",ADMIN_PIN="1234";
var SEED=[
{id:"1",type:"p",name:"ليلى المنصوري",en:"Layla Al-Mansouri",job:"الرئيسة التنفيذية",org:"مجموعة أفق",nat:"إماراتية",country:"الإمارات",cat:"رؤساء تنفيذيون",verified:true,views:980,created:1,bio:"قيادية في قطاع الخدمات اللوجستية.",links:{}},
{id:"2",type:"p",name:"كريم النجار",en:"Karim Al-Najjar",job:"مؤسس",org:"نبض للتقنية",nat:"مصري",country:"مصر",cat:"رواد أعمال",verified:true,views:870,created:2,bio:"رائد أعمال في التقنية المالية.",links:{}},
{id:"3",type:"p",name:"د. سلمى الحربي",en:"Dr. Salma Al-Harbi",job:"استشارية قلب",org:"مستشفى الشفاء",nat:"سعودية",country:"السعودية",cat:"أطباء",verified:false,views:640,created:3,bio:"متخصصة في أمراض القلب.",links:{}},
{id:"4",type:"c",name:"مجموعة أفق",en:"Ofoq Group",job:"خدمات لوجستية",org:"",country:"الإمارات",cat:"مؤسسات تقنية",year:2010,verified:true,views:1200,created:4,bio:"شركة لوجستية إقليمية.",links:{}}];
var store={
 all:function(){try{var d=JSON.parse(localStorage.getItem(KEY));if(d)return d}catch(e){}return SEED.slice()},
 save:function(a){localStorage.setItem(KEY,JSON.stringify(a))},
 get:function(id){return this.all().find(function(x){return x.id==id})},
 put:function(o){var a=this.all(),i=a.findIndex(function(x){return x.id==o.id});if(i>-1)a[i]=o;else a.push(o);this.save(a)},
 del:function(id){this.save(this.all().filter(function(x){return x.id!=id}))}
};
function load(){return store.all()}
function esc(s){var d=document.createElement("div");d.textContent=s==null?"":s;return d.innerHTML}
function safeUrl(u){return /^https?:\/\//i.test(u||"")?u:"#"}
function favs(){try{return JSON.parse(localStorage.getItem(FKEY))||[]}catch(e){return[]}}
function toggleFav(id){var f=favs(),i=f.indexOf(id);if(i>-1)f.splice(i,1);else f.push(id);localStorage.setItem(FKEY,JSON.stringify(f));if(window.draw)draw()}
function av(p){return p.photo?'<img src="'+p.photo+'" alt="">':esc((p.name||"؟").replace("د. ","").charAt(0))}
function card(p){var f=favs().indexOf(p.id)>-1;
 return '<div class="card"><button class="fav" title="مفضلة" onclick="toggleFav(\''+p.id+'\')">'+(f?"★":"☆")+'</button><a href="profile.html?id='+encodeURIComponent(p.id)+'"><div class="av'+(p.type=="c"?" co":"")+'">'+av(p)+'</div><b>'+esc(p.name)+(p.verified?' <span class="vb">✔</span>':'')+'</b><div class="m">'+esc(p.job)+(p.org?" · "+esc(p.org):"")+'</div></a></div>'}
function applyTheme(t){document.documentElement.setAttribute("data-theme",t)}
applyTheme(localStorage.getItem("wajh_theme")||"light");
function toggleTheme(){var t=document.documentElement.getAttribute("data-theme")=="dark"?"light":"dark";localStorage.setItem("wajh_theme",t);applyTheme(t)}
document.body.insertAdjacentHTML("afterbegin",'<header><a class="logo" href="index.html">وجوه<b>.</b></a><nav><a href="index.html">الرئيسية</a><a href="index.html?type=p">الأشخاص</a><a href="index.html?type=c">المؤسسات</a><a href="index.html?fav=1">المفضلة</a><a href="admin.html">المشرف</a></nav><button class="g" onclick="toggleTheme()">🌓</button><a class="btn" href="add.html">+ أضف</a></header>');
document.body.insertAdjacentHTML("beforeend",'<footer>وجوه © 2026 · <a href="admin.html">إدارة</a></footer>');