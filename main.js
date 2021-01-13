var xhr = new XMLHttpRequest();

xhr.open("get", "https://ci-swapi.herokuapp.com/api/");

xhr.send();

function setData(jsonData){
    data = jsonData;
    console.log(data)
}

xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        data = this.responseText;
        setData(JSON.parse(this.responsetext));
    }
};

console.log(data)