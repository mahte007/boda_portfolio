type Step = {
  step?: string;
  title?: string;
  description?: string;
};

type TimelineProps = {
  timeline: Step[];
};

export default function Timeline({ timeline }: TimelineProps) {
  return (
    <div className="flex justify-between gap-8">
      {timeline.map((s, i) => (
        <div
          key={s.step}
          className="flex flex-col items-center text-center w-1/5 relative"
        >
          <div className="bg-b3 rounded-full w-14 h-14 flex items-center justify-center text-white text-[32px] mb-4">
            {s.step}
          </div>
          <div className="text-b2">
            <h3 className="text-[22px] font-semibold mb-2">{s.title}</h3>
            <p className="text-center">{s.description}</p>
          </div>
          {i !== timeline.length - 1 && (
            <span className="h-full w-px flex-1 bg-b3 absolute -right-5" />
          )}
        </div>
      ))}
    </div>
  );
}
