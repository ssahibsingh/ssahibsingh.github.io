// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
export default function handler(req, res) {
  res.status(200).json(
    {
      name: 'Sahib Singh',
      about: "Full Stack Web Developer || Co-Founder Gaming Geeks || IT Undergrad at NIT Jalandhar",
      resume: "https://ssahibsingh.github.io/resume",
      contact: "https://ssahibsingh.github.io/#contact",
    })
}