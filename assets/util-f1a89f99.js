import{m as Ve}from"./HTTPFileSystem-1abeeaf0.js";var H={},B={};(function(e){const t=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",r=t+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",s="["+t+"]["+r+"]*",n=new RegExp("^"+s+"$"),i=function(f,o){const u=[];let l=o.exec(f);for(;l;){const c=[];c.startIndex=o.lastIndex-l[0].length;const d=l.length;for(let h=0;h<d;h++)c.push(l[h]);u.push(c),l=o.exec(f)}return u},a=function(f){const o=n.exec(f);return!(o===null||typeof o>"u")};e.isExist=function(f){return typeof f<"u"},e.isEmptyObject=function(f){return Object.keys(f).length===0},e.merge=function(f,o,u){if(o){const l=Object.keys(o),c=l.length;for(let d=0;d<c;d++)u==="strict"?f[l[d]]=[o[l[d]]]:f[l[d]]=o[l[d]]}},e.getValue=function(f){return e.isExist(f)?f:""},e.isName=a,e.getAllMatches=i,e.nameRegexp=s})(B);const j=B,_e={allowBooleanAttributes:!1,unpairedTags:[]};H.validate=function(e,t){t=Object.assign({},_e,t);const r=[];let s=!1,n=!1;e[0]==="\uFEFF"&&(e=e.substr(1));for(let i=0;i<e.length;i++)if(e[i]==="<"&&e[i+1]==="?"){if(i+=2,i=he(e,i),i.err)return i}else if(e[i]==="<"){let a=i;if(i++,e[i]==="!"){i=ge(e,i);continue}else{let f=!1;e[i]==="/"&&(f=!0,i++);let o="";for(;i<e.length&&e[i]!==">"&&e[i]!==" "&&e[i]!=="	"&&e[i]!==`
`&&e[i]!=="\r";i++)o+=e[i];if(o=o.trim(),o[o.length-1]==="/"&&(o=o.substring(0,o.length-1),i--),!Ge(o)){let c;return o.trim().length===0?c="Invalid space after '<'.":c="Tag '"+o+"' is an invalid name.",p("InvalidTag",c,v(e,i))}const u=Me(e,i);if(u===!1)return p("InvalidAttr","Attributes for '"+o+"' have open quote.",v(e,i));let l=u.value;if(i=u.index,l[l.length-1]==="/"){const c=i-l.length;l=l.substring(0,l.length-1);const d=pe(l,t);if(d===!0)s=!0;else return p(d.err.code,d.err.msg,v(e,c+d.err.line))}else if(f)if(u.tagClosed){if(l.trim().length>0)return p("InvalidTag","Closing tag '"+o+"' can't have attributes or invalid starting.",v(e,a));{const c=r.pop();if(o!==c.tagName){let d=v(e,c.tagStartPos);return p("InvalidTag","Expected closing tag '"+c.tagName+"' (opened in line "+d.line+", col "+d.col+") instead of closing tag '"+o+"'.",v(e,a))}r.length==0&&(n=!0)}}else return p("InvalidTag","Closing tag '"+o+"' doesn't have proper closing.",v(e,i));else{const c=pe(l,t);if(c!==!0)return p(c.err.code,c.err.msg,v(e,i-l.length+c.err.line));if(n===!0)return p("InvalidXml","Multiple possible root nodes found.",v(e,i));t.unpairedTags.indexOf(o)!==-1||r.push({tagName:o,tagStartPos:a}),s=!0}for(i++;i<e.length;i++)if(e[i]==="<")if(e[i+1]==="!"){i++,i=ge(e,i);continue}else if(e[i+1]==="?"){if(i=he(e,++i),i.err)return i}else break;else if(e[i]==="&"){const c=Re(e,i);if(c==-1)return p("InvalidChar","char '&' is not expected.",v(e,i));i=c}else if(n===!0&&!de(e[i]))return p("InvalidXml","Extra text at the end",v(e,i));e[i]==="<"&&i--}}else{if(de(e[i]))continue;return p("InvalidChar","char '"+e[i]+"' is not expected.",v(e,i))}if(s){if(r.length==1)return p("InvalidTag","Unclosed tag '"+r[0].tagName+"'.",v(e,r[0].tagStartPos));if(r.length>0)return p("InvalidXml","Invalid '"+JSON.stringify(r.map(i=>i.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1})}else return p("InvalidXml","Start tag expected.",1);return!0};function de(e){return e===" "||e==="	"||e===`
`||e==="\r"}function he(e,t){const r=t;for(;t<e.length;t++)if(e[t]=="?"||e[t]==" "){const s=e.substr(r,t-r);if(t>5&&s==="xml")return p("InvalidXml","XML declaration allowed only at the start of the document.",v(e,t));if(e[t]=="?"&&e[t+1]==">"){t++;break}else continue}return t}function ge(e,t){if(e.length>t+5&&e[t+1]==="-"&&e[t+2]==="-"){for(t+=3;t<e.length;t++)if(e[t]==="-"&&e[t+1]==="-"&&e[t+2]===">"){t+=2;break}}else if(e.length>t+8&&e[t+1]==="D"&&e[t+2]==="O"&&e[t+3]==="C"&&e[t+4]==="T"&&e[t+5]==="Y"&&e[t+6]==="P"&&e[t+7]==="E"){let r=1;for(t+=8;t<e.length;t++)if(e[t]==="<")r++;else if(e[t]===">"&&(r--,r===0))break}else if(e.length>t+9&&e[t+1]==="["&&e[t+2]==="C"&&e[t+3]==="D"&&e[t+4]==="A"&&e[t+5]==="T"&&e[t+6]==="A"&&e[t+7]==="["){for(t+=8;t<e.length;t++)if(e[t]==="]"&&e[t+1]==="]"&&e[t+2]===">"){t+=2;break}}return t}const ke='"',Le="'";function Me(e,t){let r="",s="",n=!1;for(;t<e.length;t++){if(e[t]===ke||e[t]===Le)s===""?s=e[t]:s!==e[t]||(s="");else if(e[t]===">"&&s===""){n=!0;break}r+=e[t]}return s!==""?!1:{value:r,index:t,tagClosed:n}}const Be=new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");function pe(e,t){const r=j.getAllMatches(e,Be),s={};for(let n=0;n<r.length;n++){if(r[n][1].length===0)return p("InvalidAttr","Attribute '"+r[n][2]+"' has no space in starting.",V(r[n]));if(r[n][3]!==void 0&&r[n][4]===void 0)return p("InvalidAttr","Attribute '"+r[n][2]+"' is without value.",V(r[n]));if(r[n][3]===void 0&&!t.allowBooleanAttributes)return p("InvalidAttr","boolean attribute '"+r[n][2]+"' is not allowed.",V(r[n]));const i=r[n][2];if(!Ue(i))return p("InvalidAttr","Attribute '"+i+"' is an invalid name.",V(r[n]));if(!s.hasOwnProperty(i))s[i]=1;else return p("InvalidAttr","Attribute '"+i+"' is repeated.",V(r[n]))}return!0}function Xe(e,t){let r=/\d/;for(e[t]==="x"&&(t++,r=/[\da-fA-F]/);t<e.length;t++){if(e[t]===";")return t;if(!e[t].match(r))break}return-1}function Re(e,t){if(t++,e[t]===";")return-1;if(e[t]==="#")return t++,Xe(e,t);let r=0;for(;t<e.length;t++,r++)if(!(e[t].match(/\w/)&&r<20)){if(e[t]===";")break;return-1}return t}function p(e,t,r){return{err:{code:e,msg:t,line:r.line||r,col:r.col}}}function Ue(e){return j.isName(e)}function Ge(e){return j.isName(e)}function v(e,t){const r=e.substring(0,t).split(/\r?\n/);return{line:r.length,col:r[r.length-1].length+1}}function V(e){return e.startIndex+e[1].length}var D={};const be={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(e,t,r){return e}},ze=function(e){return Object.assign({},be,e)};D.buildOptions=ze;D.defaultOptions=be;class Ye{constructor(t){this.tagname=t,this.child=[],this[":@"]={}}add(t,r){t==="__proto__"&&(t="#__proto__"),this.child.push({[t]:r})}addChild(t){t.tagname==="__proto__"&&(t.tagname="#__proto__"),t[":@"]&&Object.keys(t[":@"]).length>0?this.child.push({[t.tagname]:t.child,":@":t[":@"]}):this.child.push({[t.tagname]:t.child})}}var Ze=Ye;const Je=B;function qe(e,t){const r={};if(e[t+3]==="O"&&e[t+4]==="C"&&e[t+5]==="T"&&e[t+6]==="Y"&&e[t+7]==="P"&&e[t+8]==="E"){t=t+9;let s=1,n=!1,i=!1,a="";for(;t<e.length;t++)if(e[t]==="<"&&!i){if(n&&Qe(e,t))t+=7,[entityName,val,t]=We(e,t+1),val.indexOf("&")===-1&&(r[et(entityName)]={regx:RegExp(`&${entityName};`,"g"),val});else if(n&&He(e,t))t+=8;else if(n&&je(e,t))t+=8;else if(n&&De(e,t))t+=9;else if(Ke)i=!0;else throw new Error("Invalid DOCTYPE");s++,a=""}else if(e[t]===">"){if(i?e[t-1]==="-"&&e[t-2]==="-"&&(i=!1,s--):s--,s===0)break}else e[t]==="["?n=!0:a+=e[t];if(s!==0)throw new Error("Unclosed DOCTYPE")}else throw new Error("Invalid Tag instead of DOCTYPE");return{entities:r,i:t}}function We(e,t){let r="";for(;t<e.length&&e[t]!=="'"&&e[t]!=='"';t++)r+=e[t];if(r=r.trim(),r.indexOf(" ")!==-1)throw new Error("External entites are not supported");const s=e[t++];let n="";for(;t<e.length&&e[t]!==s;t++)n+=e[t];return[r,n,t]}function Ke(e,t){return e[t+1]==="!"&&e[t+2]==="-"&&e[t+3]==="-"}function Qe(e,t){return e[t+1]==="!"&&e[t+2]==="E"&&e[t+3]==="N"&&e[t+4]==="T"&&e[t+5]==="I"&&e[t+6]==="T"&&e[t+7]==="Y"}function He(e,t){return e[t+1]==="!"&&e[t+2]==="E"&&e[t+3]==="L"&&e[t+4]==="E"&&e[t+5]==="M"&&e[t+6]==="E"&&e[t+7]==="N"&&e[t+8]==="T"}function je(e,t){return e[t+1]==="!"&&e[t+2]==="A"&&e[t+3]==="T"&&e[t+4]==="T"&&e[t+5]==="L"&&e[t+6]==="I"&&e[t+7]==="S"&&e[t+8]==="T"}function De(e,t){return e[t+1]==="!"&&e[t+2]==="N"&&e[t+3]==="O"&&e[t+4]==="T"&&e[t+5]==="A"&&e[t+6]==="T"&&e[t+7]==="I"&&e[t+8]==="O"&&e[t+9]==="N"}function et(e){if(Je.isName(e))return e;throw new Error(`Invalid entity name ${e}`)}var tt=qe;const rt=/^[-+]?0x[a-fA-F0-9]+$/,nt=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt);!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);const st={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};function it(e,t={}){if(t=Object.assign({},st,t),!e||typeof e!="string")return e;let r=e.trim();if(t.skipLike!==void 0&&t.skipLike.test(r))return e;if(t.hex&&rt.test(r))return Number.parseInt(r,16);{const s=nt.exec(r);if(s){const n=s[1],i=s[2];let a=ot(s[3]);const f=s[4]||s[6];if(!t.leadingZeros&&i.length>0&&n&&r[2]!==".")return e;if(!t.leadingZeros&&i.length>0&&!n&&r[1]!==".")return e;{const o=Number(r),u=""+o;return u.search(/[eE]/)!==-1||f?t.eNotation?o:e:r.indexOf(".")!==-1?u==="0"&&a===""||u===a||n&&u==="-"+a?o:e:i?a===u||n+a===u?o:e:r===u||r===n+u?o:e}}else return e}}function ot(e){return e&&e.indexOf(".")!==-1&&(e=e.replace(/0+$/,""),e==="."?e="0":e[0]==="."?e="0"+e:e[e.length-1]==="."&&(e=e.substr(0,e.length-1))),e}var ft=it;const ee=B,_=Ze,ut=tt,at=ft;"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,ee.nameRegexp);let lt=class{constructor(t){this.options=t,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.ampEntity={regex:/&(amp|#38|#x26);/g,val:"&"},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"¢"},pound:{regex:/&(pound|#163);/g,val:"£"},yen:{regex:/&(yen|#165);/g,val:"¥"},euro:{regex:/&(euro|#8364);/g,val:"€"},copyright:{regex:/&(copy|#169);/g,val:"©"},reg:{regex:/&(reg|#174);/g,val:"®"},inr:{regex:/&(inr|#8377);/g,val:"₹"}},this.addExternalEntities=ct,this.parseXml=Nt,this.parseTextData=dt,this.resolveNameSpace=ht,this.buildAttributesMap=pt,this.isItStopNode=Tt,this.replaceEntitiesValue=vt,this.readStopNodeData=wt,this.saveTextToParentTag=Et,this.addChild=bt}};function ct(e){const t=Object.keys(e);for(let r=0;r<t.length;r++){const s=t[r];this.lastEntities[s]={regex:new RegExp("&"+s+";","g"),val:e[s]}}}function dt(e,t,r,s,n,i,a){if(e!==void 0&&(this.options.trimValues&&!s&&(e=e.trim()),e.length>0)){a||(e=this.replaceEntitiesValue(e));const f=this.options.tagValueProcessor(t,e,r,n,i);return f==null?e:typeof f!=typeof e||f!==e?f:this.options.trimValues?K(e,this.options.parseTagValue,this.options.numberParseOptions):e.trim()===e?K(e,this.options.parseTagValue,this.options.numberParseOptions):e}}function ht(e){if(this.options.removeNSPrefix){const t=e.split(":"),r=e.charAt(0)==="/"?"/":"";if(t[0]==="xmlns")return"";t.length===2&&(e=r+t[1])}return e}const gt=new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,"gm");function pt(e,t,r){if(!this.options.ignoreAttributes&&typeof e=="string"){const s=ee.getAllMatches(e,gt),n=s.length,i={};for(let a=0;a<n;a++){const f=this.resolveNameSpace(s[a][1]);let o=s[a][4],u=this.options.attributeNamePrefix+f;if(f.length)if(this.options.transformAttributeName&&(u=this.options.transformAttributeName(u)),u==="__proto__"&&(u="#__proto__"),o!==void 0){this.options.trimValues&&(o=o.trim()),o=this.replaceEntitiesValue(o);const l=this.options.attributeValueProcessor(f,o,t);l==null?i[u]=o:typeof l!=typeof o||l!==o?i[u]=l:i[u]=K(o,this.options.parseAttributeValue,this.options.numberParseOptions)}else this.options.allowBooleanAttributes&&(i[u]=!0)}if(!Object.keys(i).length)return;if(this.options.attributesGroupName){const a={};return a[this.options.attributesGroupName]=i,a}return i}}const Nt=function(e){e=e.replace(/\r\n?/g,`
`);const t=new _("!xml");let r=t,s="",n="";for(let i=0;i<e.length;i++)if(e[i]==="<")if(e[i+1]==="/"){const f=I(e,">",i,"Closing Tag is not closed.");let o=e.substring(i+2,f).trim();if(this.options.removeNSPrefix){const c=o.indexOf(":");c!==-1&&(o=o.substr(c+1))}this.options.transformTagName&&(o=this.options.transformTagName(o)),r&&(s=this.saveTextToParentTag(s,r,n));const u=n.substring(n.lastIndexOf(".")+1);if(o&&this.options.unpairedTags.indexOf(o)!==-1)throw new Error(`Unpaired tag can not be used as closing tag: </${o}>`);let l=0;u&&this.options.unpairedTags.indexOf(u)!==-1?(l=n.lastIndexOf(".",n.lastIndexOf(".")-1),this.tagsNodeStack.pop()):l=n.lastIndexOf("."),n=n.substring(0,l),r=this.tagsNodeStack.pop(),s="",i=f}else if(e[i+1]==="?"){let f=W(e,i,!1,"?>");if(!f)throw new Error("Pi Tag is not closed.");if(s=this.saveTextToParentTag(s,r,n),!(this.options.ignoreDeclaration&&f.tagName==="?xml"||this.options.ignorePiTags)){const o=new _(f.tagName);o.add(this.options.textNodeName,""),f.tagName!==f.tagExp&&f.attrExpPresent&&(o[":@"]=this.buildAttributesMap(f.tagExp,n,f.tagName)),this.addChild(r,o,n)}i=f.closeIndex+1}else if(e.substr(i+1,3)==="!--"){const f=I(e,"-->",i+4,"Comment is not closed.");if(this.options.commentPropName){const o=e.substring(i+4,f-2);s=this.saveTextToParentTag(s,r,n),r.add(this.options.commentPropName,[{[this.options.textNodeName]:o}])}i=f}else if(e.substr(i+1,2)==="!D"){const f=ut(e,i);this.docTypeEntities=f.entities,i=f.i}else if(e.substr(i+1,2)==="!["){const f=I(e,"]]>",i,"CDATA is not closed.")-2,o=e.substring(i+9,f);if(s=this.saveTextToParentTag(s,r,n),this.options.cdataPropName)r.add(this.options.cdataPropName,[{[this.options.textNodeName]:o}]);else{let u=this.parseTextData(o,r.tagname,n,!0,!1,!0);u==null&&(u=""),r.add(this.options.textNodeName,u)}i=f+2}else{let f=W(e,i,this.options.removeNSPrefix),o=f.tagName,u=f.tagExp,l=f.attrExpPresent,c=f.closeIndex;this.options.isFirefox&&(o==="link"||o=="node")&&console.log(o),this.options.transformTagName&&(o=this.options.transformTagName(o)),r&&s&&r.tagname!=="!xml"&&(s=this.saveTextToParentTag(s,r,n,!1));const d=r;if(d&&this.options.unpairedTags.indexOf(d.tagname)!==-1&&(r=this.tagsNodeStack.pop(),n=n.substring(0,n.lastIndexOf("."))),o!==t.tagname&&(n+=n?"."+o:o),this.isItStopNode(this.options.stopNodes,n,o)){let h="";if(u.length>0&&u.lastIndexOf("/")===u.length-1)i=f.closeIndex;else if(this.options.unpairedTags.indexOf(o)!==-1)i=f.closeIndex;else{const A=this.readStopNodeData(e,o,c+1);if(!A)throw new Error(`Unexpected end of ${o}`);i=A.i,h=A.tagContent}const N=new _(o);o!==u&&l&&(N[":@"]=this.buildAttributesMap(u,n,o)),h&&(h=this.parseTextData(h,o,n,!0,l,!0,!0)),n=n.substr(0,n.lastIndexOf(".")),N.add(this.options.textNodeName,h),this.addChild(r,N,n)}else{if(u.length>0&&u.lastIndexOf("/")===u.length-1){o[o.length-1]==="/"?(o=o.substr(0,o.length-1),n=n.substr(0,n.length-1),u=o):u=u.substr(0,u.length-1),this.options.transformTagName&&(o=this.options.transformTagName(o));const h=new _(o);o!==u&&l&&(h[":@"]=this.buildAttributesMap(u,n,o)),this.addChild(r,h,n),n=n.substr(0,n.lastIndexOf("."))}else{const h=new _(o);this.tagsNodeStack.push(r),o!==u&&l&&(h[":@"]=this.buildAttributesMap(u,n,o)),this.addChild(r,h,n),r=h}s="",i=c}}else s+=e[i];return t.child};function bt(e,t,r){const s=this.options.updateTag(t.tagname,r,t[":@"]);s===!1||(typeof s=="string"&&(t.tagname=s),e.addChild(t))}const vt=function(e){if(this.options.processEntities){for(let t in this.docTypeEntities){const r=this.docTypeEntities[t];e=e.replace(r.regx,r.val)}for(let t in this.lastEntities){const r=this.lastEntities[t];e=e.replace(r.regex,r.val)}if(this.options.htmlEntities)for(let t in this.htmlEntities){const r=this.htmlEntities[t];e=e.replace(r.regex,r.val)}e=e.replace(this.ampEntity.regex,this.ampEntity.val)}return e};function Et(e,t,r,s){return e&&(s===void 0&&(s=Object.keys(t.child).length===0),e=this.parseTextData(e,t.tagname,r,!1,t[":@"]?Object.keys(t[":@"]).length!==0:!1,s),e!==void 0&&e!==""&&t.add(this.options.textNodeName,e),e=""),e}function Tt(e,t,r){const s="*."+r;for(const n in e){const i=e[n];if(s===i||t===i)return!0}return!1}function yt(e,t,r=">"){let s,n="";for(let i=t;i<e.length;i++){let a=e[i];if(s)a===s&&(s="");else if(a==='"'||a==="'")s=a;else if(a===r[0])if(r[1]){if(e[i+1]===r[1])return{data:n,index:i}}else return{data:n,index:i};else a==="	"&&(a=" ");n+=a}}function I(e,t,r,s){const n=e.indexOf(t,r);if(n===-1)throw new Error(s);return n+t.length-1}function W(e,t,r,s=">"){const n=yt(e,t+1,s);if(!n)return;let i=n.data;const a=n.index,f=i.search(/\s/);let o=i,u=!0;if(f!==-1&&(o=i.substr(0,f).replace(/\s\s*$/,""),i=i.substr(f+1)),r){const l=o.indexOf(":");l!==-1&&(o=o.substr(l+1),u=o!==n.data.substr(l+1))}return{tagName:o,tagExp:i,closeIndex:a,attrExpPresent:u}}function wt(e,t,r){const s=r;let n=1;for(;r<e.length;r++)if(e[r]==="<")if(e[r+1]==="/"){const i=I(e,">",r,`${t} is not closed`);if(e.substring(r+2,i).trim()===t&&(n--,n===0))return{tagContent:e.substring(s,r),i};r=i}else if(e[r+1]==="?")r=I(e,"?>",r+1,"StopNode is not closed.");else if(e.substr(r+1,3)==="!--")r=I(e,"-->",r+3,"StopNode is not closed.");else if(e.substr(r+1,2)==="![")r=I(e,"]]>",r,"StopNode is not closed.")-2;else{const i=W(e,r,">");i&&((i&&i.tagName)===t&&i.tagExp[i.tagExp.length-1]!=="/"&&n++,r=i.closeIndex)}}function K(e,t,r){if(t&&typeof e=="string"){const s=e.trim();return s==="true"?!0:s==="false"?!1:at(e,r)}else return ee.isExist(e)?e:""}var At=lt,ve={};function mt(e,t){return Ee(e,t)}function Ee(e,t,r){let s;const n={};for(let i=0;i<e.length;i++){const a=e[i],f=Pt(a);let o="";if(r===void 0?o=f:o=r+"."+f,f===t.textNodeName)s===void 0?s=a[f]:s+=""+a[f];else{if(f===void 0)continue;if(a[f]){let u=Ee(a[f],t,o);const l=It(u,t);a[":@"]?Ot(u,a[":@"],o,t):Object.keys(u).length===1&&u[t.textNodeName]!==void 0&&!t.alwaysCreateTextNode?u=u[t.textNodeName]:Object.keys(u).length===0&&(t.alwaysCreateTextNode?u[t.textNodeName]="":u=""),n[f]!==void 0&&n.hasOwnProperty(f)?(Array.isArray(n[f])||(n[f]=[n[f]]),n[f].push(u)):t.isArray(f,o,l)?n[f]=[u]:n[f]=u}}}return typeof s=="string"?s.length>0&&(n[t.textNodeName]=s):s!==void 0&&(n[t.textNodeName]=s),n}function Pt(e){const t=Object.keys(e);for(let r=0;r<t.length;r++){const s=t[r];if(s!==":@")return s}}function Ot(e,t,r,s){if(t){const n=Object.keys(t),i=n.length;for(let a=0;a<i;a++){const f=n[a];s.isArray(f,r+"."+f,!0,!0)?e[f]=[t[f]]:e[f]=t[f]}}}function It(e,t){const{textNodeName:r}=t,s=Object.keys(e).length;return!!(s===0||s===1&&(e[r]||typeof e[r]=="boolean"||e[r]===0))}ve.prettify=mt;const{buildOptions:Ct}=D,xt=At,{prettify:$t}=ve,Ft=H;let St=class{constructor(t){this.externalEntities={},this.options=Ct(t)}parse(t,r){if(typeof t!="string")if(t.toString)t=t.toString();else throw new Error("XML data is accepted in String or Bytes[] form.");if(r){r===!0&&(r={});const i=Ft.validate(t,r);if(i!==!0)throw Error(`${i.err.msg}:${i.err.line}:${i.err.col}`)}const s=new xt(this.options);s.addExternalEntities(this.externalEntities);const n=s.parseXml(t);return this.options.preserveOrder||n===void 0?n:$t(n,this.options)}addEntity(t,r){if(r.indexOf("&")!==-1)throw new Error("Entity value can't have '&'");if(t.indexOf("&")!==-1||t.indexOf(";")!==-1)throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if(r==="&")throw new Error("An entity with value '&' is not permitted");this.externalEntities[t]=r}};var Vt=St;const _t=`
`;function kt(e,t){let r="";return t.format&&t.indentBy.length>0&&(r=_t),Te(e,t,"",r)}function Te(e,t,r,s){let n="",i=!1;for(let a=0;a<e.length;a++){const f=e[a],o=Lt(f);let u="";if(r.length===0?u=o:u=`${r}.${o}`,o===t.textNodeName){let N=f[o];Mt(u,t)||(N=t.tagValueProcessor(o,N),N=ye(N,t)),i&&(n+=s),n+=N,i=!1;continue}else if(o===t.cdataPropName){i&&(n+=s),n+=`<![CDATA[${f[o][0][t.textNodeName]}]]>`,i=!1;continue}else if(o===t.commentPropName){n+=s+`<!--${f[o][0][t.textNodeName]}-->`,i=!0;continue}else if(o[0]==="?"){const N=Ne(f[":@"],t),A=o==="?xml"?"":s;let b=f[o][0][t.textNodeName];b=b.length!==0?" "+b:"",n+=A+`<${o}${b}${N}?>`,i=!0;continue}let l=s;l!==""&&(l+=t.indentBy);const c=Ne(f[":@"],t),d=s+`<${o}${c}`,h=Te(f[o],t,u,l);t.unpairedTags.indexOf(o)!==-1?t.suppressUnpairedNode?n+=d+">":n+=d+"/>":(!h||h.length===0)&&t.suppressEmptyNode?n+=d+"/>":h&&h.endsWith(">")?n+=d+`>${h}${s}</${o}>`:(n+=d+">",h&&s!==""&&(h.includes("/>")||h.includes("</"))?n+=s+t.indentBy+h+s:n+=h,n+=`</${o}>`),i=!0}return n}function Lt(e){const t=Object.keys(e);for(let r=0;r<t.length;r++){const s=t[r];if(s!==":@")return s}}function Ne(e,t){let r="";if(e&&!t.ignoreAttributes)for(let s in e){let n=t.attributeValueProcessor(s,e[s]);n=ye(n,t),n===!0&&t.suppressBooleanAttributes?r+=` ${s.substr(t.attributeNamePrefix.length)}`:r+=` ${s.substr(t.attributeNamePrefix.length)}="${n}"`}return r}function Mt(e,t){e=e.substr(0,e.length-t.textNodeName.length-1);let r=e.substr(e.lastIndexOf(".")+1);for(let s in t.stopNodes)if(t.stopNodes[s]===e||t.stopNodes[s]==="*."+r)return!0;return!1}function ye(e,t){if(e&&e.length>0&&t.processEntities)for(let r=0;r<t.entities.length;r++){const s=t.entities[r];e=e.replace(s.regex,s.val)}return e}var Bt=kt;const Xt=Bt,Rt={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function O(e){this.options=Object.assign({},Rt,e),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=zt),this.processTextOrObjNode=Ut,this.options.format?(this.indentate=Gt,this.tagEndChar=`>
`,this.newLine=`
`):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}O.prototype.build=function(e){return this.options.preserveOrder?Xt(e,this.options):(Array.isArray(e)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(e={[this.options.arrayNodeName]:e}),this.j2x(e,0).val)};O.prototype.j2x=function(e,t){let r="",s="";for(let n in e)if(typeof e[n]>"u")this.isAttribute(n)&&(s+="");else if(e[n]===null)this.isAttribute(n)?s+="":n[0]==="?"?s+=this.indentate(t)+"<"+n+"?"+this.tagEndChar:s+=this.indentate(t)+"<"+n+"/"+this.tagEndChar;else if(e[n]instanceof Date)s+=this.buildTextValNode(e[n],n,"",t);else if(typeof e[n]!="object"){const i=this.isAttribute(n);if(i)r+=this.buildAttrPairStr(i,""+e[n]);else if(n===this.options.textNodeName){let a=this.options.tagValueProcessor(n,""+e[n]);s+=this.replaceEntitiesValue(a)}else s+=this.buildTextValNode(e[n],n,"",t)}else if(Array.isArray(e[n])){const i=e[n].length;let a="";for(let f=0;f<i;f++){const o=e[n][f];typeof o>"u"||(o===null?n[0]==="?"?s+=this.indentate(t)+"<"+n+"?"+this.tagEndChar:s+=this.indentate(t)+"<"+n+"/"+this.tagEndChar:typeof o=="object"?this.options.oneListGroup?a+=this.j2x(o,t+1).val:a+=this.processTextOrObjNode(o,n,t):a+=this.buildTextValNode(o,n,"",t))}this.options.oneListGroup&&(a=this.buildObjectNode(a,n,"",t)),s+=a}else if(this.options.attributesGroupName&&n===this.options.attributesGroupName){const i=Object.keys(e[n]),a=i.length;for(let f=0;f<a;f++)r+=this.buildAttrPairStr(i[f],""+e[n][i[f]])}else s+=this.processTextOrObjNode(e[n],n,t);return{attrStr:r,val:s}};O.prototype.buildAttrPairStr=function(e,t){return t=this.options.attributeValueProcessor(e,""+t),t=this.replaceEntitiesValue(t),this.options.suppressBooleanAttributes&&t==="true"?" "+e:" "+e+'="'+t+'"'};function Ut(e,t,r){const s=this.j2x(e,r+1);return e[this.options.textNodeName]!==void 0&&Object.keys(e).length===1?this.buildTextValNode(e[this.options.textNodeName],t,s.attrStr,r):this.buildObjectNode(s.val,t,s.attrStr,r)}O.prototype.buildObjectNode=function(e,t,r,s){if(e==="")return t[0]==="?"?this.indentate(s)+"<"+t+r+"?"+this.tagEndChar:this.indentate(s)+"<"+t+r+this.closeTag(t)+this.tagEndChar;{let n="</"+t+this.tagEndChar,i="";return t[0]==="?"&&(i="?",n=""),(r||r==="")&&e.indexOf("<")===-1?this.indentate(s)+"<"+t+r+i+">"+e+n:this.options.commentPropName!==!1&&t===this.options.commentPropName&&i.length===0?this.indentate(s)+`<!--${e}-->`+this.newLine:this.indentate(s)+"<"+t+r+i+this.tagEndChar+e+this.indentate(s)+n}};O.prototype.closeTag=function(e){let t="";return this.options.unpairedTags.indexOf(e)!==-1?this.options.suppressUnpairedNode||(t="/"):this.options.suppressEmptyNode?t="/":t=`></${e}`,t};O.prototype.buildTextValNode=function(e,t,r,s){if(this.options.cdataPropName!==!1&&t===this.options.cdataPropName)return this.indentate(s)+`<![CDATA[${e}]]>`+this.newLine;if(this.options.commentPropName!==!1&&t===this.options.commentPropName)return this.indentate(s)+`<!--${e}-->`+this.newLine;if(t[0]==="?")return this.indentate(s)+"<"+t+r+"?"+this.tagEndChar;{let n=this.options.tagValueProcessor(t,e);return n=this.replaceEntitiesValue(n),n===""?this.indentate(s)+"<"+t+r+this.closeTag(t)+this.tagEndChar:this.indentate(s)+"<"+t+r+">"+n+"</"+t+this.tagEndChar}};O.prototype.replaceEntitiesValue=function(e){if(e&&e.length>0&&this.options.processEntities)for(let t=0;t<this.options.entities.length;t++){const r=this.options.entities[t];e=e.replace(r.regex,r.val)}return e};function Gt(e){return this.options.indentBy.repeat(e)}function zt(e){return e.startsWith(this.options.attributeNamePrefix)&&e!==this.options.textNodeName?e.substr(this.attrPrefixLen):!1}var Yt=O;const Zt=H,Jt=Vt,qt=Yt;var Wt={XMLParser:Jt,XMLValidator:Zt,XMLBuilder:qt},E=Uint8Array,C=Uint16Array,we=Uint32Array,Ae=new E([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),me=new E([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Kt=new E([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Pe=function(e,t){for(var r=new C(31),s=0;s<31;++s)r[s]=t+=1<<e[s-1];for(var n=new we(r[30]),s=1;s<30;++s)for(var i=r[s];i<r[s+1];++i)n[i]=i-r[s]<<5|s;return[r,n]},Oe=Pe(Ae,2),Ie=Oe[0],Qt=Oe[1];Ie[28]=258,Qt[258]=28;var Ht=Pe(me,0),jt=Ht[0],Q=new C(32768);for(var g=0;g<32768;++g){var P=(g&43690)>>>1|(g&21845)<<1;P=(P&52428)>>>2|(P&13107)<<2,P=(P&61680)>>>4|(P&3855)<<4,Q[g]=((P&65280)>>>8|(P&255)<<8)>>>1}var k=function(e,t,r){for(var s=e.length,n=0,i=new C(t);n<s;++n)e[n]&&++i[e[n]-1];var a=new C(t);for(n=0;n<t;++n)a[n]=a[n-1]+i[n-1]<<1;var f;if(r){f=new C(1<<t);var o=15-t;for(n=0;n<s;++n)if(e[n])for(var u=n<<4|e[n],l=t-e[n],c=a[e[n]-1]++<<l,d=c|(1<<l)-1;c<=d;++c)f[Q[c]>>>o]=u}else for(f=new C(s),n=0;n<s;++n)e[n]&&(f[n]=Q[a[e[n]-1]++]>>>15-e[n]);return f},L=new E(288);for(var g=0;g<144;++g)L[g]=8;for(var g=144;g<256;++g)L[g]=9;for(var g=256;g<280;++g)L[g]=7;for(var g=280;g<288;++g)L[g]=8;var Ce=new E(32);for(var g=0;g<32;++g)Ce[g]=5;var Dt=k(L,9,1),er=k(Ce,5,1),J=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},y=function(e,t,r){var s=t/8|0;return(e[s]|e[s+1]<<8)>>(t&7)&r},q=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},tr=function(e){return(e+7)/8|0},rr=function(e,t,r){(t==null||t<0)&&(t=0),(r==null||r>e.length)&&(r=e.length);var s=new(e.BYTES_PER_ELEMENT==2?C:e.BYTES_PER_ELEMENT==4?we:E)(r-t);return s.set(e.subarray(t,r)),s},nr=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],w=function(e,t,r){var s=new Error(t||nr[e]);if(s.code=e,Error.captureStackTrace&&Error.captureStackTrace(s,w),!r)throw s;return s},te=function(e,t,r){var s=e.length;if(!s||r&&r.f&&!r.l)return t||new E(0);var n=!t||r,i=!r||r.i;r||(r={}),t||(t=new E(s*3));var a=function(ae){var le=t.length;if(ae>le){var ce=new E(Math.max(le*2,ae));ce.set(t),t=ce}},f=r.f||0,o=r.p||0,u=r.b||0,l=r.l,c=r.d,d=r.m,h=r.n,N=s*8;do{if(!l){f=y(e,o,1);var A=y(e,o+1,3);if(o+=3,A)if(A==1)l=Dt,c=er,d=9,h=5;else if(A==2){var U=y(e,o,31)+257,re=y(e,o+10,15)+4,ne=U+y(e,o+5,31)+1;o+=14;for(var F=new E(ne),G=new E(19),T=0;T<re;++T)G[Kt[T]]=y(e,o+T*3,7);o+=re*3;for(var se=J(G),xe=(1<<se)-1,$e=k(G,se,1),T=0;T<ne;){var ie=$e[y(e,o,xe)];o+=ie&15;var b=ie>>>4;if(b<16)F[T++]=b;else{var x=0,M=0;for(b==16?(M=3+y(e,o,3),o+=2,x=F[T-1]):b==17?(M=3+y(e,o,7),o+=3):b==18&&(M=11+y(e,o,127),o+=7);M--;)F[T++]=x}}var oe=F.subarray(0,U),m=F.subarray(U);d=J(oe),h=J(m),l=k(oe,d,1),c=k(m,h,1)}else w(1);else{var b=tr(o)+4,X=e[b-4]|e[b-3]<<8,R=b+X;if(R>s){i&&w(0);break}n&&a(u+X),t.set(e.subarray(b,R),u),r.b=u+=X,r.p=o=R*8,r.f=f;continue}if(o>N){i&&w(0);break}}n&&a(u+131072);for(var Fe=(1<<d)-1,Se=(1<<h)-1,z=o;;z=o){var x=l[q(e,o)&Fe],$=x>>>4;if(o+=x&15,o>N){i&&w(0);break}if(x||w(2),$<256)t[u++]=$;else if($==256){z=o,l=null;break}else{var fe=$-254;if($>264){var T=$-257,S=Ae[T];fe=y(e,o,(1<<S)-1)+Ie[T],o+=S}var Y=c[q(e,o)&Se],Z=Y>>>4;Y||w(3),o+=Y&15;var m=jt[Z];if(Z>3){var S=me[Z];m+=q(e,o)&(1<<S)-1,o+=S}if(o>N){i&&w(0);break}n&&a(u+131072);for(var ue=u+fe;u<ue;u+=4)t[u]=t[u-m],t[u+1]=t[u+1-m],t[u+2]=t[u+2-m],t[u+3]=t[u+3-m];u=ue}}r.l=l,r.p=z,r.b=u,r.f=f,l&&(f=1,r.m=d,r.d=c,r.n=h)}while(!f);return u==t.length?t:rr(t,0,u)},sr=new E(0),ir=function(e){(e[0]!=31||e[1]!=139||e[2]!=8)&&w(6,"invalid gzip data");var t=e[3],r=10;t&4&&(r+=e[10]|(e[11]<<8)+2);for(var s=(t>>3&1)+(t>>4&1);s>0;s-=!e[r++]);return r+(t&2)},or=function(e){var t=e.length;return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0},fr=function(e){((e[0]&15)!=8||e[0]>>>4>7||(e[0]<<8|e[1])%31)&&w(6,"invalid zlib data"),e[1]&32&&w(6,"invalid zlib data: preset dictionaries not supported")};function ur(e,t){return te(e,t)}function ar(e,t){return te(e.subarray(ir(e),-8),t||new E(or(e)))}function lr(e,t){return te((fr(e),e.subarray(2,-4)),t)}function cr(e,t){return e[0]==31&&e[1]==139&&e[2]==8?ar(e,t):(e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31?ur(e,t):lr(e,t)}var dr=typeof TextDecoder<"u"&&new TextDecoder,hr=0;try{dr.decode(sr,{stream:!0}),hr=1}catch{}function gr(e){let t="";const r=new Uint8Array(e),s=r.byteLength;for(let n=0;n<s;n++)t+=String.fromCharCode(r[n]);return window.btoa(t)}function wr(e){if(e.length==0)return new Array;if(e.length==1)return e[0];const t=e.map(i=>i.length).reduce((i,a)=>i+a),r=Object.getPrototypeOf(e[0]).constructor,s=new r(t);let n=0;for(const i of e)s.set(i,n),n+=i.length;return s}function pr(e,t){let r;return(...s)=>{clearTimeout(r),r=setTimeout(()=>{r=null,e.apply(this,s)},t)}}function Nr(e,t){if(e.indexOf(t)>-1)return[t];const r=Ve(e,t);return r.length?r:[]}async function br(e,t={}){const r={ignoreAttributes:!1,preserveOrder:!1,attributeNamePrefix:"$",isArray:void 0};t.alwaysArray?r.isArray=(i,a)=>{if(t.alwaysArray.indexOf(a)!==-1)return!0}:delete r.isArray;const s=Object.assign(r,t),n=new Wt.XMLParser(s);return new Promise((i,a)=>{try{const f=n.parse(e);i(f)}catch(f){a(f)}})}function vr(e){const t=new Uint8Array(e);if(new Uint16Array(e,0,2)[0]===35615)try{return cr(t)}catch(s){console.error("eee",s)}return e}const Ar={arrayBufferToBase64:gr,debounce:pr,findMatchingGlobInFiles:Nr,gUnzip:vr,parseXML:br};export{gr as a,Nr as f,vr as g,wr as m,br as p,Ar as u};
//# sourceMappingURL=util-f1a89f99.js.map
