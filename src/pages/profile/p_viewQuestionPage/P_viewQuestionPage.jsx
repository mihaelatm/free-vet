import s from "./p_viewQuestionPage.module.css";
import { useTranslation } from "react-i18next";
import Modal from "../../../components/modalProfile/ModalProfile.jsx";
import VetAnswer from "../../../components/vetAnswer/VetAnswer.jsx";
import { useState } from "react";
import ViewPageHeader from "../../../components/viewPageHeader/ViewPageHeader.jsx";

//в файле использованы тестовые данные, т.к. это необходимо для рендера модалки

const P_viewQuestionPage = () => {
  const { t } = useTranslation();

  const [isModalVisible, setIsModalVisible] = useState(true);

  const testLinks = [
    { link: "/profile", text: "Add message" }, // добавить в переводы
    { link: "/main", text: "End session" }, // добавить в переводы
  ];

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className={s.p_viewQuestionPage}>
      {/* <h6 className={s.page_heading}>{t("userPage.viewQuestion")}</h6> */}
      <ViewPageHeader fontSize={36} titleKey={t("userPage.viewQuestion")} />
      <VetAnswer />
      <div>
        {isModalVisible && <Modal linksArr={testLinks} onClose={closeModal} />}
      </div>
    </div>
  );
};

export default P_viewQuestionPage;
