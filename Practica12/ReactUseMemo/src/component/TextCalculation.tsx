import React, { useState, useMemo } from "react";

const WORDS_PER_MINUTE = 200; // Velocidad promedio de lectura

const TextCalculation: React.FC = () => {
  console.log("Renderizando componente...");
  const [text, setText] = useState("");

  const metrics = useMemo(() => {
    console.log("Calculando métricas...");

    const words = text.trim().split(/\s+/).filter(Boolean); 
    const totalCharacters = text.length;
    const totalWords = words.length;

    
    const readingTime = totalWords > 0 ? (totalWords / WORDS_PER_MINUTE).toFixed(2) : "0";

  
    const avgWordLength =
      totalWords > 0
        ? (words.join("").length / totalWords).toFixed(2)
        : "0";
    
    return {
      totalCharacters,
      totalWords,
      readingTime,
      avgWordLength,
    };
  }, [text]); // 

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", textAlign: "center" }}>
      <h2>Character Counter</h2>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write a text ..."
        style={{
          width: "100%",
          height: "150px",
          resize: "both", 
          padding: "10px",
          fontSize: "16px",
          borderRadius: "8px",
        }}
      />

      <div style={{ marginTop: "20px", background: "#1f2330", color: "#fff", padding: "20px", borderRadius: "8px" }}>
        <h3>Result</h3>
        <p><strong>Total Characters:</strong> {metrics.totalCharacters}</p>
        <p><strong>Total Words:</strong> {metrics.totalWords}</p>
        <p><strong>Estimated Reading Time:</strong> {metrics.readingTime} min</p>
        <p><strong>Average Word Length:</strong> {metrics.avgWordLength}</p>
      </div>
    </div>
  );
};

export default TextCalculation;
