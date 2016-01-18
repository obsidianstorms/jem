/**
 * Created by flintweather on 12/23/15.
 */

/* Preset */
var tpl_text_label_input = '' +
    '<div id="{{id}}" class="{{field_class}}">' +
    '   <span class="label">' +
    '       <label for="{{input_id}}">{{label}}</label>' +
    '   </span>' +
    '   <span class="field">' +
    '       <input id="{{input_id}}" name="{{input_id}}" value="{{value}}" />' +
    '   </span>' +
    '</div>';

var tpl_area_label_input = '' +
    '<div id="{{id}}" class="{{field_class}}">' +
    '   <span class="label">' +
    '       <label for="{{input_id}}">{{label}}</label>' +
    '   </span>' +
    '   <span class="field">' +
    '       <textarea id="{{input_id}}" name="{{input_id}}">{{value}}"</textarea>' +
    '   </span>' +
    '</div>';




var tpl_text_input_label = '' +
    '<div id="{{id}}" class="{{field_class}}">' +
    '   <span class="label">' +
    '       <label for="{{input_id}}">{{label}}</label>' +
    '   </span>' +
    '   <span class="field">' +
    '       <input id="{{input_id}}" name="{{input_id}}" value="{{value}}" />' +
    '   </span>' +
    '</div>';

//    <div id="input_area_wrap">
//    <div>
//    <label for="area_wrap">Label</label>
//    </div>
//    <div>
//    <textarea id="area_wrap" class="standard"></textarea>
//    </div>
//    </div>
//    <div id="radio_field_line_opt_1">
//    <input id="input_radio_1" name="radio_1" type="radio" value="1"/>
//    <label for="input_radio_1">Label</label>
//    </div>
//    <div id="radio_field_line_opt_2">
//    <label for="input_radio_2">Label</label>
//    <input id="input_radio_2" name="radio_2" type="radio" value="2"/>
//    </div>
//    <div id="button_glass" class="button control">
//    <span id="control_glass" class="main">&#8981</span>
//</div>

/* On Ready */
$(document).ready(function(){
    var data = {
        id: "",
        field_class: "standard",
        label: "Company: ",
        input_id: "company",
        value: ""
    };
    //var tpl = "{{name}}";
//var html = $.mustache.to_html(tpl, data);
//    var html = Mustache.to_html(tpl, data);
    var html = Mustache.to_html(tpl_text_label_input, data);

    $("#window_1 .window_content").html(html);

    tpl_area_label_input

    //$("p").click(function(){
    //    $(this).hide();
    //});
});


/* Functions */
function buildCompanySignup() {
    var form, dataPoints;
    dataPoints = [
        'company',
        'description',
        'firstname',
        'lastname',
        'email',
        'username',
        'password',
        'confirm'
    ];

}

function buildInput(name) {

}