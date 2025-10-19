interface ImagePos {
    top: string;
    left: string
}

interface Speaker {
    name: string;
    major: string;
    title: "Speaker";
    position: ImagePos;
    imageUrl: string;
    addClass?: string;
}


export const speakerList: Speaker[] = [
    {
        name: "Allysa Natalie",
        major: "Ilmu Komunikasi, FISIP 2020",
        title: "Speaker",
        position: { top: '55%', left: '5%' },
        imageUrl: "/allysa_natalie.webp",
        addClass: ""
    },
    {
        name: "Anggie Augustian Wijaya",
        major: "Produksi Media, Vokasi 2021",
        title: "Speaker",
        position: { top: '35%', left: '20%' },
        imageUrl: "/anggie_augustian.webp"
    },
    {
        name: "Waitatiri",
        major: "Sastra Jerman, FIB UI 2012",
        title: "Speaker",
        position: { top: '15%', left: '32%' },
        imageUrl: "waitatiri.jpg"
    },
    {
        name: "Salmahita Ataya Pradilla",
        major: "Ilmu Kesehatan, FKM UI 2023",
        title: "Speaker",
        position: { top: '0%', left: '45%' },
        imageUrl: "salmahita.jpg"
    },
    {
        name: "Aisyah Aljufri",
        major: "Sastra Arab, FIB UI 2021",
        title: "Speaker",
        position: { top: '15%', left: '58%' },
        imageUrl: "/aisyah_aljufri.jpg"
    },
    {
        name: "Indira Fatihah Utomo",
        major: "Produksi Media, Vokasi 2021",
        title: "Speaker",
        position: { top: '35%', left: '70%' },
        imageUrl: "/indira_fatihah.jpg"
    },
    {
        name: "Gisela Thesa",
        major: "Administrasi Bisnis, FIA 2020",
        title: "Speaker",
        position: { top: '55%', left: '85%' },
        imageUrl: "gisela_thesa.jpg"
    }
]