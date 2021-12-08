var list = document.getElementById("list");
var count = 0;

function selection(i) {
    return new Promise(function(resolve, reject) {
        var card = document.getElementById(i);
        if (card.getAttribute("selected") == "1") {
            card.style.backgroundColor="FFFF";
            card.setAttribute("selected", "0");
            count = count - 1;
            resolve("Unselected card " + i + ", removed color and " + count + " tasks completed.");
        }
        else if (card.getAttribute("selected") == "0") {
            card.style.backgroundColor = "#00FFFF";
            card.setAttribute("selected", "1");
            count += 1;
            if (count % 5 == 0) {
                resolve("Selected card " + i + ", color changed, notification popped and " + count + " tasks completed.");
                setTimeout(function() {
                    alert("Congrats. " + count + " Tasks have been Successfully Completed");
                }, 10);
            } else { resolve("Selected card " + i + ", color changed and " + count + " tasks completed."); }

        } else {
            reject("An error occured during the proccess.");
        }
    });
}

function select(i) {
    selection(i)
        .then(function(e) { console.log(e); })
        .catch(function(e) { console.log(e); })
}

function requestjson() {
    setTimeout(function() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var content = JSON.parse(this.responseText);
                var out = "";
                for (var i = 0; i < content.length; i++) {
                    var userid = content[i].userId;
                    var id = content[i].id;
                    var title = content[i].title;
                    out += `
                <div class="col pb-3"><div onclick='select(${i});' class="card" selected="0" id="${i}">
<div class="card-body">
<span class="card-text">
${title}
</span>
</div>
</div></div>
                `;
                }
                list.innerHTML = "<div class='mb-4 text-center '>Select tasks that are completed.</div><div class='d-flex justify-content-center'><div class='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3'>" + out + "</div></div>";
                // var element = document.getElementById("footer");
                // element.classList.remove("fixed-bottom"); // to make the footer non sticky 
            }
        }
        xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
        
        xhttp.send();
    }, 500);
}
requestjson();