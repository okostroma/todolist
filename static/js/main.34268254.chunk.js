(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{110:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(8),i=n.n(r),s=(n(87),n(15)),c=n(39),l=n(16),d=n(17),u=(n(25),n(11)),p=n(158),f=n(151),m=n(160),T=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={error:!1,title:""},t.onAddItemClick=function(){var e=t.state.title.trim();""===e?t.setState({error:!0}):(t.setState({title:"",error:!1}),t.props.addItem(e))},t.onTitleChanged=function(e){t.setState({error:!1,title:e.currentTarget.value})},t.onKeyPress=function(e){"Enter"===e.key&&t.onAddItemClick()},t.render=function(){var e=!0===t.state.error?"error":"";return o.a.createElement("div",{className:"todoList-newTaskForm"},o.a.createElement(p.a,{variant:"outlined",error:!!e,value:t.state.title,onChange:t.onTitleChanged,onKeyPress:t.onKeyPress,type:"text",label:"title"}),o.a.createElement(f.a,{color:"primary",onClick:t.onAddItemClick},o.a.createElement(m.a,null)))},t}return n}(o.a.Component),h=n(44),k=n(45),E=n(159),g=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={isEditMode:!1,title:t.props.task.title},t.activatedEditMode=function(){t.setState({isEditMode:!0})},t.deActivatedEditMode=function(){t.setState({isEditMode:!1}),t.props.changeTitle(t.props.task,t.state.title)},t.onIsDoneChanged=function(e){t.props.changeStatus(t.props.task,e.currentTarget.checked)},t.onIsTitleChange=function(e){t.setState({title:e.currentTarget.value})},t.isTaskDeleted=function(){t.props.deleteTask(t.props.task.id)},t.onIsPriorityChanged=function(e){t.props.changePriority(t.props.task,e.currentTarget.value)},t.render=function(){var e=[{id:0,priority:"high"},{id:1,priority:"medium"},{id:2,priority:"low"}].map(function(t){return o.a.createElement("option",{key:t.id,value:t.priority}," ",t.priority," ")}),n=t.props.task.status,a=2===n?"done":"",r=t.props.task.priority;return o.a.createElement("div",{className:"todoList-task + ".concat(a)},o.a.createElement(E.a,{color:"primary",checked:2===n,onChange:t.onIsDoneChanged}),t.state.isEditMode?o.a.createElement(p.a,{onChange:t.onIsTitleChange,value:t.state.title,autoFocus:!0,onBlur:t.deActivatedEditMode}):o.a.createElement("span",{onDoubleClick:t.activatedEditMode},t.props.task.title),",",o.a.createElement("span",null," priority:",o.a.createElement("select",{onChange:t.onIsPriorityChanged,value:2===r?"high":1===r?"medium":"low"},e)),o.a.createElement("span",{onClick:t.isTaskDeleted}," ",o.a.createElement(h.a,{className:"times",icon:k.a})," "))},t}return n}(o.a.Component),O=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).render=function(){var e=t.props.tasks.map(function(e){return o.a.createElement(g,{key:e.id,changePriority:t.props.changePriority,deleteTask:t.props.deleteTask,changeTitle:t.props.changeTitle,task:e,changeStatus:t.props.changeStatus})});return o.a.createElement("div",{className:"todoList-tasks"},e)},t}return n}(o.a.Component),v=n(152),C=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={isHidden:!1},t.onAllFilterClick=function(){t.props.changeFilter("All")},t.onCompletedFilterClick=function(){t.props.changeFilter("Completed")},t.onActiveFilterClick=function(){t.props.changeFilter("Active")},t.onShowFiltersClick=function(){t.setState({isHidden:!1})},t.onHideFiltersClick=function(){t.setState({isHidden:!0})},t.render=function(){var e="All"===t.props.filerValue?"contained":"",n="Completed"===t.props.filerValue?"contained":"",a="Active"===t.props.filerValue?"contained":"";return o.a.createElement("div",{className:"todoList-footer"},!t.state.isHidden&&o.a.createElement("div",null,o.a.createElement(v.a,{color:"default",onClick:t.onAllFilterClick,variant:e},"All"),o.a.createElement(v.a,{color:"primary",onClick:t.onCompletedFilterClick,variant:n},"Completed"),o.a.createElement(v.a,{color:"secondary",onClick:t.onActiveFilterClick,variant:a},"Active")),!t.state.isHidden&&o.a.createElement("span",{onClick:t.onHideFiltersClick},"hide"),t.state.isHidden&&o.a.createElement("span",{onClick:t.onShowFiltersClick},"show"))},t}return n}(o.a.Component),y=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).render=function(){return o.a.createElement("div",{className:"todoList-title"},o.a.createElement("h3",{className:"todoList-title__title"},t.props.title))},t}return n}(o.a.Component),b=n(31),S=n(48),L="TODOLIST/REDUCER/ADD_TASK",j={todolists:[]},D=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"TODOLIST/REDUCER/ADD_TODOLIST":return Object(u.a)({},t,{todolists:[].concat(Object(S.a)(t.todolists),[e.newTodoList])});case L:return Object(u.a)({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?Object(u.a)({},t,{tasks:[].concat(Object(S.a)(t.tasks),[e.newTask])}):t})});case"TODOLIST/REDUCER/DELETE_TASK":return Object(u.a)({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?Object(u.a)({},t,{tasks:Object(S.a)(t.tasks.filter(function(t){return t.id!==e.taskId}))}):t})});case"TODOLIST/REDUCER/CHANGE_TASK":return Object(u.a)({},t,{todolists:t.todolists.map(function(t){return t.id===e.task.todoListId?Object(u.a)({},t,{tasks:t.tasks.map(function(t){return t.id===e.task.id?e.task:t})}):t})});case"TODOLIST/REDUCER/DELETE_TODOLIST":return Object(u.a)({},t,{todolists:t.todolists.filter(function(t){return t.id!==e.todolistId})});case"SET_TODOLISTS":return Object(u.a)({},t,{todolists:e.todolists.map(function(t){return Object(u.a)({},t,{tasks:[]})})});case"SET_TASKS":return Object(u.a)({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?Object(u.a)({},t,{tasks:e.tasks}):t})});default:return t}},I=n(38).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.1/",headers:{"API-KEY":"01dff12f-025a-426e-aee1-b5aaa1d81343"}}),A={getTodoLists:function(){return I.get("todo-lists").then(function(t){return t.data})},postTodoList:function(t){return I.post("todo-lists",{title:t}).then(function(t){return t.data})},deleteList:function(t){return I.delete("todo-lists/".concat(t)).then(function(t){return t.data})},getTasks:function(t){return I.get("todo-lists/".concat(t,"/tasks")).then(function(t){return t.data})},postTask:function(t,e){return I.post("todo-lists/".concat(t,"/tasks"),{title:e}).then(function(t){return t.data})},delTask:function(t,e){return I.delete("todo-lists/".concat(t,"/tasks/").concat(e)).then(function(t){return t.data})},updateTask:function(t,e,n){return I.put("todo-lists/".concat(t,"/tasks/").concat(e),n).then(function(t){return t.data})}},w=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={tasks:[],filterValue:"All"},t.nextTaskId=0,t.saveState=function(){var e=JSON.stringify(t.state);localStorage.setItem("state-"+t.props.id,e)},t.restoreState=function(){A.getTasks(t.props.id).then(function(e){e.error||t.props.setTasks(t.props.id,e.items)})},t.addTask=function(e){A.postTask(t.props.id,e).then(function(e){0===e.resultCode&&t.props.addTask(t.props.id,e.data.item)})},t.deleteTask=function(e){A.delTask(t.props.id,e).then(function(n){0===n.resultCode&&t.props.deleteTask(t.props.id,e)})},t.changeFilter=function(e){t.setState({filterValue:e})},t.changeTask=function(e){A.updateTask(t.props.id,e.id,e).then(function(e){0===e.resultCode&&t.props.changeTask(e.data.item)})},t.changeStatus=function(e,n){t.changeTask(Object(u.a)({},e,{status:!0===n?2:0}))},t.changeTitle=function(e,n){t.changeTask(Object(u.a)({},e,{title:n}))},t.changePriority=function(e,n){t.changeTask(Object(u.a)({},e,{priority:"high"===n?2:"medium"===n?1:0}))},t.isTodoListDeleted=function(){t.props.deleteTodoList(t.props.id)},t.render=function(){var e=t.props.tasks,n=(void 0===e?[]:e).filter(function(e){switch(t.state.filterValue){case"Active":return 0===e.status;case"Completed":return 2===e.status;case"All":default:return!0}});return o.a.createElement("div",{className:"todoList"},o.a.createElement(y,{title:t.props.title})," ",o.a.createElement("span",{onClick:t.isTodoListDeleted}," ",o.a.createElement(h.a,{className:"times-header",icon:k.a})),o.a.createElement(T,{title:t.props.title,addItem:t.addTask}),o.a.createElement(O,{changePriority:t.changePriority,deleteTask:t.deleteTask,changeTitle:t.changeTitle,tasks:n,changeStatus:t.changeStatus}),o.a.createElement(C,{filerValue:t.state.filterValue,changeFilter:t.changeFilter}))},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.restoreState()}}]),n}(o.a.Component),R=Object(b.b)(null,function(t){return{addTask:function(e,n){t(function(t,e){return{type:L,newTask:e,todolistId:t}}(e,n))},changeTask:function(e){t(function(t){return{type:"TODOLIST/REDUCER/CHANGE_TASK",task:t}}(e))},deleteTask:function(e,n){t(function(t,e){return{type:"TODOLIST/REDUCER/DELETE_TASK",todolistId:t,taskId:e}}(e,n))},setTasks:function(e,n){t(function(t,e){return{type:"SET_TASKS",todolistId:t,tasks:e}}(e,n))}}})(w),F=n(154),N=n(155),_=n(156),P=n(71),K=n(157),H=n(153),M=n(111),U=function(t){Object(d.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={todolists:[]},t.nextTodoListId=0,t.restoreState=function(){A.getTodoLists().then(function(e){t.props.setTodoLists(e)})},t.addTodoList=function(e){A.postTodoList(e).then(function(e){var n=e.data.item;t.props.createTodolist(n)})},t.deleteTodoList=function(e){A.deleteList(e).then(function(n){0===n.resultCode&&t.props.deleteTodolist(e)})},t.render=function(){var e=t.props.todolists.map(function(e){return o.a.createElement(H.a,{item:!0}," ",o.a.createElement(M.a,{style:{padding:"10px"}}," ",o.a.createElement(R,{key:e.id,tasks:e.tasks,deleteTodoList:t.deleteTodoList,id:e.id,title:e.title})," ")," ")});return o.a.createElement("div",null,o.a.createElement(F.a,{position:"static"},o.a.createElement(N.a,null,o.a.createElement(f.a,{edge:"start",className:"menuButton",color:"inherit","aria-label":"menu"},o.a.createElement(P.a,null)),o.a.createElement(_.a,{variant:"h6",className:"title"},"News"),o.a.createElement(v.a,{color:"inherit"},"Login"))),o.a.createElement(K.a,{fixed:!0},o.a.createElement(H.a,{container:!0,style:{padding:"20px"}},o.a.createElement(T,{addItem:t.addTodoList})),o.a.createElement(H.a,{container:!0,spacing:3},e)))},t}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.restoreState()}}]),n}(o.a.Component),V=Object(b.b)(function(t){return{todolists:t.todolists}},function(t){return{createTodolist:function(e){t(function(t){return{type:"TODOLIST/REDUCER/ADD_TODOLIST",newTodoList:t}}(e))},deleteTodolist:function(e){t(function(t){return{type:"TODOLIST/REDUCER/DELETE_TODOLIST",todolistId:t}}(e))},setTodoLists:function(e){t(function(t){return{type:"SET_TODOLISTS",todolists:t}}(e))}}})(U);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var x=n(46),B=Object(x.b)(D);i.a.render(o.a.createElement(b.a,{store:B},o.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},25:function(t,e,n){},82:function(t,e,n){t.exports=n(110)},87:function(t,e,n){}},[[82,1,2]]]);
//# sourceMappingURL=main.34268254.chunk.js.map