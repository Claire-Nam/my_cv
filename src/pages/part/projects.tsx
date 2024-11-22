import { Col, Container, Row } from "react-bootstrap";
import { projectTag } from "../../component/tags";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ImageModal from "../../component/imageModal";
import TagItem from "../../component/tags";

// 이미지 동적 임포트를 위한 유틸리티 함수 생성
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  return requireContext.keys().map(requireContext);
};

// assets/img 폴더에서 모든 이미지 불러오기
const fitantImages: string[] = importAll(
  require.context("../../assets/img/fitant", false, /\.(png|jpe?g|svg)$/)
) as string[];

const festivalImages: string[] = importAll(
  require.context("../../assets/img/festival", false, /\.(png|jpe?g|svg)$/)
) as string[];

// fitants 배열을 동적으로 생성
const fitants: { url: string }[] = fitantImages.map((img) => ({ url: img }));
const festivals: { url: string }[] = festivalImages.map((img) => ({
  url: img,
}));

// const importImages = (folderName: string): { url: string }[] => {
//   const images = importAll(
//     require.context(
//       `../../assets/img/${folderName}`,
//       false,
//       /\.(png|jpe?g|svg)$/
//     )
//   ) as string[];
//   return images.map((img) => ({ url: img }));
// };

// // 각 폴더에서 이미지 임포트
// const fitant = importImages("fitant");
// const festival = importImages("festival");

const Project: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState("");
  const [modalTitle, setModalTitle] = useState("");

  const handleOpenModal = (title: string, url: string) => {
    setModalTitle(title);
    setSelectedContent(url);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedContent("");
  };
  return (
    <Container>
      <Row className="ms-3">
        <Col md={4} className="project_body">
          <p className="project_body_name">2024.11 ~ 2024.11 (2주)</p>
          <span>
            <a href="https://github.com/Claire-Nam/my_cv">
              https://github.com/Claire-Nam/my_cv
            </a>
          </span>
        </Col>
        <Col className="project_body">
          <p className="project_body_name">
            개발자용 이력서 사이트
            <span className="ms-2">
              리액트와 SQL을 이용한 이력서 및 블로그 페이지 구축(개인 프로젝트)
            </span>
          </p>
          <ul className="mb-2">
            <p>
              ▶ 개인 이력서 및 자소서를 한번에 볼 수 있도록 개발한 개인용 이력서
              웹사이트
            </p>
            <p>▶ 구현 기능: </p>
            <li>
              라우터로 이력서와 자소서 간 페이지 이동 구현(페이지 변동에 따른
              메뉴 목록 변경)
            </li>
            <li>태그, 이미지 및 pdf 파일 모달 컴포넌트로 구현</li>
            <p>
              ▶ 사이트:
              <a
                href="http://127.0.0.1:3000/resume"
                target="_blank"
                className="ms-2"
              >
                내 이력서 사이트
              </a>
              <b>(로컬에서만 확인 가능)</b>
            </p>
          </ul>
          <TagItem tags={projectTag.cv} />
        </Col>
      </Row>

      <Row className="ms-3 mt-4">
        <Col md={4} className="project_body">
          <p className="project_body_name">2024.09 ~ 2024.10 (3주)</p>
          <span>
            <a href="https://github.com/Claire-Nam/festival" target="_blank">
              https://github.com/Claire-Nam/festival
            </a>
            <br />
          </span>
        </Col>
        <Col className="project_body">
          <p className="project_body_name">
            HTML5 기반 웹애플리케이션 제작하기
            <span className="ms-2">
              바닐라 자바스크립트를 이용한 정보 제공 웹어플리케이션(개인
              프로젝트)
            </span>
          </p>
          <ul className="mb-2">
            <p>
              ▶ 지방 지역 방문 여행자를 위한 축제, 먹거리, 주차 정보 등을
              제공하는 웹어플리케이션
            </p>
            <p>▶ 구현 기능: </p>
            <li>
              오픈 API를 jQeury로 통신하여 화면에 렌더링하는 형태로 먹거리와
              축제 정보 구현
            </li>
            <li>
              카카오 지도 오픈 API를 연결하여 지도를 그리고 내 위치를 마커로
              표시
            </li>
            <p>
              ▶ 사이트:
              <a
                href="https://claire-nam.github.io/festival/"
                target="_blank"
                className="ms-2"
              >
                Travel Partner
              </a>
              <b>(로컬에서만 확인 가능)</b>
            </p>
          </ul>
          <TagItem tags={projectTag.festival} />
          <div className="fitants mt-3">
            {festivals
              .filter((thumb) => thumb.url)
              .map((thumb, index) => (
                <img
                  key={index}
                  src={thumb.url}
                  alt={`Thumbnail ${index + 1}`}
                  style={{
                    width: "30px",
                    height: "30px",
                    cursor: "pointer",
                    margin: "5px",
                  }}
                  onClick={() =>
                    handleOpenModal(
                      "지역 축제 및 먹거리 정보 웹어플리케이션 프로젝트",
                      thumb.url
                    )
                  }
                />
              ))}
          </div>
          <ImageModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            contentUrl={selectedContent}
            title="지역 축제 및 먹거리 정보 웹어플리케이션 프로젝트"
          />
        </Col>
      </Row>

      <Row className="ms-3 mt-4">
        <Col md={4} className="project_body">
          <p className="project_body_name">2024.07 ~ 2024.08 (3주)</p>
          <span>
            <a
              href="https://github.com/Claire-Nam/project_elice_shopping"
              target="_blank"
            >
              https://github.com/Claire-Nam/project_elice_shopping
            </a>
            <br />
            <a
              href="https://kdt-gitlab.elice.io/sw_track/class_09/web_project2/team01"
              target="_blank"
            >
              참조(Elice_GitLab)
            </a>
          </span>
        </Col>
        <Col className="project_body">
          <p className="project_body_name">
            쇼핑몰 웹사이트 구축
            <span className="ms-2">
              리액트를 이용한 여성 운동복 전문 쇼핑몰(팀 프로젝트)
            </span>
          </p>
          <ul className="mb-2">
            <p>
              ▶ 20,30 여성을 타겟으로 하는 여성 운동복 전문 이커머스 웹사이트
            </p>
            <p>▶ 담당 페이지: 장바구니 페이지</p>
            <p>▶ 담당 포지션: FE(프론트엔드) & BE(백엔드)</p>
            <p>▶ 구현 기능: </p>
            <li>아이템 삭제 기능 구현(개별 삭제, 선택 삭제, 일괄 삭제)</li>
            <li>아이템 옵션 및 수량 변경(모달로 구현)</li>
            <li>옵션 변경에 따른 상품 가격 및 총 상품 가격 업데이트</li>
            <p>
              ▶ 사이트:
              <a href="http://34.47.91.245/" target="_blank" className="ms-2">
                Fitant
              </a>
              <b>(배포 완료)</b>
            </p>
          </ul>
          <TagItem tags={projectTag.fitant} />
          <div className="fitants mt-3">
            {fitants
              .filter((thumb) => thumb.url)
              .map((thumb, index) => (
                <img
                  key={index}
                  src={thumb.url}
                  alt={`Thumbnail ${index + 1}`}
                  style={{
                    width: "30px",
                    height: "30px",
                    cursor: "pointer",
                    margin: "5px",
                  }}
                  onClick={() =>
                    handleOpenModal("여성 운동복 쇼핑몰 프로젝트", thumb.url)
                  }
                />
              ))}
          </div>
          <ImageModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            contentUrl={selectedContent}
            title="여성 운동복 쇼핑몰 프로젝트"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
