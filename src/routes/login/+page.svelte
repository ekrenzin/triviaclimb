<script>
  import supabase from "$lib/supabase";

  async function signInWithGoogle() {
    console.log(window.location.origin);
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
  }
</script>

  <section>
    <form on:submit|preventDefault={signInWithGoogle}>
      <h2>Login or Sign Up</h2>
      <p>
        Login or create an account to take quiz, take part in challenge, and
        more.
      </p>
      <div class="buttons">
        <button type="submit" />
      </div>
    </form>
  </section>

<style>
  .flex-column {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 100%;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px;
    border-radius: 10px;
    max-width: 90%;
    margin: 0 auto;
  }

  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }

  button {
    font-weight: 600;
    border-radius: 2rem;
    outline: 0;
    border: 0;
    transition: 0.3s;
    background: url("$lib/assets/google_signin.svg") no-repeat;
    background-position: center;
    height: 50px;
    width: 300px;
    border: 2px solid var(--color-theme-1);
  }

  /* the second button should be inverted */
  button:nth-child(2) {
    color: var(--color-theme-1);
    background-color: var(--neutrals-4);
  }

  button:hover {
    cursor: pointer;
    filter: brightness(0.9);
  }
</style>
