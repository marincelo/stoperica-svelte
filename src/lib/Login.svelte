<div>
  <button on:click={login}>Login</button>
</div>

<script>
  function login() {
    const form = new FormData();
    form.append('racer[email]', 'TODO');
    form.append('racer[phone_number]', 'TODO');

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json'
      },
      body: form
    };
    return fetch('/api/racers/login', options)
      .then(response => response.json())
      .then(json => {
        if (json.email && json.phone_number) {
          localStorage.setItem('USER', JSON.stringify(json))
          alert('Succsss!');
        }
        else {
          alert('Pogresan unos. Pokusaj ponovno.');
        }
      })
      .catch(console.error);
  }
</script>
