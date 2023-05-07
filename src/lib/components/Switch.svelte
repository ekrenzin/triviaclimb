<script>
    export let checked = true
    export const color = '#2196F3'
  </script>
  
  <style>
    .switch {
      position: relative;
      display: inline-block;
      width: 40px;
      height: 34px;
      font-weight: 600;
      margin-top: 5px;
      margin-bottom: 5px;
    }
    .switch input {
      opacity: 0;
      width: 0;
      height: 0;
    }
    .slider {
      position: absolute;
      cursor: pointer;
      height: 20px;
      left: 0;
      right: 0;
      bottom: 5px;
      background-color: var(--color-theme-2);
      filter: brightness(0.5);
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 34px;
    }
    .slider:before {
      position: absolute;
      content: '';
      left: 0px;
      height: 100%;
      aspect-ratio: 1;
      background-color: var(--color-bg-2);
      -webkit-transition: 0.4s;
      transition: 0.4s;
      border-radius: 50%;
    }
    input {
      transition-duration: 0.5s;
    }
    input:checked + .slider {
      filter: brightness(1);
    }
  
    input:checked + .slider:before {
      -webkit-transform: translateX(20px);
      -ms-transform: translateX(20px);
      transform: translateX(20px);
    }
  
    button {
      background: none;
      outline: none;
      border: none;
    }
  
    button:hover {
      filter: brightness(1);
    }
  </style>
  
  <button class="switch" on:click={() => (checked = !checked)}>
    <input type="checkbox" bind:checked />
    <span class="slider" />
  </button>
  