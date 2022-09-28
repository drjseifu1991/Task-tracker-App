import Header from "./components/Header";
import { useState } from "react";
import Tasks from "./components/Tasks";
function App() {
  const [tasks] = useState([
    {
      id : 1,
      text : 'Doctors Appointement',
      day : 'Feb 5th at 2:30pm',
      reminder : true,
    },
    {
      id : 2,
      text : 'Meeting at school',
      day : 'Feb 6th at 8:00am',
      reminder : true
    },
    {
      id : 3,
      text : 'Food shopping',
      day : 'Feb 7th at 9:00am',
      reminder : true
    },
    {
      id : 4,
      text : 'Play Football',
      day : 'Feb 8th at 5:00pm',
      reminder : true
    }
  ]);
  return (
    <div className="container">
      <Header/>
      <Tasks tasks= {tasks} />
    </div>
  );
}

export default App;