import React, { useState, useEffect } from "react";

interface NoteData {
  date: string;
  codeUrl?: string;
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
  // {
  //   date: "9/19: Recursion",
  //   slidesUrl:
  //     "https://docs.google.com/presentation/d/1-IBAJfszfLn_0AYVO-Xpw0F27EBoyIk1/edit?usp=sharing&ouid=106249266650853110385&rtpof=true&sd=true",
  //   notesUrl: "",
  // },
  // {
  //   date: "9/17: Lists and List Procedures",
  //   slidesUrl:
  //     "https://docs.google.com/presentation/d/1sRCmDc_7WXj-RW3IaLCBZadMUCfssq6A/edit?usp=sharing&ouid=106249266650853110385&rtpof=true&sd=true",
  //   notesUrl: "",
  // },
  // {
  //   date: "9/15: Recipe, Semantics, and Recursion",
  //   slidesUrl:
  //     "https://docs.google.com/presentation/d/1XPp__n7BJNsELL6d5RwjSDLciEE15Yb3/edit?usp=sharing&ouid=106249266650853110385&rtpof=true&sd=true",
  //   notesUrl: "",
  // },
  // {
  //   date: "9/12: Rules and The Design Recipe",
  //   slidesUrl:
  //     "https://docs.google.com/presentation/d/1TgTRPRmHWY0Z3AADt_hd1A7oGSKXQieh/edit?usp=drive_link&ouid=106249266650853110385&rtpof=true&sd=true",
  //   notesUrl:
  //     "https://drive.google.com/file/d/1qUnAcuBWEReS-FHvEfGAorjOz9w8ua-N/view?usp=sharing",
  // },
  // {
  //   date: "9/10: Expressions and Syntax",
  //   codeUrl:
  //     "https://drive.google.com/drive/folders/1U7aSlp3-CPQa6BRvc8txOGb1TDYoTNX8?usp=sharing",
  //   slidesUrl:
  //     "https://docs.google.com/presentation/d/1hM-8thr9Vi3XzLlJXT-vEUTbXBAVvgOc/edit?usp=drive_link&ouid=106249266650853110385&rtpof=true&sd=true",
  //   notesUrl:
  //     "https://drive.google.com/file/d/1Nnqgi7dt4S3LRca6q3u6ilhKyxQbaRQt/view?usp=sharing",
  // },
  // {
  //   date: "9/8: Expressions and Syntax",
  //   slidesUrl:
  //     "https://docs.google.com/presentation/d/1zrfWZ3fd01EFiylujHc-822WVPLyVYIQ/edit?usp=sharing&ouid=106249266650853110385&rtpof=true&sd=true",
  //   notesUrl:
  //     "https://drive.google.com/file/d/1b5oudHw_Wg3Tbx0NLMHWET04V770FKae/view?usp=sharing",
  // },
  // {
  //   date: "9/5: Arithmetic, Types and Keywords",
  //   slidesUrl:
  //     "https://docs.google.com/presentation/d/16EAzqV9q47hqk7xdEWSGmU5amyF0lNQD/edit?usp=sharing&ouid=106249266650853110385&rtpof=true&sd=true",
  //   notesUrl:
  //     "https://drive.google.com/file/d/1UCIceKkjEZU7-Agx_3AIwme01Iu4-sVn/view?usp=sharing",
  // },
  // {
  //   date: "9/3: Welcome",
  //   slidesUrl:
  //     "https://docs.google.com/presentation/d/1skloaze3krgpx2QEQ52PFPLN1YTjJSyX/edit?slide=id.p1#slide=id.p1",
  //   notesUrl: "",
  // },
];

const NotesTable: React.FC<{ notes: NoteData[] }> = ({ notes }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Class</th>
          <th>Slides</th>
          <th>Code</th>
          <th>Notes</th>
        </tr>
      </thead>
      <tbody>
        {notes.map((note, index) => (
          <tr key={index}>
            <td>{note.date}</td>
            <td>
              {note.slidesUrl && (
                <a href={note.slidesUrl} target="_blank">
                  Slides
                </a>
              )}
            </td>
            <td>
              {note.codeUrl && (
                <a href={note.codeUrl} target="_blank">
                  Code
                </a>
              )}
            </td>
            <td>
              {note.notesUrl && (
                <a href={note.notesUrl} target="_blank">
                  Notes
                </a>
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
        <h1>Notes</h1>
        <p>
          Lecture recordings can be found{" "}
          <b>
            <u>
              <a href="">here</a>
            </u>
          </b>
          .
        </p>
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
