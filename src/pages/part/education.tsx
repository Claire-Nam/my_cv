import { Col, Container, Row } from "react-bootstrap";
import ImageModal from "../../component/imageModal";
import { useState } from "react";
import TagItem, { eduTag } from "../../component/tags";

// 이미지 동적 임포트를 위한 유틸리티 함수 생성
const importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
  return requireContext.keys().map(requireContext);
};

// assets/img 폴더에서 모든 이미지 불러오기
const eliceImages: string[] = importAll(
  require.context("../../assets/img/elice", false, /\.(png|jpe?g|svg)$/)
) as string[];

// 모든 pdf 파일 불러오기
const pdfFiles: string[] = importAll(
  require.context("../../assets/pdf", false, /\.pdf$/)
) as string[];

// thumbnails 배열을 동적으로 생성
const thumbnails: { url: string }[] = eliceImages.map((img) => ({ url: img }));

const Education: React.FC = () => {
  // 모달 열림 상태와 선택된 콘텐츠 URL 상태 관리
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
          <p className="project_body_name">
            2024.07 ~ 2024.12
            <br />
            <span>
              KOSTA(한국소프트웨어기술진흥협회)
              <br /> Seoul
            </span>
          </p>
        </Col>
        <Col className="project_body">
          <p className="project_body_name">
            Node.JS 기반 DevOps 개발자 양성 훈련과정
          </p>
          <TagItem tags={eduTag.kosta} />
        </Col>
      </Row>

      <Row className="ms-3 mt-4">
        <Col md={4} className="project_body">
          <p className="project_body_name">
            2024.04 ~ 2024.08
            <br />
            <span>
              Elice
              <br /> Seoul
            </span>
          </p>
        </Col>
        <Col className="project_body">
          <p className="project_body_name">프론트엔드 & 백엔드 웹개발자 트랙</p>
          <div className="thumbnails mt-3">
            {thumbnails
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
                    handleOpenModal("엘리스 SW9기 트랙 수료증", thumb.url)
                  }
                />
              ))}

            <button
              className="btn btn-secondary me-2"
              onClick={() => window.open(pdfFiles[1], "_blank")}
              style={{ height: "30px", fontSize: "13px", paddingTop: "2px" }}
            >
              Fitant
            </button>
          </div>
          <ImageModal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            contentUrl={selectedContent}
            title="엘리스 SW9기 트랙 수료증"
          />
          <TagItem tags={eduTag.elice} />
        </Col>
      </Row>

      <Row className="ms-3 mt-4">
        <Col md={4} className="project_body">
          <p className="project_body_name">
            2019.05 ~ 2019.08
            <br />
            <span>
              LSBF(London Shcool of Business and Finance)
              <br /> the UK
            </span>
          </p>
        </Col>
        <Col className="project_body">
          <p className="project_body_name">
            Post-graduate Marketing & Management Course
          </p>
          <TagItem tags={eduTag.lsbf} />
        </Col>
      </Row>

      <Row className="ms-3 mt-4">
        <Col md={4} className="project_body">
          <p className="project_body_name">
            2013.04 ~ 2017.03
            <br />
            <span>
              岡山大学
              <br /> Japan
            </span>
          </p>
        </Col>
        <Col className="project_body">
          <p className="project_body_name">법학부 법학과</p>
          <ul className="mb-2">
            <p>▶ 인턴: 岡山総合法律事務所(오카야마법률 사무소)</p>
            <p>▶ 모의재판 참여 경험(우승) </p>
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
