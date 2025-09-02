<script lang="ts">
  import { themeStore, themeMode } from "svelte-elegant/stores";
  import { onMount, onDestroy } from "svelte";
  import ButtonBox from "svelte-elegant/ButtonBox";
  import { Modal, Button } from "svelte-elegant";
  import { goto } from "$app/navigation";
  import { gameStore, restart } from "../../stores/gameStore";

  let exampleColor = "";
  let isInitialized = false;
  let time = 1;
  let timerInterval: number | null = null;

  let isError = 0;
  let rightColor = "";
  let errColor = "";

  let operations = "+-•÷";

  let buttons = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["Bs", 0, "En"],
  ];

  let theme: any;

  // Подписываемся на изменения темы
  themeStore.subscribe((value) => {
    theme = value; //Инициализация объекта темы

    if ($themeMode === "light") {
      rightColor = theme.palette.primary;
      errColor = "#f10000";
    } else {
      rightColor = "#24F048";
      errColor = theme.palette.primary;
    }
  });

  function checkResult() {
    if ($gameStore.inputStr === $gameStore.num) {
      isError = 0;
      $gameStore.rightCount++;
    } else {
      isError = 1;
      $gameStore.errorCount++;
    }
    $gameStore.inputStr = "";

    genExample();
  }

  function genOperation() {
    let isRepeatOperation = true;
    let operationInd = 0;

    while (isRepeatOperation) {
      operationInd = Math.floor(Math.random() * operations.length);

      if ($gameStore.operationsHist.length > 2) {
        if (
          operations[operationInd] !==
            $gameStore.operationsHist[$gameStore.operationsHist.length - 1] ||
          operations[operationInd] !==
            $gameStore.operationsHist[$gameStore.operationsHist.length - 2]
        ) {
          isRepeatOperation = false;
        }
      } else {
        isRepeatOperation = false;
      }
    }
    $gameStore.operationsHist += operations[operationInd];

    return operations[operationInd];
  }

  function genComplexNumber(min: number, max: number) {
    let isNotComplex = true;
    let num = 0;

    while (isNotComplex) {
      num = Math.floor(Math.random() * (max - min + 1)) + min;

      if (num % 10 !== 0) {
        isNotComplex = false;
      }
    }

    return num;
  }

  function genSubOperand(firstOperand: number, min: number, max: number) {
    let isNotComplex = true;
    let num = 0;
    let firstOperandAbs = Math.abs(firstOperand);

    while (isNotComplex) {
      num = genComplexNumber(min, max);
      let secondOperandAbs = Math.abs(num);
      const delta = Math.abs(secondOperandAbs - firstOperandAbs);

      if (delta > 10) {
        isNotComplex = false;
      }
    }

    return num;
  }

  function initialTimer() {
    timerInterval = setInterval(() => {
      if ($gameStore.timeLeft > 0) {
        $gameStore.timeLeft--;
      }
    }, 1000);
  }

  function genExample() {
    $gameStore.operation = genOperation();

    //operation = "-";

    if ($gameStore.operation === "+") {
      $gameStore.firstNumber = genComplexNumber(11, 99);
      $gameStore.secondNumber = genComplexNumber(11, 99);

      $gameStore.num = (
        $gameStore.firstNumber + $gameStore.secondNumber
      ).toString();
    } else if ($gameStore.operation === "-") {
      $gameStore.firstNumber = genComplexNumber(11, 99);
      $gameStore.secondNumber = genSubOperand($gameStore.firstNumber, 11, 99);

      $gameStore.num = (
        $gameStore.firstNumber - $gameStore.secondNumber
      ).toString();
    } else if ($gameStore.operation === "•") {
      $gameStore.secondNumber = genComplexNumber(3, 9);

      if ($gameStore.secondNumber === 3) {
        $gameStore.firstNumber = genComplexNumber(34, 99);
      } else {
        $gameStore.firstNumber = genComplexNumber(11, 99);
      }
      $gameStore.num = (
        $gameStore.firstNumber * $gameStore.secondNumber
      ).toString();
    } else {
      let quotient = genComplexNumber(11, 99);
      let divisor = genComplexNumber(3, 9);
      let dividend = quotient * divisor;

      $gameStore.firstNumber = dividend;
      let a = Math.floor(Math.random() * 2);

      if (a === 0) {
        $gameStore.secondNumber = divisor;
        $gameStore.num = (dividend / divisor).toString();
      } else {
        $gameStore.secondNumber = quotient;
        $gameStore.num = (dividend / quotient).toString();
      }
    }
  }

  onMount(() => {
    const storedTime = localStorage.getItem("time");

    if (storedTime) {
      $gameStore.timeLeft = Number(storedTime) * 60;
      time = Number(storedTime);
    }

    initialTimer();
    restart(time);
    genExample();

    isInitialized = true;
  });

  // ОЧИЩАЕМ ТАЙМЕР ПРИ УНИЧТОЖЕНИИ КОМПОНЕНТА
  onDestroy(() => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  });

  $: {
    $gameStore.num = $gameStore.num.replace(/-/g, "");

    if ($gameStore.inputStr.length > $gameStore.num.length) onBackClick();

    $gameStore.inputStr = $gameStore.inputStr.toLocaleUpperCase();

    $gameStore.textRender = $gameStore.inputStr;
    // Добавляем маскирующие символы
    const dotsToAdd = Math.max(
      0,
      $gameStore.num.length - $gameStore.textRender.length
    );
    $gameStore.textRender += "•".repeat(dotsToAdd);

    exampleColor = isError ? errColor : rightColor;

    if (isError) {
      setTimeout(() => {
        isError = 0;
      }, 750);
    }

    $gameStore.isOpenModal = $gameStore.timeLeft === 0;
  }
  function onNumbClick(event: MouseEvent, button: string | number) {
    if ($gameStore.textRender !== $gameStore.num) {
      if ($gameStore.inputStr.length < $gameStore.num.length) {
        $gameStore.inputStr += button;
      }
    }
    //(event.target as HTMLElement).blur();
  }

  function onBackClick() {
    $gameStore.inputStr = $gameStore.inputStr.slice(0, -1);
  }

  function onEnterClick() {
    checkResult();
  }
</script>

{#if isInitialized}
  <div class="content" style:margin-top="0.75rem">
    <Modal
      isOpen={$gameStore.isOpenModal}
      isCloseOnOutsideClick={false}
      maxWidth="8rem"
    >
      <div style:padding="4px">
        <p class="modal-header">Score</p>
        <div class="modal">
          <div class="score">
            <p>Correct (C)</p>
            <p style:color={rightColor} class="score-num">
              ✔<span style:font-weight="600">{$gameStore.rightCount}</span>
            </p>
          </div>
          <div class="score">
            <p>Mistakes (M)</p>
            <p style:color={errColor} class="score-num">
              ✘<span style:font-weight="600">{$gameStore.errorCount}</span>
            </p>
          </div>
        </div>
        <div class="score time-score">
          <span>Time (T):</span>
          <span style:font-weight="600" style:margin-left="5px">{time} min</span
          >
        </div>
        <div class="avg-formula">
          <p>Avg. correct/min =</p>
          <div>
            <p class="numerator">C²</p>
            <p>(C + M) × T</p>
          </div>
          <p>=</p>
        </div>
        <div class="avg-correct">
          {($gameStore.rightCount + $gameStore.errorCount) * Number(time) !== 0
            ? (
                ($gameStore.rightCount * $gameStore.rightCount) /
                ($gameStore.rightCount + $gameStore.errorCount) /
                Number(time)
              ).toFixed(2)
            : 0}
        </div>
      </div>
      <Button
        width="100%"
        onclick={() => {
          restart(time);
          genExample();

          if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
          }

          initialTimer();
        }}>Restart</Button
      >
      <Button
        marginTop="10px"
        variant="Outlined"
        width="100%"
        onclick={() => goto("/settings")}
      >
        Back to Settings
      </Button>
    </Modal>
    <div class="counts-container">
      <p class="render">
        <span>{$gameStore.firstNumber}</span>
        <span class="number render" style:color={exampleColor}
          >{$gameStore.operation}</span
        >
        <span>{$gameStore.secondNumber}</span>
        <span class="number render" style:color={exampleColor}>=</span>
        {#if $gameStore.secondNumber > $gameStore.firstNumber && $gameStore.operation === "-"}
          <span class="number render" style:color={exampleColor}> - </span>
        {/if}
        <span class="render" style:color={exampleColor}
          >{$gameStore.textRender}</span
        >
      </p>
    </div>
    <div class="mgn-top">
      <div style:display="flex" style:flex-direction="column">
        {#each buttons as buttonLine}
          <div class="keyboard">
            {#each buttonLine as button}
              {#if button != "Bs" && button != "En"}
                <ButtonBox
                  marginRight={Number(button) % 3 === 0 && Number(button) !== 0
                    ? ""
                    : "0.75rem"}
                  marginBottom={button === "0" ? "" : "0.75rem"}
                  onClick={(event: MouseEvent) => {
                    onNumbClick(event, button);
                  }}
                >
                  {button}
                </ButtonBox>
              {:else if button == "Bs"}
                <ButtonBox
                  marginRight="0.75rem"
                  isPrimary={true}
                  onClick={onBackClick}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-6"
                    height="4rem"
                    width="4rem"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M2.515 10.674a1.875 1.875 0 0 0 0 2.652L8.89 19.7c.352.351.829.549 1.326.549H19.5a3 3 0 0 0 3-3V6.75a3 3 0 0 0-3-3h-9.284c-.497 0-.974.198-1.326.55l-6.375 6.374ZM12.53 9.22a.75.75 0 1 0-1.06 1.06L13.19 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L15.31 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </ButtonBox>
              {:else if button == "En"}
                <ButtonBox isPrimary={true} onClick={onEnterClick}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="size-6"
                    height="4rem"
                    width="4rem"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6Zm-5.03 4.72a.75.75 0 0 0 0 1.06l1.72 1.72H2.25a.75.75 0 0 0 0 1.5h10.94l-1.72 1.72a.75.75 0 1 0 1.06 1.06l3-3a.75.75 0 0 0 0-1.06l-3-3a.75.75 0 0 0-1.06 0Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </ButtonBox>
              {/if}
            {/each}
          </div>
        {/each}
      </div>
    </div>
    {#if $gameStore.timeLeft !== 0}
      <div class="counts">
        <span style:margin-top="-5px" style:color={rightColor}
          >✔{$gameStore.rightCount}
        </span>
        <span style:color={$gameStore.timeLeft > 10 ? rightColor : errColor}>
          {Math.floor($gameStore.timeLeft / 60)
            .toString()
            .padStart(2, "0")}:{($gameStore.timeLeft % 60)
            .toString()
            .padStart(2, "0")}
        </span>
        <span style:margin-top="-4.5px" style:color={errColor}>
          ✘{$gameStore.errorCount}
        </span>
      </div>
    {/if}
  </div>
{:else}
  <div></div>
{/if}

<style>
  .score-num {
    margin-top: -4px;
    font-size: 32px;
  }

  .avg-correct {
    text-align: center;
    font-size: 32px;
    margin-top: 5px;
    font-weight: 600;
  }

  .score {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .time-score {
    flex-direction: row;
    font-size: 24px;
    margin-top: 7px;
    justify-content: center;
  }

  .avg-formula {
    margin-top: 7px;
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 22px;
  }

  .numerator {
    border: 2px solid;
    border-left: none;
    border-right: none;
    border-top: none;
    display: flex;
    justify-content: center;
  }

  .modal-header {
    font-size: 30px;
    display: flex;
    justify-content: center;
    width: 100%;
    font-weight: 600;
    margin-top: -0.58rem;
    margin-bottom: 0.25rem;
  }
  .counts-container {
    min-height: 3rem;
    margin-top: 0.25rem;
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .modal {
    font-size: 24px;
    display: flex;
    justify-content: space-between;
  }

  .content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .mgn-top {
    margin-top: 0.25rem;
    font-size: 1.4rem;
  }

  .number {
    font-weight: 400;
  }

  .render {
    font-size: 2.7rem;
    transition: color 0.38s;
  }

  .counts {
    display: flex;
    justify-content: space-between;
    font-size: 40px;
    width: 18.5rem;
  }

  .keyboard {
    margin-left: 0.88rem;
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 392px) {
    .render {
      font-size: 2rem;
    }
  }
</style>
