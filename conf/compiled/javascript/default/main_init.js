$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Main");
    content_width = (292 + 5) * 8 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [292, 120],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 8,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock" id="default-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 2, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-dinnerlight" id="default-dinnerlight"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 1, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-kitchenlight" id="default-kitchenlight"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 2, 3)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-readlinglight" id="default-readlinglight"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 1, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-livingroomlight" id="default-livingroomlight"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 2, 4)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baselight-default-bedroomlight" id="default-bedroomlight"><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><span class="toggle-area" id="switch"></span><p class="state_text" data-bind="text: state_text, attr:{style: state_text_style}"></p><div class="levelunit"><p class="level" data-bind="text: level, attr:{style: level_style}"></p><p class="unit" data-bind="html: units, attr:{style: unit_style}"></p></div><p class="secondary-icon minus"><i data-bind="attr: {class: icon_down, style: level_down_style}" id="level-down"></i></p><p class="secondary-icon plus"><i data-bind="attr: {class: icon_up, style: level_up_style}" id="level-up"></i></p></div></li>', 1, 1, 1, 5)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-clock"] = new baseclock("default-clock", "", "default", {'use_comma': 0, 'namespace': 'default', 'icons': [], 'date_format_country': 'dk', 'widget_type': 'baseclock', 'fields': {'date': '', 'time': ''}, 'use_hass_icon': 1, 'time_format': '24hr', 'static_icons': [], 'precision': 1, 'static_css': {'date_style': 'color: #fff;', 'widget_style': 'background-color: #444;', 'time_style': 'color: #aa00ff;'}, 'css': {}})
    
        widgets["default-dinnerlight"] = new baselight("default-dinnerlight", "", "default", {'use_comma': 0, 'namespace': 'default', 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.dinnertablelight'}, 'entity': 'light.dinnertablelight', 'widget_type': 'baselight', 'fields': {'title': 'Spisebord lys', 'icon_style': '', 'units': '%', 'title2': '', 'state_text': '', 'icon': '', 'level': ''}, 'use_hass_icon': 1, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'precision': 1, 'static_css': {'level_style': 'color: #fff;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'widget_style': 'background-color: #444;', 'level_down_style': 'color: #888;', 'title2_style': 'color: #fff;', 'unit_style': 'color: #fff;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.dinnertablelight'}})
    
        widgets["default-kitchenlight"] = new baselight("default-kitchenlight", "", "default", {'use_comma': 0, 'namespace': 'default', 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.kitchenlight'}, 'entity': 'light.kitchenlight', 'widget_type': 'baselight', 'fields': {'title': 'Køkken lys', 'icon_style': '', 'units': '%', 'title2': '', 'state_text': '', 'icon': '', 'level': ''}, 'use_hass_icon': 1, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'precision': 1, 'static_css': {'level_style': 'color: #fff;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'widget_style': 'background-color: #444;', 'level_down_style': 'color: #888;', 'title2_style': 'color: #fff;', 'unit_style': 'color: #fff;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.kitchenlight'}})
    
        widgets["default-readlinglight"] = new baselight("default-readlinglight", "", "default", {'use_comma': 0, 'namespace': 'default', 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.readinglight'}, 'entity': 'light.readinglight', 'widget_type': 'baselight', 'fields': {'title': 'Lænestol lys', 'icon_style': '', 'units': '%', 'title2': '', 'state_text': '', 'icon': '', 'level': ''}, 'use_hass_icon': 1, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'precision': 1, 'static_css': {'level_style': 'color: #fff;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'widget_style': 'background-color: #444;', 'level_down_style': 'color: #888;', 'title2_style': 'color: #fff;', 'unit_style': 'color: #fff;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.readinglight'}})
    
        widgets["default-livingroomlight"] = new baselight("default-livingroomlight", "", "default", {'use_comma': 0, 'namespace': 'default', 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.livingroomlight'}, 'entity': 'light.livingroomlight', 'widget_type': 'baselight', 'fields': {'title': 'Sofabord lys', 'icon_style': '', 'units': '%', 'title2': '', 'state_text': '', 'icon': '', 'level': ''}, 'use_hass_icon': 1, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'precision': 1, 'static_css': {'level_style': 'color: #fff;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'widget_style': 'background-color: #444;', 'level_down_style': 'color: #888;', 'title2_style': 'color: #fff;', 'unit_style': 'color: #fff;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.livingroomlight'}})
    
        widgets["default-bedroomlight"] = new baselight("default-bedroomlight", "", "default", {'use_comma': 0, 'namespace': 'default', 'icons': {'icon_on': 'fa-circle', 'icon_off': 'fa-circle-thin'}, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.bedroom'}, 'entity': 'light.bedroom', 'widget_type': 'baselight', 'fields': {'title': 'Soveværelse lys', 'icon_style': '', 'units': '%', 'title2': '', 'state_text': '', 'icon': '', 'level': ''}, 'use_hass_icon': 1, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'precision': 1, 'static_css': {'level_style': 'color: #fff;', 'title_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'level_up_style': 'color: #888;', 'widget_style': 'background-color: #444;', 'level_down_style': 'color: #888;', 'title2_style': 'color: #fff;', 'unit_style': 'color: #fff;'}, 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.bedroom'}})
    

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