let appointments = [];

        document.getElementById('ajouter').addEventListener('click', function() {
            const nom = document.getElementById('nom').value;
            const age = document.getElementById('age').value;
            const adress = document.getElementById('adress').value;
            const date = document.getElementById('date').value;
            const tel = document.getElementById('tel').value;

            if (nom && age && adress && date && tel) {
                const appointment = { nom, age, adress, date, tel };
                appointments.push(appointment);
                renderTable();
                clearForm();
            } else {
                alert('Veuillez remplir tous les champs');
            }
        });

        function renderTable() {
            const tbody = document.querySelector('#appointments-table tbody');
            tbody.innerHTML = '';

            appointments.forEach((appointment, index) => {
                const tr = document.createElement('tr');

                for (const key in appointment) {
                    const td = document.createElement('td');
                    td.textContent = appointment[key];
                    tr.appendChild(td);
                }

                const actionsTd = document.createElement('td');
                const editBtn = document.createElement('button');
                editBtn.textContent = 'Modifier';
                editBtn.addEventListener('click', () => editAppointment(index));
                actionsTd.appendChild(editBtn);

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Supprimer';
                deleteBtn.addEventListener('click', () => deleteAppointment(index));
                actionsTd.appendChild(deleteBtn);

                tr.appendChild(actionsTd);

                tbody.appendChild(tr);
            });
        }

        function clearForm() {
            document.getElementById('nom').value = '';
            document.getElementById('age').value = '';
            document.getElementById('adress').value = '';
            document.getElementById('date').value = '';
            document.getElementById('tel').value = '';
        }

        function editAppointment(index) {
            const appointment = appointments[index];
            document.getElementById('nom').value = appointment.nom;
            document.getElementById('age').value = appointment.age;
            document.getElementById('adress').value = appointment.adress;
            document.getElementById('date').value = appointment.date;
            document.getElementById('tel').value = appointment.tel;

            document.getElementById('ajouter').textContent = 'Mettre à jour';
            document.getElementById('ajouter').onclick = function() {
                updateAppointment(index);
            };
        }

        function updateAppointment(index) {
            appointments[index] = {
                nom: document.getElementById('nom').value,
                age: document.getElementById('age').value,
                adress: document.getElementById('adress').value,
                date: document.getElementById('date').value,
                tel: document.getElementById('tel').value
            };

            renderTable();
            clearForm();
            document.getElementById('ajouter').textContent = 'Ajouter';
            document.getElementById('ajouter').onclick = function() {
                const nom = document.getElementById('nom').value;
                const age = document.getElementById('age').value;
                const adress = document.getElementById('adress').value;
                const date = document.getElementById('date').value;
                const tel = document.getElementById('tel').value;

                if (nom && age && adress && date && tel) {
                    const appointment = { nom, age, adress, date, tel };
                    appointments.push(appointment);
                    renderTable();
                    clearForm();
                } else {
                    alert('Veuillez remplir tous les champs');
                }
            };
        }
        function deleteAppointment(index) {
            appointments.splice(index, 1);
            renderTable();
        }