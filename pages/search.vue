<template>
  <div class="search">
    <div class="is-flex">
      <div class="pointer" @click="$router.go(-1)">
        <i class="el-icon-arrow-left" /> Back
      </div>
    </div>
    <div>
      <div class="text-center mt-2 explore-title">
        Showing results for "{{ search }}"
      </div>
      <div v-if="!loading && visibleMealItems.length > 0">
        <div class="menu-tabs mt-2">
          <el-tag
            v-for="(tab, ix) in tabs"
            :key="tab.label"
            @click="currentTab = tab"
            :type="''"
            effect="plain"
            class="menu-tab"
            :class="{
              active: currentTab.label === tab.label,
              'mr-2': ix !== tabs.length - 1,
            }"
          >
            {{ tab.label }}
          </el-tag>
        </div>
        <div class="mt-2 pickup-info">
          <info-box>
            <span class="pickup-info__text">
              {{ currentTab.label }} pickup window for pre-event order: &nbsp;
              {{ currentTab.date }} at {{ currentTab.from }}
              <i class="el-icon-right mx-2" /> {{ currentTab.to }}
              <el-icon>
                <arrow-right />
              </el-icon>
            </span>
          </info-box>
        </div>
        <div class="menu-list mt-2" id="menu-list">
          <div
            v-show="!loading && visibleMealItems.length === 0"
            class="menu__loader"
          >
            <p>No meal items for this category</p>
          </div>
          <div v-show="loading" class="menu__loader">
            <Loader />
            <p>Loading menu...</p>
          </div>
          <div v-show="!loading && visibleMealItems.length > 0">
            <el-row :gutter="70">
              <el-col
                v-for="(mealItem, i) in visibleMealItems.filter(
                  (item) => item.category_id === currentTab.id
                )"
                :key="`${mealItem.id}-${i}`"
                :xs="24"
                :sm="24"
                :md="8"
                :lg="6"
                :xl="4"
              >
                <menu-item :key="`${mealItem.id}-${i}`" :meal-item="mealItem" />
              </el-col>
            </el-row>
            <el-row
              type="flex"
              justify="center"
              v-show="itemsToAdd.length > 0 && !loading"
            >
              <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
                <el-button
                  class="w-100 see-more"
                  type="plain"
                  @click="
                    seeMore()
                    page++
                  "
                >
                  See More
                </el-button>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
      <div v-if="!loading && visibleMealItems.length === 0">
        <error-page :text="'No result found'" adaptation />
      </div>
      <div
        class="is-flex is-justify-center is-align-center mt-2"
        v-if="loading"
      >
        <Loader />
        <p>Loading...</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import InfoBox from '~/components/dance-festival/InfoBox.vue'
import MenuItem from '~/components/dance-festival/MenuItem.vue'
import ErrorPage from '~/pages/404.vue'

export default {
  components: {
    InfoBox,
    MenuItem,
    ErrorPage,
    Loader: () => import('@/components/Loader.vue'),
  },
  data: () => ({
    visibleMealItems: [],
    loading: true,
    tabs: [
      {
        label: 'Brunch',
        date: 'Thur, Dec 20',
        from: '11:00am',
        to: '1:00pm',
        id: 1,
      },
      {
        label: 'Lunch',
        date: 'Thur, Dec 20',
        from: '3:00pm',
        to: '5:00pm',
        id: 2,
      },
      {
        label: 'Dinner',
        date: 'Thur, Dec 20',
        from: '7:00pm',
        to: '9:00pm',
        id: 3,
      },
    ],
    currentTab: {
      label: 'Brunch',
      date: 'Thur, Dec 20',
      from: '11:00am',
      to: '1:00pm',
      id: 1,
    },
    page: 1,
    mealItems: [],
  }),
  computed: {
    search() {
      return this.$store.state.search
    },
    itemsToAdd() {
      return this.mealItems
        .filter((item) => item.category_id === this.currentTab.id)
        .slice(0 + 12 * this.page, 12 * (this.page + 1) + 1)
    },
  },
  watch: {
    search(newV, oldV) {
      if (newV !== oldV) {
        this.getMealItems()
      }
    },
  },
  methods: {
    async getMealItems() {
      try {
        this.loading = true
        const { data } = await axios.get(
          `https://api-onetime-orders.edenlife.ng/api/v2/festival/menu/search?search=${this.search?.toLowerCase()}`,
          {
            headers: {
              Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIzOCIsImp0aSI6ImFkNjE1ZGYyOGU4YmMyMWYzMDdiNzZjZmRiMzg1ZmMzMmFlYjU1YzM0OWQ2OWE5MmU0MWExOTI0NjRkY2Y0NWVjNjZjOWNmNzcxYzZmMzE3IiwiaWF0IjoiMTY3MDU0NTgyNC40MDU2NTUiLCJuYmYiOiIxNjcwNTQ1ODI0LjQwNTY2MCIsImV4cCI6IjE3MDIwODE4MjQuNDAwNjc0Iiwic3ViIjoiMjgwNTAiLCJzY29wZXMiOltdfQ.N4Vz20rfsn4HxY4RJCTk50qWyIJaXg5x13tWIP93jLEgMubIwFJO5wEouOCD2QpMgBsaC_G0I5I_IX2lWZMpucCNkPbMB2Q0CqEFe0oWrz9l0Oi9G0fiSNiNlj5pXvR-J2ItpaR-0-K2amdR1dUA473Ub0YnD_Yn2z8AGlOvrutxhtxeWbJ8kL5l79Pm8D-9T-69hP9eaHbSjETLLJDn5z5alce3e6WOmsQiTCCtL1KDgu8PX9_o6X0aneT11TV8-jD0-_eKjKhOriM3pd7lJ3t20MkxvvD-xIow3BE3AqWf6tnyyaPdb_7pY-wA-mGAWs70zfcVR7FHHjwGbyiVokAqzrZJQxA04PoZeDGVUZCcFT6ae4Uz9qGxJnP6wnlFA9cVmBz1yg5Vtsu6xILh2xTpgY6Xv844C-KRltofCKvrrOUdPxArwQKYmUXiMILd8_ka7ktvMwOG3zDHPHCvZb6FZoB5TTEcp9RhDmf62zVEmI1KZ7aaomABfqT7NBGJvf9v7OOMFp9bwVZ5TszpX0GAtjoBjbHvXmRFH1SH-Op5E8MhBlGIVt_3_Ms7qaY5GErPxTZR2-QcqomCyRJAOhTIi3H7Eg7HUVdxW9JubfzJzmDtpYQTwu7AqhrINkRzGlOOr7Zv6WjISQZzELt1AoeGmAtVgVwA2PmeDeecDbw`,
            },
          }
        )

        this.mealItems = [...data.data.data]

        this.visibleMealItems = [
          ...this.mealItems?.slice(
            0,
            this.mealItems.length > 12 ? 12 : this.mealItems.length
          ),
        ]
        this.loading = false
      } catch (error) {
        this.loading = false
        console.log(error)
      } finally {
        this.loading = false
      }
    },
  },
  mounted() {
    this.getMealItems()
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
@import '~/assets/scss/greenhouse/main.scss';

.is-flex {
  display: flex;
}

.is-align-center {
  align-items: center;
}

.is-justify-center {
  justify-content: center;
}

.pointer {
  cursor: pointer;
}

.text-center {
  text-align: center;
}

.explore-title {
  font-size: 1.5rem;
}

.w-100 {
  width: 100%;
}

.mt-2 {
  margin-top: 20px;
}

.menu__loader {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.menu-tabs {
  display: flex;
  justify-content: center;
  .menu-tab {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    padding: 20px 30px;
    cursor: pointer;
    color: color(eden-neutral-3);
    background-color: white;
    border: 1px solid color(eden-neutral-5);

    &.active {
      color: color(eden-neutral-1);
      background-color: #ebfff5;
      border: 1px solid color(eden-green-primary);
      font-weight: 500;
    }
  }
}

.see-more {
  color: color(eden-green-primary);
}

.pickup-info {
  display: flex;
  justify-content: center;

  @include respond(md) {
    margin: 20px 25px;
  }

  .mx-2 {
    margin: 0px 5px;
    @include respond(md) {
      margin: 0px 5px;
    }
  }

  &__text {
    @include font-size(sm);
  }
}

.mr-2 {
  margin-right: 20px;
}

.menu-list {
  @include respond(md) {
    margin: 0px 35px;
  }
}

.search {
  padding: 130px 130px;
  max-width: 100%;
  @include respond(md) {
    padding: 150px 10px 80px 10px;
  }
}
</style>
