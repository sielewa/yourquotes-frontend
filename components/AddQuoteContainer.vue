<template>
  <div class="add_quote_container">
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
.add_quote_container {
	display: flex;
	flex-direction: column;
	align-items: center;

	& > .title > span {
		font-size: 4rem;
	}

	& > .description > span {
		font-size: 1.8rem;
	}
}

@media screen and (min-width: $screen-sm) {
	.add_quote_container {
		.title > span {
			font-size: 5.3rem;
		}

		.description > span {
			font-size: 2.3rem;
		}
	}
}

@media screen and (min-width: $screen-md) {
	.add_quote_container {
		.title > span {
			font-size: 7rem;
		}

		.description > span {
			font-size: 3rem;
		}
	}
}
</style>
