import "./App.css";
import type { Champ } from "./types/Champ";

function App() {

  const champs : Array<Champ> = [
    {id: 1, nev: "Aatrox", role: "top", isRanged: false, isManaUser: false, isMale: true},
    {id: 2, nev: "Ahri", role: "mid", isRanged: true, isManaUser: true, isMale: false}
  ];
  const newrow = (c: Champ) => {
    return (
      <>
        <tr>
          <td>{c.id}</td>
          <td>{c.nev}</td>
          <td>{c.role}</td>
          <td>{c.isRanged? "igen" : "nem"}</td>
          <td>{c.isManaUser? "igen" : "nem"}</td>
          <td>{c.isMale? "igen" : "nem"}</td>
        </tr>
      </>
    )
  }

  return (
  <>
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Role</td>
          <td>Ranged</td>
          <td>ManaUser</td>
          <td>Male</td>
        </tr>
      </thead>
      <tbody>
        {champs.map((i) => newrow(i))}
      </tbody>
    </table>
  </>
  )
}

export default App