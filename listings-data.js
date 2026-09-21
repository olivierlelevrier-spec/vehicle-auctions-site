// Real vehicle listings with photos
const REAL_LISTINGS = [
    {
        id: 1,
        title: 'Audi A1 TFSI 110cv - Automatique',
        year: 2020,
        price: 18500,
        mileage: 95000,
        emoji: '🔴',
        photos: typeof AUDI_A1_PHOTO !== 'undefined' ? [AUDI_A1_PHOTO] : [],
        description: 'Audi A1 TFSI 110cv avec 95 000 km. Excellent etat. Premiere main. Vendeur LLC Auto.'
    },
    {
        id: 2,
        title: 'Aixam S9 - Sans Permis',
        year: 2022,
        price: 9990,
        mileage: 12000,
        emoji: '🚙',
        photos: typeof AIXAM_S9_PHOTO !== 'undefined' ? [AIXAM_S9_PHOTO] : [],
        description: 'Aixam S9 sans permis - 12 000 km. Etat neuf. Interieur impeccable. Plaque GH-101-JS.'
    }
];
