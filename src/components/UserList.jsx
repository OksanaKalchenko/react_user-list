import { useState } from "react";

export default function UserList() {
  const [users, setUsers] = useState([
    { id: 1, name: "Александр Иванов" },
    { id: 2, name: "Мария Петрова" },
    { id: 3, name: "Дмитрий Смирнов" },
    { id: 4, name: "Елена Козлова" },
    { id: 5, name: "Сергей Новиков" },
  ]);
  const [editingId, setEditingId] = useState(null);
  const [newName, setNewName] = useState("");

  function handleEdit(user) {
    setEditingId(user.id);
    setNewName(user.name);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") {
      setUsers(
        users.map((user) =>
          user.id === editingId ? { ...user, name: newName } : user,
        ),
      );
      setEditingId(null);
    }

    if (e.key === "Escape") {
      setEditingId(null);
    }
  }

  return (
    <div className="users">
      <h1 className="title">Список пользователей</h1>
      <ul className="user__list">
        {users.map((user) => (
          <li key={user.id} className="user__list-item">
            {editingId === user.id ? (
              <input
                type="text"
                className="user__input"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={handleKeyDown}
              ></input>
            ) : (
              <>
                <div className="user__name">{user.name}</div>
                <button className="user__btn" onClick={() => handleEdit(user)}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4493 3.87492C13.8018 3.52253 13.9998 3.04456 13.9999 2.54615C14 2.04774 13.802 1.56972 13.4496 1.21725C13.0973 0.864779 12.6193 0.666727 12.1209 0.666664C11.6225 0.666602 11.1444 0.864534 10.792 1.21692L1.89464 10.1163C1.73986 10.2706 1.62539 10.4606 1.56131 10.6696L0.680643 13.5709C0.663413 13.6286 0.662112 13.6898 0.676877 13.7482C0.691643 13.8065 0.721923 13.8597 0.764508 13.9023C0.807092 13.9448 0.86039 13.975 0.918749 13.9896C0.977108 14.0043 1.03835 14.0029 1.09598 13.9856L3.99798 13.1056C4.20676 13.0421 4.39676 12.9283 4.55131 12.7743L13.4493 3.87492Z"
                      stroke="#0A0A0A"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Переименовать</span>
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="info">
        <h2 className="info__title">💡 Подсказка:</h2>
        <ul className="info__list">
          <li>
            Нажмите <span>Enter</span> для сохранения
          </li>
          <li>
            Нажмите <span>Esc</span> для отмены
          </li>
        </ul>
      </div>
    </div>
  );
}
