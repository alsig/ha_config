$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Main");
    content_width = (120 + 5) * 8 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [120, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 8,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-bedroomlight" id="default-bedroomlight"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-dinnerlight" id="default-dinnerlight"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 1, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-kitchenlight" id="default-kitchenlight"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 2, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-readlinglight" id="default-readlinglight"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-livingroomlight" id="default-livingroomlight"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 2, 3)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-bedroomlight"] = new baselight("default-bedroomlight", "", "obsidian", {'entity': 'light.bedroom', 'fields': {'units': '%', 'state_text': '', 'icon': '', 'title2': '', 'icon_style': '', 'level': '', 'title': 'Soveværelse lys'}, 'post_service_active': {'entity_id': 'light.bedroom', 'service': 'homeassistant/turn_on'}, 'precision': 1, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'use_comma': 0, 'static_css': {'level_style': 'color: #888;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'state_text_style': 'color: #00FFFF;', 'level_down_style': 'color: #888;', 'title2_style': 'color: #fff;', 'unit_style': 'color: #888;', 'title_style': 'color: #fff;', 'level_up_style': 'color: #888;'}, 'widget_type': 'baselight', 'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'namespace': 'default', 'post_service_inactive': {'entity_id': 'light.bedroom', 'service': 'homeassistant/turn_off'}, 'use_hass_icon': 1, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}})
    
        widgets["default-dinnerlight"] = new baselight("default-dinnerlight", "", "obsidian", {'entity': 'light.dinnertablelight', 'fields': {'units': '%', 'state_text': '', 'icon': '', 'title2': '', 'icon_style': '', 'level': '', 'title': 'Spisebord lys'}, 'post_service_active': {'entity_id': 'light.dinnertablelight', 'service': 'homeassistant/turn_on'}, 'precision': 1, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'use_comma': 0, 'static_css': {'level_style': 'color: #888;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'state_text_style': 'color: #00FFFF;', 'level_down_style': 'color: #888;', 'title2_style': 'color: #fff;', 'unit_style': 'color: #888;', 'title_style': 'color: #fff;', 'level_up_style': 'color: #888;'}, 'widget_type': 'baselight', 'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'namespace': 'default', 'post_service_inactive': {'entity_id': 'light.dinnertablelight', 'service': 'homeassistant/turn_off'}, 'use_hass_icon': 1, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}})
    
        widgets["default-kitchenlight"] = new baselight("default-kitchenlight", "", "obsidian", {'entity': 'light.kitchenlight', 'fields': {'units': '%', 'state_text': '', 'icon': '', 'title2': '', 'icon_style': '', 'level': '', 'title': 'Køkken lys'}, 'post_service_active': {'entity_id': 'light.kitchenlight', 'service': 'homeassistant/turn_on'}, 'precision': 1, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'use_comma': 0, 'static_css': {'level_style': 'color: #888;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'state_text_style': 'color: #00FFFF;', 'level_down_style': 'color: #888;', 'title2_style': 'color: #fff;', 'unit_style': 'color: #888;', 'title_style': 'color: #fff;', 'level_up_style': 'color: #888;'}, 'widget_type': 'baselight', 'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'namespace': 'default', 'post_service_inactive': {'entity_id': 'light.kitchenlight', 'service': 'homeassistant/turn_off'}, 'use_hass_icon': 1, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}})
    
        widgets["default-readlinglight"] = new baselight("default-readlinglight", "", "obsidian", {'entity': 'light.readinglight', 'fields': {'units': '%', 'state_text': '', 'icon': '', 'title2': '', 'icon_style': '', 'level': '', 'title': 'Lænestol lys'}, 'post_service_active': {'entity_id': 'light.readinglight', 'service': 'homeassistant/turn_on'}, 'precision': 1, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'use_comma': 0, 'static_css': {'level_style': 'color: #888;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'state_text_style': 'color: #00FFFF;', 'level_down_style': 'color: #888;', 'title2_style': 'color: #fff;', 'unit_style': 'color: #888;', 'title_style': 'color: #fff;', 'level_up_style': 'color: #888;'}, 'widget_type': 'baselight', 'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'namespace': 'default', 'post_service_inactive': {'entity_id': 'light.readinglight', 'service': 'homeassistant/turn_off'}, 'use_hass_icon': 1, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}})
    
        widgets["default-livingroomlight"] = new baselight("default-livingroomlight", "", "obsidian", {'entity': 'light.livingroomlight', 'fields': {'units': '%', 'state_text': '', 'icon': '', 'title2': '', 'icon_style': '', 'level': '', 'title': 'Sofabord lys'}, 'post_service_active': {'entity_id': 'light.livingroomlight', 'service': 'homeassistant/turn_on'}, 'precision': 1, 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'use_comma': 0, 'static_css': {'level_style': 'color: #888;', 'widget_style': 'background-image: url(css/obsidian/img/obsidian_w_bg.jpg);', 'state_text_style': 'color: #00FFFF;', 'level_down_style': 'color: #888;', 'title2_style': 'color: #fff;', 'unit_style': 'color: #888;', 'title_style': 'color: #fff;', 'level_up_style': 'color: #888;'}, 'widget_type': 'baselight', 'css': {'icon_style_active': 'color: #00FFFF;', 'icon_style_inactive': 'color: #888;'}, 'namespace': 'default', 'post_service_inactive': {'entity_id': 'light.livingroomlight', 'service': 'homeassistant/turn_off'}, 'use_hass_icon': 1, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
        if (myTimeoutSticky) {
            myTimeout = setTimeout(function() { navigate(myTimeoutUrl); }, myTimeoutDelay);
        }
    });

    // Set up timeout

    var myTimeout;
    var myTimeoutUrl;
    var myTimeoutDelay;
    var myTimeoutSticky = 0;

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return" && arg != "sticky")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            if ("sticky" in result)
            {
                myTimeoutSticky = (result.sticky == "1");
            }
            myTimeoutUrl = url;
            myTimeoutDelay = result.timeout * 1000;
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "Main", widgets);

});