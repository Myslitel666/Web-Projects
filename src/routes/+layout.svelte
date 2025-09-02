<script>
  import { ThemeProvider, ScrollbarContainer } from "svelte-elegant";
  import Header from "./Header.svelte";
</script>

<ThemeProvider>
  <Header />
  <ScrollbarContainer>
    <div class="app">
      <main>
        <slot />
      </main>
    </div>
  </ScrollbarContainer>
</ThemeProvider>

<svelte:head>
  <style>
    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap");

    * {
      font-family: "Roboto", sans-serif;
      font-weight: 300;
    }
  </style>
</svelte:head>
