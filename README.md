<strong>JQuery jsteps</strong>

<i>HTML Markup</i>

<div id="step_status">
        <span class="first"></span>
        <span class="last"></span>
</div>
<div id="step_information" class="step">
       <div id="step_one">Step One</div>
       <div id="step_two">Step Two</div>
       <div id="step_three">Step Three</div>
</div>
<div id="step_navigation">
    <div class="previous_button">
        <input type="submit" id="button_prev" name="button_prev" value="Prev Step" />
    </div>
    <div class="forward_button">
        <input type="submit" id="button_next" name="button_next" value="Next Step" />
        <input type="submit" id="button_save" name="button_save" value="Save" />
    </div>
</div>
 
jQuery Load
Code (text):
 
var messages = new Array(
            'Description One',
            'Description Two',
            'Description Three'
);
 
$('.step').jSteps(
   {
      messages: messages
   }
);
