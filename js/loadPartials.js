// Function to load and insert partial content
function loadPartial(url, targetId) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById(targetId).innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", url, true);
    xhr.send();
}

// Load sidebar, and footer partials
loadPartial("../html/partials/sidebar.html", "sidebar");
loadPartial("../html/partials/footer.html", "footer");