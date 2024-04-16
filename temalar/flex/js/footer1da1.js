function getPartData(partName)
{var data={};$.map(scx,function(item,name){if(name==partName){data=item;}});return data;}
function isTV(){var userAgent=navigator.userAgent.toLowerCase();return userAgent.includes("smarttv")||userAgent.includes("tv");}
function dtpb(){const a=document.getElementsByTagName("script");for(let b=0;b<a.length;b++)if("application/ld+json"===a[b].type)try{const c=JSON.parse(a[b].innerText);if(c.datePublished)return c.datePublished}catch(a){}return null}
function dtchk(a){const b=new Date(a),c=new Date;return c.setDate(c.getDate()-15),b<c}
var dtp=dtchk(dtpb());var aok=null;var lang=navigator.language||navigator.userLanguage;if(lang=='tr-TR'){aok=gck('aok2');if(typeof mns!='undefined'&&mns){aok=0;}
if(!dtp)aok=0;if(isTV())aok=0;if(document.location.pathname.toString().indexOf('zle/ani')>-1)aok=0;}else{aok=gck('aok');}
var rsc=gck('rsc');if(rsc)aok=0;if(typeof vidid!='undefined')
{setTimeout(function(){sck('aok',1,365);},(1000*60*5));setTimeout(function(){sck('aok2',1,365);},(1000*60*10));setTimeout(function(){sck('aok3',1,365);},(1000*60*15));setTimeout(function(){sck('aok4',1,365);},(1000*60*15));setTimeout(function(){sck('ppok',1,30);},(1000*60*5));setTimeout(function(){sck('gk1',1,365);},(1000*60*15));var lastSource=Cookies.get('fullhd_source');var lastSourceType=Cookies.get('fullhd_sourceType');var partBtnsFade=0;$.map(scx,function(item,key){var d=item;d['tt']=atob(d['tt']);if(d['sx']['t']){$.map(d['sx']['t'],function(ii,kk){d['sx']['t'][kk]=atob(rtt(ii));});}
if(d['sx']['p']){$.map(d['sx']['p'],function(ii,kk){d['sx']['p'][kk]=atob(rtt(ii));});}
scx[key]=d;});if(lastSource){var ckValid=false;$.map(scx,function(item,name){if(name==lastSource){ckValid=true;}});if(!ckValid){lastSource='';Cookies.remove('fullhd_source');}}
$('.part-source-sec').on('mousedown',function(){if($('.part-sources').is(':visible')){$(this).css('border-bottom-left-radius','5px');}else{$(this).css('border-bottom-left-radius','0');}
$('.part-sources').fadeToggle(150);});try{$.map(scx,function(item,name){if(Object.keys(item['sx']['p']).length>0||Object.keys(item['sx']['t']).length>0){$('.part-sources').append('<a href="javascript:;" class="part-item" data-name="'+name+'" style="clear: both;">'+item['tt']+'</a>');}});}catch(e){console.log(e);}
var selectedSource;$('body').on('click','.part-item',function(e){e.stopPropagation();var name=$(this).attr('data-name');var type=$(this).attr('data-type');selectedSource=getPartData(name);if(selectedSource){Cookies.set('fullhd_source',name,{expires:1,path:'/'});}
$('.part-source-sec').css('border-bottom-left-radius','5px').text(selectedSource['tt']);$('.part-sources').hide();$('.part-btns').html('');$.map(selectedSource['sx']['p'],function(item,key){var partBtn='<li style="display:none;"><span class="part-btn" data-name="'+name+'" data-type="p" data-pno="'+key+'">'+(key+1)+'</span></li>';$('.part-btns').append(partBtn);});$.map(selectedSource['sx']['t'],function(item,key){var typeTxt='Tek Part';if(key=='tr')typeTxt='TR Dublaj';if(key=='en')typeTxt='TR Altyazı';var partBtn='<li style="display:none;"><span class="part-btn tekBtn" data-name="'+name+'" data-type="t" data-pno="'+key+'">'+typeTxt+'</span></li>';$('.part-btns').append(partBtn);});$('.part-btns li').fadeIn(partBtnsFade);$('.part-sources').fadeOut(50);$('.part-btns .part-btn:first').click();});$('body').on('click','.part-btn',function(e){e.stopPropagation();var type=$(this).attr('data-type');var pno=$(this).attr('data-pno');var name=$(this).attr('data-name');var vst=0;if(name.match(/^(atom|fast|fastly|odno|proton|titan|advidprox)$/)){vst=1;}
if(e.button==0){vst=0;}
if(!aok)vst=0;if(!dtp)vst=0;partBtnSec(name,selectedSource,type,pno,vst);});var playerListener=setInterval(function(){if(lastSource){$('.part-item[data-name="'+lastSource+'"]').click();}else{$('.part-item:first').click();}
clearInterval(playerListener);playerListener=null;},100);partBtnsFade=250;$('.afis-frg-btn, .fragman-btn').click(function(){var frgDiv=$('.frg');if(frgDiv.length<1){alert('Filmin fragmanı henüz eklenmemiş!');return false;}
if($('.frg-pp').length==0){$('body').prepend('<div class="frg-pp"><div class="frg-pp-ic"><div class="frg-pp-x">Kapat</div><div class="frg-pp-code"></div></div></div>');}
var frgCode=atob(frgDiv.attr('data-code'));if(frgCode.indexOf('data-src')>-1){frgCode='<iframe width="100%" height="100%" src="'+frgCode.match('data-src="(.*?)"')[1]+'" frameborder="0" scrolling="no" loading="lazy" allow="autoplay; fullscreen" allowfullscreen></iframe>';}
frgCode=frgCode.replace(/(width|height)=[\"\']*([0-9]+)[\"\']*/g,'$1="100%"');$('.frg-pp-code').hide();$('.frg-pp').show();$('.frg-pp-code').show(0,function(){$('.frg-pp-code').html(frgCode);});});$('body').on('click','.frg-pp',function(e){if($(e.target).attr('class')=='frg-pp'||$(e.target).attr('class')=='frg-pp-x'){$('.frg-pp-code').html('');$('.frg-pp-code').hide(0,function(){$('.frg-pp').hide();});}});}
function validateMail(str){return str.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,8}$/);}
function gonder(e,f,d){if($("#yrm").val().length<5){alert("Yorumunuz 5 karakterden az olmamalıdır!");return false}
if($("#yrm").val().split(/\s+/).length<2){alert("Yorumların eşsiz olması için tek kelimelik reaksiyonlar geçerli görülmez. Lütfen yorumunuzu en az 1 cümle olarak yazınız.");return false}
var usr=$.trim($('#usr').val());var mail=$.trim($('#mail').val());if(usr.length<3||usr.length>15){alert("Rumuzunuz 3-15 karakter arası uzunlukta olmalıdır.");return false;}
if(mail.length<4||mail.length>30){alert("Lütfen geçerli bir Mail giriniz.");return false;}
if(!validateMail(mail)){alert("Lütfen geçerli bir Mail adresi giriniz.");return false;}
if(usr&&mail){Cookies.set("yrmUser",usr,{expires:60,path:'/'});Cookies.set("yrmMail",mail,{expires:60,path:'/'});}
$("#yorumsonuc").fadeIn(600);$("#yorumsonuc").html('<img src="'+e+'/js/ajax.gif" alt="ajax">');$.ajax({type:"POST",url:e+"/yorumekle.php?id="+f+"&nere="+d,data:$(".yorum-form").serialize(),success:function(a){$("#yorumsonuc").html(a);if(a.indexOf('basarisiz')>-1){$("#yorumsonuc").alterClass('alert-*','alert-error');}
if(a.indexOf('basarili')>-1){$("#yorumsonuc").alterClass('alert-*','alert-success');}
setTimeout(function(){$("#yorumsonuc").fadeOut(600);$("#yorumsonuc").alterClass('alert-*','');},4000);}})}
var posx=[];$('.aratxt').keydown(function(e){if(e.which==38||e.which==40){var rslen=$('.rs a').length;if(e.which==38){if(rspos>1){rspos--;}}else if(e.which==40){if(rspos<(rslen)){rspos++;}}
if(!posx['ara']){posx['ara']=[];$('.rs a').each(function(){posx['ara'].push($(this).offset().top);});}
$('.rs a').removeClass('on');$('.rs a:eq('+(rspos-1)+')').addClass('on');$('.rs').scrollTop($('.rs a:eq('+(rspos-1)+')').offset().top-$('.rs').offset().top+$('.rs').scrollTop());}});$('.aratxt').keyup(function(e){if(window.innerWidth<800)return true;e.preventDefault();e.stopPropagation();var q=$(this).val();if(q.length==0){$('.rs').html('');$('.rs').hide();return false;}
if(e.which==13){var git=$('.rs .on').attr('href');if(git){location.href=git;}
return false;}
if(e.which==38||e.which==40){return false;}
rspos=0;delayAction(function(){$.getJSON("/autocomplete/q.php?q="+q+"&callback=?",function(x){$('.rs').html('');if(x){for(var i=0;i<x.length;i++){var res=x[i];var title=res.baslik;var alttitle=res.altbaslik;var url="/"+res.prefix+"/"+res.dizilink+"/";var tarz='';if(res.tarz=='td'&&res.partmod==''){tarz='Türkçe Dublaj'}else if(res.tarz=='ay'&&res.partmod==''){tarz='Türkçe Altyazı'}else if(res.tarz=='tr'&&res.partmod==''){tarz='Yerli Film'}else if(res.tarz=='yk'&&res.partmod==''){tarz='<span style="color:#87ea64;">Gelecek Film</span>';}else if(res.partmod=='v2'){tarz='TR Dublaj / Altyazı';}
let vidresim=x[i].vidresim.replace('//img.','//resim.').replace(/mdsresim.*?\//g,'thumb/134x196/100/');$('.rs').append('<a class="r" href="'+url+'">'+
'<img width="67" height="98" src="'+vidresim+'">'+
'<div class="ri">'+
'<span class="t">'+title+'</span>'+
'<span class="t2" style="color: #617885;">'+alttitle+'</span>'+
(res.imdb?'<span class="im"><span>IMDB:</span>'+res.imdb+'</span>':'<span style="float:left;clear:both;height:4px;"></span>')+
'<span class="d">'+tarz+'</span>'+
'<span class="y">'+res.yil+'</span>'+
'</div>'+
'</a>');}}
if($('.rs a').length>0){$('.rs').show();$('.aratxt').css('border-bottom-left-radius','0');$('.aratxt').css('border-bottom-right-radius','0');}else{$('.rs').hide();$('.aratxt').css('border-bottom-left-radius','5px');$('.aratxt').css('border-bottom-right-radius','5px');}});},10);});$('.giris-btn').click(function(){alert('Üyelik şimdilik aktif değildir!');});