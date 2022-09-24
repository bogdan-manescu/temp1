import carousel1 from "./carousel1.jpg";
import carousel3 from "./carousel3.jpg";
import carousel2 from "./carousel2.jpg";
import bathroom1 from "./bathroom1.jpg";
import bathroom2 from "./bathroom2.jpg";
import bathroom3 from "./bathroom3.jpg";
import bathroom4 from "./bathroom4.jpg";
import bathroom5 from "./bathroom5.jpg";
import bathroom6 from "./bathroom6.jpg";
import bathroom7 from "./bathroom7.jpg";
import bathroom8 from "./bathroom8.jpg";
import bathroom9 from "./bathroom9.jpg";
import house1 from "./house1.jpg";
import house2 from "./house2.jpg";
import house3 from "./house3.jpg";
import house4 from "./house4.jpg";
import house5 from "./house5.jpg";
import house6 from "./house6.jpg";
import kitchen1 from "./kitchen1.jpg";
import kitchen2 from "./kitchen2.jpg";
import misc1 from "./misc1.jpg";
import misc2 from "./misc2.jpg";
import misc3 from "./misc3.jpg";
import outside1 from "./outside1.jpg";
import outside2 from "./outside2.jpg";
import outside3 from "./outside3.jpg";
import outside4 from "./outside4.jpg";
import outside5 from "./outside5.jpg";
import pool1 from "./pool1.jpg";
import pool2 from "./pool2.jpg";
import pool3 from "./pool3.jpg";
import pool4 from "./pool4.jpg";
import pool5 from "./pool5.jpg";
import pool6 from "./pool6.jpg";
import restaurant1 from "./restaurant1.jpg";
import restaurant2 from "./restaurant2.jpg";
import restaurant3 from "./restaurant3.jpg";
import room1 from "./room1.jpg";
import room2 from "./room2.jpg";
import room3 from "./room3.jpg";
import room4 from "./room4.jpg";
import terrace1 from "./terrace1.jpg";
import terrace2 from "./terrace2.jpg";
import terrace3 from "./terrace3.jpg";
import terrace4 from "./terrace4.jpg";
import png1 from "./1.png";
import png2 from "./2.png";
import png3 from "./3.png";
import png4 from "./4.png";
import png5 from "./5.png";
import png6 from "./6.png";
import logo from "./logo.png";

const images = {
    logo: logo,
    carousel: {
        home: [
            {
                image: carousel1,
                alt: "Pensiunea Gabriel din fata",
                title: "Pensiunea Gabriel",
                subtitle: "OAZA TA DE LINISTE SI RELAXARE",
                cta: "REZERVA",
                link: "#reservation",
                anchor: true,
            },
            {
                image: carousel2,
                alt: "Oferte Cazare Pensiunea Gabriel",
                title: "Descopera Ofertele",
                subtitle: "CAMERE | FACILITATI | CAZARE IN MEHEDINTI",
                cta: "DETALII",
                link: "/rooms",
                anchor: false,
            },
            {
                image: carousel3,
                alt: "Vin Corcova langa piscina",
                title: "Vezi Galeria",
                subtitle: "PISCINA IN AER LIBER | LOUNGE | GRADINA | ZONA DE PLAJA",
                cta: "DETALII",
                link: "/gallery",
                anchor: false,
            },
        ],
        rooms: [
            {
                image: room1,
                alt: "Dormitor de 2 persoane",
            },
            {
                image: room2,
                alt: "Dormitor de 2 persoane",
            },
            {
                image: room3,
                alt: "Dormitor de 2 persoane",
            },
            {
                image: room4,
                alt: "Dormitor de 2 persoane",
            },
        ],
    },
    rooms: [
        { image: room1, alt: "Dormitor de 2 persoane" },
        { image: room2, alt: "Dormitor de 2 persoane" },
        { image: room3, alt: "Dormitor de 2 persoane" },
        { image: room4, alt: "Dormitor de 2 persoane" },
    ],
    bathrooms: [
        { image: bathroom1, alt: "Baie" },
        { image: bathroom2, alt: "Baie" },
        { image: bathroom3, alt: "Baie" },
        { image: bathroom4, alt: "Baie" },
        { image: bathroom5, alt: "Baie" },
        { image: bathroom6, alt: "Baie" },
        { image: bathroom7, alt: "Baie" },
        { image: bathroom8, alt: "Baie" },
        { image: bathroom9, alt: "Baie" },
    ],
    kitchen: [
        { image: kitchen1, alt: "Bucatarie" },
        { image: kitchen2, alt: "Bucatarie" },
    ],
    pool: [
        { image: pool1, alt: "Piscina" },
        { image: pool2, alt: "Piscina" },
        { image: pool3, alt: "Piscina" },
        { image: pool4, alt: "Piscina" },
        { image: pool5, alt: "Piscina" },
        { image: pool6, alt: "Piscina" },
    ],
    restaurant: [
        { image: restaurant1, alt: "Restaurant" },
        { image: restaurant2, alt: "Restaurant" },
        { image: restaurant3, alt: "Restaurant" },
    ],
    outside: [
        { image: outside1, alt: "Curtea pensiunii" },
        { image: outside2, alt: "Curtea pensiunii" },
        { image: outside3, alt: "Curtea pensiunii" },
        { image: outside4, alt: "Curtea pensiunii" },
        { image: outside5, alt: "Curtea pensiunii" },
    ],
    house: [
        { image: house1, alt: "Pensiunea Gabriel" },
        { image: house2, alt: "Pensiunea Gabriel" },
        { image: house3, alt: "Pensiunea Gabriel" },
        { image: house4, alt: "Pensiunea Gabriel" },
        { image: house5, alt: "Pensiunea Gabriel" },
        { image: house6, alt: "Pensiunea Gabriel" },
    ],
    misc: [
        { image: misc1, alt: "Aparat de cafea" },
        { image: misc2, alt: "Scara interiora" },
        { image: misc3, alt: "Sticle de vin la rece" },
    ],
    terrace: [
        { image: terrace1, alt: "Terasa" },
        { image: terrace2, alt: "Terasa" },
        { image: terrace3, alt: "Terasa" },
        { image: terrace4, alt: "Terasa" },
    ],
    home: [
        {
            media: [
                { image: png1, alt: "Colaj 2 poze cu Pensiunea Gabriel" },
                { image: png2, alt: "Colaj 2 poze cu Pensiunea Gabriel" },
            ],
            title: "Pensiunea Gabriel",
            subtitle: "OAZA TA DE LINISTE SI RELAXARE",
            description:
                "Pensiunea Gabriel se afla in Corcova si are o piscina sezoniera in aer liber, un lounge comun, gradina si zona de plaja privata. Aceasta proprietate are o bucatarie comuna si facilitati de gratar. De asemenea, exista un loc de joaca pentru copii, acces gratuit la internet WiFi si parcare privata gratuita.",
            cta: "REZERVA",
            link: "#reservation",
        },
        {
            media: [
                { image: png3, alt: "Colaj 2 poze cu Pensiunea Gabriel" },
                { image: png4, alt: "Colaj 2 poze cu Pensiunea Gabriel" },
            ],
            alt: "Oferte Cazare Pensiunea Gabriel",
            title: "Descopera Ofertele",
            subtitle: "CAMERE | FACILITATI | DOTARI",
            description:
                "Camerele pensiunii au aer conditionat, zona de relaxare, TV cu ecran plat cu canale prin satelit, bucatarie, zona de luat masa si baie privata cu halate de baie, dus si papuci. De asemenea, camerele de la Pensiunea Gabriel au lenjerie de pat si prosoape.",
            cta: "VEZI CAMERELE",
            link: "/rooms",
        },
        {
            media: [
                { image: png5, alt: "Colaj 2 poze cu Pensiunea Gabriel" },
                { image: png6, alt: "Colaj 2 poze cu Pensiunea Gabriel" },
            ],
            alt: "Vin Corcova langa piscina",
            title: "Activitati",
            subtitle: "PISCINA | LOUNGE | ACTIVITATI | ZONA DE PLAJA",
            description:
                "Proprietatea pune la dispozitie o cada cu hidromasaj. Oaspetii de la Pensiunea Gabriel se vor putea bucura de diverse activitati in Corcova si in imprejurimi, cum ar fi ciclismul.",
            cta: "VEZI GALERIA",
            link: "/gallery",
        },
    ],
};

export const grid = [
    ...images.pool,
    ...images.terrace,
    ...images.house,
    ...images.misc,
    ...images.outside,
    ...images.rooms,
    ...images.bathrooms,
    ...images.restaurant,
    ...images.kitchen,
];

export default images;
