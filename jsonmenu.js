jQuery.fn.jsonmenu = function (options) {

    // jQuery設定
    var settings = jQuery.extend({
        autoclick: true,
        listjson: []
    }, options)


    var listjson = settings.listjson
    var usetag = $(this)
    for (i = 0; i < listjson.length; i++) {
        if (listjson[i].iconImage == undefined) {
            listjson[i].iconImage = ' '
        }
        usetag.append(
            '<li>' +
            '<a href="' + listjson[i].eventLink + '">' +
            '<img src="' + listjson[i].iconImage + '">' + listjson[i].eventTitle +
            '</a>' +
            '</li>'
        )
    }

    // 第二層-塞入子層
    var childrena = $(this).children('li').children('a')
    for (i = 0; i < listjson.length; i++) {
        childrena.each(function () {
            if ($(this).text() == listjson[i].eventParent) {
                if ($(this).siblings().hasClass('dropdown-menu')) {
                    $(this).siblings().append(
                        '<li class="dropdown">' +
                        '<a href="' + listjson[i].eventLink + '">' +
                        listjson[i].eventTitle +
                        '</a>' +
                        '<li>'
                    )
                } else {
                    $(this).after(
                        '<ul class="dropdown-menu">' +
                        '<li class="dropdown">' +
                        '<a href="' + listjson[i].eventLink + '">' +
                        listjson[i].eventTitle +
                        '</a>' +
                        '<li>' +
                        '</ul>'
                    ).addClass('dropdown-toggle').attr('data-toggle', 'dropdown').parent('li').addClass('dropdown')
                }
                // 移除父層與子層相同的
                var finda = $(this).parent('li').siblings().children('a')
                $(finda).each(function () {
                    if ($(this).text() == listjson[i].eventTitle) {
                        $(this).parent('li').remove()
                    }
                })
            }
        })
    }



    // 移除空的子層
    $('.dropdown-menu >li').each(function () {
        $(this).not('.dropdown').remove()
    })


    // 第三層
    var useClass = $(this).find('ul.dropdown-menu').children('li').children('a')
    for (i = 0; i < listjson.length; i++) {
        // $('.dropdown > .dropdown-menu >li  >a').each(function () {
        $(this).find('ul.dropdown-menu').children('li').children('a').each(function () {
            if ($(this).text() == listjson[i].subParent) {
                if ($(this).siblings().hasClass('dropdown-menu')) {
                    $(this).siblings().append(
                        '<li class="dropdown">' +
                        '<a href="' + listjson[i].eventLink + '">' +
                        listjson[i].eventTitle +
                        '</a>' +
                        '<li>'
                    )
                } else {
                    $(this).after(
                        '<ul class="dropdown-menu sub-menu">' +
                        '<li class="dropdown">' +
                        '<a href="' + listjson[i].eventLink + '">' +
                        listjson[i].eventTitle +
                        '</a>' +
                        '<li>' +
                        '</ul>'
                    ).addClass('dropdown-toggle').attr('data-toggle', 'dropdown').parent('li').addClass('dropdown')
                }
                // 移除最父層相同的元素            
                childrena.each(function () {
                    if ($(this).text() == listjson[i].eventTitle) {
                        $(this).parent('li').remove()
                    }
                })
            }
        })
    }

    // 移除空的子層
    $('.dropdown-menu >li').each(function () {
        $(this).not('.dropdown').remove()
    })

    if ($(window).width() > 768) {
        if (settings.autoclick == true) {
            // click無效
            $('.dropdown a.dropdown-toggle').click(function (e) {
                e.preventDefault();
                e.stopPropagation();
            })
            // 選單自動展開
            $('.dropdown').hover(function () {
                $(this).toggleClass('open')
            })
        } else {
            // 第二層click展開
            $('.dropdown > .dropdown-menu > .dropdown > a.dropdown-toggle').click(function (e) {
                e.preventDefault();
                e.stopPropagation();
                $(this).parent('li').toggleClass('open')
            })
        }
    } else {
        // 手機版本第二層click展開
        $('.dropdown > .dropdown-menu > .dropdown > a.dropdown-toggle').click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).parent('li').toggleClass('open')
        })
    }

}