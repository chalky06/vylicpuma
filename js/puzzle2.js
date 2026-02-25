const required = btoa("vylic-5822-unlocked");

if (localStorage.getItem("accessKey") !== required) {
    window.location.href = "../index.html";
}
