﻿;(_=>{
let hc={'<':'&lt;','&':'&amp;',"'":'&apos;','"':'&quot;'},he=x=>x.replace(/[<&'"]/g,c=>hc[c]) //html chars and escape fn
,tcs='<-←xx×:-÷*O⍟[-⌹-]⌹OO○77⌈FF⌈ll⌊LL⌊|_⊥TT⊤-|⊣|-⊢=/≠<=≤<_≤>=≥>_≥==≡=_≡/_≢vv∨^^∧^~⍲v~⍱^|↑v|↓((⊂(_⊆))⊃[|⌷|]⌷A|⍋V|⍒ii⍳i_⍸ee∊e_⍷'+
'uu∪UU∪nn∩/-⌿\\-⍀,-⍪rr⍴pp⍴O|⌽O-⊖O\\⍉::¨~:⍨*:⍣oo∘o:⍤[\'⍞\']⍞[]⎕[:⍠:]⍠[=⌸=]⌸[<⌺>]⌺o_⍎oT⍕<>⋄on⍝aa⍺ww⍵VV∇--¯0~⍬'+
'^-∆^=⍙[?⍰?]⍰:V⍢||∥ox¤)_⊇_)⊇O:⍥:O⍥V~⍫'
,lbs=['←←\nASSIGN',' ','++\nconjugate\nplus','--\nnegate\nminus','××\ndirection\ntimes','÷÷\nreciprocal\ndivide','**\nexponential\npower','⍟⍟\nnatural logarithm\nlogarithm',
'⌹⌹\nmatrix inverse\nmatrix divide','○○\npi times\ncircular','!!\nfactorial\nbinomial','??\nroll\ndeal',' ','||\nmagnitude\nresidue',
'⌈⌈\nceiling\nmaximum','⌊⌊\nfloor\nminimum','⊥⊥\ndecode','⊤⊤\nencode','⊣⊣\nsame\nleft','⊢⊢\nsame\nright',' ','==\nequal','≠≠\nnot equal',
'≤≤\nless than or equal to','<<\nless than','>>\ngreater than','≥≥\ngreater than or equal to','≡≡\ndepth\nmatch','≢≢\ntally\nnot match',' ','∨∨\ngreatest common divisor/or',
'∧∧\nlowest common multiple/and','⍲⍲\nnand','⍱⍱\nnor',' ','↑↑\nmix\ntake','↓↓\nsplit\ndrop','⊂⊂\nenclose\npartioned enclose','⊃⊃\nfirst\npick','⊆⊆\nnest\npartition\n','⌷⌷\nindex','⍋⍋\ngrade up\ngrade up',
'⍒⍒\ngrade down\ngrade down',' ','⍳⍳\nindices\nindices of','⍸⍸\nwhere\ninterval index','∊∊\nenlist\nmember of','⍷⍷\nfind','∪∪\nunique\nunion','∩∩\nintersection','~~\nnot\nwithout',' ',
'//\nreplicate\nReduce','\\\n\expand\nScan','⌿⌿\nreplicate first\nReduce First','⍀⍀\nexpand first\nScan First',' ',',,\nenlist\ncatenate/laminate',
'⍪⍪\ntable\ncatenate first/laminate','⍴⍴\nshape\nreshape','⌽⌽\nreverse\nrotate','⊖⊖\nreverse first\nrotate first',
'⍉⍉\ntranspose\nreorder axes',' ','¨¨\nEach','⍨⍨\nSelfie\nSwap','⍣⍣\nRepeat','..\nOuter Product (∘.)\nInner Product',
'∘∘\nOUTER PRODUCT (∘.)\nCurry\nCompose','⍤⍤\nRank','@@\nAt',' ','⍞⍞\nSTDIN\nSTDERR','⎕⎕\nEVALUATED STDIN\nSTDOUT','⍠⍠\nVariant',
'⌸⌸\nIndex Key\nKey\n','⌺⌺\nStencil','⌶⌶\nI-Beam','⍎⍎\nexecute','⍕⍕\nformat',' ','⋄⋄\nSTATEMENT SEPARATOR','⍝⍝\nCOMMENT','→→\nABORT\nBRANCH','⍵⍵\nRIGHT ARGUMENT','⍺⍺\nLEFT ARGUMENT',
'∇∇\nrecursion','&&\nSpawn',' ','¯¯\nNEGATIVE','⍬⍬\nEMPTY NUMERIC VECTOR','∆∆\nIDENTIFIER CHARACTER','⍙⍙\nIDENTIFIER CHARACTER']
,bqk=' =1234567890-qwertyuiop\\asdfghjk∙l;\'zxcvbnm,./`[]+!@#$%^&*()_QWERTYUIOP|ASDFGHJKL:"ZXCVBNM<>?~{}'.replace(/∙/g,'')
,bqv='`÷¨¯<≤=≥>≠∨∧×?⍵∊⍴~↑↓⍳○*⊢∙⍺⌈⌊_∇∆∘\'⎕⍎⍕∙⊂⊃∩∪⊥⊤|⍝⍀⌿⋄←→⌹⌶⍫⍒⍋⌽⍉⊖⍟⍱⍲!⍰W⍷⍷⍨YU⍸⍥⍣⊣ASDF⍢H⍤⌸⌷≡≢⊆⊇CVB¤∥⍪⍙⍠⌺⍞⍬'.replace(/∙/g,'')
,tc={},bqc={} //tab completions and ` completions
for(let i=0;i<bqk.length;i++)bqc[bqk[i]]=bqv[i]
for(let i=0;i<tcs.length;i+=3)tc[tcs[i]+tcs[i+1]]=tcs[i+2]
for(let i=0;i<tcs.length;i+=3){let k=tcs[i+1]+tcs[i];tc[k]=tc[k]||tcs[i+2]}
let lbh='';for(let i=0;i<lbs.length;i++){
  let ks=[]
  for(let j=0;j<tcs.length;j+=3)if(lbs[i][0]===tcs[j+2])ks.push('\n'+tcs[j]+' '+tcs[j+1]+' <tab>')
  for(let j=0;j<bqk.length;j++)if(lbs[i][0]===bqv[j])ks.push('\n` '+bqk[j])
  lbh+='<b title="'+he(lbs[i].slice(1)+(ks.length?'\n'+ks.join(''):''))+'">'+lbs[i][0]+'</b>'
}
let d=document,el=d.createElement('div');el.id='languageBar';el.innerHTML=
`<div class=ngn_lb><span class=ngn_x title=Close>&#x274E;&#xFE0E;</span><span class="ngn_zoom" id="ngn_plustext" alt="Increase fontsize">&#x2795;</span><span class="ngn_zoom" id="ngn_minustext" alt="Decrease fontsize">&#x2796;</span>${lbh}</div>
 <style>@font-face{font-family:"APL385 Unicode";src:local("APL385 Unicode"),url(//abrudz.github.io/lb/Apl385.woff)format('woff');}</style>
 <style>
  .ngn_lb{position:fixed;top:0;left:0;right:0;background-color:#eee;color:#000;cursor:default;z-index:2147483647;
    font-family:"Apl385 Unicode",monospace;border-bottom:solid #999 1px;padding:2px 2px 0 2px;word-wrap:break-word;}
  .ngn_lb b{cursor:pointer;padding:0 1px;font-weight:normal}
  .ngn_lb b:hover,.ngn_bq .ngn_lb{background-color:#777;color:#fff}
  .ngn_x{float:right;color: #f00; cursor:pointer;margin-top:-3px;line-height:1}
  .ngn_zoom {color: green; float:right;font-size: .7em; margin-top: -3px;}
  #ngn_plustext{margin-right: .2em;}
 </style>`
d.body.appendChild(el)
let t,ts=[],lb=el.firstChild,bqm=0 //t:textarea or input, lb:language bar, bqm:backquote mode
let resT=multiplier=>{
	let ngn = document.body.querySelector('.ngn_lb')
  if (ngn.style.fontSize == "") {
    ngn.style.fontSize = "1.0em";
  }
  ngn.style.fontSize = parseFloat(ngn.style.fontSize) + (multiplier * 0.15) + "em";
document.body.style.marginTop=ngn.clientHeight+'px';
document.dispatchEvent(new CustomEvent("ngn_resize",{}));
}
let pd=x=>x.preventDefault()
let ev=(x,t,f,c)=>x.addEventListener(t,f,c)
ev(lb,'mousedown',x=>{
  if(x.target.classList.contains('ngn_x')){lb.hidden=1;upd();pd(x);return}
  if(x.target.nodeName==='B'&&t){
    let i=t.selectionStart,j=t.selectionEnd,v=t.value,s=x.target.textContent
    if(i!=null&&j!=null){t.value=v.slice(0,i)+s+v.slice(j);t.selectionStart=t.selectionEnd=i+s.length}
    pd(x);return
  }
  if(x.target.id=='ngn_minustext')resizeText(-1);
  if(x.target.id=='ngn_plustext')resizeText(1);
})
let fk=x=>{
  let t=x.target
  if(bqm){let i=t.selectionStart,v=t.value,c=bqc[x.key];if(x.which>31){bqm=0;d.body.classList.remove('ngn_bq')}
          if(c){t.value=v.slice(0,i)+c+v.slice(i);t.selectionStart=t.selectionEnd=i+1;pd(x);return!1}}
  switch(x.ctrlKey+2*x.shiftKey+4*x.altKey+8*x.metaKey+100*x.which){
    case 19200:bqm=1;d.body.classList.add('ngn_bq');pd(x);break //`
    case   900:{let i=t.selectionStart,v=t.value,c=tc[v.slice(i-2,i)] //tab
                if(c){t.value=v.slice(0,i-2)+c+v.slice(i);t.selectionStart=t.selectionEnd=i-1;pd(x)}
                break}
  }
}
let ff=x=>{
  let t0=x.target,nn=t0.nodeName.toLowerCase()
  if(nn!=='textarea'&&(nn!=='input'||t0.type!=='text'&&t0.type!=='search'))return
  t=t0;if(!t.ngn){t.ngn=1;ts.push(t);ev(t,'keydown',fk)}
}
ev(lb,'mousewheel',x=>{resizeText(x.deltaY<0?1:-1);pd(x);return}) // Firefox calls the event differently, but we don't care about them ;-)
let upd=_=>{d.body.style.marginTop=lb.clientHeight+'px';document.dispatchEvent(new CustomEvent("ngn_resize",{}))}
upd();ev(window,'resize',upd())
ev(d,'focus',ff,!0);let ae=d.activeElement;ae&&ff({type:'focus',target:ae})
})();
