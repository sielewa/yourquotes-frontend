<template>
  <ul class="pagination">
		<!--
    <li class="pagination-item">
      <button type="button" @click="onClickFirstPage" :disabled="isInFirstPage">
        First
      </button>
    </li>

    <li class="pagination-item">
      <button
        type="button"
        @click="onClickPreviousPage"
        :disabled="isInFirstPage"
      >
        Previous
      </button>
    </li>-->

    <!-- Visible Buttons Start -->

    <li v-for="page in pages" :key="page.name" class="pagination-item">
      <button
        type="button"
        @click="onClickPage(page.name)"
				:disabled="page.isDisabled"
        :class="{ active: isPageActive(page.name) }"
      >
        <span> {{ page.name }} </span>
      </button>
    </li>

    <!-- Visible Buttons End -->

		<!--
    <li class="pagination-item">
      <button type="button" @click="onClickNextPage" :disabled="isInLastPage">
        Next
      </button>
    </li>

    <li class="pagination-item">
      <button type="button" @click="onClickLastPage" :disabled="isInLastPage">
        Last
      </button>
    </li>-->
  </ul>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 10,
    },
    totalPages: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },

  computed: {
    startPage() {
      // When on the first page
      if (this.currentPage === 1) {
        return 1;
      }

      //When on the last page
      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }

      //When inbetween
      return this.currentPage - 5;
    },
    pages() {
      const range = [];
			let i = this.startPage;
			if(i < 1) { i = 1 }

      for (
        i;
        i <=
        Math.min(this.startPage + this.maxVisibleButtons, this.totalPages);
        i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage,
        });
      }

      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    //isInLastPage() {
    //  return this.currentPage === this.totalPages;
    //},
  },

  methods: {
    onClickFirstPage() {
      this.$emit("pagechanged", 1);
    },
    onClickPreviousPage() {
      this.$emit("pagechanged", this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit("pagechanged", page);
    },
    onClickNextPage() {
      this.$emit("pagechanged", this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit("pagechanged", this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>

<style lang="scss">
.pagination {
  list-style-type: none;

  & > .pagination-item {
    display: inline-block;
    font-size: 2.5rem;
    border: 0.5px solid black;

		& > button > span {
			padding: 1px 2px;
		}
  }

	& > .center {
		margin: 0 4px;
	}
}

.active {
  background-color: #4aae9b;
  color: #ffffff;
}
</style>
