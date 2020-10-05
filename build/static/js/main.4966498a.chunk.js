(this["webpackJsonpcorona-d3"]=this["webpackJsonpcorona-d3"]||[]).push([[0],{20:function(e,t,a){},26:function(e,t,a){e.exports=a(40)},31:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(22),o=a.n(s),c=(a(31),a(5)),l=a(6),i=a(8),u=a(7),h=a(9),d=(a(20),a(12)),p=a.n(d),y=a(14),v=a(15),g=a.n(v),m=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).chartRef=r.a.createRef(),e.state={casesList:[],country:null,language:"en",phrases:[{lang:"mk",language:"\u0408\u0430\u0437\u0438\u043a",country:"\u0414\u0440\u0436\u0430\u0432\u0430",title:"\u041a\u043e\u0440\u043e\u043d\u0430 \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",errorMsg:"\u0412\u0435 \u043c\u043e\u043b\u0438\u043c\u0435, \u0432\u043d\u0435\u0441\u0435\u0442\u0435 \u0434\u0440\u0436\u0430\u0432\u0430.",totalCases:"\u0412\u043a\u0443\u043f\u043d\u043e \u0441\u043b\u0443\u0447\u0430\u0438",totalDeaths:"\u0412\u043a\u0443\u043f\u043d\u043e \u0441\u043c\u0440\u0442\u043d\u0438 \u0441\u043b\u0443\u0447\u0430\u0438",active:"\u0410\u043a\u0442\u0438\u0432\u043d\u0438",recovered:"\u0418\u0437\u043b\u0435\u0447\u0435\u043d\u0438",todayCases:"\u0414\u0435\u043d\u0435\u0448\u043d\u0438 \u0441\u043b\u0443\u0447\u0430\u0438",todayDeaths:"\u0414\u0435\u043d\u0435\u0448\u043d\u0438 \u0441\u043c\u0440\u0442\u043d\u0438 \u0441\u043b\u0443\u0447\u0430\u0438"},{lang:"en",totalCases:"Total cases",totalDeaths:"Total deaths",active:"Active",recovered:"Recovered",todayCases:"Today cases",todayDeaths:"Today deaths",errorMsg:"Please, input a country.",title:"Coronavirus Statistics",language:"Language",country:"Country"}],phrase:null},e.state.phrase=e.state.phrases[1],document.title=e.state.phrase.title,e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"renderTableData",value:function(){var e=this;fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",{headers:{"X-RapidAPI-Host":"coronavirus-monitor.p.rapidapi.com","X-RapidAPI-Key":Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY}}).then((function(e){return e.json()})).then((function(t){var a=[],n=[];t.countries_stat.map((function(e){return a.push({cases:e.cases.replace(",",""),country:e.country_name,deaths:e.deaths.replace(",",""),recovered:e.total_recovered.replace(",",""),todayDeaths:e.new_deaths.replace(",",""),todayCases:e.new_cases.replace(",",""),active:e.active_cases.replace(",","")}),n.push(e.country_name)})),e.drawChartJS(a),e.setState({casesList:a})}))}},{key:"componentDidMount",value:function(){this.renderTableData()}},{key:"getTimeline",value:function(){void 0!==this.state.country&&null!==this.state.country?window.location.href="/timechart/country/"+this.state.country:alert(this.state.phrase.errorMsg)}},{key:"drawChartJS",value:function(e,t,a){null==t&&(t="");var n=this.chartRef.current.getContext("2d"),r=[],s=[],o=[],c=[],l=[],i=[],u=[];switch(a){case"active":e.sort((function(e,t){return parseInt(e.active)>parseInt(t.active)?-1:1}));break;case"recovered":e.sort((function(e,t){return parseInt(e.recovered)>parseInt(t.recovered)?-1:1}));break;case"cases":e.sort((function(e,t){return parseInt(e.cases)>parseInt(t.cases)?-1:1}));break;case"deaths":e.sort((function(e,t){return parseInt(e.deaths)>parseInt(t.deaths)?-1:1}));break;case"todayCases":e.sort((function(e,t){return parseInt(e.todayCases)>parseInt(t.todayCases)?-1:1}));break;case"todayDeaths":e.sort((function(e,t){return parseInt(e.todayDeaths)>parseInt(t.todayDeaths)?-1:1}));break;default:e.sort((function(e,t){return parseInt(e.cases)>parseInt(t.cases)?-1:1}))}for(var h=0;h<e.length;h++)e[h].country.toLowerCase().includes(t.toLowerCase())&&(r.push(e[h].deaths),s.push(e[h].country),o.push(e[h].cases),c.push(e[h].todayDeaths),l.push(e[h].todayCases),i.push(e[h].active),u.push(e[h].recovered));if(null!==t&&""!==t)try{this.setState({country:s[0]})}catch(m){}for(var d,p=this.state.phrases[1],y=0;y<this.state.phrases.length;y++)this.state.phrases[y].lang===this.state.language&&(p=this.state.phrases[y]);this.setState({phrase:p}),document.title=p.title;var v="bar";""===t&&(v="line"),d=[{label:p.totalDeaths,type:v,data:r,backgroundColor:"#7F171F",borderColor:"#7F171F",fill:"#7F171F"},{label:p.totalCases,data:o,type:v,backgroundColor:" #003366",borderColor:" #003366",fill:" #003366"},{label:p.todayCases,type:v,backgroundColor:"#B67721",borderColor:"#B67721",fill:"#B67721",data:l},{label:p.recovered,type:v,backgroundColor:"#21B6A8",borderColor:"#21B6A8",fill:"#21B6A8",data:u},{label:p.todayDeaths,type:v,backgroundColor:"#B6212D",borderColor:"#B6212D",data:c,labels:c},{label:p.active,type:v,labels:i,backgroundColor:"#177F75",borderColor:"#177F75",fill:"#177F75",data:i}];try{this.myChart.destroy()}catch(f){}this.myChart=new g.a(n,{type:"bar",data:{labels:s,datasets:d},options:{maintainAspectRatio:!1,responsive:!0}}),this.myChart.canvas.parentNode.style.height="90vh"}},{key:"changeLanguage",value:function(){var e=Object(y.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({language:t});case 2:this.drawChartJS(this.state.casesList);case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getLang",value:function(){return this.state.language}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,this.state.phrase.title),r.a.createElement("div",{className:"infoData"},r.a.createElement("div",null,this.state.phrase.language,r.a.createElement("select",{className:"infoChild",onChange:function(t){return e.changeLanguage(t.target.value)}},r.a.createElement("option",{value:"en"},"English"),r.a.createElement("option",{value:"mk"},"\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"))),r.a.createElement("div",null,this.state.phrase.country,r.a.createElement("input",{className:"infoChild",placeholder:"en"===this.state.language?"Type a country":"\u0412\u043d\u0435\u0441\u0435\u0442\u0435 \u0434\u0440\u0436\u0430\u0432\u0430",onChange:function(t){return e.drawChartJS(e.state.casesList,t.target.value)}}),r.a.createElement("input",{type:"button",className:"infoChild",onClick:function(t){return e.getTimeline(e.state.casesList,t.target.value)},value:"en"===this.state.language?"Chronological":"\u0425\u0440\u043e\u043d\u043e\u043b\u043e\u0448\u043a\u0438"})),r.a.createElement("div",null,"en"===this.state.language?"Order by":"\u0421\u043e\u0440\u0442\u0438\u0440\u0430\u0458 \u043f\u043e",r.a.createElement("select",{className:"infoChild",onChange:function(t){return e.drawChartJS(e.state.casesList,"",t.target.value)}},r.a.createElement("option",{value:"cases"},this.state.phrase.totalCases),r.a.createElement("option",{value:"deaths"},this.state.phrase.totalDeaths),r.a.createElement("option",{value:"todayCases"},"en"===this.state.language?"Number of today cases":"\u0414\u0435\u043d\u0435\u0448\u043d\u0438 \u0441\u043b\u0443\u0447\u0430\u0438"),r.a.createElement("option",{value:"todayDeaths"},"en"===this.state.language?"Number of today deaths":"\u0414\u0435\u043d\u0435\u0448\u043d\u0438 \u0441\u043c\u0440\u0442\u043d\u0438 \u0441\u043b\u0443\u0447\u0430\u0438"),r.a.createElement("option",{value:"active"},"en"===this.state.language?"Number of active cases":"\u0410\u043a\u0442\u0438\u0432\u043d\u0438 \u0441\u043b\u0443\u0447\u0430\u0438"),r.a.createElement("option",{value:"recovered"},"en"===this.state.language?"Number of recovered cases":"\u0418\u0437\u043b\u0435\u0447\u0435\u043d\u0438 \u0441\u043b\u0443\u0447\u0430\u0438"))),r.a.createElement("div",null)),r.a.createElement("canvas",{id:"myChart",ref:this.chartRef}))}}]),t}(n.Component),f=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(m,null))}}]),t}(n.Component),C=function(e){function t(){var e;Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).chartRef=r.a.createRef(),e.state={casesList:[],country:null,language:"en",phrase:null,opts:[],phrases:[{lang:"mk",language:"\u0408\u0430\u0437\u0438\u043a",country:"\u0414\u0440\u0436\u0430\u0432\u0430",title:"\u041a\u043e\u0440\u043e\u043d\u0430 \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430",errorMsg:"\u0412\u0435 \u043c\u043e\u043b\u0438\u043c\u0435, \u0432\u043d\u0435\u0441\u0435\u0442\u0435 \u0434\u0440\u0436\u0430\u0432\u0430.",totalCases:"\u0412\u043a\u0443\u043f\u043d\u043e \u0441\u043b\u0443\u0447\u0430\u0438",totalDeaths:"\u0412\u043a\u0443\u043f\u043d\u043e \u0441\u043c\u0440\u0442\u043d\u0438 \u0441\u043b\u0443\u0447\u0430\u0438",active:"\u0410\u043a\u0442\u0438\u0432\u043d\u0438",recovered:"\u0418\u0437\u043b\u0435\u0447\u0435\u043d\u0438",todayCases:"\u0414\u0435\u043d\u0435\u0448\u043d\u0438 \u0441\u043b\u0443\u0447\u0430\u0438",todayDeaths:"\u0414\u0435\u043d\u0435\u0448\u043d\u0438 \u0441\u043c\u0440\u0442\u043d\u0438 \u0441\u043b\u0443\u0447\u0430\u0438"},{lang:"en",totalCases:"Total cases",totalDeaths:"Total deaths",active:"Active",recovered:"Recovered",todayCases:"Today cases",todayDeaths:"Today deaths",errorMsg:"Please, input a country.",title:"Coronavirus Statistics",language:"Language",country:"Country"}]},e.setCountry();var a=e.state.phrases[1];return document.title=a.title,e.state.phrase=a,e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"renderTableData",value:function(e,t){var a=this;this.state.country=e,fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php?country="+e,{headers:{"X-RapidAPI-Host":"coronavirus-monitor.p.rapidapi.com","X-RapidAPI-Key":Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_KEY}}).then((function(e){return e.json()})).then((function(e){var n=[],r=[];e.stat_by_country.map((function(e){try{e.total_cases=e.total_cases.replace(",",""),e.total_deaths=e.total_deaths.replace(",",""),e.total_recovered=e.total_recovered.replace(",",""),e.new_deaths=e.new_deaths.replace(",",""),e.new_cases=e.new_cases.replace(",",""),e.active_cases=e.active_cases.replace(",","")}catch(t){}return n.push({cases:e.total_cases,country:e.country_name,deaths:e.total_deaths,recovered:e.total_recovered,todayDeaths:e.new_deaths,todayCases:e.new_cases,active:e.active_cases,time:e.record_date}),r.push(e.country_name)})),a.drawChartJS(n,"",t),a.setState({casesList:n})}))}},{key:"componentDidMount",value:function(){this.renderTableData(this.props.country.country)}},{key:"getTimeline",value:function(e){void 0!=this.state.country?this.renderTableData(this.state.country,e):alert(this.state.phrase.errorMsg)}},{key:"setCountry",value:function(){var e=this,t=[],a=[];fetch("https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",{headers:{"X-RapidAPI-Host":"coronavirus-monitor.p.rapidapi.com","X-RapidAPI-Key":"e9843df6f7mshaa54667ec07baf1p12224cjsn04cf86d86a81"}}).then((function(e){return e.json()})).then((function(n){n.countries_stat.map((function(e){a.push(e.country_name)})),a.sort(),a.forEach((function(a){e.props.country.country==a?t.push(r.a.createElement("option",{key:a,selected:!0,value:a}," ",a," ")):t.push(r.a.createElement("option",{key:a,value:a}," ",a," "))})),e.state.opts=t}))}},{key:"drawChartJS",value:function(e,t,a){null==t&&(t="");var n=this.chartRef.current.getContext("2d"),r=[],s=[],o=[],c=[],l=[],i=[],u=[],h=[];switch(a){case"asc":e.sort((function(e,t){return new Date(e)>new Date(t)?-1:1}));break;case"desc":e.sort((function(e,t){return new Date(e)>new Date(t)?1:-1}));break;default:e.sort((function(e,t){return new Date(e)>new Date(t)?-1:1}))}for(var d=0;d<e.length;d++)if(e[d].country.toLowerCase().includes(t.toLowerCase())){var p=new Date(e[d].time),y=(new Intl.DateTimeFormat("en",{year:"numeric"}).format(p),new Intl.DateTimeFormat("en",{month:"short"}).format(p)),v=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(p);o.push(v+"."+y),r.push(e[d].deaths),s.push(e[d].country),c.push(e[d].cases),l.push(e[d].todayDeaths),i.push(e[d].todayCases),u.push(e[d].active),h.push(e[d].recovered)}if(null!=t&&""!=t)try{this.state.country=s[0]}catch(b){}for(var m=[],f=this.state.phrases[1],C=0;C<this.state.phrases.length;C++)this.state.phrases[C].lang==this.state.language&&(f=this.state.phrases[C]);document.title=f.title,m=""===t?[{label:f.totalDeaths,type:"line",data:r,borderColor:"#7F171F",fill:"#7F171F"},{label:f.totalCases,data:c,type:"line",borderColor:" #003366",fill:" #003366"},{label:f.todayCases,type:"line",borderColor:"#B67721",fill:"#B67721",data:i},{label:f.recovered,type:"line",borderColor:"#21B6A8",fill:"#21B6A8",data:h},{label:f.todayDeaths,type:"line",borderColor:"#B6212D",fill:"#B6212D",data:l},{label:f.active,type:"line",borderColor:"#177F75",fill:"#177F75",data:u}]:[{label:f.totalDeaths,type:"bar",data:r,backgroundColor:"#7F171F",fill:"#7F171F"},{label:f.totalCases,data:c,type:"bar",backgroundColor:" #003366",fill:" #003366"},{label:f.todayCases,type:"bar",backgroundColor:"#B67721",fill:"#B67721",data:i},{label:f.recovered,type:"bar",backgroundColor:"#21B6A8",fill:"#21B6A8",data:h},{label:f.todayDeaths,type:"bar",backgroundColor:"#B6212D",data:l,labels:l},{label:f.active,type:"bar",labels:u,backgroundColor:"#177F75",fill:"#177F75",data:u}];try{this.myChart.destroy()}catch(E){}this.myChart=new g.a(n,{type:"line",data:{labels:o,datasets:m},options:{maintainAspectRatio:!1,responsive:!0}}),this.myChart.canvas.parentNode.style.height="90vh"}},{key:"getAllCountries",value:function(){void 0!=this.state.country?window.location.href="/":alert(this.state.phrase.errorMsg)}},{key:"changeLanguage",value:function(e){this.setState({language:e}),this.state.language=e,this.getTimeline()}},{key:"getLang",value:function(){return this.state.language}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"en"===this.state.language?"Corona Virus Statistics":"\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u0437\u0430 \u041a\u043e\u0440\u043e\u043d\u0430 \u0432\u0438\u0440\u0443\u0441\u043e\u0442"),r.a.createElement("div",{className:"infoData"},r.a.createElement("div",null,"en"===this.state.language?"Language:":"\u0408\u0430\u0437\u0438\u043a:",r.a.createElement("select",{className:"infoChild",onChange:function(t){return e.changeLanguage(t.target.value)}},r.a.createElement("option",{value:"en"},"English"),r.a.createElement("option",{value:"mk"},"\u041c\u0430\u043a\u0435\u0434\u043e\u043d\u0441\u043a\u0438"))),r.a.createElement("div",null,"en"===this.state.language?"Country:":"\u0414\u0440\u0436\u0430\u0432\u0430:",r.a.createElement("select",{className:"infoChild",id:"countrySelect",onChange:function(t){return e.renderTableData(t.target.value)}},this.state.opts),r.a.createElement("input",{type:"button",className:"infoChild",onClick:function(t){return e.getTimeline(e.state.casesList,t.target.value)},value:"en"===this.state.language?"Choose country":"\u0418\u0437\u0431\u0435\u0440\u0438 \u0434\u0440\u0436\u0430\u0432\u0430"})),r.a.createElement("div",null,"en"===this.state.language?"Order by":"\u0421\u043e\u0440\u0442\u0438\u0440\u0430\u0458 \u043f\u043e",r.a.createElement("select",{className:"infoChild",onChange:function(t){return e.getTimeline(t.target.value)}},r.a.createElement("option",{value:"asc"},"en"===this.state.language?"Date \u0430scending":"\u0414\u0430\u0442\u0443\u043c \u0440\u0430\u0441\u0442\u0435\u0447\u043a\u0438"),r.a.createElement("option",{value:"desc"},"en"===this.state.language?"Date descending":"\u0414\u0430\u0442\u0443\u043c \u043e\u043f\u0430\u0453\u0430\u0447\u043a\u0438"))),r.a.createElement("input",{type:"button",className:"infoChild",onClick:function(t){return e.getAllCountries()},value:"en"===this.state.language?"All countries":"\u0421\u0438\u0442\u0435 \u0434\u0440\u0436\u0430\u0432\u0438"})),r.a.createElement("h2",null,this.state.country),r.a.createElement("canvas",{id:"myChart",ref:this.chartRef}))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={country:a.props.match.params},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params;this.setCountry(e)}},{key:"setCountry",value:function(){var e=Object(y.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.setState({country:t});case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,{country:this.state.country}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var E=a(23),_=a(10),D=r.a.createElement(E.a,null,r.a.createElement("div",null,r.a.createElement(_.a,{exact:!0,path:"/",component:f}),r.a.createElement(_.a,{path:"/timechart/country/:country",component:b})));o.a.render(D,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.4966498a.chunk.js.map