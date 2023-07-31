const products = [
    {
        id: '01',
        name: 'Anya',
        description: 'Figura de Anya (SpyxFamily) 10cm',
        price: 3000,
        stock: 10,
        category: 'Anime',
        img: 'https://i.postimg.cc/pLtgG4bW/Anya.jpg',
    },
    {
        id: '02',
        name: 'Death Note',
        description: 'Cuadeerno de DeathNote, 150 hojas lisas',
        price: 2500,
        stock: 40,
        category: 'Manga',
        img: 'https://i.postimg.cc/pLx6Yjzy/Death-Note.jpg',
    },
    {
        id: '03',
        name: 'Fire Force Coleccion',
        description: 'Collecion de tomos del manga Fire Force, la coleccion trae 5 mangas (consultar nro de tomos)',
        price: 12000,
        stock: 300,
        category: 'Manga',
        img: 'https://i.postimg.cc/FzVj9YRn/Fire-force.jpg',
    },
    {
        id: '04',
        name: 'Yamcha',
        description: 'FunkoPop Dead Yamcha 397',
        price: 18000,
        stock: 8,
        category: 'Anime',
        img: 'https://i.postimg.cc/QNQggybk/Goku.jpg',
    },
    {
        id: '05',
        name: 'Junji Ito',
        description: 'Coleccion de mangas de Junji Ito',
        price: 20000,
        stock: 100,
        category: 'Manga',
        img: 'https://i.postimg.cc/zvLD4CGW/Junji-Ito.jpg',
    },
    {
        id: '06',
        name: 'Miku',
        description: 'Figura original de Miku Hatsume',
        price: 35000,
        stock: 5,
        category: 'Anime',
        img: 'https://i.postimg.cc/K8Z0g2hM/Miku.jpg'
    },

    {
        id: '07',
        name: 'MYA manga',
        description: 'Tomo de My Hero Academy (consulta stock del numero de tomo)',
        price: 2500,
        stock: 200,
        category: 'Manga',
        img: 'https://i.postimg.cc/xT9v63pr/My-hero-Academy.jpg'
    },

    {
        id: '08',
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
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find((item)=> item.id === id))
        }, 2000);
    });
};