import { Image, message, Modal } from "antd";
import React from "react";
import * as api from "../../api";
import btn1 from "../../assets/images/btn_1.png";
import btn10 from "../../assets/images/btn_10.png";
import btn11 from "../../assets/images/btn_11.png";
import btn12 from "../../assets/images/btn_12.png";
import btn13 from "../../assets/images/btn_13.png";
import btn14 from "../../assets/images/btn_14.png";
import btn15 from "../../assets/images/btn_15.png";
import btn16 from "../../assets/images/btn_16.png";
import btn17 from "../../assets/images/btn_17.png";
import btn18 from "../../assets/images/btn_18.png";
import btn19 from "../../assets/images/btn_19.png";
import btn2 from "../../assets/images/btn_2.png";
import btn20 from "../../assets/images/btn_20.png";
import btn21 from "../../assets/images/btn_21.png";
import btn3 from "../../assets/images/btn_3.png";
import btn4 from "../../assets/images/btn_4.png";
import btn5 from "../../assets/images/btn_5.png";
import btn6 from "../../assets/images/btn_6.png";
import btn7 from "../../assets/images/btn_7.png";
import btn8 from "../../assets/images/btn_8.png";
import btn9 from "../../assets/images/btn_9.png";
import bonus from "../../assets/images/btn_bonus.png";
import complete from "../../assets/images/btn_complete.png";
import soon from "../../assets/images/btn_soon.png";
import { IS_COMPLETE } from "../../context/Context";

const Stamp = ({
  index,
  attendanceYn,
  attendanceId,
  onSelectUser,
  setIsLoading,
  today,
  hour,
}) => {
  // 금일자 컬럼 Formatter
  const indexFormatter = (index) => {
    return {
      0: "DAY1",
      1: "DAY2",
      2: "DAY3",
      3: "DAY4",
      4: "DAY5",
      5: "DAY6",
      6: "DAY7",
      7: "DAY8",
      8: "DAY9",
      9: "DAY10",
      10: "DAY11",
      11: "DAY12",
      12: "DAY13",
      13: "DAY14",
      14: "DAY15",
      15: "DAY16",
      16: "DAY17",
      17: "DAY18",
      18: "DAY19",
      19: "DAY20",
      20: "DAY21",
    }[index];
  };

  // 스탬프 Formatter
  const stampFormatter = (value) => {
    return {
      DAY1: btn1,
      DAY2: btn2,
      DAY3: btn3,
      DAY4: btn4,
      DAY5: btn5,
      DAY6: btn6,
      DAY7: btn7,
      DAY8: btn8,
      DAY9: btn9,
      DAY10: btn10,
      DAY11: btn11,
      DAY12: btn12,
      DAY13: btn13,
      DAY14: btn14,
      DAY15: btn15,
      DAY16: btn16,
      DAY17: btn17,
      DAY18: btn18,
      DAY19: btn19,
      DAY20: btn20,
      DAY21: btn21,
      COMPLETE: complete,
      BONUS: bonus,
      SOON: soon,
    }[value];
  };

  // 스탬프 타입
  const stampType = () => {
    let type = IS_COMPLETE(attendanceYn);
    if (!type) {
      type = indexFormatter(index);
    }

    return type;
  };

  // 스탬프 이미지 소스
  const stampSource = () => {
    const type = stampType();

    return stampFormatter(type);
  };

  // 출석
  const handleUpdatedAttendance = () => {
    Modal.confirm({
      title: `${index + 1}일차`,
      content:
        attendanceYn === "N"
          ? "출석 처리하시겠습니까?"
          : "결석 처리하시겠습니까?",
      okText: "확인",
      cancelText: "취소",
      onOk: async () => {
        try {
          setIsLoading(true);

          const value = attendanceYn === "N" ? "Y" : "N";

          await api.updatedAttendance({
            path: { attendance_id: attendanceId },
            data: { [`day${Number(index) + 1}`]: value },
          });

          onSelectUser();
        } catch (error) {
          message.error(
            error.response ? `${error.response.data.message}` : "출석 실패"
          );
        } finally {
          setIsLoading(false);
        }
      },
    });
  };

  return (
    <div>
      <Image
        wrapperClassName={attendanceYn !== "N" ? "btnEffect" : ""}
        src={stampSource()}
        preview={false}
        onClick={handleUpdatedAttendance}
      />
      {Number(index) + 1}일차
    </div>
  );
};

export default Stamp;
