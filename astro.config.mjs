// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://camjouan.tech',

  integrations: [
    starlight({
      title: 'ft_journey',
      description: 'Mon parcours à 42, mes projets et ressources',

      // Français comme langue principale
      locales: {
        root: {
          label: 'Français',
          lang: 'fr',
        },
      },

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/eldayia',
        },
      ],

      sidebar: [
        {
          label: '42 Paris',
          items: [{ autogenerate: { directory: '42' } }],
        },
        {
          label: 'Programmation C',
          items: [{ autogenerate: { directory: 'c' } }],
        },
        {
          label: 'Linux',
          items: [{ autogenerate: { directory: 'linux' } }],
        },
        {
          label: 'Ressources',
          items: [{ autogenerate: { directory: 'ressources' } }],
        },
        {
          label: 'Mes services',
          link: '/portal/',
        },
      ],
    }),
  ],
});
