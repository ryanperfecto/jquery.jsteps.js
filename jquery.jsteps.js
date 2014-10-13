(function($) {
    $.jSteps = function(element, options) {
        /* Configure the default settings */
        var defaults = {
            next_button: '#button_next',
            prev_button: '#button_prev',
            save_button: '#button_save',
            messages: new Array(),
            status_div:    '#step_status .last',
            info_div: '#step_status .first',
            current_step: 0,
            total_steps: 0,
            scroll_x: 0,
            scroll_y: 0
        };    
 
        var plugin = this;
        plugin.settings = { }
       
        var element = $(element);
        element = element;
       
        var s;
       
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            s = plugin.settings;
            s.total_steps = element.children('div').length;
            /* Hide all of the steps on the page */
            element.children('div').each(function() {
                $(this).hide();
            });
            /* Show only the first step at init */
            element.children('div').eq(plugin.settings.current_step).show();
            plugin.update_progress();
            plugin.update_information();
            plugin.sort_buttons();
        }
       
        /* Show a message about the current step we are on */        
        plugin.update_progress = function() {
            $(s.status_div).text('Step '+(s.current_step+1)+' of ' +s.total_steps);
        }
       
        /* Show a message that has been defined within the steps array for a div */
        plugin.update_information = function() {
            alert(plugin.settings.messages[plugin.settings.current_step]);
            $(s.info_div).text(plugin.settings.messages[plugin.settings.current_step]);
        }
           
        /* Wrapper for the travel function */        
        plugin.next = function() {
            travel('NEXT');
        }
       
        /* Wrapper for the travel function */
        plugin.prev = function() {
            travel('PREV');    
        }
       
        /* Decide which buttons should be shown on the current step */        
        plugin.sort_buttons = function() {
            switch(s.current_step) {
                case 0:
                    $(s.next_button).show();
                    $(s.prev_button).hide();
                    $(s.save_button).hide();
                break;
                case s.total_steps:
                    $(s.next_button).hide();
                    $(s.save_button).show();
                break;
                default:
                    $(s.next_button).show();
                    $(s.prev_button).show();
                    $(s.save_button).hide();
                break;
            }    
        }
       
        /* Show and hide the next or previous step */        
        var travel = function(Direction) {
            if(Direction == 'NEXT') {
                element.children('div').eq(s.current_step+1).show();
                element.children('div').eq(s.current_step).hide();
                s.current_step += 1;
            } else if(Direction == 'PREV') {
                element.children('div').eq(s.current_step-1).show();
                element.children('div').eq(s.current_step).hide();
                s.current_step -= 1;
            }
            plugin.sort_buttons();
            plugin.update_information();
            plugin.update_progress();
            /* Scroll to a position that has been defined */
            window.scrollTo(s.scroll_x, s.scroll_y);
        }
        plugin.init();
    }
    $.fn.jSteps = function(options) {
        return this.each(function() {
            if (undefined == $(this).data('jSteps')) {
                var plugin = new $.jSteps(this, options);
                $(this).data('jSteps', plugin);
            }
            /* When the next button has been clicked travel to the next step */
            $(plugin.settings.next_button).click(function() {
                plugin.next();
                return false;
            });
            /* when the previous button has been clicked travel to the previous step */
            $(plugin.settings.prev_button).click(function() {
                plugin.prev();
                return false;
            });
        });
    }
})(jQuery);
