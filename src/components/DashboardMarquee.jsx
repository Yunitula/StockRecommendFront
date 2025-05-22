import "../index.css";

const randomSequence = (data, len = 40) =>
  Array.from({ length: len }, () => data[Math.floor(Math.random() * data.length)]);

const getColorClasses = (change) => {
  if (!change || typeof change !== "string") {
    return {
      text: "text-black",
      outline: "is-outline-gray"
    };
  }

  const isNegative = change.trim().startsWith("-");
  return {
    text: isNegative ? "text-red-700" : "text-green-700",
    outline: isNegative ? "is-outline-red" : "is-outline-green"
  };
};

const formatChange = (change) => {
  if (!change) return "";
  return change.replace(/[+-]/g, "");
};

const MarqueeNavbarSection = ({ marketData }) => {
  const extendedData = [...marketData, ...marketData, ...marketData, ...marketData];

  const lines = [
    { type: 'small', data: randomSequence(extendedData, 25), speed: 30, reverse: false },
    { type: 'large', data: randomSequence(extendedData, 12), speed: 40, reverse: false },
  ];

  return (
    <div className="tt-marquee-section">
      {lines.map((line, idx) => (
        <div key={idx} className="tt-marquee-group">
          <div className="tt-marquee-track">
            <div
              className={`tt-marquee--textgroup ${line.type} ${line.reverse ? 'reverse' : ''}`}
              style={{ animationDuration: `${line.speed}s` }}
            >
              {[...line.data, ...line.data].map((item, i) => {
                const { text, outline } = getColorClasses(item.change);
                return (
                  <span
                    key={i}
                    className="flex items-center gap-0.5"
                    style={{
                      marginRight: line.type === 'large' ? '2rem' : '1rem',
                      padding: line.type === 'large' ? '0.3rem 0' : '0.2rem 0'
                    }}
                  >
                    <span className={`marquee-text ${line.type} ${text}`}>
                      {formatChange(item.change)}
                    </span>
                    <span className={`marquee-text ${line.type} ${outline}`}>
                      {item.symbol}
                    </span>
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MarqueeNavbarSection;
