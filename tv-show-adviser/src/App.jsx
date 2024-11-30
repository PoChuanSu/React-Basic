import { useEffect, useState } from "react";
import s from "./style.module.css";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import { TVShowDetail } from "./components/TVShowDetail/TVShowDetail";
import logoImg from "./assets/images/logo.png";
import { Logo } from "./components/Logo/Logo";
import { TVShowListItem } from "./components/TVShowListItem/TVShowListItem";

TVShowAPI.fetchPopulars();
export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) setCurrentTVShow(popularTVShowList[0]);
  }

  async function fetchRecommendations(tvShowId) {
    const recommendationListResp = await TVShowAPI.fetchRecommendations(
      tvShowId
    );
    if (recommendationListResp.length > 0)
      setRecommendationList(recommendationListResp.slice(0, 10));
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) {
      fetchRecommendations(currentTVShow.id);
    }
  }, [currentTVShow]);

  console.log(recommendationList);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImg}
              title="Watowatch"
              subtitle="Find a shpw you may like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
        </div>
      </div>
      <div className={s.tv_show_detail}>
        {currentTVShow && <TVShowDetail tvShow={currentTVShow} />}
      </div>
      <div className={s.recommended_tv_shows}>
        {currentTVShow && (
          <>
            <TVShowListItem
              tvShow={currentTVShow}
              onClick={(tvShow) => console.log("I have been clicked", tvShow)}
            />
            <TVShowListItem
              tvShow={currentTVShow}
              onClick={(tvShow) => console.log("I have been clicked", tvShow)}
            />
            <TVShowListItem
              tvShow={currentTVShow}
              onClick={(tvShow) => console.log("I have been clicked", tvShow)}
            />
          </>
        )}
      </div>
    </div>
  );
}
