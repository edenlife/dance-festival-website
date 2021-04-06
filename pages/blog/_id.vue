<template>
  <div>
    <single-blog :id="id"></single-blog>
  </div>
</template>

<script>
export default {
  components: {
    SingleBlog: () => import('@/components/SingleBlog.vue'),
  },

  data() {
    return {
      id: '',
    }
  },

  created() {
    this.id = this.$route.params.id
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_singleblog.scss';
</style>

<style lang="scss">
@import '@/assets/style.scss';

.content {
  &__slug {
    color: color(eden-neutral-1);
    h2,
    h3,
    h4,
    h5 {
      @include font-size(2xl);
      margin-bottom: $gap * 2.4;
      margin-top: $gap * 4;
      line-height: 31px;
    }
    p {
      @include font-size(lg);
      margin-bottom: $gap * 2.4;
      line-height: 29px;
    }
    figure {
      margin-top: $gap * 2;
      img {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
      video {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
      margin-bottom: $gap * 4;
      margin-top: $gap * 2;
      figcaption {
        text-align: center;
        margin-top: $gap;
      }
    }
    ul,
    ol {
      li {
        @include font-size(lg);
        line-height: 29px;
      }
    }
    a {
      color: color(eden-green-primary);
      &:hover {
        text-decoration: underline;
        color: color(eden-green-primary);
      }
    }

    .mc4wp-form,
    .mc4wp-form-128 {
      background-color: color(eden-green-senary);
      border-radius: 8px;
      background-image: url('~@/assets/images/blog-bg5.svg');
      background-position: top 45% right 23%;
      background-repeat: no-repeat;
      .mc4wp-form-fields {
        h3 {
          text-align: center;
          padding-top: $gap * 5;
          margin-bottom: $gap + 2;
        }
        p {
          @include font-size(base);
          line-height: 26px;
          text-align: center;
          margin-bottom: $gap * 4.4;
        }
        div {
          display: flex;
          justify-content: center;
          align-items: center;
          padding-bottom: $gap * 5;
        }
        input[type='email'] {
          border: 1px solid #c9d0cd;
          border-radius: 4px;
          background-color: color(eden-neutral-7);
          color: color(eden-neutral-1);
          padding: $gap + 4 $gap + 6;
          @include font-size(lg);
          @include font-family(cerebri);
          width: 350px;
          height: 48px;
          &::placeholder {
            color: color(eden-neutral-4);
            @include font-weight(light);
          }
          &:focus {
            outline: none;
            border: 1px solid #21312a;
          }
          &.has-error {
            border: 1px solid color(eden-red);
          }
        }

        .slug--form--btn {
          margin-left: $gap + 2;
          align-self: center;
          line-height: 23px;
          @include font-size(lg);
          background-color: color(eden-green-primary);
          color: color(eden-neutral-7);
          border-radius: 4px;
          transition: all 0.4s ease-in-out;
          padding: $gap * 1.2 $gap * 2.2;
          outline: none;
          border: none;
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

    .cats,
    .tags {
      display: none;
    }
  }
  @include respond(md) {
    &__slug {
      h2,
      h3,
      h4,
      h5 {
        @include font-size(xl);
        margin-bottom: $gap + 6;
        margin-top: $gap * 4;
        line-height: 31px;
      }
      p {
        @include font-size(base);
        line-height: 26px;
        margin-bottom: $gap + 6;
      }
      figure {
        margin-bottom: $gap * 3.2;
        margin-top: $gap + 6;
      }
      ul,
      ol {
        width: 90%;
        margin: 0 auto;

        li {
          @include font-size(base);
          line-height: 26px;
          margin-bottom: $gap + 6;
        }
      }
      .mc4wp-form,
      .mc4wp-form-128 {
        padding: $gap * 3 $gap $gap * 2 $gap;
        background-position: top 10% center;
        h3 {
          padding-top: $gap * 13;
          @include font-size(xl);
          line-height: 20px;
        }

        .mc4wp-form-fields {
          div {
            flex-direction: column;
          }
          input[type='email'] {
            width: 100%;
          }
          .slug--form--btn {
            display: flex;
            justify-content: center;
            margin-left: 0px;
            margin-top: $gap + 6;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
