/* const form_tag = document.querySelector('form');
const tbody = document.querySelector('#tableBody');

chargerDonnees();

if (form_tag) {
    form_tag.addEventListener('submit', function(e) {
        e.preventDefault();

        const userlastname = form_tag.querySelector('input[name="last_name"]').value.trim();
        const userfirstname = form_tag.querySelector('input[name="first_name"]').value.trim();
        const useradress = form_tag.querySelector('input[name="adress"]').value.trim();
        const usercontact = form_tag.querySelector('input[name="contact"]').value.trim();

        if (userlastname === '' || userfirstname === '' || useradress === '' || usercontact === '') {
            alert("Remplis toutes les cases my gee ");
            return;
        }

        const userProfils = {
            lastname: userlastname,
            firstname: userfirstname,
            address: useradress,
            contact: usercontact
        };

        sauvegarderDonnees(userProfils);
        afficherDansTableau(userProfils);
        form_tag.reset();
    });
}

function chargerDonnees() {
    const donnees = JSON.parse(localStorage.getItem('profils')) || [];
    donnees.forEach(function(profil, index) {
        afficherDansTableau(profil, index + 1);
    });
}

function sauvegarderDonnees(profil) {
    const donnees = JSON.parse(localStorage.getItem('profils')) || [];
    donnees.push(profil);
    localStorage.setItem('profils', JSON.stringify(donnees));
}

function afficherDansTableau(profil, numero) {
    if (!numero) {
        numero = tbody.querySelectorAll('tr').length + 1;
    }

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${numero}</td>
        <td>${profil.lastname}</td>
        <td>${profil.firstname}</td>
        <td>${profil.address}</td>
        <td>${profil.contact}</td>
    `;
    tbody.appendChild(newRow);
} */

class Student{
    constructor(){
        this.lastname = ''
        this.firstname = ''
        this.adress = ''
        this.contact = ''
    }

    registered(){

    }

    edit(){

    }

    delete(){

    }
}
