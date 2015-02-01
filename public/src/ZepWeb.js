var ZepWeb = function(options){

    this.language = options.language;
    this.templatePath = "/langs";

    this.angular = angular.module(options.ngApp, ['ngRoute','ngCookies']);

};

ZepWeb.availableLanguages = ["fr","en"];

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