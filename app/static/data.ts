interface ImagePos {
  top: string;
  left: string;
}

interface Speaker {
  name: string;
  major: string;
  title: string;
  position: ImagePos;
  imageUrl: string;
  addClass?: string;
}

export interface Team {
  position: string;
  nameAndMajor: string;
  imageUrl: string;
  row: number;
}

export const speakerList: Speaker[] = [
  {
    name: "Allysa Natalie",
    major: "Ilmu Komunikasi, FISIP 2020",
    title: "Speaker",
    position: { top: "55%", left: "5%" },
    imageUrl: "/allysa_natalie.webp",
    addClass: "",
  },
  {
    name: "Anggie Augustian Wijaya",
    major: "Produksi Media, Vokasi 2021",
    title: "Speaker",
    position: { top: "35%", left: "20%" },
    imageUrl: "/anggie_augustian.webp",
  },
  {
    name: "Waitatiri",
    major: "Sastra Jerman, FIB UI 2012",
    title: "Speaker",
    position: { top: "15%", left: "32%" },
    imageUrl: "waitatiri.jpg",
  },
  {
    name: "Salmahita Ataya Pradilla",
    major: "Ilmu Kesehatan, FKM UI 2023",
    title: "Speaker",
    position: { top: "0%", left: "45%" },
    imageUrl: "salmahita.jpg",
  },
  {
    name: "Aisyah Aljufri",
    major: "Sastra Arab, FIB UI 2021",
    title: "Speaker",
    position: { top: "15%", left: "58%" },
    imageUrl: "/aisyah_aljufri.jpg",
  },
  {
    name: "Indira Fatihah Utomo",
    major: "Produksi Media, Vokasi 2021",
    title: "Speaker",
    position: { top: "35%", left: "70%" },
    imageUrl: "/indira_fatihah.jpg",
  },
  {
    name: "Gisela Thesa",
    major: "Administrasi Bisnis, FIA 2020",
    title: "Speaker",
    position: { top: "55%", left: "85%" },
    imageUrl: "gisela_thesa.jpg",
  },
];

export const editorialTeamList: Team[] = [
  {
    position: "Graphic Designer",
    nameAndMajor: "Reisa Vokasi'24",
    imageUrl: "/Reisa - Creative Team - Graphic Designer.webp", // Placeholder path
    row: 1,
  },
  {
    position: "Graphic Designer",
    nameAndMajor: "Aisyah FIB'24",
    imageUrl: "/aisyah.jpg", // Placeholder path
    row: 1,
  },
  {
    position: "Graphic Designer",
    nameAndMajor: "Ahnaf FPSI'24",
    imageUrl: "/Ahnaf-Graphic design.webp", // Placeholder path
    row: 1,
  },
  {
    position: "Graphic Designer",
    nameAndMajor: "Jasmine Vokasi'24",
    imageUrl: "/yasmine _ graphic design_.webp", // Placeholder path
    row: 2,
  },
  {
    position: "Graphic Designer",
    nameAndMajor: "Nadhira Vokasi'24",
    imageUrl: "/nadhira.jpg", // Placeholder path
    row: 2,
  },
  {
    position: "Graphic Designer",
    nameAndMajor: "Ima Vokasi'24",
    imageUrl: "/Fatimah - Graphic Desain.webp", // Placeholder path
    row: 3,
  },
  {
    position: "Graphic Designer",
    nameAndMajor: "Azkia Vokasi'24",
    imageUrl: "/Azkia Graphic Designer_.webp", // Placeholder path
    row: 3,
  },
];

export const creativeTeamList: Team[] = [
  {
    position: "Journalist",
    nameAndMajor: "Dzihni FIB'24",
    imageUrl: "/Dzihni - Journalist.webp", // Placeholder path
    row: 1,
  },
  {
    position: "Journalist",
    nameAndMajor: "Cathlyn FMIPA'24",
    imageUrl: "/cathlyn.webp", // Placeholder path
    row: 1,
  },
  {
    position: "Journalist",
    nameAndMajor: "Almaira FIB'24",
    imageUrl: "/almaira.jpg", // Placeholder path
    row: 1,
  },
  {
    position: "Writer",
    nameAndMajor: "Fio FISIP'24",
    imageUrl: "/fio.webp", // Placeholder path
    row: 2,
  },
  {
    position: "Writer",
    nameAndMajor: "Marsha FIB'23",
    imageUrl: "/marsha.jpg", // Placeholder path
    row: 2,
  },
  {
    position: "Writer",
    nameAndMajor: "Lesta FISIP'24",
    imageUrl: "/lesta.webp", // Placeholder path
    row: 2,
  },
  {
    position: "Writer",
    nameAndMajor: "Latifah FIB'24",
    imageUrl: "/latifah.webp", // Placeholder path
    row: 3,
  },
  {
    position: "Editor",
    nameAndMajor: "Fuad FIB'23",
    imageUrl: "/fuad.webp", // Placeholder path
    row: 3,
  },
  {
    position: "Editor",
    nameAndMajor: "Farrell FPSI'24",
    imageUrl: "/farrel.webp", // Placeholder path
    row: 3,
  },
  {
    position: "Editor",
    nameAndMajor: "Zalfa Vokasi'24",
    imageUrl: "/zalfa.webp", // Placeholder path
    row: 4,
  },
  {
    position: "Editor",
    nameAndMajor: "Mila FIB'24",
    imageUrl: "/mila.webp", // Placeholder path
    row: 4,
  },
];

export const marketAndPRTeamList: Team[] = [
  {
    position: "Public Relation",
    nameAndMajor: "Lily Vokasi'24",
    imageUrl: "/lily.webp", // Placeholder path
    row: 1,
  },
  {
    position: "Public Relation",
    nameAndMajor: "Qia FKM'23",
    imageUrl: "/qia.webp", // Placeholder path
    row: 1,
  },
  {
    position: "Public Relation",
    nameAndMajor: "Izzan FIB'23",
    imageUrl: "/izzan.webp", // Placeholder path
    row: 1,
  },
  {
    position: "Social Media Specialist",
    nameAndMajor: "Rara FISIP'24",
    imageUrl: "/rara.webp", // Placeholder path
    row: 2,
  },
  {
    position: "Social Media Specialist",
    nameAndMajor: "Regina FIB'24",
    imageUrl: "/regina.webp", // Placeholder path
    row: 2,
  },
  {
    position: "Social Media Specialist",
    nameAndMajor: "Refan FMIPA'24",
    imageUrl: "/refan.webp", // Placeholder path
    row: 3,
  },
  {
    position: "Social Media Specialist",
    nameAndMajor: "Rani FIB'24",
    imageUrl: "/rani.webp", // Placeholder path
    row: 3,
  },
];
