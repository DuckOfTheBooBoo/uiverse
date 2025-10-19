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
    imageUrl: "/team/dzihni.png", // Placeholder path
    row: 1,
  },
  {
    position: "Journalist",
    nameAndMajor: "Cathlyn FMIPA'24",
    imageUrl: "/team/cathlyn.png", // Placeholder path
    row: 1,
  },
  {
    position: "Journalist",
    nameAndMajor: "Almaira FIB'24",
    imageUrl: "/team/almaira.png", // Placeholder path
    row: 1,
  },
  {
    position: "Writer",
    nameAndMajor: "Fio FISIP'24",
    imageUrl: "/team/fio.png", // Placeholder path
    row: 2,
  },
  {
    position: "Writer",
    nameAndMajor: "Marsha FIB'23",
    imageUrl: "/team/marsha.png", // Placeholder path
    row: 2,
  },
  {
    position: "Writer",
    nameAndMajor: "Lesta FISIP'24",
    imageUrl: "/team/lesta.png", // Placeholder path
    row: 2,
  },
  {
    position: "Writer",
    nameAndMajor: "Latifah FIB'24",
    imageUrl: "/team/latifah.png", // Placeholder path
    row: 3,
  },
  {
    position: "Editor",
    nameAndMajor: "Fuad FIB'23",
    imageUrl: "/team/fuad.png", // Placeholder path
    row: 3,
  },
  {
    position: "Editor",
    nameAndMajor: "Farrell FPSI'24",
    imageUrl: "/team/farrell.png", // Placeholder path
    row: 3,
  },
  {
    position: "Editor",
    nameAndMajor: "Zalfa Vokasi'24",
    imageUrl: "/team/zalfa.png", // Placeholder path
    row: 4,
  },
  {
    position: "Editor",
    nameAndMajor: "Mila FIB'24",
    imageUrl: "/team/mila.png", // Placeholder path
    row: 4,
  },
];

export const marketAndPRTeamList: Team[] = [
  {
    position: "Public Relation",
    nameAndMajor: "Lily Vokasi'24",
    imageUrl: "/team/lily.png", // Placeholder path
    row: 1,
  },
  {
    position: "Public Relation",
    nameAndMajor: "Qia FKM'23",
    imageUrl: "/team/qia.png", // Placeholder path
    row: 1,
  },
  {
    position: "Public Relation",
    nameAndMajor: "Izzan FIB'23",
    imageUrl: "/team/izzan.png", // Placeholder path
    row: 2,
  },
  {
    position: "Social Media Specialist",
    nameAndMajor: "Rara FISIP'24",
    imageUrl: "/team/rara.png", // Placeholder path
    row: 2,
  },
  {
    position: "Social Media Specialist",
    nameAndMajor: "Regina FIB'24",
    imageUrl: "/team/regina.png", // Placeholder path
    row: 2,
  },
  {
    position: "Social Media Specialist",
    nameAndMajor: "Retan FMIPA'24",
    imageUrl: "/team/retan.png", // Placeholder path
    row: 3,
  },
  {
    position: "Social Media Specialist",
    nameAndMajor: "Rani FIB'24",
    imageUrl: "/team/rani.png", // Placeholder path
    row: 3,
  },
];
