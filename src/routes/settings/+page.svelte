<script>
  import ProjectBox from "./ProjectBox.svelte";
  import { themeStore } from "svelte-elegant/stores";
  import { onMount } from "svelte";
  import { Stopwatch } from "svelte-elegant/icons-elegant";

  onMount(() => {});
</script>

<div class="container">
  <ProjectBox href="https://svelte-elegant.vercel.app">
    <div class="content">
      <div>
        <span style:color={$themeStore.palette.primary}>Svelte</span>
        <span> Elegant </span>
      </div>
      <p
        style:font-size="16px"
        style:text-align="justify"
        style:text-justify="inter-word"
      >
        The library of the Elegant web components.
      </p>
      <svg
        data-source="https://www.svgrepo.com/svg/154037/yin-yang"
        data-license="CC0"
        width="90px"
        height="90px"
        fill="#5BB056"
        version="1.1"
        id="Capa_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 296.085 296.085"
        xml:space="preserve"
        style="transform: rotate(90deg); transition: transform 0.3s;"
        ><g
          ><path
            d="M296.051,147.956c0-0.094-0.004-0.186-0.004-0.28C295.823,66.258,229.541,0,148.098,0
		c-38.547,0-75.041,14.63-102.76,41.396c-27.643,26.693-43.66,62.648-45.1,100.648h0.018c-0.158,2-0.234,4.211-0.234,5.99
		c0,1.699,0.191,6.078,0.201,6.331c1.6,38.2,17.689,73.866,45.305,100.419c27.699,26.632,64.119,41.301,102.555,41.301
		c81.432,0,147.815-66.253,147.98-147.707C296.063,148.246,296.059,148.102,296.051,147.956z M148.082,280.088
		c-34.279,0-66.762-13.08-91.465-36.831c-9.809-9.432-17.988-20.151-24.369-31.789c7.486,5.433,15.834,9.458,24.668,11.933
		c-0.02-0.014-0.037-0.026-0.057-0.04c6.838,1.929,13.969,2.935,21.223,2.935c20.377,0,39.658-7.807,54.289-21.982
		c14.594-14.139,23.014-33.094,23.707-53.376c0.039-5.102,0.014-5.102,0.014-5.012l-0.004-0.118
		c1.281-33.463,28.271-59.635,61.777-59.635c34.195,0,61.844,27.746,61.844,61.939c0,0.002,0-0.002,0-0.002
		c0,0.058,0.177,0.346,0.183,0.473C279.586,221.08,220.612,280.088,148.082,280.088z M98,148.088c0,11.028-8.973,20-20,20
		c-11.029,0-20-8.972-20-20c0-11.028,8.971-20,20-20C89.028,128.088,98,137.059,98,148.088z"
          ></path><path
            d="M218,128.088c-11.029,0-20,8.972-20,20c0,11.028,8.971,20,20,20c11.027,0,20-8.972,20-20
		C238,137.059,229.028,128.088,218,128.088z"
          ></path></g
        ></svg
      >
    </div></ProjectBox
  >
  <ProjectBox href="https://math-trainer-lime.vercel.app">
    <div class="content">
      <div>
        <span style:color={$themeStore.palette.primary}>Math</span>
        <span> Trainer </span>
      </div>
      <p
        style:font-size="16px"
        style:text-align="justify"
        style:text-justify="inter-word"
      >
        The simulator for solving mathematical examples.
      </p>
      <p>Solve the example:</p>
      <div>
        <span>125 </span>
        <span style:color={$themeStore.palette.primary}>÷</span>
        <span>5</span>
        <span style:color={$themeStore.palette.primary}>= ••</span>
      </div>
    </div>
  </ProjectBox>
  <ProjectBox href="https://memory-trainer-five.vercel.app">
    <div class="content">
      <div>
        <span style:color={$themeStore.palette.primary}>Memory</span>
        <span> Trainer </span>
      </div>
      <p
        style:font-size="16px"
        style:text-align="justify"
        style:text-justify="inter-word"
      >
        The simulator for memory training.
      </p>
      <p>Repeat the number:</p>
      <div>
        <span style:color={$themeStore.palette.primary}>7053482</span>
      </div>
    </div>
  </ProjectBox>
  <ProjectBox href="https://sql-viewer-delta.vercel.app">
    <div class="content">
      <div>
        <span style:color={$themeStore.palette.primary}>SQL</span>
        <span> Viewer </span>
      </div>
      <p
        style:font-size="16px"
        style:text-align="justify"
        style:text-justify="inter-word"
      >
        Manage your database using the web interface.
      </p>
      <img width="100px" height="100px" src="/database.png" />
    </div>
  </ProjectBox>
  <ProjectBox href="https://answer-generator-five.vercel.app">
    <div class="content">
      <div>
        <span style:color={$themeStore.palette.primary}>Answer</span>
        <span> Generator </span>
      </div>
      <p
        style:font-size="16px"
        style:text-align="justify"
        style:text-justify="inter-word"
      >
        Generate an answer to your question.
      </p>
      <img width="100px" height="100px" src="/dice-2.png" alt="Logo" />
    </div>
  </ProjectBox>
  <ProjectBox href="https://english-assistant.vercel.app/home">
    <div class="content">
      <div>
        <span style:color={$themeStore.palette.primary}>English</span>
        <span> Assistant </span>
      </div>
      <p
        style:font-size="16px"
        style:text-align="justify"
        style:text-justify="inter-word"
      >
        Automate English language learning.
      </p>
      <img width="100px" height="100px" src="/light-mega2.png" alt="En" />
    </div>
  </ProjectBox>
  <ProjectBox href="https://task-manager-six-sand-70.vercel.app">
    <div class="content">
      <div>
        <span style:color={$themeStore.palette.primary}>Task</span>
        <span> Manager </span>
      </div>
      <p
        style:font-size="16px"
        style:text-align="justify"
        style:text-justify="inter-word"
      >
        Keep productivity monitoring.
      </p>
      <img width="100px" height="100px" src="/light-mega.png" alt="En" />
    </div>
  </ProjectBox>
  <ProjectBox href="https://github.com/Myslitel666">
    <div class="content">
      <div>
        <span style:color={$themeStore.palette.primary}>Smart</span>
        <span> Investor</span>
      </div>
      <p
        style:font-size="16px"
        style:text-align="justify"
        style:text-justify="inter-word"
      >
        Calculate the compound interest on deposits.
      </p>
      <img width="100px" height="100px" src="/Smart-Investor.png" alt="En" />
    </div>
  </ProjectBox>
  <ProjectBox href="https://stopwatch-liard-zeta.vercel.app">
    <div class="content">
      <div>
        <span style:color={$themeStore.palette.primary}>Stop</span>
        <span style:margin-left="-5px">watch</span>
      </div>
      <p
        style:font-size="16px"
        style:text-align="justify"
        style:text-justify="inter-word"
      >
        The device for measuring elapsed time.
      </p>
      <Stopwatch size="90px" />
    </div>
  </ProjectBox>
</div>

<style>
  .container {
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap; /* ← Это переносит на новую строку */
    gap: 10px;
  }

  .content {
    gap: 15px;
    height: 100%;
    width: 100%;
    font-size: 24px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 100%;
  }

  .width {
    width: 6.75rem;
  }

  .mgn-top {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .switch-container {
    display: flex;
    align-items: center;
    margin-top: 0.77rem;
  }
</style>
