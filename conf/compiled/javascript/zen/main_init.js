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
    
        widgets["default-clock"] = new baseclock("default-clock", "", "zen", {'static_css': {'time_style': 'color: white;font-weight: bold;text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 4px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 4px rgba(0,0,0,.2), 0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15);', 'widget_style': 'background-color: rgba(0,0,0,0.25);', 'date_style': 'color: #fff;'}, 'namespace': 'default', 'use_comma': 0, 'date_format_country': 'dk', 'use_hass_icon': 1, 'css': {}, 'time_format': '24hr', 'static_icons': [], 'widget_type': 'baseclock', 'fields': {'time': '', 'date': ''}, 'precision': 1, 'icons': []})
    
        widgets["default-dinnerlight"] = new baselight("default-dinnerlight", "", "zen", {'static_css': {'level_up_style': 'color: #ff0055;', 'title2_style': 'color: #000;', 'state_text_style': 'color: #fff;', 'unit_style': 'color: #888;', 'level_down_style': 'color: #000;', 'title_style': 'color: #000;font-weight: bold;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);', 'level_style': 'color: #888;'}, 'entity': 'light.dinnertablelight', 'namespace': 'default', 'use_comma': 0, 'post_service_active': {'entity_id': 'light.dinnertablelight', 'service': 'homeassistant/turn_on'}, 'use_hass_icon': 1, 'css': {'icon_style_inactive': 'color: rgba(0,0,0,0.5);', 'icon_style_active': 'color: #ff0055;'}, 'post_service_inactive': {'entity_id': 'light.dinnertablelight', 'service': 'homeassistant/turn_off'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'widget_type': 'baselight', 'fields': {'icon': '', 'level': '', 'state_text': '', 'units': '%', 'icon_style': '', 'title2': '', 'title': 'Spisebord lys'}, 'precision': 1, 'icons': {'icon_on': 'fa-circle-o-notch fa-spin', 'icon_off': 'fa-circle-thin'}})
    
        widgets["default-kitchenlight"] = new baselight("default-kitchenlight", "", "zen", {'static_css': {'level_up_style': 'color: #ff0055;', 'title2_style': 'color: #000;', 'state_text_style': 'color: #fff;', 'unit_style': 'color: #888;', 'level_down_style': 'color: #000;', 'title_style': 'color: #000;font-weight: bold;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);', 'level_style': 'color: #888;'}, 'entity': 'light.kitchenlight', 'namespace': 'default', 'use_comma': 0, 'post_service_active': {'entity_id': 'light.kitchenlight', 'service': 'homeassistant/turn_on'}, 'use_hass_icon': 1, 'css': {'icon_style_inactive': 'color: rgba(0,0,0,0.5);', 'icon_style_active': 'color: #ff0055;'}, 'post_service_inactive': {'entity_id': 'light.kitchenlight', 'service': 'homeassistant/turn_off'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'widget_type': 'baselight', 'fields': {'icon': '', 'level': '', 'state_text': '', 'units': '%', 'icon_style': '', 'title2': '', 'title': 'Køkken lys'}, 'precision': 1, 'icons': {'icon_on': 'fa-circle-o-notch fa-spin', 'icon_off': 'fa-circle-thin'}})
    
        widgets["default-readlinglight"] = new baselight("default-readlinglight", "", "zen", {'static_css': {'level_up_style': 'color: #ff0055;', 'title2_style': 'color: #000;', 'state_text_style': 'color: #fff;', 'unit_style': 'color: #888;', 'level_down_style': 'color: #000;', 'title_style': 'color: #000;font-weight: bold;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);', 'level_style': 'color: #888;'}, 'entity': 'light.readinglight', 'namespace': 'default', 'use_comma': 0, 'post_service_active': {'entity_id': 'light.readinglight', 'service': 'homeassistant/turn_on'}, 'use_hass_icon': 1, 'css': {'icon_style_inactive': 'color: rgba(0,0,0,0.5);', 'icon_style_active': 'color: #ff0055;'}, 'post_service_inactive': {'entity_id': 'light.readinglight', 'service': 'homeassistant/turn_off'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'widget_type': 'baselight', 'fields': {'icon': '', 'level': '', 'state_text': '', 'units': '%', 'icon_style': '', 'title2': '', 'title': 'Lænestol lys'}, 'precision': 1, 'icons': {'icon_on': 'fa-circle-o-notch fa-spin', 'icon_off': 'fa-circle-thin'}})
    
        widgets["default-livingroomlight"] = new baselight("default-livingroomlight", "", "zen", {'static_css': {'level_up_style': 'color: #ff0055;', 'title2_style': 'color: #000;', 'state_text_style': 'color: #fff;', 'unit_style': 'color: #888;', 'level_down_style': 'color: #000;', 'title_style': 'color: #000;font-weight: bold;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);', 'level_style': 'color: #888;'}, 'entity': 'light.livingroomlight', 'namespace': 'default', 'use_comma': 0, 'post_service_active': {'entity_id': 'light.livingroomlight', 'service': 'homeassistant/turn_on'}, 'use_hass_icon': 1, 'css': {'icon_style_inactive': 'color: rgba(0,0,0,0.5);', 'icon_style_active': 'color: #ff0055;'}, 'post_service_inactive': {'entity_id': 'light.livingroomlight', 'service': 'homeassistant/turn_off'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'widget_type': 'baselight', 'fields': {'icon': '', 'level': '', 'state_text': '', 'units': '%', 'icon_style': '', 'title2': '', 'title': 'Sofabord lys'}, 'precision': 1, 'icons': {'icon_on': 'fa-circle-o-notch fa-spin', 'icon_off': 'fa-circle-thin'}})
    
        widgets["default-bedroomlight"] = new baselight("default-bedroomlight", "", "zen", {'static_css': {'level_up_style': 'color: #ff0055;', 'title2_style': 'color: #000;', 'state_text_style': 'color: #fff;', 'unit_style': 'color: #888;', 'level_down_style': 'color: #000;', 'title_style': 'color: #000;font-weight: bold;', 'widget_style': 'background-image: url(css/zen/img/zen_bg2.jpg);', 'level_style': 'color: #888;'}, 'entity': 'light.bedroom', 'namespace': 'default', 'use_comma': 0, 'post_service_active': {'entity_id': 'light.bedroom', 'service': 'homeassistant/turn_on'}, 'use_hass_icon': 1, 'css': {'icon_style_inactive': 'color: rgba(0,0,0,0.5);', 'icon_style_active': 'color: #ff0055;'}, 'post_service_inactive': {'entity_id': 'light.bedroom', 'service': 'homeassistant/turn_off'}, 'static_icons': {'icon_up': 'fa-plus', 'icon_down': 'fa-minus'}, 'widget_type': 'baselight', 'fields': {'icon': '', 'level': '', 'state_text': '', 'units': '%', 'icon_style': '', 'title2': '', 'title': 'Soveværelse lys'}, 'precision': 1, 'icons': {'icon_on': 'fa-circle-o-notch fa-spin', 'icon_off': 'fa-circle-thin'}})
    

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