export const products = [
    {
        name: 'Death Note',
        description: 'Cuadeerno de DeathNote, 150 hojas lisas',
        price: 2500,
        stock: 40,
        category: 'Manga',
        img: 'https://i.postimg.cc/pLx6Yjzy/Death-Note.jpg',
    },
    {
        name: 'Fire Force',
        description: 'Collecion de tomos Fire Force (5 mangas)',
        price: 12000,
        stock: 300,
        category: 'Manga',
        img: 'https://i.postimg.cc/FzVj9YRn/Fire-force.jpg',
    },
    {
        name: 'Yamcha',
        description: 'FunkoPop Dead Yamcha 397',
        price: 18000,
        stock: 8,
        category: 'Anime',
        img: 'https://i.postimg.cc/QNQggybk/Goku.jpg',
    },
    {
        name: 'Junji Ito',
        description: 'Coleccion de mangas de Junji Ito',
        price: 20000,
        stock: 100,
        category: 'Manga',
        img: 'https://i.postimg.cc/zvLD4CGW/Junji-Ito.jpg',
    },
    {
        name: 'Miku',
        description: 'Figura original de Miku Hatsume',
        price: 35000,
        stock: 5,
        category: 'Anime',
        img: 'https://i.postimg.cc/K8Z0g2hM/Miku.jpg'
    },

    {
        name: 'MYA manga',
        description: 'Tomo de My Hero Academy (1 manga)',
        price: 2500,
        stock: 200,
        category: 'Manga',
        img: 'https://i.postimg.cc/xT9v63pr/My-hero-Academy.jpg'
    },

    {
        name: 'Naruto',
        description: 'Figura de Naruto 10cm',
        price: 3500,
        stock: 15,
        category: 'Anime',
        img: 'https://i.postimg.cc/nrbkV81M/Naruto.jpg'
    },
];

export const getProducts = () => {
    let error = false;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!error) {
                resolve(products);
            } else {
                reject('Hubo un error intente mas tarde');
            }
        }, 2000);
    });
};

export const getItem = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find((item) => item.id === id))
        }, 2000);
    });
};