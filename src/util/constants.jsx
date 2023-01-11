import { woman, doctor, zagrebStore, londonStore } from "../assets";

export const reviews = [
  {
    id: "review1",
    image: doctor,
    name: "Dr. Tessa Ross",
    title: "Dermatologist, Writer",
    content:
      "Nullea has a humanitarian concern, the health of their customer's skin and the quality of their life, this is why I endorse their products fully.",
  },
  {
    id: "review2",
    image: woman,
    name: "Janet Tullman",
    title: "Director, Actress",
    content:
      "It's not only about what Nullea does, it's about what they don't do, like destroy our planet for profit. There really is no other company as committed to our wellbeing.",
  },
];

export const contacts = [
  {
    id: "lovro",
    name: "Lovro Milić",
    role: "UX/UI Designer",
    email: "lovromilic@protonmail.com",
    linkedin: "https://www.linkedin.com/in/lovromilic001/",
  },
  {
    id: "luka",
    name: "Luka Gurdulić",
    role: "Front End Developer",
    email: "gurdulicluka@gmail.com",
    linkedin: "https://www.linkedin.com/in/gurdulic96/",
  },
];

export const locations = [
  {
    id: "zagreb",
    image: zagrebStore,
    telephone: "+385 36/459-1163",
    address: "Ilica 542, 10000 Zagreb, Croatia",
    workHours: "11:00 / 18:00",
    mapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11122.363740676774!2d15.974398200501314!3d45.819450270057246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d6e2e4dd6af5%3A0x42c3a06d31c0071e!2sIlica%2C%2010000%2C%20Zagreb!5e0!3m2!1sen!2shr!4v1672158262302!5m2!1sen!2shr",
  },
  {
    id: "london",
    image: londonStore,
    workHours: "11:00 / 21:00",
    telephone: "+44 91/710-7956",
    address: "Jermyn St, St. James's, London 6AN",
    mapLocation:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2866.525253728069!2d-0.13203903577357817!3d51.52209618747108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b2fc92a2c6f%3A0x1c0bdbaf54b8a583!2sBloomsbury%2C%20London%20WC1H%200AB%2C%20UK!5e0!3m2!1sen!2shr!4v1672159519035!5m2!1sen!2shr",
  },
];
