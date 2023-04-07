const Songs = [
  {
    id: 1,
    favourite: false,
    songName: "Night Changes",
    artist: "One Direction",
    duration: "04:00",
    votes: "345,678,97",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/Songs%2FNight-Changes(PagalWorld).mp3?alt=media&token=a5b022c5-e8bb-4d22-b046-288f1f66a561",
    imgSrc: "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/Images%2FNight-Changes.jpeg?alt=media&token=3fcfb4d1-08d7-4257-a464-ced1dfd07fc2"
  },
  {
    id: 2,
    favourite: false,
    songName: "Am I Wrong",
    artist: "Nico & Venz",
    duration: "05:04",
    votes: "123,456,89",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/Nico_Vinz_-_Am_I_Wrong_Vevohitsongs.com.mp3?alt=media&token=1aa74982-2f05-4772-b730-df02ba6ed6e9",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/Images%2FAm-i-Wrong.jpeg?alt=media&token=34fd52bb-208f-45c2-ae51-6bef0a10329a",
  },
  {
    id: 3,
    favourite: false,
    songName: "Ava",
    artist: "Famy",
    duration: "04:00",
    votes: "123,456,78",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/Famy_-_Ava%20(1).mp3?alt=media&token=73ec1146-86b3-42e1-9002-ae61bfbe1673",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/Images%2FAva.jpeg?alt=media&token=b8aec8c6-3ab7-44af-9c89-5679d410878f",
  },
  {
    id: 4,
    favourite: false,
    songName: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    duration: "02:46",
    votes: "456,345,34",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/arctic-monkeys-i-wanna-be-yours-sped-up-128-kbps.mp3?alt=media&token=92bb1f34-9204-4ff6-8780-3efb8cbe913c",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/Images%2FWanna%20be%20Yours.jpg?alt=media&token=86638a53-6377-40a5-af5b-d97d5164b667",
  },
  {
    id: 5,
    favourite: false,
    songName: "Not Afraid",
    artist: "Eminem",
    duration: "04:08",
    votes: "789,987,45",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/Eminem_-_Not_Afraid_(ColdMP3.com).mp3?alt=media&token=445687a6-9769-4ac3-8817-fa81dda92880",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/not-afraid.jpeg?alt=media&token=de59a254-72e0-40b9-963a-63092c299c0f",
  },
  {
    id: 6,
    favourite: false,
    songName: "Sugar",
    artist: "Maroon 5",
    duration: "03:52",
    votes: "567,234,23",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/Sugar---Maroon-5-320(PagalWorld).mp3?alt=media&token=7f0dca70-1890-4a1b-92db-2b5c0b817997",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/Images%2FSugar.jpeg?alt=media&token=1897b434-b19a-41fd-8156-1fb619135a83",
  },
  {
    id: 7,
    favourite: false,
    songName: "Shape Of You",
    artist: "Ed Sheeran",
    duration: "03:53",
    votes: "345,653,45",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/Ed_Sheeran_-_Shape_of_You_(ColdMP3.com).mp3?alt=media&token=b9d50e59-b891-4823-91a3-9f14c97125c6",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/Images%2FShape%20of%20You.jpeg?alt=media&token=401941e4-e5e0-4241-ba91-30f69e591202",
  },
  {
    id: 8,
    favourite: false,
    songName: "Mask Off",
    artist: "Future",
    duration: "03:24",
    votes: "234,132,67",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/Mask%20Off-(DJMaza).mp3?alt=media&token=7cc63a3f-fac8-497f-939c-c1f5b56556cb",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/Images%2FMask-off.jpeg?alt=media&token=fb780a07-e385-4930-bd78-9ecf2c2cfb74",
  },
  {
    id: 9,
    favourite: false,
    songName: "Run",
    artist: "One Republic",
    duration: "02:53",
    votes: "567,768,34",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/OneRepublic_-_Run.mp3?alt=media&token=54bc8c2e-b2dd-460e-8e43-e00a7f70735f",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/Images%2FRun.jpg?alt=media&token=a2d2928d-68b5-4a86-99b9-286875ba6e6d",
  },
  {
    id: 10,
    favourite: false,
    songName: "Waiting For Love",
    artist: "Avicii",
    duration: "03:51",
    votes: "456,789,45",
    song: "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/Avicii_-_Waiting_For_Love_(Jesusful.com).mp3?alt=media&token=e6e272bb-7395-4e5e-96c6-b101a19ebdef",
    imgSrc:
      "https://firebasestorage.googleapis.com/v0/b/spotify-7d5c0.appspot.com/o/Images%2Fwaiting%20for%20love.jpeg?alt=media&token=db632d86-bad7-44fb-8c45-c1fdb46d7692",
  },
];

export default Songs;