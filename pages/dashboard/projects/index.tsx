import { themeSwitcher } from "@/assests/logic/script";
import Base from "@/components/build/Base";
import BaseWrapper from "@/components/build/BaseWrapper";
import Header from "@/components/build/Header";
import Logo from "@/components/build/Logo";
import Move from "@/components/build/Move";
import SearchBar from "@/components/helpers/search_bar/SearchBar";
import { AppState } from "@/redux/types/main";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProjectsInfoPage from "./ProjectsInfoPage";
import changeLinkAction from "@/redux/actions/change_actions/changeLinkAction";
import { ToastContainer } from "react-toastify";

const ProjectsPage = () => {
  const state = useSelector<AppState, AppState>((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    themeSwitcher(state.theme);
  }, [state.theme]);

  return (
    <>
      <Header title="Aissa | Dashboard - Projects" />

      <Base>
        <SearchBar />

        <Logo content="projects" />

        <BaseWrapper>
          <Move
            href="/"
            onClick={() => dispatch(changeLinkAction("dashboard"))}
          >
            Go back
          </Move>

          <ProjectsInfoPage />
        </BaseWrapper>

        {state.switchBooleans.websiteControl.isNotificationActive && (
          <ToastContainer position="top-center" theme={state.theme} />
        )}
      </Base>
    </>
  );
};

export default ProjectsPage;
