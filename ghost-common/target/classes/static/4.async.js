(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"4mTq":function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("IzEo");var o=n(a("bx4M"));a("14J3");var d=n(a("BMrR"));a("+L6B");var l=n(a("2/Rp"));a("jCWc");var i=n(a("kPKH"));a("5NDa");var s=n(a("5rEg")),c=n(a("MVZn"));a("5Dmo");var u=n(a("3S7+")),p=n(a("lwsE")),h=n(a("W8MJ")),f=n(a("a1gu")),m=n(a("Nsbk")),g=n(a("7W2i"));a("y8nQ");var y,b,x,v=n(a("Vl3Y")),w=r(a("q1tI")),E=a("MuoO"),C=n(a("zHco")),j=n(a("nP61")),T=n(a("cYWl")),I=n(a("Jed0")),N=n(a("wW5x")),W=v.default.Item,R=(0,I.default)()(T.default),S=(y=(0,E.connect)(function(e){var t=e.job,a=e.task,n=e.loading;return{data:t.data,loading:n.models.job,graphDependencies:a.graphNodes,graphNodesFetchLoading:n.effects["task/fetchAllGraphNodes"]}}),b=v.default.create(),y(x=b(x=function(e){function t(){var e,a;(0,p.default)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return a=(0,f.default)(this,(e=(0,m.default)(t)).call.apply(e,[this].concat(r))),a.state={formValues:{},pagination:{pageNo:1,timeSortType:0},showGraphContainer:"hide",jobId:0},a.graphContainerRight={show:"33px",hide:""},a.scroll={x:!1},a.fixedWidth={name:"",gmtModify:"",executeRate:"",owner:"",type:""},a.columns=[{title:"\u4efb\u52a1\u540d\u79f0",dataIndex:"name",percent:33,render:function(e,t){var n=t.id;return a.renderTooltip(e,"name",n)}},{title:"\u4fee\u6539\u65e5\u671f",dataIndex:"gmtModify",sorter:!0,percent:18,render:function(e){return a.renderTooltip(e,"gmtModify")}},{title:"\u4efb\u52a1\u7c7b\u578b",dataIndex:"type",percent:16,render:function(e){return a.renderTooltip(e,"type")}},{title:"\u8d23\u4efb\u4eba",dataIndex:"owner",percent:18,render:function(e){return a.renderTooltip(e,"owner")}},{title:"\u8c03\u5ea6\u7c7b\u578b",dataIndex:"executeRate",render:function(e){return a.renderTooltip(e,"executeRate")}}],a.renderTooltip=function(e,t,n){return w.default.createElement(u.default,{title:e},n?w.default.createElement("a",{href:"javascript:;",style:{maxWidth:"".concat(a.fixedWidth[t],"px")},onClick:function(e){return a.showGraph(e,n)},className:N.default.tdEllisps},e):w.default.createElement("span",{href:"javascript:;",style:{maxWidth:"".concat(a.fixedWidth[t],"px")},className:N.default.tdEllisps},e))},a.showGraph=function(e,t){e.stopPropagation(),a.setState({showGraphContainer:"show",jobId:t}),a.props.dispatch({type:"task/fetchAllGraphNodes",payload:t})},a.handleSearch=function(e){e.preventDefault();var t=a.props,n=t.dispatch,r=t.form;r.validateFields(function(e,t){e||(a.setState({formValues:t}),n({type:"job/fetchJobs",payload:(0,c.default)({},a.state.pagination,t)}))})},a.handleFormReset=function(){var e=a.props,t=e.form,n=e.dispatch;t.resetFields(),a.setState({formValues:{}}),n({type:"job/fetchJobs"})},a.renderForm=function(){var e=a.props.form.getFieldDecorator;return w.default.createElement(v.default,{onSubmit:a.handleSearch,layout:"inline"},w.default.createElement(d.default,{gutter:{md:8,lg:24,xl:48},style:{display:"flex",alignItems:"center"}},w.default.createElement(i.default,{md:6,sm:24},w.default.createElement(W,{label:"\u811a\u672c\u540d\u79f0"},e("fileName")(w.default.createElement(s.default,{placeholder:"\u8bf7\u8f93\u5165"})))),w.default.createElement(i.default,{md:8,sm:24},w.default.createElement("span",{className:"SubmitButtons"},w.default.createElement(l.default,{type:"primary",htmlType:"submit"},"\u67e5\u8be2"),w.default.createElement(l.default,{style:{marginLeft:8},onClick:a.handleFormReset},"\u91cd\u7f6e")))))},a.handleGeneralTableChange=function(e,t,n){var r={};n.order?"descend"===n.order?r.timeSortType=2:r.timeSortType=1:r.timeSortType=0,r.pageNo=e.current,a.setState({pagination:r}),a.props.dispatch({type:"job/fetchJobs",payload:(0,c.default)({},r,a.state.formValues)})},a.autoFooter=function(){var e=a.props.data,t=void 0===e?{}:e,n=t.list,r=void 0===n?[]:n;if(r.length>0&&r.length<11){var o=59*(10-r.length);return w.default.createElement("div",{style:{height:"".concat(o,"px")}},w.default.createElement("div",{style:{height:"100%",width:"".concat(parseInt(a.fixedWidth.name,10)+33,"px"),borderRight:"1px solid #e8e8e8"}}))}return!1},a.hideGraphContainer=function(){a.setState({showGraphContainer:"hide"})},a}return(0,g.default)(t,e),(0,h.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.dispatch;e({type:"job/fetchJobs"})}},{key:"render",value:function(){var e=this,t=this.props,a=t.loading,n=t.data,r=void 0===n?{}:n,d=t.graphDependencies,l=t.graphNodesFetchLoading,i=document.body.clientWidth-(document.getElementsByClassName("ant-layout-sider")[0]?document.getElementsByClassName("ant-layout-sider")[0].style.width.replace("px",""):0)-48-64;this.columns=this.columns.map(function(t){return"executeRate"===t.dataIndex?(delete e.fixedWidth.executeRate,t.width=i-Object.values(e.fixedWidth).reduce(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e+t},0),e.fixedWidth[t.dataIndex]="".concat(t.width-32)):(t.width=Math.floor(t.percent/100*i),e.fixedWidth[t.dataIndex]="".concat(t.width-32)),t});var s=this.fixedWidth.name,c=void 0===s?0:s,u=i-c-36,p="".concat(u+1,"px");return this.graphContainerRight.hide="-".concat(u+33,"px"),w.default.createElement(C.default,null,w.default.createElement(o.default,{bordered:!1,onClick:this.hideGraphContainer},w.default.createElement("div",{className:N.default.fixedHeightTableList},w.default.createElement("div",{onClick:function(e){return e.stopPropagation()},style:{right:"".concat(this.graphContainerRight[this.state.showGraphContainer]),width:p},className:N.default.graphContainer},w.default.createElement(R,{loading:l,graphDependencies:d,nodeId:this.state.jobId,payloadKey:"jobPlanId"})),w.default.createElement("div",{className:"CommonTableList-Form"},this.renderForm()),w.default.createElement(j.default,{rowKey:"id",bordered:!0,footer:this.autoFooter,scroll:this.scroll,loading:a,data:r,columns:this.columns,onChange:this.handleGeneralTableChange}))))}}]),t}(w.PureComponent))||x)||x),k=S;t.default=k},wW5x:function(e,t,a){e.exports={fixedHeightTableList:"antd-pro-main-resources-web-src-src-pages-job-job-plan-fixedHeightTableList",graphContainer:"antd-pro-main-resources-web-src-src-pages-job-job-plan-graphContainer",tdEllisps:"antd-pro-main-resources-web-src-src-pages-job-job-plan-tdEllisps"}}}]);