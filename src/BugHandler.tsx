// import { useEffect, useState } from "react";
// import { maxLetters, maxRings } from "./Constants";
// import { GenerateRandomLetter } from "./Utils";
// import { Bug, BugProps } from "./Bug";

// export const BugHandler = () => {
//   const [totalLetters, setTotalLetters] = useState();
//   const [bugs, setBugs] = useState<BugProps[]>([]);

//   useEffect(() => {
//     const handleKeyDown = (event: KeyboardEvent) => {
//       const keyPressed = event.key.toUpperCase();

//       setBugs((oldBugs) => {
//         return oldBugs.map((bug) => {
//           if (bug.letters.includes(keyPressed)) {
//             return {
//               ...bug,
//               initialLetters: bug.letters.replace(
//                 new RegExp(keyPressed, "g"),
//                 ""
//               ),
//             };
//           }
//           return bug;
//         });
//       });
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   // Create levels?

//   const GenerateBug = () => {
//     const amountOfLetters = Math.floor(Math.random() * maxLetters) + 1;
//     const amountOfRings = Math.floor(Math.random() * maxRings) + 1;
//     const letters = Array.from({ length: amountOfLetters }, () =>
//       GenerateRandomLetter()
//     ).join("");

//     return (
//       <Bug
//         letters={letters}
//         initialNumOfRings={amountOfRings}
//         lettersFirst={Math.random() < 0.5}
//       />
//     );
//   };

//   return <div>BugHandler</div>;
// };
