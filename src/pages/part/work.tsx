import { Col, Container, Row } from "react-bootstrap";
import { workTag } from "../../component/tags";
import TagItem from "../../component/tags";

const Work: React.FC = () => {
  return (
    <Container>
      <Row className="ms-3">
        <Col md={4} className="project_body">
          <p className="project_body_name">2022.07 ~ 2024.02</p>
          <span className="ms-2">Seoul, South Korea</span>
        </Col>
        <Col className="project_body">
          <p className="project_body_name">
            어센트 코리아
            <span className="ms-2">Technical SEO Specialist & Consultant</span>
          </p>
          <ul className="mb-2">
            <p>▶ 담당 업무: </p>
            <li>웹사이트 audit 진단 및 개선안 전략 도출</li>
            <li>
              각 meta tag 항목별 개선 가이드(HTML 소스 코드 첨부) 및 적용 검수
            </li>
            <li>Monthly 이슈 모니터링 및 트래픽 변화량에 대한 결과 보고서</li>
            <li>
              프로젝트 종료 이후 SEO 관리를 위한 Toolkit 가이드 및 원페이저
              가이드
            </li>
            <li>Q&A 및 Help Desk 운영</li>
          </ul>
          <TagItem tags={workTag.ascent} />
        </Col>
      </Row>

      <Row className="ms-3 mt-4">
        <Col md={4} className="project_body">
          <p className="project_body_name">2021.12 ~ 2022.03</p>
          <span className="ms-2">Seoul, South Korea</span>
        </Col>
        <Col className="project_body">
          <p className="project_body_name">
            아티언스
            <span className="ms-2">SEO Consultant</span>
          </p>
          <ul className="mb-2">
            <p>▶ 담당 업무: </p>
            <li>Monthly 트래픽 변화 데이터 업데이트 및 GDS 통한 시각화</li>
            <li>32개국 대상 신규 플래그십 페이지 meta tag 적용 가이드</li>
            <li>전년 대비 키워드 변화 분석 및 신규 키워드 적용</li>
            <li>클라이언트 실무 개발자용 Toolkit 가이드</li>
            <li>Daily 이슈 모니터링</li>
          </ul>
          <TagItem tags={workTag.artience} />
        </Col>
      </Row>

      <Row className="ms-3 mt-4">
        <Col md={4} className="project_body">
          <p className="project_body_name">2020.02 ~ 2021.05</p>
          <span className="ms-2">London, the UK</span>
        </Col>
        <Col className="project_body">
          <p className="project_body_name">
            Curve Analytics
            <span className="ms-2">Insight Analyst</span>
          </p>
          <ul className="mb-2">
            <p>▶ 담당 업무: </p>
            <li>한국과 일본 시장을 대상으로 고객 인사이트 데이터 리서치</li>
            <li>powerBI를 이용한 고객 인사이트 데이터 시각화</li>
            <li>기존 및 신규 제품 변화에 따른 고객 인사이트 변화 리포트</li>
          </ul>
          <TagItem tags={workTag.curve} />
        </Col>
      </Row>
    </Container>
  );
};

export default Work;
