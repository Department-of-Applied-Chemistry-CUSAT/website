var um_dropdown_triggers={};function um_init_new_dropdown(){jQuery(".um-new-dropdown").each(function(){var r=jQuery(this);if(!r.data("um-dropdown-inited")){var e=r.data("element"),u=r.data("trigger");r.data("um-dropdown-inited",!0),-1===jQuery.inArray(e,um_dropdown_triggers[u])&&(jQuery(document.body).on(u,e,function(d){var n=jQuery(this);if(!0===n.data("um-new-dropdown-show"))n.data("um-new-dropdown-show",!1),n.find(".um-new-dropdown").hide();else{if(jQuery(".um-new-dropdown").hide(),jQuery(".um-new-dropdown").parent().data("um-new-dropdown-show",!1),n.find(".um-new-dropdown").length)n.find(".um-new-dropdown").show();else{var o=r.clone();n.append(o),n.trigger("fmwp_dropdown_render",{dropdown_layout:o,trigger:u,element:e,obj:n}),o.show()}n.data("um-new-dropdown-show",!0),jQuery(document.body).bind("click",function(d){0===jQuery(".um-new-dropdown").find("."+jQuery(d.target).attr("class").trim().replace(" ",".")).length&&jQuery("."+jQuery(d.target).attr("class").trim())!==e&&(jQuery(".um-new-dropdown").hide(),jQuery(".um-new-dropdown").parent().data("um-new-dropdown-show",!1),jQuery(document.body).unbind(d))})}}),void 0===um_dropdown_triggers[u]&&(um_dropdown_triggers[u]=[]),um_dropdown_triggers[u].push(e))}})}jQuery(document).ready(function(d){um_init_new_dropdown(),jQuery(document.body).on("click",".um-new-dropdown a",function(d){jQuery(this).parents(".um-new-dropdown").hide(),jQuery(this).parents(".um-new-dropdown").parent().data("um-new-dropdown-show",!1),jQuery("body").trigger("click"),d.stopPropagation()})});