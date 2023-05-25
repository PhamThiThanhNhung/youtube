import React from "react";

const optionItems = [
  "Tât cả",
  "Âm nhạc",
  "Trực tiếp",
  "Danh sách kết hợp",
  "Toán học",
  "Trò chơi",
  "Hoạt hình",
  "Nấu ăn",
  "Mới tải lên gần đây",
  "Đã xem",
  "Đề xuất mới",
];

const ListOption = () => {
  return (
    <div className="side-bar">
      {optionItems.map((option) => (
        <button key={option} className="options">
          {option}
        </button>
      ))}
    </div>
  );
};

export default ListOption;
