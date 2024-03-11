export function getJobSeeker(user) {
  return jobSeekers.find(ud => ud.name === user);
}

var jobSeekers =
   [
    {
        name: "Adam Davis",
        email: "adam.nmi.davis@gmail.com",
        blog: "https://dynamicsoftwaremd.blogspot.com",
        picture: "adamdavis.png",
        blurbTitle: "Full Stack Development | Cloud Architecture & Integration | Agile Project Management",
        blurbBody: "Creative Senior Software Developer with over 15 years’ experience crafting ground-breaking solutions, delivering major new feature releases, and streamlining inefficient processes. Collaborative leader adept at managing global teams to create front-end and back-end solutions that elevate system performance and promote world-class user experiences. AWS Certified Solutions Architect with five patents for innovative new technologies and history of success across diverse industries and roles.",
        theme: "Navy",
        // link below obtained by Sharing doc and clicking Copy Link, then removing the tail and adding export?format=pdf 
        resumeDownloadPDFLink: "https://docs.google.com/document/d/12sOP6A8IdRy3toRJuibt7NKWLJpLkD-B/export?format=pdf",
        // link below created by opening doc in Google docs, then File menu/ Share/ Publish to Web / Copy Embed Link
        resumeDisplayLink: "https://docs.google.com/document/d/e/2PACX-1vSTUeuF3Nzfr7aQYji6m3DBh0uWZIx_J0AQzgo3SQyFBIr2fjkN7BkNxgtjJ5k3Pg/pub?embedded=true",
        linkedInLink: "https://www.linkedin.com/in/adam-nmi-davis",
        gitHubLink: "https://github.com/adamx97",
      },
    {
        name: "Qres Ephraim",
        email: "qephraim@gmail.com",
        blog: "blog tbd",
        picture: "qresephraim.png",
        blurb: "Qres resume blurb here",
        initialTheme: "Navy",
    },
  ];