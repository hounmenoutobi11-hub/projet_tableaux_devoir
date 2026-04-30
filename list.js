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

class Student {
    constructor() {
        this.lastname = ''
        this.firstname = ''
        this.adress = ''
        this.contact = ''
    }

    registered() {
        const form_tag = document.getElementById('studentform')
        if (form_tag) {
            form_tag.addEventListener('submit', (e) => {
                e.preventDefault()
                const lastnameTagValue = form_tag.querySelector('input[name="last_name"]').value
                const firstnameTagValue = form_tag.querySelector('input[name="first_name"]').value
                const adressTagValue = form_tag.querySelector('input[name="adress"]').value
                const contactTagValue = form_tag.querySelector('input[name="contact"]').value

                if (lastnameTagValue == '' || firstnameTagValue == '' || adressTagValue == '' || contactTagValue == '') {
                    alert("Veuillez remplir tous les champs. ")
                    return
                }

                const studentList = JSON.parse(localStorage.getItem('studentList')) || []
                const studentInfos = {
                    id: studentList.length + 1,
                    lastname: lastnameTagValue,
                    firstname: firstnameTagValue,
                    address: adressTagValue,
                    contact: contactTagValue
                }
                studentList.push(studentInfos)

                localStorage.setItem('studentList', JSON.stringify(studentList))
                this.display()

                form_tag.reset()

            })
        }

    }

    edit() {

    }

    delete(studentId) {
        const studentList = JSON.parse(localStorage.getItem('studentList'))
        const otherStudent = studentList.filter((item)=> item.id !== studentId)
        localStorage.setItem('studentList', JSON.stringify(otherStudent))
        this.display()
    }

    display() {
        const studentList = JSON.parse(localStorage.getItem('studentList')) || []
        const tbodyTag = document.querySelector('tbody')
        tbodyTag.innerHTML = ``
        if (studentList) {
            if (studentList.length > 0) {
                studentList.forEach((student) => {
                    /*tbodyTag.innerHTML += `<tr>
                        <td>${student.id}</td>
                        <td>${student.lastname}</td>
                        <td>${student.firstname}</td>
                        <td>${student.address}</td>
                        <td>${student.contact}</td>
                        <td>
                            <button>Edit</button>
                            <button onclick="${this.delete(student.id)}">Delete</button>
                        </td>
                    </tr>`*/
                    const trTag = document.createElement('tr')
                    trTag.innerHTML = `
                        <td>${student.id}</td>
                        <td>${student.lastname}</td>
                        <td>${student.firstname}</td>
                        <td>${student.address}</td>
                        <td>${student.contact}</td>
                        <td>
                            <button>Edit</button>
                            <button>Delete</button>
                        </td>
                    `
                    const deleteButtonTag = trTag.querySelector("button:nth-child(2)")
                    if(deleteButtonTag){
                        deleteButtonTag.addEventListener('click', () => {
                            this.delete(student.id)
                        })
                    }
                    
                    tbodyTag.appendChild(trTag)
                })
            } else {
                tbodyTag.innerHTML = `<tr>
                    <td colspan="6" style='text-align:center;'>Aucun étudiant enregistré</td>
                </tr>`
            }

        }
    }
}
const student = new Student()
student.registered()
student.display()

/* const STUDENT = {
    firstname : "",
    lastname : "toto",
    contact : "",
    adress : "",

    registered : ()=>{

    },

    edit : ()=>{

    },

    delete : ()=>{

    }
}
console.log(STUDENT.lastname); */






