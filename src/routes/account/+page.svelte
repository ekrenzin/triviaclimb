<!-- src/routes/account/+page.svelte -->
<script lang="ts">
  import { enhance, type SubmitFunction } from "$app/forms";

  export let data;
  export let form;

  let { session, supabase, profile } = data;

  let profileForm: any;
  let loading = false;
  let fullName: string = profile?.full_name ?? "";
  let username: string = profile?.username ?? "";
  let website: string = profile?.website ?? "";
  let avatarUrl: string = profile?.avatar_url ?? "";

  const handleSubmit: SubmitFunction = () => {
    loading = true;
	console.log("handleSubmit")
    return async () => {
      loading = false;
    };
  };

  const handleSignOut: SubmitFunction = () => {
    loading = true;
    return async ({ update }) => {
      loading = false;
      update();
    };
  };
</script>
<div class="form-widget">
  <form
    class="form-widget"
    method="post"
    action="?/update"
    use:enhance={handleSubmit}
    bind:this={profileForm}
  >
    <div>
      <label for="email">Email</label>
      <input id="email" type="text" value={session.user.email} disabled />
    </div>

    <div>
      <label for="fullName">Full Name</label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        value={form?.fullName ?? fullName}
      />
    </div>

    <div>
      <label for="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        value={form?.username ?? username}
      />
    </div>

    <div>
      <label for="website">Website</label>
      <input
        id="website"
        name="website"
        type="url"
        value={form?.website ?? website}
      />
    </div>

    <div>
      <input
        type="submit"
        class="button block primary"
        value={loading ? "Loading..." : "Update"}
        disabled={loading}
      />
    </div>
  </form>

  <form method="post" action="?/signout" use:enhance={handleSignOut}>
    <div>
      <button class="button block" disabled={loading}>Sign Out</button>
    </div>
  </form>
</div>

<style>
  body {
    font-family: Arial, sans-serif;
    line-height: 1.6;
    background-color: #f4f4f4;
  }

  .form-widget {
    background-color: #fff;
    border-radius: 5px;
    max-width: 400px;
    margin: 30px auto;
    padding: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .form-widget label {
    display: block;
    font-size: 1rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .form-widget input[type="text"],
  .form-widget input[type="url"] {
    width: 100%;
    padding: 8px;
    font-size: 1rem;
    border: 1px solid #ddd;
    border-radius: 3px;
    margin-bottom: 20px;
  }

  .form-widget input[type="submit"],
  .form-widget button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #333;
    color: #fff;
    font-size: 1rem;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }

  .form-widget input[type="submit"]:hover,
  .form-widget button:hover {
    background-color: #555;
  }

  .form-widget input[type="submit"]:disabled,
  .form-widget button:disabled {
    background-color: #999;
    cursor: not-allowed;
  }

  .form-widget input[type="submit"].primary {
    background-color: #007bff;
  }

  .form-widget input[type="submit"].primary:hover {
    background-color: #0056b3;
  }
</style>
