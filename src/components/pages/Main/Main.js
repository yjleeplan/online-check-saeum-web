import { Col, Image, message, Row } from "antd";
import React, { useState } from "react";
import iconAttendance from "../../../assets/images/icon_attendance.png";
import iconPicture from "../../../assets/images/icon_picture.png";
import iconUserAdd from "../../../assets/images/icon_user_add.png";
import iconVideo from "../../../assets/images/icon_video.png";
import title from "../../../assets/images/title.png";
import Comments from "../../common/Comments";
import SearchAttendanceModal from "../../common/modal/SearchAttendanceModal/SearchAttendanceModal";
import UserAddModal from "../../common/modal/UserAddModal/UserAddModal";
// import VideoPlayer from "../../common/VideoPlayer";

const Main = ({ history, setIsLoading }) => {
  /** State */
  const [userAddModalVisible, setUserAddModalVisible] = useState(false);
  const [searchAttendanceModalVisible, setSearchAttendanceModalVisible] =
    useState(false);

  // useEffect(() => {
  //   const { hostname } = window.location;
  //   if (_.includes(hostname, "dev")) {
  //     window.location.replace("https://online-check.saeum.or.kr/");
  //   }
  //   // eslint-disable-next-line
  // }, []);

  // 사용자 등록 모달 오픈
  const handleUserAddModalOpen = () => {
    setUserAddModalVisible(true);
  };

  // 사용자 등록 모달 닫기
  const handleUserAddModalClose = () => {
    setUserAddModalVisible(false);
  };

  // 출석체크 모달 오픈
  const handleSearchAttendanceModalOpen = () => {
    setSearchAttendanceModalVisible(true);
  };

  // 출석체크 모달 닫기
  const handleSearchAttendanceModalClose = () => {
    setSearchAttendanceModalVisible(false);
  };

  // 영상 링크
  const handleVideoClick = () => {
    message.info("아직 준비중입니다.");
    // window.open(
    //   "https://youtube.com/playlist?list=PLFdkyNDzHdpNVq4q7eDzTQcrHnkVvRs0R"
    // );
  };

  // 추천찬양 링크
  const handlePictureClick = () => {
    window.open("https://youtu.be/QbUo6F0soe0");
  };

  return (
    <>
      <Row className="user-attendance-modal-title">
        <Col span={24}>
          <Image width={220} height={120} src={title} preview={false} />
        </Col>
      </Row>
      <Row className="user-attendance-modal-subtitle">
        <Col span={24}>5.1(일) ~ 5.21(토), 3주간</Col>
      </Row>
      <Row className="user-attendance-modal-icon">
        <Col span={6} onClick={handleUserAddModalOpen} className="icon-wrap">
          <Image
            width={"80%"}
            height={"100%"}
            src={iconUserAdd}
            preview={false}
          />
        </Col>
        <Col
          span={6}
          onClick={handleSearchAttendanceModalOpen}
          className="icon-wrap"
        >
          <Image
            width={"80%"}
            height={"100%"}
            src={iconAttendance}
            preview={false}
          />
        </Col>
        <Col span={6} onClick={handleVideoClick} className="icon-wrap">
          <Image
            width={"80%"}
            height={"100%"}
            src={iconVideo}
            preview={false}
          />
        </Col>
        <Col span={6} onClick={handlePictureClick} className="icon-wrap">
          <Image
            width={"80%"}
            height={"100%"}
            src={iconPicture}
            preview={false}
          />
        </Col>
        <div id="userAddModal">
          <UserAddModal
            visible={userAddModalVisible}
            onCancel={handleUserAddModalClose}
            setIsLoading={setIsLoading}
          />
        </div>
        <div id="searchAttendanceModal">
          <SearchAttendanceModal
            visible={searchAttendanceModalVisible}
            onCancel={handleSearchAttendanceModalClose}
            setIsLoading={setIsLoading}
          />
        </div>
      </Row>
      {/* <VideoPlayer /> */}
      <Comments setIsLoading={setIsLoading} />
    </>
  );
};

export default Main;
