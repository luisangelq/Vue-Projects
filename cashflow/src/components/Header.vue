<template>
    <div>
      <header>
        <img
          src="@/assets/cashflow-icon.svg"
          alt="Cashflow Logo"
          @click="reload"
        />
        <h1><span>Cash</span>Flow</h1>
        <span></span>
      </header>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      reload() {
        window.location.reload();
      },
    },
  };
  </script>
  
  <style scoped>
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
  }
  img,
  span {
    width: 48px;
  }
  h1 {
    font-size: 1.4rem;
    color: var(--brand-blue);
  }
  h1 span {
    color: var(--brand-green);
  }
  </style>
  