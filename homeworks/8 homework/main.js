let page = 1;

        async function getCharacters() {
            const container = document.querySelector('.container_characters');
            const res = await fetch('https://rickandmortyapi.com/api/character?page=' + page);
            const data = await res.json();
            console.log(data);

            renderCharacters(data.results);
        }

        function renderCharacters(characters) {
            const container = document.querySelector('.container_characters');
            container.innerHTML = ''; 

            characters.forEach((item) => {
                container.innerHTML += `
                <div class="character_block">
                    <img src="${item.image}">
                    <div>
                        <h2>${item.name}</h2>
                        <h2 class="status">Status: ${item.status}</h2>
                        <h2 class="status">Species: ${item.species}</h2>
                        <h2 class="status">Gender: ${item.gender}</h2>
                    </div>
                </div>
                `;
            });
        }

        async function searchCharacter() {
            const name = document.getElementById('characterName').value.trim();
            const status = document.getElementById('characterStatus').value.trim().toLowerCase();
            let query = '';

            if (name) query += `&name=${name}`;
            if (status) query += `&status=${status}`;

            if (query) {
                const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}${query}`);
                const data = await res.json();

                if (data.results) {
                    renderCharacters(data.results);
                } else {
                    document.querySelector('.container_characters').innerHTML = '<p>Персонаж не найден</p>';
                }
            }
        }

        function nextPage() {
            page += 1;
            document.getElementById('currentPage').innerText = page;
            getCharacters();
        }

        function backPage() {
            if (page > 1) {
                page -= 1;
                document.getElementById('currentPage').innerText = page;
                getCharacters();
            }
        }

        getCharacters();