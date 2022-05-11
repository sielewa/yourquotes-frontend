<template>
  <div class="quote_container">
    <div class="top_container">
      <div class="author_container">
        <span>
          <NuxtLink :to="`/users/${author}`"> {{ author }} </NuxtLink>
        </span>
      </div>
      <div class="info_container">
				<span v-if="isAuthor" class="del" @click="deleteQuote">Delete</span>
        <span class="date"> {{ time }} | {{ date }} </span>
      </div>
    </div>
    <div class="quote_text">
      <span> "{{ text }}" </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Quote",

  props: {
    isAuthor: {
      type: Boolean,
    },
    text: {
      type: String,
    },
    author: {
      type: String,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
    quoteId: {
      type: Number | String,
    },
  },

  methods: {
    async deleteQuote() {
      try {
        const payload = this.quoteId;
        console.log(payload);
        await this.$store.dispatch("quotes/deleteQuote", payload);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style lang="scss">
.quote_container {
	color: white;
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  width: 90%;
	border: 2px solid black;
	background-color: $primary;

  & > .top_container {
    display: flex;
    justify-content: space-between;
		align-items: center;

    & > .author_container {
      font-size: 1.2rem;
      margin-left: 10px;
			margin-top: 3px;

      & > span a {
				color: white;
        text-decoration: none;
        display: inline-block;
        position: relative;

				&:hover {
					color: #888888;
					transition: color 200ms;
				}
      }
    }

    & > .info_container {
			display: flex;
			justify-content: right;
			align-items: center;
			font-size: 1rem;
			margin-top: 5px;
			margin-right: 10px;

			.del {
				cursor: pointer;
				color: red;
				margin-right: 10px;

				&:hover {
				color: #9F0000;
				transition: color 200ms;
				}
			}
    }
  }

  & > .quote_text {
    font-family: "Dancing Script", cursive;
    width: 100%;
    padding: 10px;
    font-size: 2.5rem;
    text-align: center;
		border-top: 2px solid black;
		background-color: $secondary;
  }
}

@media screen and (min-width: $screen-sm) {
	.quote_container {

		& > .top_container {
			& > .author_container {
				font-size: 2rem;
			}
			& > .info_container {
				font-size: 1.4rem;
			}
		}

		& > .quote_text {
			font-size: 3.3rem;
		}

	}
}

@media screen and (min-width: $screen-md) {
	.quote_container {

		& > .top_container {
			& > .author_container {
				font-size: 2.5rem;
			}
			& > .info_container {
				font-size: 1.8rem;
			}
		}

		& > .quote_text {
			font-size: 4rem;
		}

	}
}

</style>
