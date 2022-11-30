var selectedRow = null

function onFormSubmit(e) {
	event.preventDefault();
        var formData = readFormData();
        if (selectedRow == null){
            insertNewRecord(formData);
		}
        else{
            updateRecord(formData);
		}
        resetForm();    
}

//Retrieve the data
function readFormData() {
    var formData = {};
    formData["Nom"] = document.querySelector("#Nom").value;
    formData["marque"] = document.querySelector("#marque").value;
    formData["ddp"] = document.querySelector("#ddp").value;
    formData["perPrice"] = document.querySelector("#perPrice").value;
    formData["type"] = document.querySelector("#type").value;
    formData["promo"] = document.querySelector("#promo").value;

    return formData;
}

//Insert the data
function insertNewRecord(data) {
    var table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
		cell1.innerHTML = data.Nom;
    cell2 = newRow.insertCell(1);
		cell2.innerHTML = data.marque;
    cell3 = newRow.insertCell(2);
		cell3.innerHTML = data.ddp;
    cell4 = newRow.insertCell(3);
		cell4.innerHTML = data.perPrice;
    cell5 = newRow.insertCell(4);
		cell5.innerHTML = data.type;
     cell6 = newRow.insertCell(5);
		cell6.innerHTML = data.promo;
    cell7 = newRow.insertCell(6);
        cell7.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
}

//Edit the data
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Nom").value = selectedRow.cells[0].innerHTML;
    document.getElementById("marque").value = selectedRow.cells[1].innerHTML;
    document.getElementById("ddp").value = selectedRow.cells[2].innerHTML;
    document.getElementById("perPrice").value = selectedRow.cells[3].innerHTML;
    document.getElementById("type").value = selectedRow.cells[4].innerHTML;
    document.getElementById("promo").value = selectedRow.cells[5].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Nom;
    selectedRow.cells[1].innerHTML = formData.marque;
    selectedRow.cells[2].innerHTML = formData.ddp;
    selectedRow.cells[3].innerHTML = formData.perPrice;
    selectedRow.cells[4].innerHTML = formData.type;
    selectedRow.cells[5].innerHTML = formData.promo;

}

//Delete the data
function onDelete(td) {
    if (confirm('Do you want to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById('storeList').deleteRow(row.rowIndex);
        resetForm();
    }
}

//Reset the data
function resetForm() {
    document.getElementById("Nom").value = '';
    document.getElementById("marque").value = '';
    document.getElementById("ddp").value = '';
    document.getElementById("perPrice").value = '';
    document.getElementById("type").value = '';
    document.getElementById("promo").value = '';

    selectedRow = null;
}
const Nom = document.querySelector("#Nom");
const marque = document.querySelector('#marque');
const ddp = document.querySelector('#ddp');
const perPrice = document.querySelector('#perPrice');
const type = document.querySelector('#type')
const promo = document.querySelector('#promo')





function Nom_verify(Nom){
  return /(([aA-zZ])){3,30}$/.test(Nom.value);
};
function marque_verify(marque){
  return /[a-z]{3,30}$/.test(marque.value);

};
function setError(elem,message) {
  const formControl = elem.parentElement;
  const small = formControl.querySelector('small');

  // Ajout du message d'erreur
  small.innerText = message

  // Ajout de la classe error
  formControl.className = "form-control error";
}

function setSuccess(elem) {
  const formControl = elem.parentElement;
  formControl.className ='form-control success'
}
// check Nom 


Nom.addEventListener('blur',function(e){
  if (Nom.value === "") {
      let message = "Nom ne peut pas être vide";
      setError(Nom,message);
  }else if(Nom_verify(Nom) === true){
      setSuccess(Nom)
  }
  else{
      let message = "Nom non valide";
      setError(Nom,message);
  }
});


// check marque 


marque.addEventListener('blur',function(e){
  if (marque.value === "") {
      let message = "marque ne peut pas être vide";
      setError(marque,message);
  }else if(marque_verify(marque) === true){
      setSuccess(marque)
  }
  else{
      let message = "marque non valide";
      setError(marque,message);
  }
});

ddp.addEventListener('blur',function(e){
  if (ddp.value === "") {
      let message = "ddp ne peut pas être vide";
      setError(ddp,message);
  }else{
      setSuccess(ddp)
  }

});

perPrice.addEventListener('blur',function(e){
  if (perPrice.value === "") {
      let message = "perPrice ne peut pas être vide";
      setError(perPrice,message);
  }else{
      setSuccess(perPrice)
  }

});

type.addEventListener('blur',function(e){
  if (type.value === "") {
      let message = "type ne peut pas être vide";
      setError(type,message);
  }else{
      setSuccess(type)
  }

});
promo.addEventListener('blur',function(e){
  if (promo.value === "") {
      let message = "promo ne peut pas être vide";
      setError(promo,message);
  }else{
      setSuccess(promo)
  }

});