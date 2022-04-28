<template>
  <div class="add_container">
    <div class="title">
      <span>Add Quote</span>
    </div>
    <div class="description">
      <span>Add your amazing quote, and let people see that!</span>
    </div>
    <QuoteForm />
  </div>
</template>

<style lang="scss">
  .add_container {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > .title > span {
      font-size: 7rem;
    }

    & > .description > span {
      font-size: 3rem;
    }

    @media (max-width: $screen-md) {
      .title > span {
        font-size: 5.3rem;
      }

      .description > span {
        font-size: 2.3rem;
      }
    }

    @media (max-width: $screen-sm) {
      .title > span {
        font-size: 4rem;
      }

      .description > span {
        font-size: 1.8rem;
      }
    }
  }
</style>
