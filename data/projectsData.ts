type Project = {
  title: string
  description: string
  imgSrc: string
  href: string
}

type ProjectsData = {
  [locale: string]: Project[]
}

const projectsData: ProjectsData = {
  en: [
    {
      title: 'Electronic Components Stock Manager',
      description: `Tired of losing track of all your sensors and modules? This Laravel-powered app helps you manage your electronic parts inventory, with real-time stock tracking and a built-in API. Ideal for makers, hobbyists, and electronics enthusiasts.`,
      imgSrc: '/static/images/stock-manager.png',
      href: '/blog/electronic-components-stock-manager',
    },
  ],

  fr: [
    {
      title: 'Un moteur de recherche',
      description: `Et si vous pouviez rechercher n'importe quelle information dans le monde ? Pages Web, images, vidéos
        et plus. Google propose de nombreuses fonctionnalités pour vous aider à trouver exactement ce que vous cherchez.`,
      imgSrc: '/static/images/google.png',
      href: 'https://www.google.com',
    },
    {
      title: 'La Machine à remonter le temps',
      description: `Imaginez pouvoir voyager dans le temps ou vers le futur. Tournez simplement le bouton
        à la date souhaitée et appuyez sur "Go". Ne vous inquiétez plus des clés perdues ou
        écouteurs oubliés avec cette solution simple mais abordable.`,
      imgSrc: '/static/images/time-machine.jpg',
      href: '/blog/the-time-machine',
    },
  ],

  pt: [
    {
      title: 'Um Motor de Busca',
      description: `E se pudesses procurar qualquer informação no mundo? Páginas web, imagens, vídeos
      e muito mais. O Google tem muitas funcionalidades para te ajudar a encontrar exatamente
      aquilo que procuras.`,
      imgSrc: '/static/images/google.png',
      href: 'https://www.google.com',
    },
    {
      title: 'A Máquina do Tempo',
      description: `Imagina poderes viajar no tempo — para o passado ou para o futuro. Basta girar o botão
      para a data desejada e carregar em "Ir". Nunca mais te preocupes com chaves perdidas ou
      auscultadores esquecidos com esta solução simples e acessível.`,
      imgSrc: '/static/images/time-machine.jpg',
      href: '/blog/the-time-machine',
    },
  ],
}

export default projectsData
