<script>
    export let data;
  </script>
  
  <section class="hero" id="hero">
    <h1 class="gradient-text" data-text="Your Text Here">{data.text.title}</h1>
    <p>
      {data.text.description}
    </p>
  </section>
  
  <style>
    .hero {
      border-radius: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  
    h1 {
      font-size: 6rem;
      font-weight: 700;
      margin: 0;
      padding: 0;
      margin: auto;
    }
  
  </style>
  