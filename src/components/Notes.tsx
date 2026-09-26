import React, { useState, useEffect } from "react";

interface NoteData {
  date: string;
  video: string;
  slidesUrl?: string;
  notesUrl?: string;
}

const notesData: NoteData[] = [
  // {
  //   date: "12/3: Limits of Sorting",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/14MGNUAp-nFtCQQR9M8DIRsw8n2CUIHbm/view?usp=sharing",
  // },
  // {
  //   date: "11/24: Big Questions",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1aAD0jPJKkYfXoXdr917jrVekCdrKerrn/view?usp=sharing",
  // },
  // {
  //   date: "11/21: All you need is Lambda",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1Oz5ogxxozIl9f7X6szg7VYYBK8sLxPtw/view?usp=sharing",
  // },
  // {
  //   date: "11/19: AB Pruning",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1XIIsruSZ3HSC-du-Fcpe5L2R9O9qLUOc/view?usp=sharing",
  // },
  // {
  //   date: "11/17: Games, Part 2",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/18M8BPf9Ov5-1DWFQyScZieS-T7ZKXqpJ/view?usp=sharing",
  // },
  // {
  //   date: "11/14: Games, Part 1",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1ArzCCGbRM2lApNrE9KhYeuWEAIVNlpR1/view?usp=sharing",
  // },
  // {
  //   date: "11/12: Code Polishing",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1Fp2ILKkAG_cMGtrAqUdYqXluS0LLkXV0/view?usp=sharing",
  //   codeUrl:
  //     "https://docs.google.com/document/d/1JgzJksrRRCTfeAwpBKp8V-sNOqGCFTHDNyka4_zLj3s/edit?tab=t.0",
  // },
  // {
  //   date: "11/10: A Whirlwind Tour of Sorting",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1VhCRvHmJZI7XFuoM_MHo9OkLAH1VDwwT/view?usp=sharing",
  // },
  // {
  //   date: "11/7: Even More Analysis",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1k7AI5HNjP_oAlotfBMPsD35TTa9cpt5R/view?usp=sharingß",
  // },
  // {
  //   date: "11/5: Analysis Again",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1U4SnL0gpvQdJfDVpsFl-k_Hripu1PgLy/view?usp=sharing",
  // },
  // {
  //   date: "11/1: Lambdas and Analysis Again",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1VsAWRcEu2cdB2TMjEzNs9WbwU7orRy2l/view?usp=sharing",
  // },
  // {
  //   date: "10/31: First-class functions, Environments, and the Final Rules of Evaluation 🎃",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1KmlUezChJa96PnR9DHn70PBmEaSVazlg/view?usp=sharing",
  // },
  // {
  //   date: "10/27: ADTs, Part 2",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1cc8ldZcAg-utKtKkQASW-Nf11LscHe3Z/view?usp=sharing",
  // },
  // {
  //   date: "10/24: Effective Options",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1G7ifpxnsrsrgxnhIavBf8Ux_l0t5f-gf/view?usp=sharing",
  // },
  // {
  //   date: "10/22: Trees",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1ePGkI7tXV5thvwc1AiP7JOG7NEuTiKFP/view?usp=sharing",
  // },
  // {
  //   date: "10/20: The Truth about Closures",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1xojy2XUvZoqy6R7XDrqSwwC2KlFf7KjD/view?usp=sharinghttps://drive.google.com/file/d/1xojy2XUvZoqy6R7XDrqSwwC2KlFf7KjD/view?usp=sharing",
  // },
  // {
  //   date: "10/17: Rackette Preview",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1IJEp75LPKxQCrdXHEgYYeE-6pPjZqb0u/view?usp=sharing",
  // },
  // {
  //   date: "10/15: Even more ReasonML",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1Cb-fFoCRAxAIhjWdB3wzkE66rkUYzNiA/view?usp=sharing",
  // },
  // {
  //   date: "10/10: More ReasonML",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1R6sy2TYgCop91xt1LOK_HZ7A3u0v2DPf/view?usp=sharing",
  // },
  // {
  //   date: "10/8: The End of Racket",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1650JtazjGjHIEFkhaNAdyD6pXDjcCqcP/view?usp=sharing",
  //   notesUrl: "",
  // },
  // {
  //   date: "10/6: Let and Combinatorics",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/17Etqp-qKwFdwsiNNh2rRVXKFh4snqtBy/view?usp=sharing",
  //   notesUrl: "",
  // },
  // {
  //   date: "10/3: Floorsweepings",
  //   slidesUrl:
  //     "https://docs.google.com/presentation/d/1dvOBnY5lrLuN-NYfwZa2fZjFU_7bmJ3r/edit?usp=sharing&ouid=106249266650853110385&rtpof=true&sd=true",
  //   notesUrl: "",
  // },
  // {
  //   date: "10/1: Operation Counting and Lambda",
  //   slidesUrl:
  //     "https://drive.google.com/file/d/1x8TdfqaLejFYjo5q7EA3YfPWwYTKNZkd/view?usp=sharing",
  //   notesUrl: "",
  // },
  // {
  //   date: "9/26: Operation Counting (II), map, reversing a list ",
  //   slidesUrl:
  //     "https://docs.google.com/presentation/d/12DDadj8VFJTxi2588NYILtew31Z0H6TA/edit?usp=sharing&ouid=106249266650853110385&rtpof=true&sd=true",
  //   notesUrl: "",
  // },
  // {
  //   date: "9/24: Operation Counting",
  //   slidesUrl:
  //     "https://docs.google.com/presentation/d/1957veMjI0GkaEQv3pFbjAkUCIgDOkD8M/edit?usp=sharing&ouid=106249266650853110385&rtpof=true&sd=true",
  //   notesUrl: "",
  // },
  // {
  //   date: "9/22: Why Diagrams Work & Two-argument recursion",
  //   slidesUrl:
  //     "https://docs.google.com/presentation/d/1souAHufHLO8LVZg1R0Lo8IJdcLK_tcPo/edit?slide=id.p1#slide=id.p1",
  //   notesUrl: "",
  //   codeUrl:
  //     "https://drive.google.com/file/d/1a_WEayDTDDwi_xwFnEj8bJut1ktGTHOF/view?usp=sharing",
  // },
{
    date: "9/25: More Recursion and Binary",
    slidesUrl:
      "https://drive.google.com/file/d/1HkEojADJKPmmmqYCdT4zAwihjkvng3an/view?usp=drive_link",
    notesUrl: 
      "https://drive.google.com/file/d/1pW-Cc7CsAKnjiDpCLfgqiAnxSbWr66ur/view?usp=drive_link",
    video:
      "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=44cdb4d8-e818-4a67-9862-b4d00137c886"
  },
{
    date: "9/23: Shadowing and Recursion",
    slidesUrl:
      "https://drive.google.com/file/d/1qzRrLj1LiBkeCU2SyQey5uGowSSLnI6x/view?usp=drive_link",
    notesUrl: 
      "https://drive.google.com/file/d/1yB9ePVnyukoDIG_SHhOmTNsVaE9A3MRr/view?usp=drive_link",
    video:
      "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=1b91cec4-51c5-4870-ba1a-b4ce0128ab7a"
  },
{
    date: "9/21: Special Forms",
    slidesUrl:
      "https://drive.google.com/file/d/1SoqlXXjWD-edYkh2pXSNmMwnkqeFQdy0/view?usp=drive_link",
    notesUrl: 
      "https://drive.google.com/file/d/13vgIrMvp7x_N1fG-M37jSZB_XI0US27c/view?usp=drive_link",
    video:
      "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=3a2e974c-a3c5-46f0-a36e-b4cc012852f7"
  },
{
    date: "9/18: Procedure-valued Expressions",
    slidesUrl:
      "https://drive.google.com/file/d/1HUoW5oddlWGLpBOgjjCx3s752yDfbpPa/view?usp=drive_link",
    notesUrl: 
      "https://drive.google.com/file/d/11yMuBR0GDnqc5NEMfAtZT3TesllnoAlq/view?usp=drive_link",
    video:
      "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=b8a77dbf-b633-4e7a-aad3-b4c90129acb0"
  },
  {
    date: "9/16: Lists and Bindings",
    slidesUrl:
      "https://drive.google.com/file/d/12ByXY3NtnvjTx_A_EvarR8qOyBjJ_8QX/view?usp=drive_link",
    notesUrl: 
      "https://drive.google.com/file/d/1pBnyAiFhFWzeo8pd7klUvVan4COIFvOe/view?usp=drive_link",
    video:
      "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=491626a5-2083-4ad8-a823-b4c7012a45f6"
  },
  {
    date: "9/14: Algorithmics and Evaluation",
    slidesUrl:
      "https://drive.google.com/file/d/1hh7CaV_jBMQ0436LFstm3qC_VDVdZPZx/view?usp=drive_link",
    notesUrl: 
      "https://drive.google.com/file/d/1HnXq-Dk6QBJ4q2k0_TS65ARb4XKY-gyY/view?usp=drive_link",
    video:
      "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=8b043295-8442-4304-ab84-b4c5012898d2"
  },
  {
    date: "9/11: Data and Evaluations",
    slidesUrl:
      "https://drive.google.com/file/d/1gZqKAdo3BQavpJ0oCQeBNfw15GVM2dgL/view?usp=drive_link",
    notesUrl: 
      "https://drive.google.com/file/d/1EkZrVBZ7_yRse5l4hLYWyvuZJXZf2sbF/view?usp=drive_link",
    video:
      "",
  },
  {
    date: "9/9: Welcome",
    slidesUrl:
      "https://drive.google.com/file/d/1tR2UJiQfKXZS5zhn2wbHqDxwbs0Nxf3E/view?usp=sharing",
    notesUrl: 
      "https://drive.google.com/file/d/1vihlqGMIW7p7-UM8JEw9qE6pHe0M7NTp/view?usp=drive_link",
    video:
      "https://brown.hosted.panopto.com/Panopto/Pages/Viewer.aspx?id=a713b19a-a77e-474f-97db-b4c00128b4ff",
  },
];

const NotesTable: React.FC<{ notes: NoteData[] }> = ({ notes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Class</th>
          <th>Notes</th>
          <th>Slides</th>
          <th>Video</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note, index) => (
          <tr key={index}>
            <td>{note.date}</td>
            <td>
              {note.notesUrl && (
                <a href={note.notesUrl} target="_blank">
                  Notes
                </a>
              )}
            </td>
            <td>
              {note.slidesUrl && (
                <a href={note.slidesUrl} target="_blank">
                  Slides
                </a>
              )}
            </td>
            <td>
              {note.video ? (
                <a href={note.video} target="_blank">
                  Video
                </a>
              ) : (
                <span className="unavailable">Unavailable</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const NotesPage: React.FC = () => {
  const recentNotes = notesData.slice(-3).reverse();
  const upcomingClasses = [{ date: "9/6: TBA!" }];

  return (
    <>
      <div className="page-content">
        <h1>Classes</h1>
        <p>
          The typed notes are adapted from past years and might not 100% match
          what was said in lecture.
        </p>
        <NotesTable notes={notesData} />
      </div>
    </>
  );
};

export default NotesPage;
