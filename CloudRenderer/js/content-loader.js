//https://freedomservices.ddns.net/index.php/s/ibiCsLRATqymJrC/download?path=%2FForCloudRenderer%2FLecture&files=t1.jpg

function LoadContent(){
    category = localStorage["category"];
    is_url_ok = false;
    all_info = document.getElementById("all-info");
    subject = document.getElementById("selected-subject").value;
    date = document.getElementById("input-date").value;
    url = "https://freedomservices.ddns.net/index.php/s/ibiCsLRATqymJrC/download?path=/ForCloudRenderer/"+category+"/"+subject+"&files="+date+".jpg";
    //txt = new File([url], url, {type: "text/plain"});
    new_title = document.createElement("a"); new_title.className = "link-text"; new_title.innerHTML = subject+": "+date; new_title.href = url;
    new_image = document.createElement("img"); new_image.className = "image"; new_image.src = url; new_image.onerror = ErrorNode;
    console.log("Загрузка лекции по предмету "+subject+" с датой "+date+".");
    space = document.createElement("div"); space.className = "space"; space.innerHTML = " ";
    all_info.appendChild(new_title);
    all_info.appendChild(new_image);
    all_info.appendChild(space);

}

function SetCategory(new_category){
    localStorage["category"] = new_category;
}

function ErrorNode(){
    message = "Ошибка загрузки "+subject+": "+date;
    new_image.remove(); new_title.remove();
    error_node = document.createElement("div"); error_node.className = "error-node"; error_node; error_node.innerHTML = message;
    all_info.appendChild(error_node);
}