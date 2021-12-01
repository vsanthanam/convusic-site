function isAppleMobile() {
    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    return isIOS
}

var shouldRedirect = isAppleMobile();
if (shouldRedirect) {
    window.location = "https://apps.apple.com/us/app/convusic/id1591366129";
}