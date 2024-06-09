import { themeSwitcher } from "@/assests/logic/script";
import Information from "@/components/app/profile/information/Information";
import ProfileControl from "@/components/app/profile/profile_control/ProfileControl";
import GeneralInfo from "@/components/app/settings/general_info/GeneralInfo";
import Base from "@/components/build/Base";
import BaseWrapper from "@/components/build/BaseWrapper";
import Flex from "@/components/build/Flex";
import Grid from "@/components/build/Grid";
import Header from "@/components/build/Header";
import Logo from "@/components/build/Logo";
import SearchBar from "@/components/helpers/search_bar/SearchBar";
import { AppState } from "@/redux/types/main";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

const Profile = () => {
  const state = useSelector<AppState, AppState>((state) => state);

  useEffect(() => {
    themeSwitcher(state.theme);
  }, [state.theme]);

  return (
    <>
      <Header title="Aissa | Profile" />

      <Base>
        <SearchBar />

        <Logo content="Profile" />

        <BaseWrapper>
          <Flex className="!col-span-3 gap-4" direction="col">
            <Information />

            <Grid className="gap-4 xl:grid-cols-2" cols="1">
              <GeneralInfo />
              <ProfileControl />
            </Grid>
          </Flex>
        </BaseWrapper>

        {state.switchBooleans.websiteControl.isNotificationActive && (
          <ToastContainer position="top-center" theme={state.theme} />
        )}
      </Base>
    </>
  );
};

export default Profile;
