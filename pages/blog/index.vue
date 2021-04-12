<template>
  <div class="container">
    <div ref="nav-container" class="container--hero">
      <header class="hero">
        <div class="hero__title">
          <h1>The Good Life</h1>
          <p>by Eden.</p>
        </div>
        <div class="hero__social">
          <ShareNetwork
            network="twitter"
            url="https://ouredenlifev2-staging.netlify.app/blog"
            title=""
            description=""
            hashtags=""
          >
            <img :src="require(`~/assets/images/twitter.svg`)" alt="twitter" />
          </ShareNetwork>
          <ShareNetwork
            network="whatsapp"
            url="https://ouredenlifev2-staging.netlify.app/blog"
            title=""
            description=""
          >
            <img
              :src="require(`~/assets/images/whatsapp.svg`)"
              alt="whatsapp"
            />
          </ShareNetwork>

          <a
            href="https://www.facebook.com/sharer/sharer.php?u=https://ouredenlifev2-staging.netlify.app/blog"
            target="_blank"
          >
            <img
              :src="require(`~/assets/images/facebook.svg`)"
              alt="facebook"
            />
          </a>
          <ShareNetwork
            network="LinkedIn"
            url="https://ouredenlifev2-staging.netlify.app/blog"
            title=""
            description=""
          >
            <img
              :src="require(`~/assets/images/linkedin.svg`)"
              alt="linkedin"
            />
          </ShareNetwork>
        </div>
      </header>
    </div>
    <!--  -->
    <div v-if="!showSearchbar" class="container--nav">
      <nav class="nav">
        <div
          v-for="(tab, index) in tabs"
          :key="index"
          class="nav__item"
          @click.prevent="activeTabIndex = tab.id"
        >
          <p :class="`${activeTabIndex === tab.id ? 'active' : ''}`">
            {{ tab.title }}
          </p>
          <svg
            v-if="activeTabIndex === tab.id"
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3" cy="3" r="3" fill="#61DB98" />
          </svg>
        </div>
        <div class="nav__search">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.81019 11.7371C3.51629 13.3986 4.85347 14.7115 6.52757 15.387C8.20167 16.0625 10.0756 16.0453 11.737 15.3393C13.3984 14.6332 14.7113 13.296 15.3869 11.6219C16.0624 9.94778 16.0452 8.07389 15.3391 6.41245C14.633 4.75101 13.2958 3.43812 11.6217 2.76259C9.94765 2.08706 8.07376 2.10423 6.41232 2.81032C4.75088 3.51642 3.43799 4.8536 2.76246 6.5277C2.08693 8.2018 2.1041 10.0757 2.81019 11.7371V11.7371Z"
              stroke="#798B83"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.1666 14.167L18.3333 18.3337"
              stroke="#798B83"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <input
            id=""
            v-model="search"
            type="search"
            name=""
            placeholder="Search this blog"
            @keyup.enter="searchPost"
          />
        </div>
      </nav>
    </div>
    <!--  -->
    <div v-else class="container--search">
      <div class="nav">
        <div class="nav__search nav__search-full">
          <svg
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.81019 11.7371C3.51629 13.3986 4.85347 14.7115 6.52757 15.387C8.20167 16.0625 10.0756 16.0453 11.737 15.3393C13.3984 14.6332 14.7113 13.296 15.3869 11.6219C16.0624 9.94778 16.0452 8.07389 15.3391 6.41245C14.633 4.75101 13.2958 3.43812 11.6217 2.76259C9.94765 2.08706 8.07376 2.10423 6.41232 2.81032C4.75088 3.51642 3.43799 4.8536 2.76246 6.5277C2.08693 8.2018 2.1041 10.0757 2.81019 11.7371V11.7371Z"
              stroke="#798B83"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.1666 14.167L18.3333 18.3337"
              stroke="#798B83"
              stroke-width="1.3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <input
            id=""
            v-model="search"
            type="search"
            name=""
            placeholder="Search"
            @keyup.enter="searchPost"
          />
        </div>
      </div>
    </div>
    <!--  -->
    <div v-if="showSearchbar" class="container--result">
      <div class="result">
        <h3 class="result__title">Showing results for “{{ searchInput }}”</h3>
        <div v-show="!searchResults.length" class="result__empty">
          <p>Sorry. There are no results for this keyword.</p>
          <p>
            Try searching for something else or
            <span class="" @click.prevent="viewAllPost()"
              >go back to our main blog page</span
            >.
          </p>
        </div>
        <div v-show="searchResults.length" class="result__nav">
          <p class="result__nav-filter">Filter results by category:</p>
          <div
            v-for="(tab, index) in tabs"
            :key="index"
            class="result__nav-item"
            @click.prevent="resultCategory(tab.id)"
          >
            <p :class="`${resultTabIndex === tab.id ? 'active' : ''}`">
              {{ tab.title }}
            </p>
            <svg
              v-if="resultTabIndex === tab.id"
              width="6"
              height="6"
              viewBox="0 0 6 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="3" cy="3" r="3" fill="#61DB98" />
            </svg>
          </div>
        </div>

        <div v-if="resultTabIndex !== 0" class="result__content">
          <div v-for="(item, i) in filteredSearchResults" :key="i">
            <nuxt-link
              :to="{
                name: 'blog-slug',
                params: { slug: item.slug + '-' + item.id },
              }"
            >
              <figure class="result__item">
                <img
                  class="result__item-img"
                  :src="item._embedded['wp:featuredmedia'][0].source_url"
                  alt=""
                />
                <figcaption class="result__item-details">
                  <h5 v-html="truncate(item.title.rendered, 60)"></h5>
                  <p v-html="truncate(item.excerpt.rendered, 170)"></p>
                  <div class="result__item-date">
                    <span
                      :style="getColor(item._embedded['wp:term'][0][0].slug)"
                      @click.prevent="
                        getCategory(item._embedded['wp:term'][0][0].id)
                      "
                    >
                      {{ item._embedded['wp:term'][0][0].name }}
                    </span>
                    <span class="dot">&#8226;</span>
                    <span>{{ dateFormatter(item.date) }}</span>
                  </div>
                  <div class="result__item-author">
                    <img
                      :src="
                        item._embedded.author[0].description === ''
                          ? `https://res.cloudinary.com/eden-life-inc/image/upload/v1617954733/eden-website-v2/empty-male-member_j0cqu4.svg`
                          : item._embedded.author[0].description
                      "
                      alt=""
                    />
                    <p>{{ item._embedded.author[0].name }}</p>
                  </div>
                </figcaption>
              </figure>
            </nuxt-link>
          </div>
          <div
            v-show="!filteredSearchResults.length"
            class="result__empty result__content-empty"
          >
            <p>
              Sorry. There are no results in this category for this keyword.
            </p>
            <p>
              Try searching for something else or
              <span class="" @click.prevent="viewAllPost()"
                >go back to our main blog page</span
              >.
            </p>
          </div>
        </div>
        <div
          v-if="searchResults.length && resultTabIndex === 0"
          class="result__content"
        >
          <div v-for="(item, i) in searchResults" :key="i">
            <nuxt-link
              :to="{
                name: 'blog-slug',
                params: { slug: item.slug + '-' + item.id },
              }"
            >
              <figure class="result__item">
                <img
                  class="result__item-img"
                  :src="item._embedded['wp:featuredmedia'][0].source_url"
                  alt=""
                />
                <figcaption class="result__item-details">
                  <h5 v-html="truncate(item.title.rendered, 60)"></h5>
                  <p v-html="truncate(item.excerpt.rendered, 170)"></p>
                  <div class="result__item-date">
                    <span
                      :style="getColor(item._embedded['wp:term'][0][0].slug)"
                      @click.prevent="
                        getCategory(item._embedded['wp:term'][0][0].id)
                      "
                    >
                      {{ item._embedded['wp:term'][0][0].name }}
                    </span>
                    <span class="dot">&#8226;</span>
                    <span>{{ dateFormatter(item.date) }}</span>
                  </div>
                  <div class="result__item-author">
                    <img
                      :src="
                        item._embedded.author[0].description === ''
                          ? `https://res.cloudinary.com/eden-life-inc/image/upload/v1617954733/eden-website-v2/empty-male-member_j0cqu4.svg`
                          : item._embedded.author[0].description
                      "
                      alt=""
                    />
                    <p>{{ item._embedded.author[0].name }}</p>
                  </div>
                </figcaption>
              </figure>
            </nuxt-link>
          </div>
        </div>
        <div v-if="!searchResults.length" class="result__content">
          <h3 class="result__content-title">Suggested posts</h3>
          <div v-for="(item, i) in suggestedPost" :key="i">
            <nuxt-link
              :to="{
                name: 'blog-slug',
                params: { slug: item.slug + '-' + item.id },
              }"
            >
              <figure class="result__item">
                <img
                  class="result__item-img"
                  :src="item._embedded['wp:featuredmedia'][0].source_url"
                  alt=""
                />
                <figcaption class="result__item-details">
                  <h5 v-html="truncate(item.title.rendered, 60)"></h5>
                  <p v-html="truncate(item.excerpt.rendered, 170)"></p>
                  <div class="result__item-date">
                    <span
                      :style="getColor(item._embedded['wp:term'][0][0].slug)"
                      @click.prevent="
                        getCategory(item._embedded['wp:term'][0][0].id)
                      "
                    >
                      {{ item._embedded['wp:term'][0][0].name }}
                    </span>
                    <span class="dot">&#8226;</span>
                    <span>{{ dateFormatter(item.date) }}</span>
                  </div>
                  <div class="result__item-author">
                    <img
                      :src="
                        item._embedded.author[0].description === ''
                          ? `https://res.cloudinary.com/eden-life-inc/image/upload/v1617954733/eden-website-v2/empty-male-member_j0cqu4.svg`
                          : item._embedded.author[0].description
                      "
                      alt=""
                    />
                    <p>{{ item._embedded.author[0].name }}</p>
                  </div>
                </figcaption>
              </figure>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-else class="container--posts">
      <div v-if="isLoading" class="posts__loading">
        <Loader />
        <p>Loading articles...</p>
      </div>
      <div v-if="activeTabIndex === 0 && !isLoading" class="posts">
        <div class="posts__upper">
          <div class="posts__featured">
            <h3 class="posts__featured-title">Featured Post</h3>
            <nuxt-link
              :to="{
                name: 'blog-slug',
                params: { slug: featuredPost.slug + '-' + featuredPost.id },
              }"
            >
              <figure
                v-if="Object.keys(featuredPost).length !== 0"
                class="posts__item"
              >
                <img
                  class="posts__featured-img posts__item-img"
                  :src="
                    featuredPost._embedded['wp:featuredmedia'][0].source_url
                  "
                  alt=""
                />
                <figcaption class="posts__item-details posts__featured-details">
                  <h5 v-html="truncate(featuredPost.title.rendered, 60)"></h5>
                  <p v-html="featuredPost.excerpt.rendered"></p>
                  <div class="posts__item-date">
                    <span>{{ dateFormatter(featuredPost.date) }}</span>
                  </div>
                  <div class="posts__item-author">
                    <img
                      :src="
                        featuredPost._embedded.author[0].description === ''
                          ? `https://res.cloudinary.com/eden-life-inc/image/upload/v1617954733/eden-website-v2/empty-male-member_j0cqu4.svg`
                          : featuredPost._embedded.author[0].description
                      "
                      alt=""
                    />
                    <p>{{ featuredPost._embedded.author[0].name }}</p>
                  </div>
                </figcaption>
              </figure>
            </nuxt-link>
          </div>
          <div class="posts__recommended">
            <h3 class="posts__side-title">Highly Recommended</h3>
            <div v-for="(item, i) in recommendedPost" :key="i">
              <nuxt-link
                :to="{
                  name: 'blog-slug',
                  params: { slug: item.slug + '-' + item.id },
                }"
              >
                <figure class="posts__side-item">
                  <img
                    :src="item._embedded['wp:featuredmedia'][0].source_url"
                    alt=""
                  />
                  <figcaption>
                    <p
                      class="title"
                      v-html="truncate(item.title.rendered, 50)"
                    ></p>
                    <p class="date">{{ dateFormatter(item.date) }}</p>
                  </figcaption>
                </figure>
              </nuxt-link>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="posts__lower">
          <div class="posts__latest">
            <h3 class="posts__latest-title">Latest Posts</h3>
          </div>
          <div v-for="(item, i) in latestPost" :key="i">
            <nuxt-link
              :to="{
                name: 'blog-slug',
                params: { slug: item.slug + '-' + item.id },
              }"
            >
              <figure class="posts__item">
                <img
                  class="posts__item-img"
                  :src="item._embedded['wp:featuredmedia'][0].source_url"
                  alt=""
                />
                <figcaption class="posts__item-details">
                  <h5 v-html="truncate(item.title.rendered, 60)"></h5>
                  <p v-html="truncate(item.excerpt.rendered, 170)"></p>
                  <div class="posts__item-date">
                    <span
                      :style="getColor(item._embedded['wp:term'][0][0].slug)"
                      @click.prevent="
                        getCategory(item._embedded['wp:term'][0][0].id)
                      "
                    >
                      {{ item._embedded['wp:term'][0][0].name }}
                    </span>
                    <span class="dot">&#8226;</span>
                    <span>{{ dateFormatter(item.date) }}</span>
                  </div>
                  <div class="posts__item-author">
                    <img
                      :src="
                        item._embedded.author[0].description === ''
                          ? `https://res.cloudinary.com/eden-life-inc/image/upload/v1617954733/eden-website-v2/empty-male-member_j0cqu4.svg`
                          : item._embedded.author[0].description
                      "
                      alt=""
                    />
                    <p>{{ item._embedded.author[0].name }}</p>
                  </div>
                </figcaption>
              </figure>
            </nuxt-link>
          </div>
          <div ref="latest-container" class="posts__popular">
            <h3 class="posts__side-title">Popular</h3>
            <div v-for="(item, i) in popularPost" :key="i">
              <nuxt-link
                :to="{
                  name: 'blog-slug',
                  params: { slug: item.slug + '-' + item.id },
                }"
              >
                <figure class="posts__side-item">
                  <img
                    :src="item._embedded['wp:featuredmedia'][0].source_url"
                    alt=""
                  />
                  <figcaption>
                    <p
                      class="title"
                      v-html="truncate(item.title.rendered, 50)"
                    ></p>
                    <p class="date">{{ dateFormatter(item.date) }}</p>
                  </figcaption>
                </figure>
              </nuxt-link>
            </div>
          </div>
          <div class="posts__pagination">
            <Pagination :pagination="pagination" @paginate="controlPage" />
          </div>

          <div v-if="!user_subscribed" class="subscribe subscribe__inline">
            <h3>Subscribe to the Good Life</h3>
            <p>Get our latest posts straight in your inbox.</p>
            <mailchimp-subscribe
              url="https://ouredenlife.us1.list-manage.com/subscribe/post-json"
              :user-id="userId"
              :list-id="listId"
              @success="onSuccess"
            >
              <template #default="{ subscribe, setEmail, loading }">
                <form class="form" @submit.prevent="subscribe">
                  <div class="form__input">
                    <input
                      type="email"
                      placeholder="Email address"
                      @input="setEmail($event.target.value)"
                    />
                  </div>
                  <button type="submit" class="form__btn" :disabled="loading">
                    Subscribe
                  </button>
                </form>
              </template>
            </mailchimp-subscribe>
          </div>

          <div v-else class="subscribe subscribe__success">
            <p class="subscribe__success-text">
              Thanks for subscribing to the Good Life 💚
            </p>
          </div>
        </div>
      </div>
      <div v-if="activeTabIndex === 2" class="posts">
        <div class="posts__other">
          <div v-for="(item, i) in homePosts" :key="i">
            <nuxt-link
              :to="{
                name: 'blog-slug',
                params: { slug: item.slug + '-' + item.id },
              }"
            >
              <figure class="posts__item">
                <img
                  class="posts__item-img"
                  :src="item._embedded['wp:featuredmedia'][0].source_url"
                  alt=""
                />
                <figcaption class="posts__item-details">
                  <h5 v-html="truncate(item.title.rendered, 60)"></h5>
                  <p v-html="truncate(item.excerpt.rendered, 170)"></p>
                  <div class="posts__item-date">
                    <span
                      :style="getColor(item._embedded['wp:term'][0][0].slug)"
                      @click.prevent="
                        getCategory(item._embedded['wp:term'][0][0].id)
                      "
                    >
                      {{ item._embedded['wp:term'][0][0].name }}
                    </span>
                    <span class="dot">&#8226;</span>
                    <span>{{ dateFormatter(item.date) }}</span>
                  </div>
                  <div class="posts__item-author">
                    <img
                      :src="
                        item._embedded.author[0].description === ''
                          ? `https://res.cloudinary.com/eden-life-inc/image/upload/v1617954733/eden-website-v2/empty-male-member_j0cqu4.svg`
                          : item._embedded.author[0].description
                      "
                      alt=""
                    />
                    <p>{{ item._embedded.author[0].name }}</p>
                  </div>
                </figcaption>
              </figure>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-if="activeTabIndex === 3" class="posts">
        <div class="posts__other">
          <div v-for="(item, i) in foodPosts" :key="i">
            <nuxt-link
              :to="{
                name: 'blog-slug',
                params: { slug: item.slug + '-' + item.id },
              }"
            >
              <figure class="posts__item">
                <img
                  class="posts__item-img"
                  :src="item._embedded['wp:featuredmedia'][0].source_url"
                  alt=""
                />
                <figcaption class="posts__item-details">
                  <h5 v-html="truncate(item.title.rendered, 60)"></h5>
                  <p v-html="truncate(item.excerpt.rendered, 170)"></p>
                  <div class="posts__item-date">
                    <span
                      :style="getColor(item._embedded['wp:term'][0][0].slug)"
                      @click.prevent="
                        getCategory(item._embedded['wp:term'][0][0].id)
                      "
                    >
                      {{ item._embedded['wp:term'][0][0].name }}
                    </span>
                    <span class="dot">&#8226;</span>
                    <span>{{ dateFormatter(item.date) }}</span>
                  </div>
                  <div class="posts__item-author">
                    <img
                      :src="
                        item._embedded.author[0].description === ''
                          ? `https://res.cloudinary.com/eden-life-inc/image/upload/v1617954733/eden-website-v2/empty-male-member_j0cqu4.svg`
                          : item._embedded.author[0].description
                      "
                      alt=""
                    />
                    <p>{{ item._embedded.author[0].name }}</p>
                  </div>
                </figcaption>
              </figure>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-if="activeTabIndex === 4" class="posts">
        <div class="posts__other">
          <div v-for="(item, i) in edenPosts" :key="i">
            <nuxt-link
              :to="{
                name: 'blog-slug',
                params: { slug: item.slug + '-' + item.id },
              }"
            >
              <figure class="posts__item">
                <img
                  class="posts__item-img"
                  :src="item._embedded['wp:featuredmedia'][0].source_url"
                  alt=""
                />
                <figcaption class="posts__item-details">
                  <h5 v-html="truncate(item.title.rendered, 60)"></h5>
                  <p v-html="truncate(item.excerpt.rendered, 170)"></p>
                  <div class="posts__item-date">
                    <span
                      :style="getColor(item._embedded['wp:term'][0][0].slug)"
                      @click.prevent="
                        getCategory(item._embedded['wp:term'][0][0].id)
                      "
                    >
                      {{ item._embedded['wp:term'][0][0].name }}
                    </span>
                    <span class="dot">&#8226;</span>
                    <span>{{ dateFormatter(item.date) }}</span>
                  </div>
                  <div class="posts__item-author">
                    <img
                      :src="
                        item._embedded.author[0].description === ''
                          ? `https://res.cloudinary.com/eden-life-inc/image/upload/v1617954733/eden-website-v2/empty-male-member_j0cqu4.svg`
                          : item._embedded.author[0].description
                      "
                      alt=""
                    />
                    <p>{{ item._embedded.author[0].name }}</p>
                  </div>
                </figcaption>
              </figure>
            </nuxt-link>
          </div>
        </div>
      </div>
      <div v-if="activeTabIndex === 5" class="posts">
        <div class="posts__other">
          <div v-for="(item, i) in lifePosts" :key="i">
            <nuxt-link
              :to="{
                name: 'blog-slug',
                params: { slug: item.slug + '-' + item.id },
              }"
            >
              <figure class="posts__item">
                <img
                  class="posts__item-img"
                  :src="item._embedded['wp:featuredmedia'][0].source_url"
                  alt=""
                />
                <figcaption class="posts__item-details">
                  <h5 v-html="truncate(item.title.rendered, 60)"></h5>
                  <p v-html="truncate(item.excerpt.rendered, 170)"></p>
                  <div class="posts__item-date">
                    <span
                      :style="getColor(item._embedded['wp:term'][0][0].slug)"
                      @click.prevent="
                        getCategory(item._embedded['wp:term'][0][0].id)
                      "
                    >
                      {{ item._embedded['wp:term'][0][0].name }}
                    </span>
                    <span class="dot">&#8226;</span>
                    <span>{{ dateFormatter(item.date) }}</span>
                  </div>
                  <div class="posts__item-author">
                    <img
                      :src="
                        item._embedded.author[0].description === ''
                          ? `https://res.cloudinary.com/eden-life-inc/image/upload/v1617954733/eden-website-v2/empty-male-member_j0cqu4.svg`
                          : item._embedded.author[0].description
                      "
                      alt=""
                    />
                    <p>{{ item._embedded.author[0].name }}</p>
                  </div>
                </figcaption>
              </figure>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div v-if="activeTabIndex !== 0" class="container--subscribe">
      <div v-if="!user_subscribed" class="subscribe">
        <h3>Subscribe to the Good Life</h3>
        <p>Get our latest posts straight in your inbox.</p>
        <mailchimp-subscribe
          url="https://ouredenlife.us1.list-manage.com/subscribe/post-json"
          :user-id="userId"
          :list-id="listId"
          @success="onSuccess"
        >
          <template #default="{ subscribe, setEmail, loading }">
            <form class="form" @submit.prevent="subscribe">
              <div class="form__input">
                <input
                  type="email"
                  placeholder="Email address"
                  @input="setEmail($event.target.value)"
                />
              </div>
              <button type="submit" class="form__btn" :disabled="loading">
                Subscribe
              </button>
            </form>
          </template>
        </mailchimp-subscribe>
      </div>
      <div v-else class="subscribe subscribe__success">
        <p class="subscribe__success-text">
          Thanks for subscribing to the Good Life 💚
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import dayjs from 'dayjs'
import MailchimpSubscribe from 'vue-mailchimp-subscribe'
import { mixpanelTrackEvent } from '~/plugins/mixpanel'

export default {
  components: {
    Loader: () => import('@/components/Loader.vue'),
    MailchimpSubscribe,
    Pagination: () => import('@/components/Pagination.vue'),
  },
  mixins: [validationMixin],
  beforeRouteEnter(to, from, next) {
    const tab = to.hash.replace('#', '')
    next((vm) => {
      vm.activeTabIndex = 0
      vm.tabs.forEach((item, index) => {
        if (item.id === tab) {
          vm.activeTabIndex = index
        }
      })
    })
  },
  beforeRouteUpdate(to, from, next) {
    const tab = to.hash.replace('#', '')
    this.activeTabIndex = 0
    this.tabs.forEach((item, index) => {
      if (item.id === tab) {
        this.activeTabIndex = index
      }
    })
    next()
  },
  data() {
    return {
      pagination: {},
      isLoading: false,
      activeTabIndex: null,
      resultTabIndex: 0,
      userId: '',
      listId: '',
      user_subscribed: false,
      search: '',
      searchInput: '',
      showSearchbar: false,
      tabs: [
        { id: 0, title: 'All' },
        { id: 2, title: 'Home' },
        { id: 3, title: 'Food' },
        { id: 4, title: 'Eden 101' },
        { id: 5, title: 'Life is Good' },
      ],
      loading: false,
      form: {
        email: null,
      },
      showSuccessModal: false,
      showFailedModal: false,
      allPosts: [],
      featuredPost: [],
      popularPost: [],
      recommendedPost: [],
      homePosts: [],
      lifePosts: [],
      foodPosts: [],
      edenPosts: [],
      searchResults: [],
      suggestedPost: [],
      filteredSearchResults: [],
      latestPost: [],
    }
  },
  validations: {
    form: {
      email: { required, email },
    },
  },
  async fetch() {
    this.getFeaturedPost()
    this.getRecommendedPost()
    this.getPopularPost()
    this.getHomePost()
    this.getLifePost()
    this.getEdenPost()
    this.getFoodPost()
    await this.fetchAllPosts()
  },
  computed: {
    blogNavId() {
      return this.$store.getters.blogNavId
    },
  },
  destroyed() {
    this.$store.commit('blogNavId', null)
  },
  mounted() {
    if (this.blogNavId !== null) {
      this.activeTabIndex = this.blogNavId
    }
    this.userId = process.env.MAILCHIMP_USERID
    this.listId = process.env.MAILCHIMP_LISTID
    const navbar = document.querySelector('#navigation-container')
    navbar.style.backgroundColor = '#F6FFFA'
  },
  methods: {
    dateFormatter(date) {
      return dayjs(date).format('MMMM D, YYYY')
    },
    truncate(value, length) {
      if (!value) return ''
      value = value.toString()
      if (value.length > length) {
        return value.substring(0, length) + '...'
      } else {
        return value
      }
    },
    controlPage(pageNum) {
      const min = pageNum * 8 - 8
      this.latestPost = this.allPosts.slice(min, pageNum * 8)
      this.pagination.current_page = pageNum
      this.$refs['latest-container'].scrollIntoView()
    },
    onSuccess() {
      // handle success
      this.user_subscribed = true
    },
    viewAllPost() {
      this.showSearchbar = !this.showSearchbar
      this.activeTabIndex = 0
      this.search = ''
      this.resultTabIndex = 0
      this.pagination.current_page = 1
    },
    resultCategory(id) {
      this.resultTabIndex = id
      this.filteredSearchResults = this.searchResults.filter(
        (el) => el.categories[0] === id
      )
    },
    searchPost() {
      this.searchResults = this.allPosts.filter((el) =>
        el.title.rendered.toLowerCase().includes(this.search.toLowerCase())
      )
      this.resultTabIndex = 0
      this.showSearchbar = true
      this.searchInput = this.search
      this.suggestedPost = this.allPosts.slice(0, 3)
    },
    async fetchAllPosts() {
      this.isLoading = true
      const posts = await fetch(
        `https://wordpress.edenlife.ng/wp-json/wp/v2/posts?page=1&per_page=50&_embed=1`
      ).then((res) => res.json())
      this.allPosts = posts
        .filter((el) => el.status === 'publish')
        .map(
          ({
            id,
            slug,
            title,
            excerpt,
            date,
            tags,
            content,
            _embedded,
            categories,
          }) => ({
            id,
            slug,
            title,
            excerpt,
            date,
            tags,
            content,
            _embedded,
            categories,
          })
        )
      this.isLoading = false
      const quotient = Math.floor(this.allPosts.length / 8)
      const remainder = this.allPosts.length % 8
      remainder > 0
        ? (this.pageCount = quotient + 1)
        : (this.pageCount = quotient)
      this.pagination = {
        last_page: this.pageCount,
        current_page: 1,
      }
      this.latestPost = this.allPosts.slice(0, 8)
    },
    async getFeaturedPost() {
      const post = await fetch(
        `https://wordpress.edenlife.ng/wp-json/wp/v2/posts?tags=8&_embed=1`
      ).then((res) => res.json())
      const rawPost = post
        .filter((el) => el.status === 'publish')
        .map(
          ({ id, slug, title, excerpt, date, tags, content, _embedded }) => ({
            id,
            slug,
            title,
            excerpt,
            date,
            tags,
            content,
            _embedded,
          })
        )
      this.featuredPost = rawPost[0]
    },
    async getRecommendedPost() {
      const post = await fetch(
        `https://wordpress.edenlife.ng/wp-json/wp/v2/posts?tags=6&_embed=1`
      ).then((res) => res.json())
      this.recommendedPost = post
        .filter((el) => el.status === 'publish')
        .map(
          ({ id, slug, title, excerpt, date, tags, content, _embedded }) => ({
            id,
            slug,
            title,
            excerpt,
            date,
            tags,
            content,
            _embedded,
          })
        )

      this.recommendedPost = this.recommendedPost.slice(0, 4)
    },
    async getPopularPost() {
      const post = await fetch(
        `https://wordpress.edenlife.ng/wp-json/wp/v2/posts?tags=7&_embed=1`
      ).then((res) => res.json())
      this.popularPost = post
        .filter((el) => el.status === 'publish')
        .map(
          ({ id, slug, title, excerpt, date, tags, content, _embedded }) => ({
            id,
            slug,
            title,
            excerpt,
            date,
            tags,
            content,
            _embedded,
          })
        )
      this.popularPost = this.popularPost.slice(0, 4)
    },
    async getHomePost() {
      const posts = await fetch(
        `https://wordpress.edenlife.ng/wp-json/wp/v2/posts?categories=2&_embed=1`
      ).then((res) => res.json())
      this.homePosts = posts
        .filter((el) => el.status === 'publish')
        .map(
          ({ id, slug, title, excerpt, date, tags, content, _embedded }) => ({
            id,
            slug,
            title,
            excerpt,
            date,
            tags,
            content,
            _embedded,
          })
        )
    },
    async getLifePost() {
      const posts = await fetch(
        `https://wordpress.edenlife.ng/wp-json/wp/v2/posts?categories=5&_embed=1`
      ).then((res) => res.json())
      this.lifePosts = posts
        .filter((el) => el.status === 'publish')
        .map(
          ({ id, slug, title, excerpt, date, tags, content, _embedded }) => ({
            id,
            slug,
            title,
            excerpt,
            date,
            tags,
            content,
            _embedded,
          })
        )
    },
    async getEdenPost() {
      const posts = await fetch(
        `https://wordpress.edenlife.ng/wp-json/wp/v2/posts?categories=4&_embed=1`
      ).then((res) => res.json())
      this.edenPosts = posts
        .filter((el) => el.status === 'publish')
        .map(
          ({ id, slug, title, excerpt, date, tags, content, _embedded }) => ({
            id,
            slug,
            title,
            excerpt,
            date,
            tags,
            content,
            _embedded,
          })
        )
    },
    async getFoodPost() {
      const posts = await fetch(
        `https://wordpress.edenlife.ng/wp-json/wp/v2/posts?categories=3&_embed=1`
      ).then((res) => res.json())
      this.foodPosts = posts
        .filter((el) => el.status === 'publish')
        .map(
          ({ id, slug, title, excerpt, date, tags, content, _embedded }) => ({
            id,
            slug,
            title,
            excerpt,
            date,
            tags,
            content,
            _embedded,
          })
        )
    },
    getCategory(id) {
      this.$refs['nav-container'].scrollIntoView()
      this.activeTabIndex = id
    },
    getColor(slug) {
      switch (slug) {
        case 'food':
          return {
            color: '#03A84E',
          }
        case 'eden-101':
          return {
            color: '#00C0EA',
          }
        case 'home':
          return {
            color: '#FF9D00',
          }
        case 'life-is-good':
          return {
            color: '#5571FF',
          }
        default:
          console.log('default')
      }
    },
    openSocialMedia(name, url) {
      mixpanelTrackEvent(`${name} icon clicked - Blog`)
      window.open(url, '_blank')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/pages/_blog.scss';
</style>
