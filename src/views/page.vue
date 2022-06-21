<template>
  <div class="login-banner">
    <leaf class="login-banner--floating__leaf" />
    <img class="login-banner--logo h-20" src="/images/logo.svg" alt="Logo" />
    <div class="login-banner--info">
      <img
        class="login-banner--mobile-bg hidden z-10"
        src="/images/auth/auth-bg.png"
        srcset="/images/auth/auth-bg.png 1x, /images/auth/auth-bg@2x.png 2x"
        alt="Login banner mobile background"
        width="169px"
        height="235px"
      />
      <h3 class="login-banner--heading mb-2">
        {{ $t('login_welcome_message_title') }}
      </h3>
      <p class="login-banner--description">
        {{ $t('login_welcome_message_description') }}
      </p>
      <div class="flex-items-center mt-auto login-banner--downloads">
        <i-tooltip position="top" class="mr-5">
          <template #button>
            <a id="play-market-tooltip" class="login-banner--download" href="#">
              <img
                class="login-banner--download__google"
                src="/images/auth/download-google.svg"
                alt="Play Market"
              />
            </a>
          </template>
          <template #tooltip-content>
            {{ $t('available_soon') }}
          </template>
        </i-tooltip>

        <i-tooltip position="top">
          <template #button>
            <a id="app-store-tooltip" class="login-banner--download" href="#">
              <img
                class="login-banner--download__apple"
                src="/images/auth/download-apple.svg"
                alt="App Store"
              />
            </a>
          </template>
          <template #tooltip-content>
            {{ $t('available_soon') }}
          </template>
        </i-tooltip>
      </div>
      <svg
        class="login-banner--floating__icon"
        width="66"
        height="195"
        viewBox="0 0 66 195"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.43799 90.8503H37.8661C44.3865 90.8503 50.6399 93.2741 55.2505 97.5885C59.8612 101.903 62.4514 107.754 62.4514 113.856V265.562H28.0233C21.5029 265.562 15.2495 263.139 10.6389 258.824C6.02822 254.51 3.43799 248.658 3.43799 242.557V90.8503Z"
          fill="#022F5E"
          fill-opacity="0.06"
        />
        <path
          d="M56.4193 9.48747C53.3498 6.41769 49.6885 3.99549 45.6547 2.366C41.621 0.736498 37.2979 -0.0667633 32.9445 0.00433981C28.5976 -0.0635564 24.2817 0.741332 20.2552 2.37081C16.2286 4.00028 12.5743 6.42082 9.51105 9.48747C6.30661 12.5747 3.78482 16.2922 2.10663 20.4026C0.428447 24.513 -0.369266 28.9261 -0.235592 33.3602C-0.343216 37.742 0.467773 42.098 2.14578 46.1512C3.82379 50.2044 6.33207 53.866 9.51105 56.9031C12.5743 59.9698 16.2286 62.3903 20.2552 64.0198C24.2817 65.6492 28.5976 66.4541 32.9445 66.3862C37.2979 66.4573 41.621 65.6541 45.6547 64.0246C49.6885 62.3951 53.3498 59.9729 56.4193 56.9031C59.5908 53.8625 62.0914 50.1992 63.7622 46.1462C65.433 42.0932 66.2375 37.7389 66.1245 33.3602C66.2635 28.9291 65.4723 24.5179 63.8014 20.4076C62.1304 16.2973 59.6163 12.5783 56.4193 9.48747ZM43.1059 43.4206C41.7782 44.7519 40.1939 45.8033 38.4479 46.5118C36.7019 47.2202 34.8301 47.5712 32.9445 47.5437C31.0655 47.568 29.2008 47.2154 27.462 46.507C25.7232 45.7985 24.1459 44.7488 22.8245 43.4206C21.4683 42.1047 20.4 40.5246 19.6863 38.7793C18.9726 37.0341 18.629 35.1611 18.677 33.2778C18.6383 31.3929 18.9791 29.5195 19.6792 27.7675C20.3794 26.0155 21.4249 24.4203 22.7542 23.0758C24.0835 21.7313 25.6697 20.6646 27.4197 19.9383C29.1697 19.2121 31.0481 18.841 32.9445 18.8469C34.8478 18.83 36.7351 19.1929 38.4948 19.9142C40.2545 20.6355 41.8506 21.7005 43.1888 23.0461C44.5269 24.3918 45.5798 25.9907 46.2851 27.7482C46.9904 29.5057 47.3338 31.386 47.2948 33.2778C47.3375 35.1641 46.9874 37.0389 46.2665 38.7843C45.5456 40.5298 44.4696 42.1082 43.1059 43.4206Z"
          fill="#022F5E"
          fill-opacity="0.06"
        />
      </svg>
    </div>
    <img
      class="login-banner--floating__samsung pointer-events-none"
      src="/images/auth/samsung.png" srcset="/images/auth/1-samsung.png 1x, /images/auth/samsung@2x.png 2x"
      data-parallax
      data-parallax-x="4"
      data-parallax-y="6"
      alt="Samsung"
    />
    <img
      class="login-banner--floating__shadow pointer-events-none"
      src="/images/auth/shadow.png"
      srcset="/images/auth/shadow.png 1x, /images/auth/shadow@2x.png 2x"
      data-parallax
      data-parallax-x="4"
      data-parallax-y="4"
      alt="Shadow"
    />
    <img
      class="login-banner--floating__iphone pointer-events-none"
      src="/images/auth/iphone.png"
      srcset="/images/auth/iphone.png 1x, /images/auth/iphone@2x.png 2x"
      data-parallax
      data-parallax-x="8"
      data-parallax-y="10"
      alt="iPhone"
    />
  </div>
</template>

<script>
import Leaf from './icons/Leaf'
import ITooltip from '~/components/library/tooltip/ITooltip.vue'
export default {
    name: 'Page',
  components: {
    Leaf,
    ITooltip,
  },
  mounted() {
    this.$clientOnly(() => {
      window.addEventListener('mousemove', this.parallax)
    })
  },
  destroyed() {
    this.$clientOnly(() => {
      window.removeEventListener('mousemove', this.parallax)
    })
  },
  methods: {
    parallax(e) {
      let x = e.clientX
      let y = e.clientY
      const windowHeight = window.innerHeight
      const windowWidth = window.innerWidth
      x = (x / windowWidth) * 2 - 1
      y = (y / windowHeight) * 2 - 1
      const elements = document.querySelectorAll('[data-parallax]')
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i]
        const elementX = element.getAttribute('data-parallax-x')
        element.style.transform = `translateX(${
          x * elementX + 'px'
        }) translateY(${y * elementY + 'px'})`
      }
    },
  },
}
</script>