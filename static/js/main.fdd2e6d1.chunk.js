(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(t,e,a){t.exports=a(34)},26:function(t,e,a){},34:function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),i=a(10),r=a.n(i),s=(a(26),a(2)),c=a(11),l=a(3),d=a(4),u=(a(6),function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={error:!1,title:""},t.onAddItemClick=function(){var e=t.state.title.trim();""===e?t.setState({error:!0}):(t.setState({title:"",error:!1}),t.props.addItem(e))},t.onTitleChanged=function(e){t.setState({error:!1,title:e.currentTarget.value})},t.onKeyPress=function(e){"Enter"===e.key&&t.onAddItemClick()},t.render=function(){var e=!0===t.state.error?"error":"";return o.a.createElement("div",{className:"todoList-newTaskForm"},o.a.createElement("input",{className:e,value:t.state.title,onChange:t.onTitleChanged,onKeyPress:t.onKeyPress,type:"text",placeholder:"New item name"}),o.a.createElement("button",{onClick:t.onAddItemClick},"Add"))},t}return a}(o.a.Component)),p=a(12),f=a(13),m=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={isEditMode:!1,priority:["high","medium","low"]},t.activatedEditMode=function(){t.setState({isEditMode:!0})},t.deActivatedEditMode=function(){t.setState({isEditMode:!1})},t.onIsDoneChanged=function(e){t.props.changeStatus(t.props.task.id,e.currentTarget.checked)},t.onIsTitleChange=function(e){t.props.changeTitle(t.props.task.id,e.currentTarget.value)},t.isTaskDeleted=function(){t.props.deleteTask(t.props.task.id)},t.onIsPriorityChanged=function(e){t.props.changePriority(t.props.task.id,e.currentTarget.value)},t.render=function(){var e=!0===t.props.task.isDone?"done":"";return o.a.createElement("div",{className:"todoList-task + ".concat(e)},o.a.createElement("input",{type:"checkbox",checked:t.props.task.isDone,onChange:t.onIsDoneChanged}),t.state.isEditMode?o.a.createElement("input",{onChange:t.onIsTitleChange,value:t.props.task.title,autoFocus:!0,onBlur:t.deActivatedEditMode}):o.a.createElement("span",{onDoubleClick:t.activatedEditMode},t.props.task.id," - ",t.props.task.title),",",o.a.createElement("span",null," priority:",o.a.createElement("select",{onChange:t.onIsPriorityChanged,value:t.props.task.priority},o.a.createElement("option",{value:t.state.priority[0]},t.state.priority[0]),o.a.createElement("option",{value:t.state.priority[1]},t.state.priority[1]),o.a.createElement("option",{value:t.state.priority[2]},t.state.priority[2]))),o.a.createElement("span",{onClick:t.isTaskDeleted}," ",o.a.createElement(p.a,{className:"times",icon:f.a})," "))},t}return a}(o.a.Component),k=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).render=function(){var e=t.props.tasks.map(function(e){return o.a.createElement(m,{key:e.id,changePriority:t.props.changePriority,deleteTask:t.props.deleteTask,changeTitle:t.props.changeTitle,task:e,changeStatus:t.props.changeStatus})});return o.a.createElement("div",{className:"todoList-tasks"},e)},t}return a}(o.a.Component),h=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={isHidden:!1},t.onAllFilterClick=function(){t.props.changeFilter("All")},t.onCompletedFilterClick=function(){t.props.changeFilter("Completed")},t.onActiveFilterClick=function(){t.props.changeFilter("Active")},t.onShowFiltersClick=function(){t.setState({isHidden:!1})},t.onHideFiltersClick=function(){t.setState({isHidden:!0})},t.render=function(){var e="All"===t.props.filerValue?"filter-active":"",a="Completed"===t.props.filerValue?"filter-active":"",n="Active"===t.props.filerValue?"filter-active":"";return o.a.createElement("div",{className:"todoList-footer"},!t.state.isHidden&&o.a.createElement("div",null,o.a.createElement("button",{onClick:t.onAllFilterClick,className:e},"All"),o.a.createElement("button",{onClick:t.onCompletedFilterClick,className:a},"Completed"),o.a.createElement("button",{onClick:t.onActiveFilterClick,className:n},"Active")),!t.state.isHidden&&o.a.createElement("span",{onClick:t.onHideFiltersClick},"hide"),t.state.isHidden&&o.a.createElement("span",{onClick:t.onShowFiltersClick},"show"))},t}return a}(o.a.Component),T=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).render=function(){return o.a.createElement("div",{className:"todoList-title"},o.a.createElement("h3",{className:"todoList-title__title"},t.props.title))},t}return a}(o.a.Component),v=a(7),g=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={tasks:[],filterValue:"All"},t.nextTaskId=0,t.saveState=function(){var e=JSON.stringify(t.state);localStorage.setItem("state-"+t.props.id,e)},t.restoreState=function(){var e={tasks:[],filterValue:"All"},a=localStorage.getItem("state-"+t.props.id);a&&(e=JSON.parse(a)),t.setState(e,function(){t.state.tasks.forEach(function(e){e.id>=t.nextTaskId&&(t.nextTaskId=e.id+1)})})},t.addTask=function(e){var a={id:t.nextTaskId,title:e,isDone:!1,priority:""};t.nextTaskId++,t.props.addTask(t.props.id,a)},t.deleteTask=function(e){t.props.deleteTask(t.props.id,e)},t.changeFilter=function(e){t.setState({filterValue:e})},t.changeTask=function(e,a){t.props.changeTask(t.props.id,e,a)},t.changeStatus=function(e,a){t.changeTask(e,{isDone:a})},t.changeTitle=function(e,a){t.changeTask(e,{title:a})},t.changePriority=function(e,a){t.changeTask(e,{priority:a})},t.isTodoListDeleted=function(){t.props.deleteTodoList(t.props.id)},t.render=function(){var e=t.props.tasks.filter(function(e){switch(t.state.filterValue){case"Active":return!1===e.isDone;case"Completed":return!0===e.isDone;case"All":default:return!0}});return o.a.createElement("div",{className:"todoList"},o.a.createElement(T,{title:t.props.title})," ",o.a.createElement("span",{onClick:t.isTodoListDeleted}," ",o.a.createElement(p.a,{className:"times-header",icon:f.a})),o.a.createElement(u,{title:t.props.title,addItem:t.addTask}),o.a.createElement(k,{changePriority:t.changePriority,deleteTask:t.deleteTask,changeTitle:t.changeTitle,tasks:e,changeStatus:t.changeStatus}),o.a.createElement(h,{filerValue:t.state.filterValue,changeFilter:t.changeFilter}))},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.restoreState()}}]),a}(o.a.Component),E=Object(v.b)(null,function(t){return{addTask:function(e,a){t({type:"ADD_TASK",newTask:a,todolistId:e})},changeTask:function(e,a,n){t({type:"CHANGE_TASK",todolistId:e,taskId:a,obj:n})},deleteTask:function(e,a){t({type:"DELETE_TASK",todolistId:e,taskId:a})}}})(g),y=function(t){Object(d.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(s.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(t=e.call.apply(e,[this].concat(i))).state={todolists:[]},t.nextTodoListId=0,t.saveState=function(){var e=JSON.stringify(t.state);localStorage.setItem("todolists",e)},t.restoreState=function(){var e={todolists:[]},a=localStorage.getItem("todolists");a&&(e=JSON.parse(a)),t.setState(e,function(){t.state.todolists.forEach(function(e){e.id>=t.nextTodoListId&&(t.nextTodoListId=e.id+1)})})},t.addTodoList=function(e){var a={id:t.nextTodoListId,title:e,tasks:[]};t.nextTodoListId++,t.props.createTodolist(a)},t.deleteTodoList=function(e){t.props.deleteTodolist(e)},t.render=function(){var e=t.props.todolists.map(function(e){return o.a.createElement(E,{key:e.id,tasks:e.tasks,deleteTodoList:t.deleteTodoList,id:e.id,title:e.title})});return o.a.createElement("div",null,o.a.createElement(u,{addItem:t.addTodoList}),o.a.createElement("div",{className:"App"},e))},t}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.restoreState()}}]),a}(o.a.Component),b=Object(v.b)(function(t){return{todolists:t.todolists}},function(t){return{createTodolist:function(e){t({type:"ADD_TODOLIST",newTodoList:e})},deleteTodolist:function(e){t({type:"DELETE_TODOLIST",todolistId:e})}}})(y);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O=a(8),C=a(5),I=a(14),S={todolists:[]},j=Object(I.b)(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"ADD_TODOLIST":return Object(C.a)({},t,{todolists:[].concat(Object(O.a)(t.todolists),[e.newTodoList])});case"ADD_TASK":return Object(C.a)({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?Object(C.a)({},t,{tasks:[].concat(Object(O.a)(t.tasks),[e.newTask])}):t})});case"DELETE_TASK":return Object(C.a)({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?Object(C.a)({},t,{tasks:Object(O.a)(t.tasks.filter(function(t){return t.id!==e.taskId}))}):t})});case"CHANGE_TASK":return Object(C.a)({},t,{todolists:t.todolists.map(function(t){return t.id===e.todolistId?Object(C.a)({},t,{tasks:Object(O.a)(t.tasks.map(function(t){return t.id===e.taskId?Object(C.a)({},t,{},e.obj):t}))}):t})});case"DELETE_TODOLIST":return Object(C.a)({},t,{todolists:t.todolists.filter(function(t){return t.id!==e.todolistId})});default:return t}});r.a.render(o.a.createElement(v.a,{store:j},o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},6:function(t,e,a){}},[[21,1,2]]]);
//# sourceMappingURL=main.fdd2e6d1.chunk.js.map