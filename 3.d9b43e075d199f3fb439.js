(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"2PUq":function(t,e,n){(e=n("JPst")(!1)).push([t.i,".outlined[data-v-8ed2af6c]{border:3px solid currentColor;border-radius:50%}",""]),t.exports=e},"5v2I":function(t,e,n){"use strict";n("f+NC")},NHqx:function(t,e,n){t.exports=n.p+"f6b52cdf345d7bfdc0a89a659ae2b627.jpg"},PyNX:function(t,e,n){"use strict";n.r(e);n("DQNa");var i={name:"Section",props:{title:{type:String,required:!0},icon:{type:String,default:null}}},a=n("KHd+"),o=n("ZUTo"),s=n.n(o),l=n("sK+t"),r=n("mdmw"),c=n("Ey0z"),u=Object(a.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{light:"",flat:"",tile:""}},[n("v-card-text",[n("p",{staticClass:"text-h5 primary--text"},[t.icon?n("v-icon",{attrs:{color:"secondary"}},[t._v(t._s(t.icon))]):t._e(),t._v("\n      "+t._s(t.title)+"\n    ")],1),t._v(" "),t._t("default")],2)],1)}),[],!1,null,null,null),v=u.exports;s()(u,{VCard:l.a,VCardText:r.b,VIcon:c.a});var m={name:"AboutMe",components:{Section:v},data:function(){var t=new Date("2014"),e=new Date,n=new Date(e-t);return{experience:Math.abs(n.getUTCFullYear()-1970)}}},d=Object(a.a)(m,(function(){var t=this.$createElement,e=this._self._c||t;return e("Section",{attrs:{title:"About me",icon:"mdi-information-outline"}},[this._v("\n  I'm an Experienced Software Developer with over "),e("b",[this._v("+"+this._s(this.experience))]),this._v("\n  years of experience. I like learning new things and tools everyday. If I\n  don't know something I will learn it.\n")])}),[],!1,null,null,null).exports,p={name:"Award",components:{Section:v},data:function(){return{items:[{title:"Key Contributor",name:"Ericsson",location:"Hungary",at:"2021"}]}}},h=n("Yq0q"),f=n("2hOt"),_=n("XSMC"),g=n("D9m0"),b=Object(a.a)(p,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Section",{attrs:{title:"Awards",icon:"mdi-medal"}},t._l(t.items,(function(e){return n("v-row",{key:e.title},[n("v-col",{attrs:{cols:"3"}},[t._v("\n      "+t._s(e.at)+"\n    ")]),t._v(" "),n("v-col",[n("v-list-item",[n("v-list-item-content",{staticClass:"pa-0"},[n("v-list-item-title",[t._v(t._s(e.title))]),t._v(" "),n("v-list-item-subtitle",[t._v("\n            "+t._s(e.name)+", "+t._s(e.location)+"\n          ")])],1)],1)],1)],1)})),1)}),[],!1,null,null,null),C=b.exports;s()(b,{VCol:h.a,VListItem:f.a,VListItemContent:_.a,VListItemSubtitle:_.b,VListItemTitle:_.c,VRow:g.a});var k={name:"Education",components:{Section:v},data:function(){return{items:[{title:"Photographer",name:"Soter-Line",location:"Hungary",from:"2020",to:"2021"},{title:"Master of Science in Computer Science",name:"Eötvös Loránd University",location:"Hungary",from:"2014",to:"2017"},{title:"Bachelor of Science in Computer Science",name:"Eötvös Loránd University",location:"Hungary",from:"2011",to:"2014"}]}}},w=Object(a.a)(k,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Section",{attrs:{title:"Educations",icon:"mdi-school-outline"}},t._l(t.items,(function(e){return n("v-row",{key:e.title},[n("v-col",{attrs:{cols:"2"}},[t._v("\n      "+t._s(e.from)+" - "+t._s(e.to)+"\n    ")]),t._v(" "),n("v-col",[n("v-list-item",[n("v-list-item-content",{staticClass:"pa-0"},[n("v-list-item-title",[t._v(t._s(e.title))]),t._v(" "),n("v-list-item-subtitle",[t._v("\n            "+t._s(e.name)+", "+t._s(e.location)+"\n          ")])],1)],1)],1)],1)})),1)}),[],!1,null,null,null),y=w.exports;s()(w,{VCol:h.a,VListItem:f.a,VListItemContent:_.a,VListItemSubtitle:_.b,VListItemTitle:_.c,VRow:g.a});var S={name:"Experience",components:{Section:v},data:function(){return{items:[{title:"Ericsson",from:"2015",description:"Developing Clang based static analysis tools\n                        (CodeCompass / CodeChecker)"},{title:"Pontez Holding Kft.",from:"2013",to:"2014",description:"Developed web pages using Symfony and Laravel\n                        frameworks"}]}}},V=Object(a.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Section",{attrs:{title:"Work experiences",icon:"mdi-star-circle-outline"}},t._l(t.items,(function(e){return n("v-card",{key:e.title,attrs:{tile:"",flat:""}},[n("v-card-title",[t._v(t._s(e.title))]),t._v(" "),n("v-card-subtitle",[t._v(t._s(e.from)+" - "+t._s(e.to))]),t._v(" "),n("v-card-text",[t._v(t._s(e.description))])],1)})),1)}),[],!1,null,null,null),x=V.exports;s()(V,{VCard:l.a,VCardSubtitle:r.a,VCardText:r.b,VCardTitle:r.c});var j={name:"Skills",components:{Section:v},data:function(){return{items:[[{title:"Python",value:85,icon:"mdi-language-python"},{title:"JavaScript",value:85,icon:"mdi-language-javascript"},{title:"C/C++",value:70,icon:"mdi-language-cpp"},{title:"Java / Kotlin",value:65,icon:"mdi-language-java"}],[{title:"CSS",value:75,icon:"mdi-language-css3"},{title:"Sass",value:65,icon:"mdi-sass"}],[{title:"Vuejs",value:90,icon:"mdi-vuejs"},{title:"Symfony",value:70,icon:"mdi-symfony"},{title:"React",value:50,icon:"mdi-react"}],[{title:"Databases (SQLite, PostgresSQL, MySQL)",value:75,icon:"mdi-database"},{title:"Git",value:75,icon:"mdi-git"},{title:"Docker",value:75,icon:"mdi-docker"}]]}}},I=n("jjY0"),E=Object(a.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Section",{attrs:{title:"Skills",icon:"mdi-tune-vertical"}},t._l(t.items,(function(e,i){return n("v-row",{key:i,staticClass:"mb-2"},t._l(e,(function(e){return n("v-col",{key:e.title,attrs:{cols:"6"}},[n("div",{staticClass:"align-center"},[n("v-icon",[t._v(t._s(e.icon))]),t._v("\n        "+t._s(e.title)+"\n      ")],1),t._v(" "),n("v-progress-linear",{attrs:{color:"secondary",height:"5",value:e.value}})],1)})),1)})),1)}),[],!1,null,null,null),L=E.exports;s()(E,{VCol:h.a,VIcon:c.a,VProgressLinear:I.a,VRow:g.a});var D={name:"Education",components:{Section:v},data:function(){return{items:[{title:"Docker administration",name:"Component Soft",location:"Hungary",at:"4-6. September, 2018"},{title:"Kubernetes administration",name:"Component Soft",location:"Hungary",at:"24-26. September, 2018"}]}}},P=Object(a.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Section",{attrs:{title:"Trainings",icon:"mdi-school-outline"}},t._l(t.items,(function(e){return n("v-row",{key:e.title},[n("v-col",{attrs:{cols:"3"}},[t._v("\n      "+t._s(e.at)+"\n    ")]),t._v(" "),n("v-col",[n("v-list-item",[n("v-list-item-content",{staticClass:"pa-0"},[n("v-list-item-title",[t._v(t._s(e.title))]),t._v(" "),n("v-list-item-subtitle",[t._v("\n            "+t._s(e.name)+", "+t._s(e.location)+"\n          ")])],1)],1)],1)],1)})),1)}),[],!1,null,null,null),M=P.exports;s()(P,{VCol:h.a,VListItem:f.a,VListItemContent:_.a,VListItemSubtitle:_.b,VListItemTitle:_.c,VRow:g.a});var T={name:"Content",components:{AboutMe:d,Award:C,Education:y,Experience:x,Skills:L,Trainings:M}},O=n("zn5u"),A=Object(a.a)(T,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{outlined:""}},[n("AboutMe"),t._v(" "),n("v-divider"),t._v(" "),n("Education"),t._v(" "),n("v-divider"),t._v(" "),n("Trainings"),t._v(" "),n("v-divider"),t._v(" "),n("Experience"),t._v(" "),n("v-divider"),t._v(" "),n("Award"),t._v(" "),n("v-divider"),t._v(" "),n("Skills")],1)}),[],!1,null,null,null),H=A.exports;s()(A,{VCard:l.a,VDivider:O.a});var R={name:"Projects",components:{Section:v},data:function(){return{projects:[{title:"CodeChecker",link:"https://github.com/Ericsson/codechecker",from:"2017",active:!0,company:"Ericsson",keywords:["Python","JavaScript","Vue","Webpack","Thrift","Docker","Docker Swarm","Static analysis","clang","PostgreSQL","Jenkins","Github Actions"],screenshot:"/images/projects/codechecker.png",text:"\n            CodeChecker is a open-source static analysis infrastructure to find\n            potentional software bugs mainly in C/C++ programs.<br><br>\n            I did the following:\n            <ul>\n              <li>Implementing most of the new features.</li>\n              <li>More than <b>+1400</b> Github commits.</li>\n              <li>Full UI rewrite from Dojo to <b>Vuejs</b>.</li>\n              <li>Introduce <b>unit</b> and <b>e2e</b> UI tests.</li>\n              <li>Snap / Pypi packages.</li>\n              <li>Many performance improvements.</li>\n              <li>Creating docker images.</li>\n              <li>Creating service setups and managing services.</li>\n              <li>Database backups, database migrations and service\n                  upgrades.</li>\n              <li>Organizing meetings and supervising newcomers.</li>\n              <li>Creating and managing Jenkins jobs and Github actions</li>\n              <li>User supports.</li>\n              <li>Helping to open source contributors.</li>\n            </u>\n          "},{title:"Kelenföldi Református Énekeskönyv",link:"https://play.google.com/store/apps/details?id=hu.csordasmarton.kelenref",from:"2020",active:!1,keywords:["Android","Kotlin"],screenshot:"/images/projects/kelenref.png",text:"\n            This is an Android mobile application which contains songs of the\n            Kelenföldi Református Énekeskönyv.<br/> <br/>\n            <i>Main functions:</i>\n            <ul>\n              <li>List / search / show songs.</li>\n              <li>Change font size / song order.</li>\n              <li>Favorites.</li>\n            </ul>\n          "},{title:"Heidelberg Catechism",link:"https://play.google.com/store/apps/details?id=hu.csordasmarton.heidelbergikate",from:"2019",active:!1,keywords:["Android","Java"],screenshot:"/images/projects/heidelberg_catechism.png",text:"\n            This is an Android mobile application which contains the questions\n            and the answers of the fundamental beliefs of the Reformed Church\n            with Bible references.<br/> <br/>\n            <i>Main functions:</i>\n            <ul>\n              <li>Show questions with categories.</li>\n              <li>Show answers when clicking on a question.</li>\n              <li>Show Bible references under the answers.</li>\n              <li>Open references in Youversion mobile app when clicking\n            on it.</li>\n            </ul>\n          "},{title:"CodeCompass",link:"https://github.com/Ericsson/codecompass",from:"2015",to:"2017",active:!1,company:"Ericsson",keywords:["C/C++","JavaScript","dojo","CMake","Thrift","ODB","Static analysis"],screenshot:"/images/projects/codecompass.png",text:"\n            CodeCompass is an open-source code comprehension and navigation\n            tool developed with large-scale software projects in mind.<br><br>\n            I did the following:\n            <ul>\n              <li>New infrastructure and <i>pluginable architecture</i>.</li>\n              <li>Full rewrite from scratch.</li>\n              <li>Introduce <b>CMake</b> build system.</li>\n              <li><i>Pointer analysis</i>.</li>\n              <li>UI improvements.</li>\n              <li>More than <b>+170</b> commits.</li>\n            </ul>\n          "},{title:"Dicsdalok (Web)",link:"http://dicsdalok.hu",from:"2016",active:!0,keywords:["PHP","Symfony","MySQL","JQuery","Bootstrap"],screenshot:"/images/projects/dicsdalok.png",text:"\n            DicsDalok is a collection of Hungarian Christian worship songs.\n            <i>Main functions:</i>\n            <ul>\n              <li>List / search / show songs.</li>\n              <li>Show/hide guitar chords, youtube videos, music sheets.</li>\n              <li>Change font size / song order.</li>\n              <li>Song books.</li>\n              <li>Favorites.</li>\n              <li>Admin panel.</li>\n            </ul>\n          "},{title:"Dicsdalok (Mobile)",link:"https://play.google.com/store/apps/details?id=hu.csordasmarton.dicsdalok",from:"2016",active:!0,keywords:["Android","Java","SQLite"],screenshot:"/images/projects/dicsdalok_android.png",text:"\n            DicsDalok is a collection of Hungarian Christian worship songs. It\n            is synced with http://dicsdalok.hu/ webpage. The functions can be\n            used offline.<br/><br/>\n            <i>Main functions:</i>\n            <ul>\n              <li>Download (sync) data from an external database.</li>\n              <li>Search songs.</li>\n              <li>Show/hide guitar chords.</li>\n              <li>Change font size / song order.</li>\n              <li>Keep screen on while reading song.</li>\n              <li>Change font size in pinch gesture.</li>\n              <li>Favorites.</li>\n              <li>Navigation menu.</li>\n            </ul>\n          "},{title:"keresztkapcsolat.hu",link:"http://www.keresztkapcsolat.hu/",from:"2016",active:!1,keywords:["Wordpress","MySQL"],screenshot:"/images/projects/keresztkapcsolat.png"},{title:"kvit.hu",link:"http://kvit.hu/",from:"2015",active:!1,keywords:["Wordpress","MySQL"],screenshot:"/images/projects/kvit.png"}]}}},$=n("zCDB"),z=n("rdoz"),J=n("hBTj"),K=n("HgYW"),Q=Object(a.a)(R,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Section",{attrs:{title:"Projects",icon:"mdi-briefcase-outline"}},[n("v-timeline",{attrs:{dense:""}},t._l(t.projects,(function(e){return n("v-timeline-item",{key:e.title,staticClass:"pa-0",attrs:{small:"",color:"secondary"}},[n("v-row",[n("v-col",{attrs:{cols:"1","align-self":"center"}},[n("span",[t._v(t._s(e.from))]),t._v(" "),e.active?n("span",[t._v("-")]):e.to?n("span",[t._v("- "+t._s(e.to))]):t._e()]),t._v(" "),n("v-col",[n("v-card",{attrs:{tile:"",flat:""}},[n("v-card-title",{staticClass:"pt-0"},[n("a",{attrs:{href:e.link,target:"_blank"}},[t._v("\n                "+t._s(e.title)+"\n              ")])]),t._v(" "),n("v-card-subtitle",{staticClass:"mt-0"},t._l(e.keywords,(function(e){return n("v-chip",{key:e,staticClass:"mr-2",attrs:{outlined:""}},[t._v("\n                "+t._s(e)+"\n              ")])})),1),t._v(" "),n("v-card-text",{domProps:{innerHTML:t._s(e.text)}})],1)],1),t._v(" "),n("v-col",{attrs:{cols:"2"}},[n("a",{attrs:{href:t.publicPath(e.screenshot),target:"_blank"}},[n("v-img",{attrs:{src:t.publicPath(e.screenshot)}})],1)])],1),t._v(" "),n("v-divider")],1)})),1)],1)}),[],!1,null,null,null),q=Q.exports;s()(Q,{VCard:l.a,VCardSubtitle:r.a,VCardText:r.b,VCardTitle:r.c,VChip:$.a,VCol:h.a,VDivider:O.a,VImg:z.a,VRow:g.a,VTimeline:J.a,VTimelineItem:K.a});var N={name:"Avatar"},U=n("ghKu"),B=Object(a.a)(N,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-avatar",{attrs:{size:"10em"}},[e("img",{attrs:{src:n("NHqx"),alt:"Márton Csordás"}})])}),[],!1,null,null,null),W=B.exports;s()(B,{VAvatar:U.a});var F={name:"Contact",components:{Section:v},data:function(){return{items:[{title:"Email",value:"csordasmarton92@gmail.com",icon:"mdi-email"},{title:"Location",value:"Budapest",icon:"mdi-map-marker"}]}}},Y=Object(a.a)(F,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Section",{attrs:{title:"Contact",icon:"mdi-phone-outline"}},t._l(t.items,(function(e){return n("v-row",{key:e},[n("v-col",{staticClass:"pr-2",attrs:{cols:"auto"}},[n("v-icon",{attrs:{title:e.title}},[t._v(t._s(e.icon))])],1),t._v(" "),n("v-col",[t._v("\n      "+t._s(e.value)+"\n    ")])],1)})),1)}),[],!1,null,null,null),G=Y.exports;s()(Y,{VCol:h.a,VIcon:c.a,VRow:g.a});var X={name:"Interest",components:{Section:v},data:function(){return{items:[{name:"Photography",icon:"mdi-camera"},{name:"Watching movies",icon:"mdi-filmstrip"},{name:"Reading",icon:"mdi-book-open-variant"},{name:"Cooking",icon:"mdi-chef-hat"}]}}},Z=(n("5v2I"),Object(a.a)(X,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Section",{attrs:{title:"Interest",icon:"mdi-run-fast"}},[n("v-row",t._l(t.items,(function(e){return n("v-col",{key:e.name,staticClass:"text-center"},[n("v-icon",{staticClass:"pa-1 outlined"},[t._v(t._s(e.icon))]),t._v(" "),n("div",[t._v(t._s(e.name))])],1)})),1)],1)}),[],!1,null,"8ed2af6c",null)),tt=Z.exports;s()(Z,{VCol:h.a,VIcon:c.a,VRow:g.a});var et={name:"Languages",components:{Section:v},data:function(){return{items:[{name:"Hungarian",value:100},{name:"English",value:80}]}}},nt=n("SQoD"),it=Object(a.a)(et,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Section",{attrs:{title:"Languages",icon:"mdi-flag-outline"}},[n("v-row",t._l(t.items,(function(e){return n("v-col",{key:e.name,staticClass:"text-center"},[n("v-progress-circular",{staticClass:"ma-2",attrs:{rotate:"360",size:"80",width:"3",value:e.value}},[t._v("\n        "+t._s(e.name)+"\n      ")])],1)})),1)],1)}),[],!1,null,null,null),at=it.exports;s()(it,{VCol:h.a,VProgressCircular:nt.a,VRow:g.a});var ot={name:"Personal",components:{Section:v},data:function(){return{items:[{title:"Name",value:"Márton Csordás",icon:"mdi-badge-account-outline"},{title:"Date of birthday",value:"31 May 1992",icon:"mdi-cake-variant"},{title:"Nationality",value:"Hungarian",icon:"mdi-flag"},{title:"Relationship",value:"Married",icon:"mdi-human-male-female"}]}}},st=Object(a.a)(ot,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Section",{attrs:{title:"Personal",icon:"mdi-phone-outline"}},t._l(t.items,(function(e){return n("v-row",{key:e},[n("v-col",{staticClass:"pr-2",attrs:{cols:"auto"}},[n("v-icon",{attrs:{title:e.title}},[t._v(t._s(e.icon))])],1),t._v(" "),n("v-col",[t._v("\n      "+t._s(e.value)+"\n    ")])],1)})),1)}),[],!1,null,null,null),lt=st.exports;s()(st,{VCol:h.a,VIcon:c.a,VRow:g.a});var rt={name:"Sidebar",components:{Avatar:W,Contact:G,Interest:tt,Languages:at,Personal:lt}},ct=n("pSOK"),ut=Object(a.a)(rt,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{attrs:{outlined:""}},[n("v-container",[n("v-row",{staticClass:"py-0",attrs:{justify:"space-around"}},[n("v-col",{staticClass:"text-center"},[n("Avatar"),t._v(" "),n("p",{staticClass:"ma-0 mt-2 text-h4 secondary--text"},[t._v("\n          Márton Csordás\n        ")])],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("Personal"),t._v(" "),n("v-divider"),t._v(" "),n("Contact"),t._v(" "),n("v-divider"),t._v(" "),n("Interest"),t._v(" "),n("v-divider"),t._v(" "),n("Languages")],1)}),[],!1,null,null,null),vt=ut.exports;s()(ut,{VCard:l.a,VCol:h.a,VContainer:ct.a,VDivider:O.a,VRow:g.a});var mt={name:"CV",components:{Content:H,Projects:q,Sidebar:vt}},dt=Object(a.a)(mt,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{"fill-height":""}},[e("v-row",[e("v-col",{attrs:{cols:"3"}},[e("Sidebar")],1),this._v(" "),e("v-col",{attrs:{cols:"9"}},[e("Content")],1)],1),this._v(" "),e("v-row",[e("v-col",[e("v-card",{attrs:{outlined:""}},[e("Projects")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=dt.exports;s()(dt,{VCard:l.a,VCol:h.a,VContainer:ct.a,VRow:g.a})},"f+NC":function(t,e,n){var i=n("2PUq");i.__esModule&&(i=i.default),"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n("SZ7m").default)("2335bb09",i,!0,{})}}]);