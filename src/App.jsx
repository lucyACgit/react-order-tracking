import "./App.css";
import { Timeline } from "./components/timeline/Timeline";
import { timeline } from "./data/timeline";

/*

- The Timeline component should have a header (.page-intro) with a title and a description within.
- The timeline container should have a list of timeline nodes (.timeline-node).
- Each timeline node should have an icon (.timeline-icon) and a content (.timeline-content) within.
- The timeline content should have a title (.timeline-title) and a description (.timeline-description) within.

*/

function App() {
  return (
    <main>
      <Timeline timelineData={timeline}>
        <h1>Order Tracking</h1>
        <p>See your tracking below</p>
      </Timeline>
    </main>
  );
}

export default App;
