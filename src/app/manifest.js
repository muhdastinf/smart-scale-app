export default function manifest() {
    return {
      name: 'Integrated Smart Scale App',
      short_name: 'ISSA',
      description: 'A Progressive Web App built for Integrated Smart Scale App',
      start_url: '/',
      display: 'standalone',
      background_color: '#ffffff',
      theme_color: '#000000',
      icons: [
        {
          src: '/image-orange.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/image-orange.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    }
  }