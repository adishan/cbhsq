function toggle_visibility(t){var e=document.getElementById(t);"block"==e.style.display?e.style.display="none":e.style.display="block"}$(document).ready(function(){$("select").change(function(){$(this).find("option:selected").each(function(){var t=$(this).attr("value");t?($(".box").not("."+t).hide(),$("."+t).show()):$(".box").hide()})}).change(),$(".searchinput").on("keyup",function(){var t=$(this).val().toLowerCase();$(".datatable tr").filter(function(){$(this).toggle($(this).text().toLowerCase().indexOf("state")>-1),$(this).toggle($(this).text().toLowerCase().indexOf("alcohol")>-1),$(this).toggle($(this).text().toLowerCase().indexOf(t)>-1)})})});