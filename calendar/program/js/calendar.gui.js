function calendar_gui(){window.rcmail&&(rcmail.env.calendar_gui_initialized=!1);this.minimalmode=function(){if("undefined"!=typeof rcmail.get_cookie&&"larry"==rcmail.env.skin){var a=rcmail.get_cookie("minimalmode");"undefined"!=typeof rcmail.get_cookie&&(parseInt(a)||null===a&&850>$(window).height())?($("#mainscreen").css("top","85px"),$("#calendaroverlay").css("top","85px"),$("#calendar-header").css("top","85px"),$("#messagetoolbar").css("top","45px"),$("#todaybutton").css("top","55px"),$("#calquicksearchbar").css("top",
"55px")):($("#mainscreen").css("top","110px"),$("#calendaroverlay").css("top","110px"),$("#calendar-header").css("top","110px"),$("#messagetoolbar").css("top","69px"),$("#todaybutton").css("top","80px"),$("#calquicksearchbar").css("top","75px"));calendar_gui.adjustRight()}};this.init=function(a){if(rcmail.env.calsearch_id){var b=$("#calendar").fullCalendar("clientEvents",rcmail.env.calsearch_id);if(b&&b[0]){rcmail.env.calsearch_id=!1;rcmail.env.calendar_gui_initialized=!0;calendar_callbacks.eventClick(b[0],
rcmail.env.calsettings);return}rcmail.env.calsearch_id=!1}if(rcmail.env.calendar_gui_initialized)$("#upcoming").fullCalendar("removeEvents");else{rcmail.env.calendar_gui_initialized=!0;"false"!=queryString("_view")&&$("#calendar").fullCalendar("changeView",queryString("_view"));"larry"==rcmail.env.skin&&$("#calendar-header").attr("class","ui-widget-header");"false"!=queryString("_event_id")&&"false"!=queryString("_date")&&(rcmail.env.ts=queryString("_date"),rcmail.env.id=queryString("_event_id"),
calendar_commands.gotoDate(rcmail.env.ts,rcmail.env.id),rcmail.env.calendar_gui_initialized=!1);if("false"!=queryString("_date")){var b=$("#calendar").fullCalendar("getDate"),d=$.fullCalendar.parseDate(new Date(1E3*queryString("_date")));(b.getDate()!=d.getDate()||b.getMonth()!=d.getMonth()||b.getFullYear()!=d.getFullYear())&&$("#calendar").fullCalendar("gotoDate",$.fullCalendar.parseDate(new Date(1E3*queryString("_date"))))}$("#subscriptiontoggle").click(function(){$("#subscription-table-content").is(":visible")?
($(this).prop("checked")?($(".subscriptionchbox").prop("checked",!0),$(this).attr("title",rcmail.gettext("uncheckall","calendar"))):($(".subscriptionchbox").prop("checked",!1),$(this).attr("title",rcmail.gettext("checkall","calendar"))),$("#calendaroverlay").show(),$("#calsearchfilter").val(""),rcmail.http_post("plugin.calendar_subscribe",$("#subscription_form").serialize())):($(this).prop("checked")?($(".filterschbox").prop("checked",!0),$(this).attr("title",rcmail.gettext("uncheckall","calendar"))):
($(".filterschbox").prop("checked",!1),$(this).attr("title",rcmail.gettext("checkall","calendar"))),$("#calendaroverlay").show(),$("#calsearchfilter").val(""),rcmail.http_post("plugin.calendar_setfilters",$("#filters_form").serialize()))});$(".subscriptionchbox").click(function(){if(rcmail.env.replication_complete){rcmail.env.subscriptionsubmit&&window.clearTimeout(rcmail.env.subscriptionsubmit);$("#calsearchfilter").val("");var a=this.id.replace("chbox_","option_"),b=this.id.replace("chbox_","filter_"),
d=this.id.replace("chbox_","user_");$(this).prop("checked")?($("#"+a).show(),$("#"+b).show(),$("."+b).show(),$("#"+d).show()):($("#"+a).hide(),$("#"+b).hide(),$("."+b).hide(),$("#"+d).hide());rcmail.env.subscriptiondata=$("#subscription_form").serialize();rcmail.env.subscriptionsubmit=window.setTimeout("$('#calendaroverlay').show();rcmail.http_post('plugin.calendar_subscribe', rcmail.env.subscriptiondata);rcmail.env.subscriptiondata=false;rcmail.env.subscriptionsubmit=false",2500)}else $(this).prop("checked")?
$(this).prop("checked",!1):$(this).prop("checked",!0),rcmail.display_message(rcmail.gettext("backgroundreplication","calendar"),"error")});$("#subscriptions-table").mouseleave(function(){rcmail.env.subscriptiondata&&rcmail.env.subscriptionsubmit&&(window.clearTimeout(rcmail.env.subscriptionsubmit),$("#calendaroverlay").show(),rcmail.http_post("plugin.calendar_subscribe",rcmail.env.subscriptiondata),rcmail.env.subscriptiondata=!1,rcmail.env.subscriptionsubmit=!1)});$("#subscriptionlink").click(function(){$("#filterslink").removeClass("subscriptionlink-selected");
$(this).addClass("subscriptionlink-selected");$("#filters-table-content").hide();$("#subscription-table-content").show();calendar_gui.adjustLeft();rcmail.http_post("plugin.calendar_subscription_view","_view=subscriptions")});$("#filterslink").click(function(){$("#subscriptionlink").removeClass("subscriptionlink-selected");$(this).addClass("subscriptionlink-selected");$("#subscription-table-content").hide();$("#filters-table-content").show();calendar_gui.adjustLeft();rcmail.http_post("plugin.calendar_subscription_view",
"_view=filters")});$(".filterschbox").click(function(){rcmail.env.replication_complete?($("#calsearchfilter").val(""),data=$("#filters_form").serialize(),$("#calendaroverlay").show(),rcmail.http_post("plugin.calendar_setfilters",data)):($(this).prop("checked")?$(this).prop("checked",!1):$(this).prop("checked",!0),rcmail.display_message(rcmail.gettext("backgroundreplication","calendar"),"error"))});this.upcoming(a);rcmail.env.google_ads||(a=0,"larry"==rcmail.env.skin&&(a=110),$("#calsearchdialog").dialog({autoOpen:!1,
modal:!1,resizable:!1,width:285,height:250,position:[$("#calquicksearchbar").position().left-a,$("#calquicksearchbar").position().top+30]}));$("#calsearchfilter").click(function(){$("#calsearchset").hide();2<$("#calsearchfilter").val().length&&$("#calsearchdialog").dialog("open");$("#calsearchfilter").focus()});$("#calsearchfilter").bind("keypress",function(a){if(13==rcube_event.get_keycode(a))return rcmail.env.cal_search_string="",calendar_commands.triggerSearch(),!1});$("#calsearchfilter").bind("keyup",
function(){calendar_commands.triggerSearch()});$("#calsearchreset").click(function(){$("#calsearchdialog").dialog("close");$("#calsearchfilter").val("");$("#calsearch_table").html("")});$("#calsearchmod").click(function(){$("#calsearchset").toggle()});$("#todaybut").click(function(){$("#jqdatepicker").datepicker("setDate",new Date);$("#calendar").fullCalendar("today");rcmail.env.clientEvents=!0});$("#prevbut").click(function(){rcmail.env.onChangeMonthYear=!1;$("#calendar").fullCalendar("prev");var a=
new Date($("#calendar").fullCalendar("getDate")),b=new Date;b.setTime(a.getTime()+864E5);$("#calendar").fullCalendar("select",a,b,!1);rcmail.env.clientEvents=!0});$("#nextbut").click(function(){rcmail.env.onChangeMonthYear=!1;$("#calendar").fullCalendar("next");var a=new Date($("#calendar").fullCalendar("getDate")),b=new Date;b.setTime(a.getTime()+864E5);$("#calendar").fullCalendar("select",a,b,!1);rcmail.env.clientEvents=!0});$("#daybut").click(function(){$("#calendar").fullCalendar("changeView",
"agendaDay");calendar_gui.adjustRight()});$("#weekbut").click(function(){$("#calendar").fullCalendar("changeView","agendaWeek");calendar_gui.adjustRight()});$("#monthbut").click(function(){$("#calendar").fullCalendar("changeView","month");calendar_gui.adjustRight()});$("#jqdatepicker").mousedown(function(){rcmail.env.onChangeMonthYear=!0});$("#form").keypress(function(){$("#event").tabs("disable",3)});$("#starttime").click(function(){$("#event").tabs("disable",3)});$("#endtime").click(function(){$("#event").tabs("disable",
3)});$("#startdate").click(function(){$("#event").tabs("disable",3)});$("#enddate").click(function(){$("#event").tabs("disable",3)});$("#c1").click(function(){calendar_gui.nums(1,"dnums",31)});$("#c2").click(function(){calendar_gui.nums(-1,"dnums",31)});$("#c3").click(function(){calendar_gui.nums(1,"wnums",99)});$("#c4").click(function(){calendar_gui.nums(-1,"wnums",99)});$("#c5").click(function(){calendar_gui.nums(1,"mnums",99)});$("#c6").click(function(){calendar_gui.nums(-1,"mnums",99)});$("#c7").click(function(){calendar_gui.nums(1,
"ynums",99)});$("#c8").click(function(){calendar_gui.nums(-1,"ynums",99)});$("#c9").click(function(){calendar_gui.nums(1,"ydnums",99);calendar_gui.resetYear("advanced")});$("#c10").click(function(){calendar_gui.nums(-1,"ydnums",99);calendar_gui.resetYear("advanced")});$("#c11").click(function(){calendar_gui.nums(1,"occurrences",99)});$("#c12").click(function(){calendar_gui.nums(-1,"occurrences",99)});$("#schedule").hide();$("#recurselnever").click(function(){$("#recursel").prop("selectedIndex",0);
calendar_gui.resetDay();calendar_gui.resetWeek();calendar_gui.resetMonth("advanced");calendar_gui.resetMonth("occurrences");calendar_gui.resetMonth();calendar_gui.resetYear("advanced");calendar_gui.resetYear("occurrences");calendar_gui.resetYear();$("#everyweekdiv").hide();$("#everymonthdiv").hide();$("#everyyeardiv").hide();$("#everydaydiv").hide();$("#occurences").val(1);calendar_gui.toggleRecur();$("#expires").val(rcmail.env.remember_expires);rcmail.env.recurselnever=!0});$("#daylink").click(function(){rcmail.env.event_initial=
!1;-1==$("#everydaydiv").attr("style").indexOf("none")?($("#recursel").prop("selectedIndex",0),$("#schedule").hide(),$("#reset").hide(),calendar_gui.resetDay()):($("#recursel").prop("selectedIndex",1),$("#schedule").show(),$("#reset").show(),calendar_gui.resetWeek(),calendar_gui.resetMonth("advanced"),calendar_gui.resetMonth("occurrences"),calendar_gui.resetMonth(),calendar_gui.resetYear("advanced"),calendar_gui.resetYear("occurrences"),calendar_gui.resetYear())});$("#weeklink").click(function(){rcmail.env.event_initial=
!1;-1==$("#everyweekdiv").attr("style").indexOf("none")?($("#recursel").prop("selectedIndex",0),$("#schedule").hide(),$("#reset").hide(),calendar_gui.resetWeek()):($("#recursel").prop("selectedIndex",3),$("#schedule").show(),$("#reset").show(),calendar_gui.resetDay(),calendar_gui.resetMonth("advanced"),calendar_gui.resetMonth("occurrences"),calendar_gui.resetMonth(),calendar_gui.resetYear("advanced"),calendar_gui.resetYear("occurrences"),calendar_gui.resetYear())});$("#monthlink").click(function(){rcmail.env.event_initial=
!1;-1==$("#everymonthdiv").attr("style").indexOf("none")?($("#recursel").prop("selectedIndex",0),$("#schedule").hide(),$("#reset").hide(),calendar_gui.resetMonth("advanced"),calendar_gui.resetMonth("occurrences"),calendar_gui.resetMonth()):($("#recursel").prop("selectedIndex",4),$("#schedule").show(),$("#reset").show(),calendar_gui.resetDay(),calendar_gui.resetWeek(),calendar_gui.resetYear("advanced"),calendar_gui.resetYear("occurrences"),calendar_gui.resetYear())});$("#yearlink").click(function(){rcmail.env.event_initial=
!1;-1==$("#everyyeardiv").attr("style").indexOf("none")?($("#recursel").prop("selectedIndex",0),$("#schedule").hide(),$("#reset").hide()):($("#recursel").prop("selectedIndex",5),$("#schedule").show(),$("#reset").show(),calendar_gui.resetDay(),calendar_gui.resetWeek());calendar_gui.resetYear("advanced");calendar_gui.resetYear("occurrences");calendar_gui.resetYear()});$("#workdaylink").click(function(){$("#recursel").prop("selectedIndex",2)});$("#byweekdaylink").click(function(){calendar_gui.resetMonth("advanced")});
$("#bymonthdayslink").click(function(){calendar_gui.resetMonth()});$("#byyeardaylink").click(function(){calendar_gui.resetYear("advanced")});$("#bymonthdaylink").click(function(){calendar_gui.resetYear()});$("#infinite").click(function(){$("#expires").val(rcmail.env.caleot.substr(0,10))});$("#mevery").change(function(){calendar_gui.checkAll("#form",!1)});$("#mweekday").change(function(){calendar_gui.checkAll("#form",!1)});$("#ymonthday").change(function(){calendar_gui.checkAll("#form",!1);calendar_gui.resetYear("advanced")});
$("#yevery").change(function(){calendar_gui.checkAll("#form",!1);calendar_gui.resetYear("default")});$("#yweekday").change(function(){calendar_gui.checkAll("#form",!1);calendar_gui.resetYear("default")});$("#ymonth").change(function(){calendar_gui.checkAll("#form",!1);calendar_gui.resetYear("default")});$("#export_to_file").click(function(){$("#send_invitation").prop("checked","");window.setTimeout("$('#export_to_file').prop('checked','');var $dialogContent = $('#event');$dialogContent.dialog('close');",
1500);document.location.href=$("#export_as_file").attr("href")});$("#send_invitation").click(function(){$("#export_to_file").prop("checked","");window.setTimeout("$('#send_invitation').prop('checked','');var $dialogContent = $('#event');$dialogContent.dialog('close');",1500)});this.createOptions=function(a,b,d){for(var g=d;g<=b;g+=d)$(a).append($("<option></option>").val(g).html(g))};this.createOptions("#reminderminutesbefore",59,5);this.createOptions("#reminderhoursbefore",23,1);this.createOptions("#reminderdaysbefore",
6,1);this.createOptions("#reminderweeksbefore",4,1);this.custommail=function(){if($("#summary").val()){var a=($("#startdate").val()+" "+$("#starttime").val()+":00").replace(/^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9]) (?:([0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/,"$1 $2 $3 $4 $5 $6").split(" "),a=(new Date(a[0],a[1]-1,a[2],a[3],a[4],a[5])).getTime()/1E3,a="./?_task=mail&_action=compose&_subject="+encodeURIComponent($("#summary").val())+"&_date="+(Math.round(a)-0);"function"==typeof opencomposewindow?
opencomposewindow(a):window.open(a)}};this.reminderControls=function(){var a=!0;$("#reminderenable").prop("checked")&&(a=!1);$("#minsel").prop("disabled",a);$("#hoursel").prop("disabled",a);$("#daysel").prop("disabled",a);$("#weeksel").prop("disabled",a);$("#customreminder").prop("disabled",a);$("#remindertype").prop("disabled",a);$("#reminderminutesbefore").prop("disabled",a);$("#reminderhoursbefore").prop("disabled",a);$("#reminderdaysbefore").prop("disabled",a);$("#reminderweeksbefore").prop("disabled",
a);$("#remindermailto").prop("disabled",a)};$("#reminderenable").click(function(){calendar_gui.reminderControls()});$("#reminderdisable").click(function(){calendar_gui.reminderControls()});$("#remindertype").change(function(){"email"==$("#remindertype").val()?$("#remindermailto").attr("disabled",!1):$("#remindermailto").attr("disabled",!0)});$("#reminderminutesbefore").click(function(){$("#minsel").attr("checked",!0)});$("#reminderhoursbefore").click(function(){$("#hoursel").attr("checked",!0)});
$("#reminderdaysbefore").click(function(){$("#daysel").attr("checked",!0)});$("#reminderweeksbefore").click(function(){$("#weeksel").attr("checked",!0)});$("#customreminder").click(function(){"--"==$("#remindercustom").val()&&($("#customreminder").attr("checked",!1),$("#hoursel").attr("checked",!0))});this.initAccordion();$("#calendaroverlay").hide()}};this.upcoming=function(a){$("#upcoming").fullCalendar("destroy");$("#upcoming").fullCalendar({header:{left:"",center:"",right:""},titleFormat:{month:a.settings.titleFormatMonth,
week:a.settings.titleFormatWeek,day:a.settings.titleFormatDay},columnFormat:{month:a.settings.columnFormatMonth,week:a.settings.columnFormatWeek,day:a.settings.columnFormatDay},theme:a.settings.ui_theme_upcoming,readyState:function(){},editable:!0,ignoreTimezone:!1,monthNames:a.settings.months,monthNamesShort:a.settings.months_short,dayNames:a.settings.days,dayNamesShort:a.settings.days_short,firstDay:a.settings.first_day,firstHour:a.settings.first_hour,slotMinutes:60/a.settings.timeslots,timeFormat:js_time_formats[rcmail.env.rc_time_format],
axisFormat:js_time_formats[rcmail.env.rc_time_format],defaultView:"basicDay",allDayText:rcmail.gettext("all-day","calendar"),height:1,dayClick:function(b,d,e,f){calendar_callbacks.dayClick(b,d,e,f,a)},eventClick:function(b){calendar_callbacks.eventClick(b,a)},eventRender:function(b,d,e){calendar_callbacks.eventRender_upcoming(b,d,e,a)}});this.adjustLeft();$(window).resize(function(){if($("#filters-table-content").get(0)){var a=Math.max($("#filters-table-content").position().top-$("#subscriptions-table").position().top,
$("#subscription-table-content").position().top-$("#subscriptions-table").position().top)+1;$("#subscriptions-table").css("max-height","226px");$("#subscription-table-content").css("max-height",226-a+"px");$("#filters-table-content").css("max-height",226-a+"px")}calendar_gui.adjustLeft();window.setTimeout("calendar_gui.adjustRight();",200)})};this.adjustLeft=function(){if("classic"!=rcmail.env.skin){if($("#filters-table-content").get(0)){var a=$("#sectionslist").height()-$("#sectionslist").position().top-
$("#subscriptions-table").position().top-150;if(a>$("#subscriptions-table").height()){var b=Math.max($("#filters-table-content").position().top-$("#subscriptions-table").position().top,$("#subscription-table-content").position().top-$("#subscriptions-table").position().top)+1;$("#subscriptions-table").css("max-height",a+"px");$("#subscription-table-content").css("max-height",a-b+"px");$("#filters-table-content").css("max-height",a-b+"px")}}else $("#subscriptions-table").hide();$("#upcoming").css("top",
$("#upcoming-maincontainer").position().top+"px");$(".fc-view-basicDay").height($("#upcoming").height())}};this.adjustRight=function(){try{$(".fc-agenda-divider").position()&&$(".fc-agenda-divider").next().height($(".calstatusbar").position().top-$(".fc-agenda-divider").position().top-45)}catch(a){$(".fc-agenda-divider").position()&&$(".fc-agenda-divider").next().height(Math.round($("#calendar").height()-$(".fc-agenda-divider").position().top-17))}$(".fc-content").height($("#calendar").height());
$(".fc-view-"+$("#calendar").fullCalendar("getView").name).height($("#calendar").height());$(".fc-view-"+$("#calendar").fullCalendar("getView").name+" table:first-child").attr("style","width: 100%; height: 100%;");$("hr.timeline").remove();calendar_callbacks.setTimeline()};this.initTabs=function(a,b){$("#event").tabs();$("#event").tabs("enable",a);$("#event").tabs("disable",b);$("#event").tabs("select",0)};this.initAccordion=function(){$(function(){for(var a=0;4>a;a++)$("#accordion"+a).accordion({autoHeight:!1,
collapsible:!0,active:!1})});for(var a=0;4>a;a++)$("#accordion"+a).accordion("option","header","span")};this.initClockPickers=function(a){$("#starttime").timepicker({timeOnlyTitle:rcmail.gettext("timeOnlyTitle","calendar"),timeText:rcmail.gettext("timeText","calendar"),hourText:rcmail.gettext("hourText","calendar"),minuteText:rcmail.gettext("minuteText","calendar"),stepMinute:1,currentText:rcmail.gettext("currentText","calendar"),closeText:rcmail.gettext("closeText","calendar"),onClose:function(){if($("#enddate").val()+
$("#endtime").val()<=$("#startdate").val()+$("#starttime").val()){var b=$("#starttime").val().split(":"),b=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),parseFloat(b[0]),parseFloat(b[1]),0),d=new Date(1E3*(b.getTime()/1E3+parseInt(a.settings.duration))),b=d.getHours()+"",d=d.getMinutes()+"";2>b.length&&(b="0"+b);2>d.length&&(d="0"+d);$("#endtime").val(b+":"+d)}},ampm:!1});$("#endtime").timepicker({timeOnlyTitle:rcmail.gettext("timeOnlyTitle","calendar"),timeText:rcmail.gettext("timeText",
"calendar"),hourText:rcmail.gettext("hourText","calendar"),minuteText:rcmail.gettext("minuteText","calendar"),stepMinute:1,currentText:rcmail.gettext("currentText","calendar"),closeText:rcmail.gettext("closeText","calendar"),onClose:function(){if($("#enddate").val()+$("#endtime").val()<=$("#startdate").val()+$("#starttime").val()){var b=$("#starttime").val().split(":"),b=new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate(),parseFloat(b[0]),parseFloat(b[1]),0),d=new Date(1E3*
(b.getTime()/1E3+parseInt(a.settings.duration))),b=d.getHours()+"",d=d.getMinutes()+"";2>b.length&&(b="0"+b);2>d.length&&(d="0"+d);$("#endtime").val(b+":"+d)}},ampm:!1})};this.initNavDatepicker=function(a){var b=new Date(0),d=new Date(1E3*rcmail.env.caleot_unix);"caldav"==a.settings.backend&&(d=new Date,b=d.getFullYear()-a.settings.caldav_replication_range.past,d=d.getFullYear()+a.settings.caldav_replication_range.future,b=new Date(b,0,1),d=new Date(d,11,31));$("#jqdatepicker").datepicker({dateFormat:"yy-mm-dd",
firstDay:a.settings.first_day,minDate:b,maxDate:d,changeYear:!0,changeMonth:!0,onSelect:function(a){temparr=a.split("-");a=new Date(temparr[0],temparr[1]-1,temparr[2]);$("#calendar").fullCalendar("gotoDate",$.fullCalendar.parseDate(a));a=new Date($.fullCalendar.parseDate(a));var b=new Date;b.setTime(a.getTime()+8634E4);$("#calendar").fullCalendar("select",a,b,!1)},onChangeMonthYear:function(a,b){if(rcmail.env.onChangeMonthYear){var d=new Date(a,b-1,1);$("#calendar").fullCalendar("gotoDate",$.fullCalendar.parseDate(d));
var d=new Date($.fullCalendar.parseDate(d)),g=new Date;g.setTime(d.getTime()+8634E4);$("#calendar").fullCalendar("select",d,g,!1)}}})};this.initExpireDatepicker=function(a,b){var d=a.getDate()+"",e=a.getMonth()+"",f=a.getFullYear()+"";$("#expires").datepicker("destroy");$("#expires").datepicker({dateFormat:"yy-mm-dd",changeMonth:!0,changeYear:!0,firstDay:b.settings.first_day,maxDate:new Date(1E3*rcmail.env.caleot_unix),minDate:new Date(f,e,d),onSelect:function(){$("#expires").val()<$("#enddate").val()&&
$("#expires").val($("#enddate").val())}});2>d.length&&(d="0"+d);e=parseInt(e)+1+"";2>e.length&&(e="0"+e);$("#expires").val(f+"-"+e+"-"+d);rcmail.env.remember_expires=$("#expires").val()};this.initStartdateDatepicker=function(a,b){var d=a.getDate()+"",e=a.getMonth()+"",f=a.getFullYear()+"";$("#startdate").datepicker("destroy");$("#startdate").datepicker({dateFormat:"yy-mm-dd",changeMonth:!0,changeYear:!0,firstDay:b.settings.first_day,maxDate:new Date(1E3*rcmail.env.caleot_unix),onSelect:function(){if($("#enddate").val()+
$("#endtime").val()<=$("#startdate").val()+$("#starttime").val()){$("#enddate").val($("#startdate").val());var a=$("#starttime").val().split(":");(new Date).getFullYear();(new Date).getMonth();(new Date).getDate();parseFloat(a[0]);parseFloat(a[1])}$("#expires").val()<$("#enddate").val()&&$("#expires").val($("#enddate").val());calendar_gui.initReminderDatepicker(new Date($("#startdate").datepicker("getDate").getTime()+86399E3),b)}});2>d.length&&(d="0"+d);e=parseInt(e)+1+"";2>e.length&&(e="0"+e);$("#startdate").val(f+
"-"+e+"-"+d)};this.initEnddateDatepicker=function(a,b){var d=a.getDate()+"",e=a.getMonth()+"",f=a.getFullYear()+"";$("#enddate").datepicker("destroy");$("#enddate").datepicker({dateFormat:"yy-mm-dd",changeMonth:!0,changeYear:!0,firstDay:b.settings.first_day,maxDate:new Date(1E3*rcmail.env.caleot_unix),onSelect:function(){if($("#enddate").val()+$("#endtime").val()<=$("#startdate").val()+$("#starttime").val()){$("#startdate").val($("#enddate").val());var a=$("#starttime").val().split(":");(new Date).getFullYear();
(new Date).getMonth();(new Date).getDate();parseFloat(a[0]);parseFloat(a[1])}$("#expires").val()<$("#enddate").val()&&$("#expires").val($("#enddate").val())}});2>d.length&&(d="0"+d);e=parseInt(e)+1+"";2>e.length&&(e="0"+e);$("#enddate").val(f+"-"+e+"-"+d)};this.initReminderDatepicker=function(a,b){$("#remindercustom").datetimepicker("destroy");$("#remindercustom").val("--");a.getTime()>(new Date).getTime()&&$("#remindercustom").datetimepicker({timeText:rcmail.gettext("timeText","calendar"),hourText:rcmail.gettext("hourText",
"calendar"),minuteText:rcmail.gettext("minuteText","calendar"),currentText:rcmail.gettext("currentText","calendar"),closeText:rcmail.gettext("closeText","calendar"),dateFormat:"yy-mm-dd",changeMonth:!0,changeYear:!0,firstDay:b.settings.first_day,onSelect:function(){$("#customreminder").attr("checked",!0)},maxDate:new Date(a),minDate:new Date})};this.resetForm=function(a){$("input, textarea, select","#form").each(function(){$(this).prop("disabled",!1)});$("#recursel").prop("disabled",!0);$("#everyweekdiv").hide();
$("#everymonthdiv").hide();$("#everyyeardiv").hide();$("#everydaydiv").hide();for(var b=0;5>b;b++)3!=b&&calendar_gui.initTabs(b,3);a.find("input:text").val("");a.find("textarea").val("");$("#description-container").html('<textarea name="description" id="description" rows="15" cols="39"></textarea>');a.find("select").prop("selectedIndex",0);a.find("input:radio").attr("checked",!1);$("#reminderdisable").attr("checked",!0);a.find("input:checkbox").attr("checked",!1);$("#remindermailto").attr("disabled",
!1)};this.resetDay=function(){$("#dnums").val(1)};this.resetWeek=function(){$("#wnums").val(1);$(".byweekdays").attr("checked",!1)};this.resetMonth=function(a){"advanced"==a?($("#mevery").prop("selectedIndex",0),$("#mweekday").prop("selectedIndex",0)):"occurrences"==a?$("#mnums").val(1):$(".bymonthdays").attr("checked",!1)};this.resetYear=function(a){"advanced"==a?($("#yweekday").prop("selectedIndex",0),$("#yevery").prop("selectedIndex",0),$("#ymonth").prop("selectedIndex",0)):"occurrences"==a?$("#ynums").val(1):
($("#ydnums").val(1),$("#ymonthday").prop("selectedIndex",0))};this.toggleRecur=function(){var a=$("#recursel");0==a.prop("selectedIndex")?($("#occurrences").val(0),$("#schedule").hide()):$("#schedule").show();this.checkAll("#form",!1);$("#dnums").val(1);$("#wnums").val(1);$("#mnums").val(1);$("#ynums").val(1);$("#ydnums").val(0);0<=a.prop("selectedIndex")&&(calendar_gui.initAccordion(),$("#rrules").show());0==a.prop("selectedIndex")?$("#reset").hide():$("#reset").show();1==a.prop("selectedIndex")?
(this.currentStyle("daylink")&&$("#everyweekdiv").hide(),$("#everymonthdiv").hide(),$("#everyyeardiv").hide(),$("#daylink").click()):2==a.prop("selectedIndex")?$("#rrules").hide():3==a.prop("selectedIndex")?this.currentStyle("weeklink")&&($("#everydaydiv").hide(),$("#everymonthdiv").hide(),$("#everyyeardiv").hide(),$("#weeklink").click()):4==a.prop("selectedIndex")?this.currentStyle("monthlink")&&($("#everydaydiv").hide(),$("#everyweekdiv").hide(),$("#everyyeardiv").hide(),$("#monthlink").click()):
5==a.prop("selectedIndex")&&this.currentStyle("yearlink")&&($("#everydaydiv").hide(),$("#everyweekdiv").hide(),$("#everymonthdiv").hide(),$("#yearlink").click())};this.checkAll=function(a,b){null==a||void 0==a||$(a+" input[type=checkbox]").each(function(){this.checked=b})};this.nums=function(a,b,d){""==$("#"+b).val()&&$("#"+b).val(0);d&&0<a&&parseInt($("#"+b).val())>=d&&(a=0);$("#"+b).val(Math.max(0,parseInt($("#"+b).val())+a))};this.currentStyle=function(a){a=document.getElementById(a);a.currentStyle?
(str=a.currentStyle.color,c=rcmail.env.linkcolor):window.getComputedStyle&&(str=window.getComputedStyle(a,null).color,c=rcmail.env.rgblinkcolor);return str!=c?!0:!1};this.getView=function(a){return"false"!=queryString("_view")?queryString("_view"):a.settings.default_view}}calendar_gui=new calendar_gui;