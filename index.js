
var GetData = function(str){
    response = fetch('https://node-js0on-azure-jp-rg.azurewebsites.net/datetime.js').then((response) => response.text())
    .then((response) => {
        document.body.innerHTML = response;
      
    
})}


    
