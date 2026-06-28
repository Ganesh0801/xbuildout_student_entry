// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [students, setStudents] = useState([]);
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [grade, setGrade] = useState("");

//   const handleAdd = () => {
//     if (!name || !age || !grade) return;
//     setStudents([...students, { name, age, grade: `Class ${grade}` }]);
//     setName("");
//     setAge("");
//     setGrade("");
//   };

//   const handleClear = () => {
//     setName("");
//     setAge("");
//     setGrade("");
//   };

//   const handleRemove = (index) => {
//     setStudents(students.filter((_, i) => i !== index));
//   };

//   return (
//     <div className="page">
//       <div className="card">
//         <h1>Student Entry Form</h1>
//         <p className="subtitle">Add students and review the list below.</p>

//         <div className="form-row">
//           <div className="field">
//             <label>Name</label>
//             <input
//               name="name"
//               type="text"
//               placeholder="e.g. MS Dhoni"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div className="field">
//             <label>Age</label>
//             <input
//               name="age"
//               type="text"
//               placeholder="e.g. 14"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//             />
//           </div>
//           <div className="field">
//             <label>Grade</label>
//            <select
//             name="grade"
//             value={grade}
//             onChange={(e) => setGrade(e.target.value)}
//           >
//             <option value="">Select grade</option>
//             <option value="1">1</option>
//             <option value="2">2</option>
//             <option value="3">3</option>
//             <option value="4">4</option>
//             <option value="5">5</option>
//             <option value="6">6</option>
//             <option value="7">7</option>
//             <option value="8">8</option>
//             <option value="9">9</option>
//             <option value="10">10</option>
//           </select>
//           </div>
//         </div>

//         <div className="btn-row">
//           <button className="btn-add" onClick={handleAdd}>Add Student</button>
//           <button className="btn-clear" onClick={handleClear}>Clear</button>
//         </div>

//         <div className="table-container">
//           {students.length === 0 ? (
//             <p className="empty">No students added yet.</p>
//           ) : (
//             <table>
//               <thead>
//                 <tr>
//                   <th>Name</th>
//                   <th>Age</th>
//                   <th>Grade</th>
//                   <th></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {students.map((s, i) => (
//                   <tr key={i}>
//                     <td>{s.name}</td>
//                     <td>{s.age}</td>
//                     <td>{s.grade}</td>
//                     <td>
//                       <button className="btn-remove" onClick={() => handleRemove(i)}>
//                         Remove
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import { useState } from "react";

const grades = [
  "Class 1", "Class 2", "Class 3", "Class 4", "Class 5",
  "Class 6", "Class 7", "Class 8", "Class 9", "Class 10",
];

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");
  const [students, setStudents] = useState([]);

  const handleAdd = () => {
    if (!name || !age || !grade) return;
    setStudents([...students, { name, age, grade }]);
    setName("");
    setAge("");
    setGrade("");
  };

  const handleClear = () => {
    setName("");
    setAge("");
    setGrade("");
  };

  const handleRemove = (index) => {
    setStudents(students.filter((_, i) => i !== index));
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.title}>Student Entry Form</h1>
        <p style={styles.subtitle}>Add students and review the list below.</p>

        <div style={styles.formRow}>
          <div style={styles.field}>
            <label style={styles.label}>Name</label>
            <input
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. MS Dhoni"
              style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Age</label>
            <input
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="e.g. 14"
              style={styles.input}
            />
          </div>
          <div style={styles.field}>
            <label style={styles.label}>Grade</label>
            <select
              name="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              style={styles.select}
            >
              <option value="">Select grade</option>
              {grades.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={styles.actions}>
          <button onClick={handleAdd} style={styles.addBtn}>Add Student</button>
          <button onClick={handleClear} style={styles.clearBtn}>Clear</button>
        </div>

        {students.length === 0 ? (
          <div style={styles.empty}>No students added yet.</div>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Name</th>
                <th style={styles.th}>Age</th>
                <th style={styles.th}>Grade</th>
                <th style={styles.th}></th>
              </tr>
            </thead>
            <tbody>
              {students.map((s, i) => (
                <tr key={i} style={styles.tr}>
                  <td style={styles.td}>{s.name}</td>
                  <td style={{ ...styles.td, textAlign: "center" }}>{s.age}</td>
                  <td style={styles.td}>{s.grade}</td>
                  <td style={{ ...styles.td, textAlign: "right" }}>
                    <button onClick={() => handleRemove(i)} style={styles.removeBtn}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#eef0f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "sans-serif",
    padding: "24px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    padding: "40px 48px",
    width: "100%",
    maxWidth: "820px",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
  },
  title: {
    textAlign: "center",
    fontWeight: "800",
    fontSize: "28px",
    margin: "0 0 6px",
    color: "#111",
  },
  subtitle: {
    textAlign: "center",
    color: "#777",
    fontSize: "14px",
    margin: "0 0 28px",
  },
  formRow: {
    display: "flex",
    gap: "16px",
    marginBottom: "16px",
    flexWrap: "wrap",
  },
  field: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    minWidth: "160px",
  },
  label: {
    fontSize: "13px",
    color: "#444",
    marginBottom: "6px",
    fontWeight: "500",
  },
  input: {
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "10px 12px",
    fontSize: "14px",
    outline: "none",
    color: "#333",
  },
  select: {
    border: "1px solid #ccc",
    borderRadius: "6px",
    padding: "10px 12px",
    fontSize: "14px",
    outline: "none",
    color: "#333",
    background: "#fff",
  },
  actions: {
    display: "flex",
    gap: "12px",
    marginBottom: "20px",
  },
  addBtn: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 22px",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },
  clearBtn: {
    background: "transparent",
    color: "#333",
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px 22px",
    fontSize: "14px",
    cursor: "pointer",
  },
  empty: {
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    padding: "24px",
    textAlign: "center",
    color: "#aaa",
    fontSize: "14px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    border: "1px solid #e5e7eb",
    borderRadius: "8px",
    overflow: "hidden",
  },
  th: {
    textAlign: "left",
    padding: "12px 16px",
    fontSize: "14px",
    fontWeight: "600",
    color: "#333",
    borderBottom: "1px solid #e5e7eb",
  },
  tr: {
    borderBottom: "1px solid #f3f4f6",
  },
  td: {
    padding: "14px 16px",
    fontSize: "14px",
    color: "#374151",
  },
  removeBtn: {
    background: "#fee2e2",
    color: "#b91c1c",
    border: "none",
    borderRadius: "8px",
    padding: "8px 16px",
    fontSize: "13px",
    fontWeight: "500",
    cursor: "pointer",
  },
};