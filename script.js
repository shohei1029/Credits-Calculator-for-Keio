$(function(){
var credit=0;
var credits=0;
var free= 0;
var eval = {};
eval.s=eval.a=eval.b=eval.c=eval.d=eval.p=eval.f=eval.g=eval.star= 0;
var gpa = 0;


$(".User td").each(function(){ //検索結果ごとに処理しますよ。
var str = $(this).html();
//単位
if ( str.match(/取得合計/)) {
str = str.replace(/取得合計 /g,"");
str = str.replace(/単位/g,"");
var num = Number(str);
credits += num;
}


if ( str.match(/自由科目/)) {
str_f = $(this).next().html();
str_f = str_f.replace(/取得合計 /g,"");
str_f = str_f.replace(/単位/g,"");
var num2 = Number(str_f);
free += num2;
}

if ( str.match(/分野：/)) {
$(this).parent().css('background-color','#dddddd');
}


//評価
if ( str=='Ｓ'||str=='Ａ'||str=='Ｂ'||str=='Ｃ'||str=='Ｄ'||str=='Ｐ'||str=='Ｆ'||str=='Ｇ'||str=='★') {
switch (str){
  case 'Ｓ':
  credit = $(this).next().html();
  credit = Number(credit);
  eval.s +=credit;
  $(this).css('background-color','#e77f3c');
    break;
  case 'Ａ':
  credit = $(this).next().html();
  credit = Number(credit);
  eval.a +=credit;
  $(this).css('background-color','#e74c3c');
    break;
  case 'Ｂ':
  credit = $(this).next().html();
  credit = Number(credit);
  eval.b +=credit;
  $(this).css('background-color','#3498db');
    break;
  case 'Ｃ':
  credit = $(this).next().html();
  credit = Number(credit);
  eval.c +=credit;
  $(this).css('background-color','#f1e10e');
    break;
  case 'Ｄ':
  credit = $(this).next().html();
  credit = Number(credit);
  eval.d +=credit;
  $(this).css('background-color','#34495e');
    break;
  case 'Ｐ':
  credit = $(this).next().html();
  credit = Number(credit);
  eval.p +=credit;
  $(this).css('background-color','#1abc9c');
    break;
  case 'Ｆ':
  credit = $(this).next().html();
  credit = Number(credit);
  eval.f +=credit;
  $(this).css('background-color','#9b59b6');
    break;
  case 'Ｇ':
  credit = $(this).next().html();
  credit = Number(credit);
  eval.g +=credit;
  $(this).css('background-color','#2ecc71');
    break;
  case '★':
  credit = $(this).next().html();
  credit = Number(credit);
  eval.star +=credit;
  $(this).css('background-color','#95a5a6');
    break;
}
}

});

//gpa = (4*eval.s + 3*eval.a + 2*eval.b + 1*eval.c + 0*eval.d)/credits;
gpa = (4*eval.s + 3*eval.a + 2*eval.b + 1*eval.c + 0*eval.d)/(eval.s + eval.a + eval.b + eval.c + eval.d);

credits = credits - free;
$("table.User:nth-child(2) tr:last").html('<td colspan="6">評語別単位数 Ｓ:'+eval.s+' Ａ:'+eval.a+' Ｂ:'+eval.b+' Ｃ:'+eval.c+' Ｄ:'+eval.d+' Ｐ:'+eval.p+' Ｆ:'+eval.f+' Ｇ:'+eval.g+' ★:'+eval.star+' <br>GPA:'+gpa+'</td><td colspan="2" style="color:red" align="center">計 '+credits+'単位<br>+自由科目'+free+'単位</td>');
$("table.User:nth-child(2) tbody").append('<tr><td colspan="8"><span align="left">&nbsp;&nbsp;&nbsp;  GPA =&nbsp; <u> 4×(Sの単位数) + 3×(Aの単位数) + 2×(Bの単位数) + 1×(Cの単位数) </u><br></span><span align="left">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  総履修単位数(S〜Dの評語がついた全科目の単位数合計)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;で計算しています。</span></td></tr>');
$("table.User:nth-child(2) tbody").append('<tr><td colspan="8" align="center" style="color:red">※計算結果には自由単位が含まれています。注意してください。</td></tr>')

});
