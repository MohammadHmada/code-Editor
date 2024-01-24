var logo = document.getElementById("logo");
var text_logo = document.getElementById("text_logo");
var article = document.getElementById("article");
var header = document.querySelector("header");
var setting_logo = document.getElementById("setting_logo");
var a1 = document.querySelectorAll(".a1");
var open2 = document.getElementById("open2");
var open = document.getElementById("open");
var HTML = document.getElementById("HTML");
var CSS = document.getElementById("CSS");
var JS = document.getElementById("JS");
var delet = document.getElementById("delete");
var preserve = document.getElementById("preserve");
var textarea_codes = document.getElementById("textarea_codes");
var textarea_codes1 = document.getElementById("textarea_codes1");
if (sessionStorage.getItem("color") == "red") {
    red1();
} else if (sessionStorage.getItem("color") == "orange") {
    orange1();
} else if (sessionStorage.getItem("color") == "green") {
    green1();
} else if (sessionStorage.getItem("color") == "blue") {
    blue1();
} else if (sessionStorage.getItem("color") == "aqua") {
    aqua1();
} else if (sessionStorage.getItem("color") == "yellow") {
    yellow1();
} else if (sessionStorage.getItem("color") == "white") {
    white1();
} else if (sessionStorage.getItem("color") == null) {
    white1();
};
var HTML2 = localStorage.getItem("HTML2");
if (HTML2 == null || HTML2 == undefined || HTML2 == "") {
    HTML2 = `<!DOCTYPE html>
    <html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title></title>
</head>    
<body>
</body>
</html>`;
    localStorage.setItem("HTML2", HTML2);
}
HTML1();
function HTML1() {
    textarea_codes1.innerHTML=`
<textarea id="textarea_codes"></textarea>
`;
textarea_codes=document.getElementById("textarea_codes");
    if (HTML2 == null || HTML2 == undefined || HTML2 == "") {
        textarea_codes.value = `<!DOCTYPE html>
        <html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title></title>
</head>    
<body>
</body>
</html>`;
        localStorage.setItem("HTML2", HTML2);
    } else {
        textarea_codes.value = HTML2;
    }
    open2.style.borderColor = "coral";
    open2.style.background = "coral";
    textarea_codes.style.borderColor = "coral";
    textarea_codes1.style.borderColor = "coral";
    textarea_codes.focus();
    delet.onclick = () => {
        
        
        textarea_codes.value = "";
        HTML2 = textarea_codes.value;
        localStorage.setItem("HTML2", HTML2);
    }
    textarea_codes.oninput = () => {
        HTML2 = textarea_codes.value;
        localStorage.setItem("HTML2", HTML2);
    }
}
HTML2 = localStorage.getItem("HTML2");
var CSS2 = localStorage.getItem("CSS2");
setting_logo.onclick = () => {
    
    
    F_setting_logo();
}
function CSS1() {
    textarea_codes1.innerHTML=`
<textarea id="textarea_codes"></textarea>
`;
textarea_codes=document.getElementById("textarea_codes");
    open2.style.borderColor = "cyan";
    open2.style.background = "cyan";
    textarea_codes.style.borderColor = "cyan";
    textarea_codes1.style.borderColor = "cyan";
    textarea_codes.value = CSS2;
    textarea_codes.focus();
    delet.onclick = () => {
        
        
        textarea_codes.value = "";
        CSS2 = textarea_codes.value;
        localStorage.setItem("CSS2", CSS2);
    }
    textarea_codes.oninput = () => {
        CSS2 = textarea_codes.value;
        localStorage.setItem("CSS2", CSS2);
    }
}
CSS2 = localStorage.getItem("CSS2");
var JS2 = localStorage.getItem("JS2");
function JS1() { textarea_codes1.innerHTML=`
<textarea id="textarea_codes"></textarea>
`;
textarea_codes=document.getElementById("textarea_codes");
    open2.style.borderColor = "gold";
    open2.style.background = "gold";
    textarea_codes.style.borderColor = "gold";
    textarea_codes1.style.borderColor = "gold";
    textarea_codes.value = JS2;
    textarea_codes.focus();
    delet.onclick = () => {
        
        
        textarea_codes.value = "";
        JS2 = textarea_codes.value;
        localStorage.setItem("JS2", JS2);
    }
    textarea_codes.oninput = () => {
        JS2 = textarea_codes.value;
        localStorage.setItem("JS2", JS2);
    }
}
JS2 = localStorage.getItem("JS2");
function runcodes() {
    textarea_codes1.innerHTML=`
    <iframe id="textarea_codes"></iframe>
    `;
    open2.style.borderColor = "darkcyan";
    open2.style.background = "darkcyan";
    textarea_codes.style.borderColor = "darkcyan";
    textarea_codes1.style.borderColor = "darkcyan";
    textarea_codes=document.getElementById("textarea_codes");
    textarea_codes.style.padding='0px';
    textarea_codes.style.width='100%';
    let a1 = HTML2.indexOf("<head");
    let a2 = HTML2.substring(a1 + 5);
    let a3 = a2.indexOf(">");
    let a4 = a2.substring(a3 + 1);
    let a5 = a4.indexOf("<head");
    a2 = a2.substring(1, a5)
    let myIframeDocument = textarea_codes.contentDocument;
    myIframeDocument.querySelectorAll("html")[0].innerHTML = HTML2;
    myIframeDocument.head.innerHTML = a2;
    let styles = document.createElement("style");
    let styles1 = document.createTextNode(CSS2);
    styles.appendChild(styles1);
    myIframeDocument.head.appendChild(styles);
    let scripts = document.createElement("SCRIPT");
    let scripts1 = document.createTextNode("try{" + JS2 + '}catch(error){localStorage.setItem("error",error);}');
    scripts.appendChild(scripts1);
    myIframeDocument.body.appendChild(scripts);
}
preserve.onclick = () => {
    
    
    setTimeout(runcodes, 200);
}
HTML.onclick = () => {
    
    
    HTML1();
}
JS.onclick = () => {
    
    
    JS1();
}
CSS.onclick = () => {
    
    
    CSS1();
}
function red1() {
    document.body.style.background = "rgb(255 211 211)";
    header.style.background = "rgb(255 160 160)";
    sessionStorage.setItem("color", "red");
}
function green1() {
    document.body.style.background = "rgb(215 255 215)";
    header.style.background = "rgb(134 255 134)";
    sessionStorage.setItem("color", "green");
}
function orange1() {
    document.body.style.background = "rgb(255 237 204)";
    header.style.background = "rgb(255 218 151)";
    sessionStorage.setItem("color", "orange");
}
function blue1() {
    document.body.style.background = "rgb(209 209 255)";
    header.style.background = "rgb(159 159 255)";
    sessionStorage.setItem("color", "blue");
}
function aqua1() {
    document.body.style.background = "rgb(214 255 255)";
    header.style.background = "rgb(129 255 255)";
    sessionStorage.setItem("color", "aqua");
}
function yellow1() {
    document.body.style.background = "rgb(255 255 201)";
    header.style.background = "rgb(255 255 140)";
    sessionStorage.setItem("color", "yellow");
}
function white1() {
    document.body.style.background = "rgb(241 241 241)";
    header.style.background = "#cfcfcf";
    sessionStorage.setItem("color", "white");

}
function F_setting_logo() {
    open2.style.borderColor = "rgb(92 92 92)";
    open2.style.background = "rgb(92 92 92)";
    textarea_codes.style.borderColor = "rgb(92 92 92)";
    textarea_codes1.style.borderColor = "rgb(92 92 92)";
    textarea_codes1.innerHTML=`
    <div id="textarea_codes">
    <div class="color_this_wib1">
    <div id="color_this_wib1">اللون المفضل</div>
    <div class="color_this_wib" id="red"></div>
    <div class="color_this_wib" id="orange"></div>
    <div class="color_this_wib" id="blue"></div>
    <div class="color_this_wib" id="yellow"></div>
    <div class="color_this_wib" id="green"></div>
    <div class="color_this_wib" id="aqua"></div>
    <div class="color_this_wib" id="white"></div>
    </div>
    <div class="color_this_wib1">
    <div id="color_this_wib3">حذف البيانات</div>
    <div id="delete_all_data">حذف البيانات من ذاكرة التخزين المحلية</div>
    <div id="deletee">حذف البيانات من الذاكرة التخزين المؤقتة</div>
    <div></div>
    </div>
    </div>
    `;
    textarea_codes=document.getElementById("textarea_codes");
    let delete_all_data = document.getElementById("delete_all_data");
    let deletee = document.getElementById("deletee");
    let white = document.getElementById("white");
    let aqua = document.getElementById("aqua");
    let yellow = document.getElementById("yellow");
    let green = document.getElementById("green");
    let blue = document.getElementById("blue");
    let orange = document.getElementById("orange");
    let red = document.getElementById("red");
    let message= `هل انت متأكد من حذف البيانات من ذاكرة التخزين المحلية سيؤدي ذلك الى حذف جميع البيانات بما في ذلك الأكود الموجود في محرر الأكود`;
    let message2=`هل انت متأكد من حذف البيانات من ذاكرة التخزين المحلية سيؤدي ذلك الى حذف جميع البيانات بما في ذلك الأكود الموجود في محرر الأكود`;
    delete_all_data.onclick = () => {
        setTimeout(function aaaaa() {
            let message1 = window.confirm(message2);
            if (message1 == true) {
                sessionStorage.clear();
                localStorage.clear();
                location.reload();
            }
        }, 100)
    }
    deletee.onclick = () => {
        setTimeout(function aaaaa1() {
            let message1 = window.confirm(message);
            if (message1 == true) {
                sessionStorage.clear();
                location.reload();
            }
        }, 100)
    }
    red.onclick = () => {
        red1();
    }
    green.onclick = () => {
        green1();
    }
    orange.onclick = () => {
        orange1();
    }
    blue.onclick = () => {
        blue1();
    }
    aqua.onclick = () => {
        aqua1();
    }
    yellow.onclick = () => {
        yellow1();
    }
    white.onclick = () => {
        white1();
    }
}