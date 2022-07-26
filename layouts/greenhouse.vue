<template>
  <div>
    <div>
      <div class="navigation">
        <div class="gh-container">
          <nuxt-link :to="{ path: '/' }" class="navigation-logo">
            <img
              src="https://res.cloudinary.com/eden-life-inc/image/upload/v1611230252/eden-website-v2/eden-logo_lcepc6.svg"
              alt="Eden" />
            </nuxt-link>
            <template v-if="authenticated">
              <div class="navigation-home">
                <router-link :to="{ name: 'home' }" class="el-button el-button--primary el-button--medium">Home
                </router-link>
              </div>
              <div class="navigation-user displayLg">
                <el-dropdown @command="command">
                  <div class="navigation-user--indicator">
                    <div class="username">
                      <el-avatar class="margin-right-10">
                        {{
                        userName.split(' ')[0][0] + userName.split(' ')[1][0]
                        }}
                      </el-avatar>
                      {{ userName }}
                    </div>
                    <i class="el-icon-arrow-down el-icon--right"></i>
                  </div>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="settings">
                      <i class="el-icon-setting"></i>
                      Profile settings
                    </el-dropdown-item>
                    <el-dropdown-item class="eden-red" command="logout">
                      <img src="@/assets/images/greenhouse/logout.svg" class="margin-right-9" alt="logout" />
                      Logout
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div class="displayMd">
                <button class="navigation__btn" type="button" :class="toggled ? 'toggle' : ''" @click="handleToggle()">
                  <div class="line line1"></div>
                  <div class="line line2"></div>
                  <div class="line line3"></div>
                </button>
              </div>
            </template>
        </div>
      </div>
      <div v-if="toggled && authenticated" id="navBtn" class="navigation__mobile">
        <ul class="menu">
          <li class="menu--list">
            <el-dropdown trigger="click" :hide-on-click="true" @command="command">
              <div class="navigation-user--indicator">
                <div class="username">
                  <el-avatar class="margin-right-10">
                    {{ userName.split(' ')[0][0] + userName.split(' ')[1][0] }}
                  </el-avatar>
                  {{ userName }}
                </div>
                <i class="el-icon-arrow-down el-icon--right"></i>
              </div>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="settings">
                  <i class="el-icon-setting"></i>
                  Profile settings
                </el-dropdown-item>
                <el-dropdown-item class="eden-red" command="logout">
                  <img src="@/assets/images/greenhouse/logout.svg" class="margin-right-9" alt="logout" />
                  Logout
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </li>
        </ul>
      </div>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import * as greenhouse from '~/request/greenhouse.api'

export default {
  name: 'Greenhouse',
  data() {
    return {
      render: false,
      user: {
        first_name: '',
        last_name: '',
      },
      toggled: false,
    }
  },
  computed: {
    authenticated() {
      const authenticated = !!this.$store.getters.getGreenhouseToken
      const routes = ['home', 'settings']
      const route = this.$route.name

      return authenticated && routes.includes(route)
    },
    greenhouseUser() {
      return this.$store.getters.getGreenhouseUser
    },
    userName() {
      return this.greenhouseUser ? this.greenhouseUser.name : '-'
    },
  },
  watch: {
    greenhouseUser() {
      const token = this.$store.getters.getGreenhouseToken
      greenhouse.setToken(token)
    },
  },
  mounted() {
    const token = this.$store.getters.getGreenhouseToken
    greenhouse.setToken(token)
  },
  methods: {
    handleToggle() {
      this.toggled = !this.toggled
    },
    command(command) {
      if (command === 'logout') {
        this.logOut()
      } else if (command === 'settings') {
        this.$router.push({
          name: 'settings',
        })
      }
      this.toggled = false
    },
    logOut() {
      this.$message.success('You are logged out.')
      this.$router.push({ name: 'login' })
      this.$store.commit('setGreenhouse', {
        token: null,
        authenticated: false,
        location: '',
        reset_email: '',
        reset_code: '',
      })
      this.$store.commit('setGreenhouseUser', {})
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../assets/scss/greenhouse/main.scss';

.navigation {
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f0f4f2;
  &-home {
    margin-left: 89px;
    .el-button {
      font-size: 14px;
    }
    @include respond(md) {
      margin: 0;
    }
  }
  .gh-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 90%;
  }
  &-logo {
    img {
      height: 46px;
      width: auto;
      @include respond(md) {
        height: 28px;
      }
    }
  }

  &-user {
    border: 1px solid #e2e9e6;
    border-radius: 8px;
    &--indicator {
      width: max-content;
      padding: 8px 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      border-radius: 8px;
      @include respond(md) {
        border: 1px solid #e2e9e6;
        border-radius: 8px;
        width: 327px;
      }
      .el-avatar {
        color: #03a84e;
        background: #d4f7e5;
        border: 1px solid #6ece8a;
      }
    }
  }

  &__mobile {
    width: 100%;
    left: 0;
    top: 58px;
    background: #fff;
    position: absolute;
    opacity: 1;
    .menu {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0;
      min-height: 10vh;
      &--list {
        list-style: none;
        padding: $gap + 6 $gap * 2.4;
        font-size: 1.125rem;
        font-weight: 500;
        color: #21312a;
        line-height: 29px;
        width: 100%;
        &-item {
          list-style: none;
          @include font-size(base);
          @include font-weight(regular);
          padding: $gap + 6 $gap * 2.4;
          color: #21312a;
          cursor: pointer;
          line-height: 24px;
        }
      }
    }
  }

  .displayMd {
    display: none;
  }
  @include respond(md) {
    .displayLg {
      display: none;
    }
    .displayMd {
      display: block;
    }
    &__btn {
      display: block;
      z-index: 9;
      right: 5%;
      border: 0;
      background: transparent;
      .line {
        background-color: #0f241b;
        border-radius: 100px;
        height: 3px;
        margin: 4px 0;
        display: block;
        transition: all 0.2s ease;
        transform-origin: 0 0;
        &.line1 {
          width: 14px;
        }
        &.line2 {
          width: 24px;
        }
        &.line3 {
          width: 20px;
        }
      }
    }
    .toggle {
      .line {
        background-color: color(eden-neutral-0) !important;

        &.line1 {
          width: 22px;
          transform: rotate(45deg) translate(1px, -3px);
        }
        &.line2 {
          transform: scaleX(0);
        }
        &.line3 {
          width: 22px;
          transform: rotate(-45deg) translate(1px, 1px);
        }
      }
    }
  }
}
.el-dropdown-menu {
  width: 246px;
}

.username {
  display: flex;
  align-items: center;
  color: #1d352a;
  font-weight: 500;
}
.el-popper {
  @include respond(md) {
    top: 125px;
    left: 23px;
    width: 327px;
  }
}
</style>
