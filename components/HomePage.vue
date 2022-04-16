<template>
  <div>
    <link
      href="https://cdn.jsdelivr.net/npm/tailwindcss@2.1.2/dist/tailwind.min.css"
      rel="stylesheet"
    />
    <div class="min-h-screen bg-gray-200 text-center p-4 md:p-8">
      <img
        src="~/assets/profile.jpg"
        class="rounded-full mx-auto h-32 w-32 mb-4"
      />
      <h1 class="text-3xl mb-1 text-gray-800 font-bold">Eason Chang 張楹翔</h1>
      <h2 class="text-xl mb-6 text-gray-600">
        Fullstack Engineer / Maker / Indie-hacker
      </h2>
      <div class="flex flex-col gap-4 items-center relative">
        <a
          v-for="link in links"
          :key="link.name"
          :href="link.url"
          class="block text-lg border-gray-400 bg-white hover:bg-gray-100 transition-all text-gray-700 border w-full max-w-xl p-4 rounded-full"
        >
          {{ link.name }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      links: [
        {
          name: 'Personal Website & Blog',
          url: 'https://easonchang.com',
        },
        {
          name: 'Resume',
          url: 'https://www.cakeresume.com/eason-chang',
        },
        {
          name: 'LinkedIn',
          url: 'https://www.linkedin.com/in/easonchang101/',
        },
        {
          name: 'Github',
          url: 'https://github.com/Kamigami55',
        },
        {
          name: 'Twitter',
          url: 'https://twitter.com/EasonChang_me',
        },
        {
          name: 'Facebook',
          url: 'https://www.facebook.com/chang.ying.hsiang',
        },
        {
          name: 'Buy Me a Coffee',
          url: 'https://www.buymeacoffee.com/easonchang',
        },
      ],
    }
  },
}
</script>
