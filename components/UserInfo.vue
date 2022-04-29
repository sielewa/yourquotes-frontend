<template>
  <div class="user_info_container">
    <div class="username_container">
      <span class="username">{{ username }}</span>
    </div>
    <div class="user_stat">
      <span class="stats"> Quotes: {{ quotes_count }} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserInfo",

  props: {
    username: {
      type: String,
    },
    quotes_count: {
      type: Number,
    },
  },
};
</script>

<style lang="scss">
.user_info_container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 20px;

  & > .username_container > .username {
		font-size: 4.8rem;
  }

  & > .user_stat > .stats {
    font-size: 1.8rem;
  }
}

@media screen and (min-width: $screen-sm) {
	.user_info_container {
		.username_container > .username {
			font-size: 5.5rem;
		}

		.user_stat > .stats {
			font-size: 2.2rem;
		}
	}
}

@media screen and (min-width: $screen-md) {
	.user_info_container {
		.username_container > .username {
			font-size: 7rem;
		}

		.user_stat > .stats {
			font-size: 3rem;
		}
	}
}
</style>
