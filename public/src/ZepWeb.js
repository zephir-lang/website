var ZepWeb = function(options){

    this.language = options.language;
    this.templatePath = "/langs";

    this.angular = angular.module(options.ngApp, ['ngRoute']);

};

ZepWeb.availableLanguages = ["fr","en"];


ZepWeb.writeCookie = function(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
};
ZepWeb.readCookie = function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

ZepWeb.hasSession = function(){
    return ZepWeb.readCookie("zep-session") == 1;
};

ZepWeb.startSession = function() {
    return ZepWeb.writeCookie("zep-session",1);
};

ZepWeb.detectLanguage = function(){


    var browserLanguage = window.navigator.userLanguage || window.navigator.language;
    browserLanguage = browserLanguage.split("-")[0];

    if(ZepWeb.availableLanguages.indexOf(browserLanguage) >= 0){
        return browserLanguage;
    }

    return "en";

};



ZepWeb.saveLanguage = function(lang) {

    console.log(lang);

    $.cookie("lang",lang,{ expires: 365, path: '/' });
};

ZepWeb.prototype = {

    getTemplate : function(name){

        return this.templatePath + "/" + this.language + "/" + name;

    }

};