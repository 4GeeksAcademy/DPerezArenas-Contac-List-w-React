const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contact: [],
			editContact: {full_name: '', phone: '', email:'', address:''},
			base_url: 'https://playground.4geeks.com/apis/fake/contact',
		},

		actions: {

			// Use getActions to call a function within a fuction
			exampleFunction: () => { getActions().changeColor(0, "green"); },
			loadSomeData: () => { fetch().then().then(data => setStore({ "foo": data.bar })) },
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			editContact: (contact) => {setStore({editContact: contact})},
			getContacts: async () => {
				const store = getStore();
				const base_url = 'https://playground.4geeks.com/apis/fake/contact/agenda';
				const agendaSlug = '/Daniel'
				const url = base_url + agendaSlug;
				const options = {
					method: 'GET',
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					console.log({ "contact": data });
					setStore({ "contact": data })
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			createContact: async (newContact) => {
				const base_url = 'https://playground.4geeks.com/apis/fake/contact/';
				const url = base_url;
				const options = {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(newContact)
				}
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
					console.log({ "contact": data });
					getActions().getContacts();
					// setStore({ "contact": [...store.contact, data] })
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},
			updateContact: async (id, updatedContact) => {
				const url =' https://playground.4geeks.com/apis/fake/contact/' + id;
				const options = {
					method: 'PUT',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(updatedContact)
				};
				const response = await fetch(url, options);
				console.log(response);
				if (response.ok) {
					const data = await response.json();
					console.log({ "contact": data });
					getActions().getContacts();
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			},

			deleteContact: async (id) => {
				const baseUrl = 'https://playground.4geeks.com/apis/fake/contact/'
				const url = baseUrl + id
				const options = { method: 'DELETE'};
				const response = await fetch(url, options);
				if (response.ok) {
					const data = await response.json();
        			getActions().getContacts();
				} else {
					console.log('Error: ', response.status, response.statusText)
				}
			}
		}
	};
};

export default getState;
