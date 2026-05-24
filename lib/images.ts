/** All site images must come from /photos (synced from project photos/ folder) */
export const photo = (filename: string) => `/photos/${filename}`;

export const photoFiles = {
  men: {
    iwcHeritage: "pat-taylor-12V36G17IbQ-unsplash.jpg",
    blueChrono: "240_F_513149595_Zsix524ohcvcoyH8bUBrJXu7w7NsGPxG.jpg",
    seikoDial: "photo-1611353229593-16439c293495.avif",
    casioMidnight: "photo-1639734012507-ff63ef9d8d3e.avif",
    seikoMovement: "photo-1642515839492-a740aa8f6339.avif",
    seikoPresage: "photo-1642667049059-04325f205049.avif",
    hublotGeneve: "photo-1668954226846-f9ec4eed25be.avif",
    citizenBlue: "photo-1684766288396-1fd5c7d92112.avif",
    cartierSantos: "photo-1687040481503-3595ef7b5672.avif",
    omegaSeamaster: "photo-1691865179028-1729b766a5cd.avif",
    timexMinimal: "photo-1694656937152-b2377c0b5de7.avif",
  },
  women: {
    skyGold: "photo-1584208124232-7919e0000ad5.avif",
    portraitGold: "photo-1653651460775-7f95d810e40d.avif",
    yellowPurple: "photo-1653651461471-d4dffd0e5ab0.avif",
    emeraldMalachite: "photo-1653651461602-97dde5087f58.avif",
    lolaRosePink: "photo-1657159810148-f6a1f3d74f7e.avif",
    lolaRoseGreen: "photo-1657159810382-226b58af626f.avif",
    festiveCollection: "photo-1657159811528-acb3c350abd8.avif",
    twoToneClassic: "premium_photo-1728582543460-1692e08eacbc.avif",
    pearlLace: "premium_photo-1728759440467-d710b7073761.avif",
  },
} as const;

export const images = {
  hero: {
    watch: photo(photoFiles.men.iwcHeritage),
    accent1: photo(photoFiles.men.seikoPresage),
    accent2: photo(photoFiles.men.omegaSeamaster),
    accent3: photo(photoFiles.men.blueChrono),
    precision: photo(photoFiles.men.seikoMovement),
    ctaWoman: photo(photoFiles.women.yellowPurple),
  },
  watches: {
    watch1: photo(photoFiles.men.blueChrono),
    watch2: photo(photoFiles.men.seikoPresage),
    watch3: photo(photoFiles.men.cartierSantos),
  },
  gallery: {
    gallery1: photo(photoFiles.men.hublotGeneve),
    gallery2: photo(photoFiles.men.omegaSeamaster),
    gallery3: photo(photoFiles.men.citizenBlue),
    gallery4: photo(photoFiles.women.festiveCollection),
  },
  avatars: [
    photo(photoFiles.women.portraitGold),
    photo(photoFiles.women.emeraldMalachite),
    photo(photoFiles.women.skyGold),
    photo(photoFiles.women.twoToneClassic),
    photo(photoFiles.women.yellowPurple),
  ],
} as const;
