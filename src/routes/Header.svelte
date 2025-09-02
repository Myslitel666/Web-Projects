<script>
  import ColorThemeSwitch from "svelte-elegant/ColorThemeSwitch";
  import { goto } from "$app/navigation";
  import Header from "svelte-elegant/Header";

  import { themeMode, themeStore } from "svelte-elegant/stores";

  let theme;

  let logotypeFilter = "";
  let svelteColor = "";
  let elegantColor = "";

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы

    svelteColor = theme.palette.primary;
    elegantColor = $themeMode === "light" ? "#383838" : "#fdfdfd";
    logotypeFilter = $themeMode === "light" ? "brightness(80%)" : "";
  });
</script>

<Header>
  <button style:gap="0.5rem" onclick={() => goto("/settings")}>
    <p style:font-size="26px">
      <span
        style:color={svelteColor}
        style:filter={logotypeFilter}
        style:transition="all 0.3s"
      >
        WEB
      </span>
      <span style:color={elegantColor} style:transition="all 0.3s">
        Projects
      </span>
    </p>
  </button>
  <div style:margin-left="auto" style:margin-right="1px">
    <ColorThemeSwitch />
  </div>
</Header>

<style>
  button {
    margin-left: 6px;
  }
  @media (max-width: 768px) {
    button {
      margin-left: 3px;
    }
  }
</style>
