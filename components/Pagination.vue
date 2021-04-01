<template>
  <nav>
    <ul class="pagination">
      <li v-if="pagination.current_page > 1" class="control">
        <button
          aria-label="Previous"
          @click.prevent="changePage(pagination.current_page - 1)"
        >
          <span aria-hidden="true" class="control--item">
            <svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 1L1 5L5 9"
                stroke="#57645E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </li>
      <div class="number">
        <li
          v-for="page in pagesNumber"
          :key="page"
          :class="{ active: page == pagination.current_page }"
          class="number--item"
        >
          <button @click.prevent="changePage(page)">{{ page }}</button>
        </li>
      </div>
      <li v-if="pagination.current_page < pagination.last_page" class="control">
        <button
          aria-label="Next"
          @click.prevent="changePage(pagination.current_page + 1)"
        >
          <span aria-hidden="true" class="control--item"
            ><svg
              width="6"
              height="10"
              viewBox="0 0 6 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L5 5L1 9"
                stroke="#57645E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    pagination: {
      type: Object,
      required: true,
    },
    eachSide: {
      type: Number,
      default: 3,
      required: false,
    },
  },
  computed: {
    pagesNumber() {
      const pagesArray = []
      let firstPage = 1
      let lastPage = this.pagination.last_page

      if (this.eachSide !== '') {
        if (this.pagination.current_page - this.eachSide > firstPage) {
          firstPage = this.pagination.current_page - this.eachSide
        }
        if (this.eachSide + this.pagination.current_page < lastPage) {
          lastPage = this.eachSide + this.pagination.current_page
        }
      }
      if (firstPage !== 1) {
        pagesArray.push(1)
      }
      for (let page = firstPage; page <= lastPage; page++) {
        pagesArray.push(page)
      }
      if (lastPage !== this.pagination.last_page) {
        pagesArray.push(this.pagination.last_page)
      }
      return pagesArray
    },
  },
  methods: {
    changePage(page) {
      this.$emit('paginate', page)
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  color: color(eden-neutral-2);
  .control {
    &--item {
      padding: 10px 13px;
      border-radius: 4px;
      background: #ffffff;
      border: 1px solid rgba(121, 139, 131, 0.2);
    }
  }
  .number {
    margin: 0 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(121, 139, 131, 0.1);
    border-radius: 4px;
    padding: 2px;

    &--item {
      font-size: 16px;
      padding: 8px 13px;

      &.active {
        border-radius: 4px;
        background: #ffffff;
      }
    }
  }
}
</style>
