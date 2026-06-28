import { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [grade, setGrade] = useState("");

  const handleAdd = () => {
    if (!name || !age || !grade) return;
    setStudents([...students, { name, age, grade: `Class ${grade}` }]);
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
    <div className="page">
      <div className="card">
        <h1>Student Entry Form</h1>
        <p className="subtitle">Add students and review the list below.</p>

        <div className="form-row">
          <div className="field">
            <label>Name</label>
            <input
              name="name"
              type="text"
              placeholder="e.g. MS Dhoni"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Age</label>
            <input
              name="age"
              type="text"
              placeholder="e.g. 14"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="field">
            <label>Grade</label>
           <select
            name="grade"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
          >
            <option value="">Select grade</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          </div>
        </div>

        <div className="btn-row">
          <button className="btn-add" onClick={handleAdd}>Add Student</button>
          <button className="btn-clear" onClick={handleClear}>Clear</button>
        </div>

        <div className="table-container">
          {students.length === 0 ? (
            <p className="empty">No students added yet.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Grade</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {students.map((s, i) => (
                  <tr key={i}>
                    <td>{s.name}</td>
                    <td>{s.age}</td>
                    <td>{s.grade}</td>
                    <td>
                      <button className="btn-remove" onClick={() => handleRemove(i)}>
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
    </div>
  );
}

export default App;