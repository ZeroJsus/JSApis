"use strict";

!function () {
  new Vue({ el: "#app" });$("h2[id^='title'],h3[id^=post],h3[id^=get]").on("click", function () {
    "none" == $(this).next().css("display") ? ("H2" == $(this)[0].tagName && $(this).children().css({ transform: "rotate(45deg)", transition: "0.5s" }), $(this).next().css("display", "block")) : ("H2" == $(this)[0].tagName && $(this).children().css({ transform: "rotate(-45deg)", transition: "0.5s" }), $(this).next().css("display", "none"));
  }), $("a[id^=title]").on("click", function () {
    "none" == $(this).next().css("display") ? ($(this).addClass("active"), $(this).parent().siblings().children("ul").css("display", "none"), $(this).parent().siblings().children("a").removeClass("active")) : $(this).removeClass("active");
  }), $("a[id^=post],a[id^=get]").on("click", function () {
    var t = $(this).parent().parent().prev().attr("id");$("a[id^=post],a[id^=get]").removeClass("active"), $(this).addClass("active"), "none" == $("h2#" + t).next().css("display") && $("h2#" + t).next().css("display", "block");var a = $(this).attr("id");"none" == $("h3#" + a).next().css("display") && $("h3#" + a).next().css("display", "block");var s = $("h3#" + a).offset().top - 70;0 != s && $("body,html").animate({ scrollTop: s }, 100);
  }), $("p[class^='appJson']").on("click", function () {
    "none" == $(this).next().css("display") ? ("H2" == $(this)[0].tagName && $(this).children().css({ transform: "rotate(45deg)", transition: "0.5s" }), $(this).next().css("display", "block")) : ("H2" == $(this)[0].tagName && $(this).children().css({ transform: "rotate(-45deg)", transition: "0.5s" }), $(this).next().css("display", "none"));
  }), new ClipboardJS('button[class^="link"]', { text: function text(t) {
      return $(t).siblings("strong").text();
    } }), new ClipboardJS('button[class^="puremanager"]', { text: function text(t) {
      return console.log($(t).parent().next().text()), $(t).parent().next().text();
    } }), window.onwheel = function (t) {
    var a = $("html,body").scrollTop() + 65,
        s = (window.screen.availHeight, !0);$('h3[id^="post"]').each(function () {
      0 < t.deltaY && (console.log("下拉"), console.log(a), console.log($(this).offset().top), a + 70 > $(this).offset().top && ($("a#" + $(this).attr("id")).removeClass("active"), console.log($("a#" + $(this).attr("id")).parent().next().length), 0 != $("a#" + $(this).attr("id")).parent().next().length ? $("a#" + $(this).attr("id")).parent().next().children("a").addClass("active") : 0 != $("a#" + $(this).attr("id")).parent().parent().parent().next().length && ($("a#" + $(this).attr("id")).parent().parent().siblings("a").removeClass("active"), $("a#" + $(this).attr("id")).parent().parent().parent().next().children("a").addClass("active"), $("a#" + $(this).attr("id")).parent().parent().parent().next().children("ul").find("li:first-child").children("a").addClass("active")))), t.deltaY < 0 && a < $(this).offset().top + 140 && t.deltaY < 0 && s && (s = !1, $("a#" + $(this).attr("id")).parent().parent().children().children().removeClass("active"), $("a#" + $(this).attr("id")).parent().parent().prev().hasClass("active") || ($("a#" + $(this).attr("id")).parent().parent().parent().parent().find('a[id^="title"]').removeClass("active"), $("a#" + $(this).attr("id")).parent().parent().prev().addClass("active")), $("a#" + $(this).attr("id")).parent().children("a").removeClass("active"), $("a#" + $(this).attr("id")).addClass("active"));
    });
  }, window.onload = function () {};
}();