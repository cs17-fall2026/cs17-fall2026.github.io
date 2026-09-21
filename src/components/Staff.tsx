import React, { useEffect, useState } from "react";
import axolotl from "../assets/staff-images/axolotl.png";
import philip from "../assets/staff-images/philip.png";
import nitya from "../assets/staff-images/nitya.png";
import may from "../assets/staff-images/may.png";
import daphne from "../assets/staff-images/daphne.png";
import toren from "../assets/staff-images/toren.png";
import kate from "../assets/staff-images/kate.png";
import kate_alt from "../assets/staff-images/kate_alt.png";
import julie from "../assets/staff-images/julie.png";
import julie_alt from "../assets/staff-images/julie_alt.png";
import abby from "../assets/staff-images/abby.png";
import taha from "../assets/staff-images/taha.png";
import may_alt from "../assets/staff-images/may_alt.png";

interface StaffMember {
  name: string;
  role?: string;
  pronouns: string;
  location: string;
  bio: string;
  img: string;
  hoverImg?: string;
  favoriteSeaAnimal?: string;
  email?: string;
}

const DEFAULT_HOVER_IMG = axolotl;

const staffMembers: StaffMember[] = [
  {
    name: "Prof. Klein",
    email: "klein@brown.edu",
    pronouns: "he/him",
    location: "Berkeley, CA",
    bio: "I grew up in Berkeley, CA. I co-developed CS 17 in the late nineties. My research addresses algorithms for problems in graphs, e.g. the traveling-salesman problem. This summer, I worked at Amazon on optimization algorithms.  I previously worked at Lyft, where my code is used to process driver location data.  I'm into rock climbing and slacklining.",
    img: philip,
    favoriteSeaAnimal: "Nematode",
  },
  {
    name: "Julie",
    email: "cs0170headtas@lists.brown.edu",
    role: "HTA",
    pronouns: "she/her",
    location: "Newton, MA",
    bio: "Hello! I'm a senior studying computer science. In my free time, I like to draw, crochet, and sip coffee. A fun fact about me is that I've showered in the CIT before. Looking forward to a good semester!",
    img: julie,
    hoverImg: julie_alt,
    favoriteSeaAnimal: "Sea slug",
  },
  {
    name: "Abby",
    email: "cs0170headtas@lists.brown.edu",
    role: "HTA",
    pronouns: "she/her",
    location: "Abington, MA",
    bio: "Hey everyone! I am a junior studying CS-Econ. When I'm not in the CIT, you can find me reading, knitting, running, or learning to play guitar. I also love trying new coffee shops and restaurants in Providence. Looking forward to a great semester!!!",
    img: abby,
    favoriteSeaAnimal: "Seahorse",
  },
  {
    name: "Daphne",
    role: "UTA",
    pronouns: "she/her",
    location: "Westchester, NY",
    bio: "Hi guys, I’m a senior studying English and APMA-CS! I’m really into writing, reading (let me know if you have any recs!), watching obscure video essays, and listening to LE SSERAFIM. Really looking forward to meeting everyone :)",
    img: daphne,
    favoriteSeaAnimal: "Orca",
  },
  {
    name: "Kate",
    role: "UTA",
    pronouns: "she/her",
    location: "Glastonbury, CT",
    bio: "Hi! I’m a sophomore from Connecticut studying CS and IAPA. I love playing social deduction games like Blood on the Clocktower and The Resistance: Avalon. I also enjoy drawing and making stickers. I’m excited to meet you all :D",
    img: kate,
    hoverImg: kate_alt,
    favoriteSeaAnimal: "Hermit crab",
  },
  {
    name: "May",
    role: "UTA",
    pronouns: "she/her",
    location: "Tokyo, Japan",
    bio: "Hey everyone! I’m a sophomore from Tokyo studying Design Engineering. Outside of TA-ing you can find me playing video games, grinding Duolingo, or trying different cafés with friends. Super excited to get to know you all!",
    img: may,
    hoverImg: may_alt,
    favoriteSeaAnimal: "Orcas",
  },
  {
    name: "Nitya",
    role: "UTA",
    pronouns: "she/her",
    location: "Mumbai, India",
    bio: "Hi, I'm a junior studying Biochemistry & Molecular Biology. Outside of classes, I love dancing, sewing, and exploring new places and foods. Excited to meet everyone this semester!",
    img: nitya,
    favoriteSeaAnimal: "Starfish",
  },
  {
    name: "Ramesh",
    role: "UTA",
    pronouns: "he/him",
    location: "Miami, FL",
    bio: "",
    img: axolotl,
    favoriteSeaAnimal: "",
  },
  {
    name: "Taha",
    role: "UTA",
    pronouns: "he/him",
    location: "Singapore",
    bio: "Hi! I'm a senior studying APMA-CS from Singapore. I like playing badminton, failing NYT games and reading random wikipedia articles. Super excited to get know all of you this semester!",
    img: taha,
    favoriteSeaAnimal: "",
  },
  {
    name: "Toren",
    role: "UTA",
    pronouns: "he/him",
    location: "El Cerrito, CA",
    bio: "Hey everyone! I'm a sophomore studying applied math and CS from the Bay Area. In my free time, I love playing Geoguessr, soccer, chess, and trying new boba places. Excited to meet you all!",
    img: toren,
    favoriteSeaAnimal: "Humuhumunukunukuāpuaʻa",
  },
];

interface StaffImageProps {
  src: string;
  hoverSrc: string;
  alt: string;
}

function StaffImage({ src, hoverSrc, alt }: StaffImageProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <img
      src={hovered ? hoverSrc : src}
      alt={alt}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
}

export default function Staff() {
  const [featured, setFeatured] = useState<StaffMember>(staffMembers[0]);

  // Preload hover images so the swap doesn't flicker the first time.
  useEffect(() => {
    staffMembers.forEach((member) => {
      const preload = new Image();
      preload.src = member.hoverImg ?? DEFAULT_HOVER_IMG;
    });
  }, []);

  return (
    <div className="staff-body">
      <div className="staff-feature">
        <StaffImage
          key={featured.name}
          src={featured.img}
          hoverSrc={featured.hoverImg ?? DEFAULT_HOVER_IMG}
          alt={featured.name}
        />
        <h1>{featured.name}</h1>
        {featured.role && <h3>{featured.role}</h3>}
        <h4>
          <i>
            {featured.pronouns} | {featured.location}
          </i>
        </h4>
        {featured.email && <h5>{featured.email}</h5>}
        <p>{featured.bio}</p>
        <p>
          <b>Favorite sea animal: </b>
          {featured.favoriteSeaAnimal}
        </p>
      </div>

      <div className="staff-all">
        <div className="staff-cards">
          {staffMembers.map((member, idx) => (
            <div
              key={idx}
              className="staff-card"
              onClick={() => setFeatured(member)}
            >
              <StaffImage
                src={member.img}
                hoverSrc={member.hoverImg ?? DEFAULT_HOVER_IMG}
                alt={member.name}
              />
              <h1>{member.name}</h1>
              {member.role && <h3>{member.role}</h3>}
              <h4>
                {member.pronouns} | {member.location}
              </h4>
              <p>{member.bio}</p>
              <p>
                <b>Favorite sea animal: </b>
                {member.favoriteSeaAnimal}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
