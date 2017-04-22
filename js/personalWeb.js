$(function() { // Adding text
    var sampleJobs=[
        "          H E L L O  . . .",
        "   I am Glenda Pinho",
        " Welcome to...",
        " My Personal Website"
    ];

    var currentSampleJob=sampleJobs[0];
    var autoTypingActive=true;
    var sampleJobLength=0;
    var typingNow=false;
    var sampleJobTimer=0;
    var timer=null;


    // Start typing text here
    typeText=function() {
        displaySampleJob=currentSampleJob.substr(0, sampleJobLength++);
        if(empty(displaySampleJob)) {
            $('.search').val(' ');
        }
        else {
            $('.search').val(displaySampleJob);
            $('.search').focus();
        }
        if(sampleJobLength < currentSampleJob.length+1) {
            // next letter
            typingNow=true;
            randomMultiplier=80;
            random=Math.floor(Math.random()*(randomMultiplier*2));
            timer=setTimeout(typeText, random);
        } else {
            // start backspacing
            sampleJobLength = 0;
            currentSampleJob = '';
            typingNow=false;
            timer=setTimeout(backspaceText,1250+250*Math.random());
        }
    }
    // type Text

    // Add backspace for text
    backspaceText=function() {
        displaySampleJob=$('.search').val().slice(0, -1);

        /* avoid empty div */
        if(empty(displaySampleJob)) {
            $('.search').val(' ');
        }
        else {
            $('.search').val(displaySampleJob);
        }


        if(!empty(displaySampleJob)) {
            // backspace again
            randomMultiplier=80;
            random=Math.floor(Math.random()*(randomMultiplier*1.5));
            timer=setTimeout(backspaceText, random);
            //$('.search').focus();
        }
        else {
            // next sampleJob
            nextSampleJob();
        }
    }
    // backspaceText

    //nextSampleJob
    nextSampleJob=function(instantly) {
        sampleJobTimer++;
        // if last sampleJob, reset to first
        if(sampleJobTimer>(sampleJobs.length-1)) {
            sampleJobTimer=0;
        }
        currentSampleJob=sampleJobs[sampleJobTimer];
        if(instantly) {
            typeText();
        }
        else {
            timer=setTimeout(typeText,50);
        }
    }
    // Next Sample Job

    typeText();

    // type text simulation
});


function empty(mixed_var) {
    var undef, key, i, len;
    var emptyValues = [undef, null, false, 0, '', '0'];
    for (i = 0, len = emptyValues.length; i < len; i++) {
        if (mixed_var === emptyValues[i]) {
            return true;
        }
    }
}


//This funtion brings back to the top of the page when user clicks on "UP"
$("a[href='#top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});

//NOT WORKING***

//Creating 3 variable to control the link goUp appearance

$(document).ready(function() {
    $('#nav').localScroll({duration:800});
    });