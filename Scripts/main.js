$(document).ready(function () {
    var template='{{#jobs}}\
    <div class="card  template">\
    <div class="card-header pad5" id="card_job_{{jobCode}}">\
    <div class="mb-0 sectionJobTitle">\
    <button class="btn btn-link pad0 fontNotoserif" type="button" data-toggle="collapse" data-target="#job_Content_{{jobCode}}" aria-expanded="false" aria-controls="job_Content_{{jobCode}}">\
     <h4 class="jobheading desktopInline fontCrimson">Job Description:</h4>\
     <span class="jobTitle fontDark">{{jobTitle}}</span>\
     <span class="labelJobcode fontCrimson">Code: </span>\
     <span class="jobCode fontDark">{{jobCode}}</span>\
     </button>\
     </div>\
     </div>\
     <div id="job_Content_{{jobCode}}" class="jobDescription collapse fontMont" aria-labelledby="card_job_{{jobCode}}" data-parent="#careersAccordion">\
     <div class="card-body">\
     <div class="row pad5 padLeft10">\
     <div class="col-md-5">\
     <div class="row descriptionSection descriptionAbout">\
     <h6 class="fontCrimson heading">About:</h6>\
    <div class="col-md-12 descriptionContent fontDark">\
    {{About}}\
     </div>\
    </div>\
    <div class="row descriptionSection descriptionWhatYoulldo fontDark padTop5">\
    <h6 class="fontCrimson heading">What You&#39;ll Do:</h6>\
     <div class="col-md-12 descriptionContent">\
    <ul class="padLeft10">\
    {{#WhatYouWillDo}}\
    <li>{{.}}</li>\
    {{/WhatYouWillDo}}\
    </ul></div>\
     </div>\
     <div class="row descriptionSection descriptionWhatYoureLike fontDark padTop5">\
      <h6 class="fontCrimson heading">What You&#39;re Like:</h6>\
      <div class="col-md-12 descriptionContent">\
    <ul class="padLeft10">\
    {{#WhatYouAreLike}}\
    <li>{{.}}</li>\
    {{/WhatYouAreLike}}\
    </ul></div>\
     </div>\
     </div>\
    <div class="col">\
     <div class="row descriptionSection descriptionSkillset">\
    <h6 class="fontCrimson heading">What You&#39;ve Got:</h6>\
     <div class="col-md-12 descriptionContent fontDark">\
    <ul class="padLeft10">\
    {{#WhatHaveYouGot}}\
    <li>{{.}}</li>\
    {{/WhatHaveYouGot}}\
     </ul>\
     </div>\
     </div>\
     </div>\
     </div>\
     </div>\
     </div>\
     </div>\
     </div>\
    {{/jobs}}';

    var data = {};
    $.getJSON(
        "data/jobs.json",
        function (d) {
            data = d;
            var html = Mustache.to_html(template, data);
            console.log(html);
            $("#careersAccordion").html(html);
        }
    );
});