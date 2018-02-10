/**
 * Global variables initialization
 */
$body = $('html, body');
$window = $(window);
$initialHeight = $window.innerHeight();
var currentWidth = 0;
var currentHeight = 0;
var offset = 0;
var baseUrl = window.location.origin;

/** null checker */
function isNullOrEmpty(val) {
    return (val == null || val === "");
}

/** military to standard time conversion */
function timeConverter(time) {
    time = time.split(':'); // convert to array

    // fetch
    var hours = Number(time[0]);
    var minutes = Number(time[1]);
    var seconds = Number(time[2]);

    // calculate
    var timeValue;

    if (hours > 0 && hours <= 12) {
      timeValue= "" + hours;
    } else if (hours > 12) {
      timeValue= "" + (hours - 12);
    }
    else if (hours == 0) {
      timeValue= "12";
    }
     
    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
    //timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
    timeValue += (hours >= 12) ? " PM" : " AM";  // get AM/PM

    return(timeValue);
}

/**
 * Get and update screen dimensions for responsive triggers
 * @return Void
 */
function checkDimensions() {
    currentWidth = $window.width();
    currentHeight = $window.innerHeight();

    /** Execute adjustments every screen resize */
    adjustPerBreakpoint(currentWidth, currentHeight);
    /** Trigger events on scroll */
    triggerScrollEvents(currentWidth, currentHeight);

    if (currentWidth < 768) {

    } else {
        
    }
}

/**
 * Change DOM settings per breakpoint triggered
 * @param  {Integer} width  Current width of window
 * @param  {Integer} height Current height of window
 * @return {Void}        
 */
function adjustPerBreakpoint(width, height) {
	width = (typeof width !== 'undefined') ? width : 0;

    if () {

    } else {

    }
}

/**
 * Trigger DOM manipulations on certain scroll offsets
 * @param  {Integer} width  Current width of window
 * @param  {Integer} height Curent height of window
 * @return {Void}
 */
function triggerScrollEvents(width, height) {
	$window.scroll(function () {
        offset = $(this).scrollTop();

        if (offset) {
            
        }
    });
}

$(function() {
	/** Execute on page load */
	checkDimensions();


    
	/** Bind event listener on screen resize */
	$window.resize(checkDimensions);

    $window.on('load', function(event) {
        
    });
});