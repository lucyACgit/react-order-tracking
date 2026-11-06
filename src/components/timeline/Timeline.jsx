import { TimelineNode } from "./TimelineNode";

export const Timeline = ({ timelineData, children }) => {
  return (
    <section className="timeline-section">
      <header className="page-intro">{children}</header>
      <div className="timeline-container">
        {timelineData.map((item) => (
          <TimelineNode key={item.id} data={item}>
            <div className="timeline-content">
              <h2 className="timeline-title">{item.title}</h2>
              <p className="timeline-description">{item.description}</p>
            </div>
          </TimelineNode>
        ))}
      </div>
    </section>
  );
};
