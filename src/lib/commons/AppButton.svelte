<script>
  import { Button } from "carbon-components-svelte";
  import { createEventDispatcher } from "svelte";
  export let type = "button";
  export let disabled = false;
  const dispatch = createEventDispatcher();

  function handleClick(event) {
    dispatch('click', event);
  }
</script>

<!-- <button
  type={type}
  class="dark-secondary-btn"
  disabled={disabled}
  {...$$restProps}
>
  {#if $$slots.icon}
    <span class="icon"><slot name="icon" /></span>
  {/if}
  <span class="btn-text"><slot /></span>
</button> -->

<Button
  kind="secondary"
  href=""
  on:click={handleClick}
  iconDescription="Logout"
  style="background-color: black; color: white; font-weight: bold; padding: 10px 33px; border-radius: 2px;"
>
  <span class="button-text"><slot /></span>
</Button>

<style>
  .dark-secondary-btn {
    background: #222;
    color: #fff;
    border: 1.5px solid #444;
    border-radius: 4px;
    padding: 0.5em 1.5em;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    transition:
      background 0.2s,
      border 0.2s;
    font-weight: 500;
  }
  .dark-secondary-btn:hover:not(:disabled) {
    background: #333;
    border-color: #666;
  }
  .dark-secondary-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .icon {
    display: flex;
    margin-right: 0.5em;
  }
  .btn-text {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
