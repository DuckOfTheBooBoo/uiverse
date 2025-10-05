interface ImagePos {
    top: string;
    left: string
}

interface Speaker {
    name: string;
    major: string;
    title: "Speaker";
    position: ImagePos;
    // imageUrl: string;
}


export const speakerList: Speaker[] = [
    {
        name: "Allysa Natalie",
        major: "Ilmu Komunikasi, FISIP 2020",
        title: "Speaker",
        position: { top: '55%', left: '5%' }
    },
    {
        name: "Anggie Augustian Wijaya",
        major: "Produksi Media, Vokasi 2021",
        title: "Speaker",
        position: { top: '35%', left: '20%' }
    },
    {
        name: "Waitatiri",
        major: "Sastra Jerman, FIB UI 2012",
        title: "Speaker",
        position: { top: '15%', left: '32%' }
    },
    {
        name: "Salmahita Ataya Pradilla",
        major: "Ilmu Kesehatan, FKM UI 2023",
        title: "Speaker",
        position: { top: '0%', left: '45%' }
    },
    {
        name: "Aisyah Aljufri",
        major: "Sastra Arab, FIB UI 2021",
        title: "Speaker",
        position: { top: '15%', left: '58%' }
    },
    {
        name: "Indira Fatihah Utomo",
        major: "Produksi Media, Vokasi 2021",
        title: "Speaker",
        position: { top: '35%', left: '70%' }
    },
    {
        name: "Gisela Thesa",
        major: "Administrasi Bisnis, FIA 2020",
        title: "Speaker",
        position: { top: '55%', left: '85%' }
    }
]