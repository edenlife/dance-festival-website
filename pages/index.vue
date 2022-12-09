<template>
  <div style="width: 100%">
    <div class="dance-banner">
      <div class="title">Life Is Electric</div>
      <div class="subtitle">
        Eden Is Partying With 3,500 Activators at <br />
        the Activity Fest.
      </div>
      <div class="showcase-mobile" />
      <el-row
        justify="space-between"
        align="middle"
        class="showcase"
        :gutter="30"
      >
        <el-col :span="2"></el-col>
        <el-col :span="4">
          <div class="showcase-img-container">
            <div class="showcase__1 showcase-image" />
          </div>
        </el-col>
        <el-col :span="4">
          <div class="showcase-img-container">
            <div class="showcase__2 showcase-image" />

            <div class="showcase__3 showcase-image" />
          </div>
        </el-col>
        <el-col :span="4">
          <div class="showcase-img-container">
            <div class="showcase__4 showcase-image" />
          </div>
        </el-col>
        <el-col :span="4">
          <div class="showcase-img-container">
            <div class="showcase__5 showcase-image" />
            <div class="showcase__6 showcase-image" />
          </div>
        </el-col>
        <el-col :span="4">
          <div class="showcase-img-container">
            <div class="showcase__7 showcase-image" />
          </div>
        </el-col>
        <el-col :span="2"></el-col>
      </el-row>
    </div>
    <div class="container">
      <div class="container__banner">
        <div class="banner-image">
          <div>
            <p>Skip the lines, order ahead!</p>
            <button
              type="button"
              class="hero__button-solid"
              @click="goto('menu-list')"
            >
              Pre-order now
            </button>
          </div>
        </div>
      </div>
      <div class="text-center mt-2 explore-title">Explore Menu</div>
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
        <el-row :gutter="70">
          <el-col
            v-for="i in 12"
            :key="i"
            :xs="24"
            :sm="24"
            :md="6"
            :lg="6"
            :xl="4"
          >
            <menu-item />
          </el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :xs="12" :sm="12" :md="4" :lg="4" :xl="4">
            <el-button class="w-100" type="plain"> See More</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    MenuItem: () => import('@/components/dance-festival/MenuItem.vue'),
    InfoBox: () => import('@/components/dance-festival/InfoBox.vue'),
  },
  data: () => ({
    tabs: [
      {
        label: 'Brunch',
        date: 'Thur, Dec 20',
        from: '11:00am',
        to: '1:00pm',
      },
      {
        label: 'Lunch',
        date: 'Thur, Dec 20',
        from: '3:00pm',
        to: '5:00pm',
      },
      {
        label: 'Dinner',
        date: 'Thur, Dec 20',
        from: '7:00pm',
        to: '9:00pm',
      },
    ],
    currentTab: {
      label: 'Brunch',
      date: 'Thur, Dec 20',
      from: '11:00am',
      to: '1:00pm',
    },
  }),
  methods: {
    goto(id) {
      this.$router.replace({ name: this.$route.name, hash: `#${id}` })
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/main.scss';
@import '~/assets/scss/greenhouse/main.scss';

.w-100 {
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

.container {
  padding: 90px 130px;
  @include respond(md) {
    padding: 90px 10px 80px 10px;
  }

  &__banner {
    display: flex;
    justify-content: center;
    .banner-image {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      border-radius: 8px;
      padding: 50px 80px;
      @include respond(md) {
        padding: 10px 20px;
      }
      background-image: url('https://res.cloudinary.com/eden-life-inc/image/upload/v1670551671/dance-festival/banner-min_aecsnn.png');
      width: 100%;
      height: 200px;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;

      p {
        color: white;
        font-weight: 700;
        line-height: 56px;
        font-size: 1.5rem;
        @include respond(md) {
          width: 60%;
          line-height: 45px;
        }
      }

      button {
        line-height: 23px;
        @include font-size(sm);
        background-color: color(eden-green-primary);
        color: color(eden-neutral-7);
        border-radius: 4px;
        transition: all 0.4s ease-in-out;
        padding: $gap $gap * 1.2;

        &:hover {
          box-shadow: 0px 2px 4px rgba(3, 168, 78, 0.239);
          background-color: color(eden-green-250);
          color: color(eden-neutral-7);
        }
        &:active {
          background-image: radial-gradient(
            circle at center right,
            rgba(0, 141, 64, 0.1) 50%,
            #008d40 50%
          );
        }
      }
    }
  }
}

.explore-title {
  @include font-size(xl);
}

.dance-banner {
  padding: 180px 130px 100px 130px;

  @include respond(md) {
    padding: 150px 10px 80px 10px;
  }

  background-color: color(eden-green-octonary);
  .title {
    @include font-size(4xl);
    @include font-family(pt-serif);
    font-weight: 700;
    margin-bottom: 10px;
    text-align: center;
    color: color(eden-grey-primary);
  }
  .subtitle {
    @include font-size(xl);
    margin-bottom: 30px;
    text-align: center;
    font-style: italic;
    color: color(eden-grey-tertiary);
  }

  .showcase {
    display: flex;
    height: 350px;
    margin-top: 60px;
    background-image: url('https://res.cloudinary.com/eden-life-inc/image/upload/v1670551660/dance-festival/banner-colors-min_sdlf1f.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    @include respond(md) {
      display: none;
    }
    &-mobile {
      display: hidden;
      @include respond(md) {
        display: flex;
        height: 300px;
        margin-top: 50px;
        background-size: contain;
        background-position: center center;
        background-repeat: no-repeat;
        background-image: url('https://res.cloudinary.com/eden-life-inc/image/upload/v1670551664/dance-festival/banner-mobile-min_etgply.png');
      }
    }

    &-image {
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
      width: 100%;
      transition: transform 0.5s;
      -webkit-transition: -webkit-transform 0.5s;
      border-radius: 8px;
    }

    &-image:hover {
      transform: scale(1.5);
      -webkit-transform: scale(1.5);
    }

    &-img-container {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      border-radius: 8px;
    }
    &__1 {
      height: 60%;
      background-image: url('https://res.cloudinary.com/eden-life-inc/image/upload/v1670551668/dance-festival/showcase1-min_x1lalo.png');
    }
    &__2 {
      height: 40%;
      margin-bottom: 10px;
      background-image: url('https://res.cloudinary.com/eden-life-inc/image/upload/v1670551670/dance-festival/showcase2-min_o4cysj.png');
    }
    &__3 {
      height: 60%;
      background-image: url('https://res.cloudinary.com/eden-life-inc/image/upload/v1670551665/dance-festival/showcase3-min_bwpio8.png');
    }
    &__4 {
      height: 100%;
      background-image: url('https://res.cloudinary.com/eden-life-inc/image/upload/v1670551670/dance-festival/showcase4-min_gg2ii0.png');
    }
    &__5 {
      height: 60%;
      margin-bottom: 10px;
      background-image: url('https://res.cloudinary.com/eden-life-inc/image/upload/v1670551668/dance-festival/showcase5-min_dq8p4q.png');
    }
    &__6 {
      height: 40%;
      background-image: url('https://res.cloudinary.com/eden-life-inc/image/upload/v1670551669/dance-festival/showcase6-min_dawin3.png');
    }
    &__7 {
      height: 60%;
      background-image: url('https://res.cloudinary.com/eden-life-inc/image/upload/v1670551670/dance-festival/showcase7-min_jvorlv.png');
    }
  }
}
</style>
